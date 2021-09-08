import csv
import json
import os

# STEP 0:
# Read the four steps below before running this script!

ARMOUR = "Armour"
WEAPON = "Weapon"
JEWELLERY = "Jewellery"

WEAPON_TYPES = [
    "Axe",
    "Hammer",
    "Sword",
    "Two Handed Sword",
    "Two Handed Axe",
    "Two Handed Hammer",
    "Bow",
    "Healing Staff",
    "Dagger",
    "Fire Staff",
    "Frost Staff",
    "Shield",
    "Lightning Staff"
]

ARMOUR_TYPES = [
    "Head",
    "Chest",
    "Shoulders",
    "Waist",
    "Legs",
    "Feet",
    "Hand"
]
ARMOUR_ROBE = "Robe"

JEWELLERY_TYPES = [
    "Neck",
    "Ring"
]

ARMOUR_WEIGHTS = [
    "Light",
    "Medium",
    "Heavy"
]

CRAFTABLE_SETS = set([
    "Death's Wind",
    "Night's Silence",
    "Ashen Grip",
    "Torug's Pact",
    "Twilight's Embrace",
    "Armor of the Seducer",
    "Magnus' Gift",
    "Hist Bark",
    "Whitestrake's Retribution",
    "Vampire's Kiss",
    "Song of Lamae",
    "Alessia's Bulwark",
    "Night Mother's Gaze",
    "Willow's Path",
    "Hunding's Rage",
    "Kagrenac's Hope",
    "Orgnum's Scales",
    "Eyes of Mara",
    "Shalidor's Curse",
    "Oblivion's Foe",
    "Spectre's Eye",
    "Way of the Arena",
    "Twice-Born Star",
    "Noble's Conquest",
    "Redistributor",
    "Armor Master",
    "Trial by Fire",
    "Law of Julianos",
    "Morkuldin",
    "Tava's Favor",
    "Clever Alchemist",
    "Eternal Hunt",
    "Kvatch Gladiator",
    "Varen's Legacy",
    "Pelinal's Aptitude",
    "Assassin's Guile",
    "Shacklebreaker",
    "Daedric Trickery",
    "Mechanical Acuity",
    "Innate Axiom",
    "Fortified Brass",
    "Adept Rider",
    "Nocturnal's Favor",
    "Sload's Semblance",
    "Naga Shaman",
    "Might of the Lost Legion",
    "Grave-Stake Collector",
    "Coldharbour's Favorite",
    "Senche-raht's Grit",
    "Vastarie's Tutelage",
    "Ancient Dragonguard",
    "Daring Corsair",
    "New Moon Acolyte",
    "Critical Riposte",
    "Unchained Aggressor",
    "Dauntless Combatant",
    "Stuhn's Favor",
    "Dragon's Appetite",
    "Spell Parasite",
    "Aetherial Ascension",
    "Legacy of Karth",
    "Red Eagle's Fury",
    "Hist Whisperer",
    "Heartland Conqueror",
    "Diamond's Victory",
])

# Set up the big map of items to itemIds:
set_item_item_id_map = {
  "[No Set]": {
    "Weapon": {
      "Axe": "43529",
      "Hammer": "43530",
      "Sword": "43531",
      "Two Handed Sword": "43534",
      "Two Handed Axe": "43532",
      "Two Handed Hammer": "43533",
      "Bow": "43549",
      "Healing Staff": "43560",
      "Dagger": "43535",
      "Fire Staff": "43557",
      "Frost Staff": "43558",
      "Shield": "43556",
      "Lightning Staff": "43559"
    },
    "Armour": {
      "Light": {
        "Head": "43564",
        "Chest": "44241",
        "Robe": "43543",
        "Shoulders": "43547",
        "Waist": "43548",
        "Legs": "43546",
        "Feet": "43544",
        "Hand": "43545"
      },
      "Medium": {
        "Head": "43563",
        "Chest": "43550",
        "Shoulders": "43554",
        "Waist": "43555",
        "Legs": "43553",
        "Feet": "43551",
        "Hand": "43552"
      },
      "Heavy": {
        "Head": "43562",
        "Chest": "43537",
        "Shoulders": "43541",
        "Waist": "43542",
        "Legs": "43540",
        "Feet": "43538",
        "Hand": "43539"
      }
    },
    "Jewellery": {
      "Neck": "43561",
      "Ring": "43536"
    }
  }
}

for craftable_set in CRAFTABLE_SETS:
    item_map_for_set = dict()  # Shortcut for the inner map
    set_item_item_id_map[craftable_set] = item_map_for_set
    # Weapons:
    item_map_for_set[WEAPON] = dict()
    for weapon_type in WEAPON_TYPES:
        item_map_for_set[WEAPON][weapon_type] = None
    # Armour:
    item_map_for_set[ARMOUR] = dict()
    for armour_weight in ARMOUR_WEIGHTS:
        item_map_for_set[ARMOUR][armour_weight] = dict()
        for armour_type in ARMOUR_TYPES:
            item_map_for_set[ARMOUR][armour_weight][armour_type] = None
            if armour_weight == "Light" and armour_type == "Chest":
                # Light Armour has two chests: Jerkin & Robe, we need both:
                item_map_for_set[ARMOUR][armour_weight][ARMOUR_ROBE] = None
    # Jewellery:
    item_map_for_set[JEWELLERY] = dict()
    for jewellery_type in JEWELLERY_TYPES:
        item_map_for_set[JEWELLERY][jewellery_type] = None

# STEP 1:
# Parse the list of all known weapons from UESP:
# Save the following page as /weapons.csv to update.
#   https://esoitem.uesp.net/dumpMinedItems.php?itemtype=1&fields=itemId,name,trait,quality,setName,style,equipType,weaponType,armorType
with open("./weapons.csv") as weapons_file:
    weapons_reader = csv.DictReader(weapons_file)
    for weapon in weapons_reader:

        item_id = weapon["itemId"]
        weapon_set = weapon["setName"]
        weapon_trait = weapon["trait"]
        weapon_type = weapon["weaponType"]

        if weapon_set not in CRAFTABLE_SETS:
            # Skip non-craftable sets!
            continue
        if weapon_trait != "":
            # Skip items with traits!
            continue

        # Shortcut to the inner map:
        item_map_for_set = set_item_item_id_map[weapon_set]

        if item_map_for_set[WEAPON][weapon_type] is not None:
            print("Duplicate set item?!", weapon)
        item_map_for_set[WEAPON][weapon_type] = item_id

# STEP 2:
# Parse the list of all known armour and jewellery from UESP:
# Save the following page as /armour_and_jewellery.csv to update.
#   https://esoitem.uesp.net/dumpMinedItems.php?itemtype=2&fields=itemId,name,trait,quality,setName,style,equipType,weaponType,armorType
with open("./armour_and_jewellery.csv") as armour_and_jewellery_file:
    armour_and_jewellery_reader = csv.DictReader(armour_and_jewellery_file)
    for armour_or_jewellery in armour_and_jewellery_reader:
        
        item_id = armour_or_jewellery["itemId"]
        item_set = armour_or_jewellery["setName"]
        item_trait = armour_or_jewellery["trait"]
        item_type = armour_or_jewellery["equipType"]
        item_weight = armour_or_jewellery["armorType"]
        item_name = armour_or_jewellery["name"]

        if item_set not in CRAFTABLE_SETS:
            # Skip non-craftable sets!
            continue
        if item_trait != "":
            # Skip items with traits!
            continue

        # Shortcut to the inner map:
        item_map_for_set = set_item_item_id_map[item_set]

        # Armour first:
        if item_type in ARMOUR_TYPES:
            if "Robe" in item_name and item_weight == "Light":
                # Light armour has two types of Chest piece, record separately!
                item_type = ARMOUR_ROBE

            if item_map_for_set[ARMOUR][item_weight][item_type] is not None:
                print("Duplicate set item?!", armour_or_jewellery)
            item_map_for_set[ARMOUR][item_weight][item_type] = item_id

        elif item_type in JEWELLERY_TYPES:
            if item_map_for_set[JEWELLERY][item_type] is not None:
                print("Duplicate set item?!", armour_or_jewellery)
            item_map_for_set[JEWELLERY][item_type] = item_id

        else:
            print("Unknown item type?!", armour_or_jewellery)

# Load missing itemId values from JSON file and merge them in:
MISSING_ITEM_IDS_FILE = "./missing_item_ids.json"
if os.path.exists(MISSING_ITEM_IDS_FILE):
    with open(MISSING_ITEM_IDS_FILE) as missing_item_ids_fhandle:
        missing_item_item_id_map = json.load(missing_item_ids_fhandle)
        for set_name, item_map_for_set in missing_item_item_id_map.items():
            # Weapons:
            for weapon_type, itemId in item_map_for_set.get(WEAPON, {}).items():
                if set_item_item_id_map[set_name][WEAPON][weapon_type] is None:
                    set_item_item_id_map[set_name][WEAPON][weapon_type] = itemId
                else:
                    print("WARN: itemId no longer missing for {}->{}->{}".format(set_name, WEAPON, weapon_type))
            # Armour:
            for weight in item_map_for_set.get(ARMOUR, {}):
                for armour_type, itemId in item_map_for_set[ARMOUR].get(weight, {}).items():
                    if set_item_item_id_map[set_name][ARMOUR][weight][armour_type] is None:
                        set_item_item_id_map[set_name][ARMOUR][weight][armour_type] = itemId
                    else:
                        print("WARN: itemId no longer missing for {}->{}->{}".format(set_name, ARMOUR, weight, armour_type))
            # Jewellery:
            for jewellery_type, itemId in item_map_for_set.get(JEWELLERY, {}).items():
                if set_item_item_id_map[set_name][JEWELLERY][jewellery_type] is None:
                    set_item_item_id_map[set_name][JEWELLERY][jewellery_type] = itemId
                else:
                    print("WARN: itemId no longer missing for {}->{}->{}".format(set_name, JEWELLERY, jewellery_type))

# Dump the full data uncompressed to a JSON file:
with open("set_item_ids_full.json", "w") as set_item_id_file:
    json.dump(set_item_item_id_map, set_item_id_file, indent=2)


# Get the missing itemIds by removing all non-null entries from the dict:
def contains_null_leaf(obj):
    if isinstance(obj, dict):
        return any([contains_null_leaf(v) for v in obj.values()])
    else:
        return obj is None

def strip_non_null(obj):
    if isinstance(obj, dict):
        return {k: strip_non_null(v) for k, v in obj.items() if contains_null_leaf(v)}
    else:
        return obj

# Write a file containing these missing values for manual lookup:
with open("./missing_item_ids_template.json", "w") as missing_item_id_file:
    json.dump(strip_non_null(set_item_item_id_map), missing_item_id_file, indent=2)

# STEP 3:
# Take the template file and use the game to find the missing itemIds, replacing
# the null values in the template file with the itemId. Rename the template file
# to just 'missing_item_ids.json' and re-run this script. Repeat until there are
# no entries in the template file.
# The quickest way to get the itemIds from the game is to use Dolgubon's Lazy Set
# Crafter addon, add the missing item to the queue and then right click on it to
# put the link in the chat. Cut the text from the chat box and paste it into the
# JSON, and then remove the '|H1:item:' from the start and everything after the
# itemId from the end.

# STEP 4:
# Use the 'set_item_ids_full.json' file and paste it into 'eso_crafting.js',
# perhaps trimming some unnecessary newlines and whitespace to reduce the
# filesize.
