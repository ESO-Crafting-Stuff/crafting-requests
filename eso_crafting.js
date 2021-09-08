"use strict";

//-------------------------------------------------//
// Constants
//-------------------------------------------------//

var ANY = "Any";
var WEAPON = "Weapon";
var ARMOUR = "Armour";
var JEWELLERY = "Jewellery";
var EQUIPMENT_CLASSES = [ARMOUR, WEAPON, JEWELLERY];

var LIGHT = "Light";
var MEDIUM = "Medium";
var HEAVY = "Heavy";
var ARMOUR_WEIGHTS = [LIGHT, MEDIUM, HEAVY];

var NO_SET = "[No Set]";

var WOOD = "WOOD";
var METAL = "METAL";
var CLOTH = "CLOTH";
var LEATHER = "LEATHER";
var OUNCES = "OUNCES";

var MAX_LEVEL = 50;
var MAX_ITEM_CP = 160;

var COST_RAW = "RAW_MATERIALS";
var COST_TRAITS = "TRAITS";
var COST_STYLES = "STYLES";
var COST_ENCHANT = "ENCHANTS";
var COST_QUALITY = "QUALITY";
var COST_TYPES = [COST_RAW, COST_TRAITS, COST_STYLES,COST_ENCHANT, COST_QUALITY];


//-------------------------------------------------//
// Sets and itemIds
//-------------------------------------------------//

var setItemIds = {
  "[No Set]": {
    "Weapon": {"Axe": "43529",  "Hammer": "43530",  "Sword": "43531",  "Two Handed Sword": "43534",  "Two Handed Axe": "43532",  "Two Handed Hammer": "43533",  "Bow": "43549",  "Healing Staff": "43560",  "Dagger": "43535",  "Fire Staff": "43557",  "Frost Staff": "43558",  "Shield": "43556",  "Lightning Staff": "43559"},
    "Armour": {
      "Light": {"Head": "43564", "Chest": "44241", "Robe": "43543", "Shoulders": "43547", "Waist": "43548", "Legs": "43546", "Feet": "43544", "Hand": "43545"},
      "Medium": {"Head": "43563", "Chest": "43550", "Shoulders": "43554", "Waist": "43555", "Legs": "43553", "Feet": "43551", "Hand": "43552"},
      "Heavy": {"Head": "43562", "Chest": "43537", "Shoulders": "43541", "Waist": "43542", "Legs": "43540", "Feet": "43538", "Hand": "43539"}},
    "Jewellery": {"Neck": "43561", "Ring": "43536"}
  },
  "Daring Corsair": {
    "Weapon": {"Axe": "155404", "Hammer": "155405", "Sword": "155406", "Two Handed Sword": "155409", "Two Handed Axe": "155407", "Two Handed Hammer": "155408", "Bow": "155411", "Healing Staff": "155415", "Dagger": "155410", "Fire Staff": "155412", "Frost Staff": "155413", "Shield": "155416", "Lightning Staff": "155414"},
    "Armour": {
      "Light": {"Head": "155427", "Chest": "155429", "Robe": "155424", "Shoulders": "155430", "Waist": "155431", "Legs": "155428", "Feet": "155425", "Hand": "155426"},
      "Medium": {"Head": "155435", "Chest": "155432", "Shoulders": "155437", "Waist": "155438", "Legs": "155436", "Feet": "155433", "Hand": "155434"},
      "Heavy": {"Head": "155420", "Chest": "155417", "Shoulders": "155422", "Waist": "155423", "Legs": "155421", "Feet": "155418", "Hand": "155419"}},
    "Jewellery": {"Neck": "155440", "Ring": "155439"}
  },
  "Song of Lamae": {
    "Weapon": {"Axe": "52233", "Hammer": "52234", "Sword": "52235", "Two Handed Sword": "44018", "Two Handed Axe": "52236", "Two Handed Hammer": "52237", "Bow": "52251", "Healing Staff": "52263", "Dagger": "52238", "Fire Staff": "52260", "Frost Staff": "52261", "Shield": "52259", "Lightning Staff": "52262"},
    "Armour": {
      "Light": {"Head": "52246", "Chest": "52248", "Robe": "52243", "Shoulders": "52249", "Waist": "52250", "Legs": "52247", "Feet": "52244", "Hand": "52245"},
      "Medium": {"Head": "52255", "Chest": "52252", "Shoulders": "52257", "Waist": "52258", "Legs": "52256", "Feet": "52253", "Hand": "52254"},
      "Heavy": {"Head": "44013", "Chest": "44016", "Shoulders": "52241", "Waist": "52242", "Legs": "44015", "Feet": "52240", "Hand": "44014"}},
    "Jewellery": {"Neck": "137698", "Ring": "137530"}
  },
  "Twilight's Embrace": {
    "Weapon": {"Axe": "46882", "Hammer": "46883", "Sword": "46884", "Two Handed Sword": "46887", "Two Handed Axe": "46885", "Two Handed Hammer": "46886", "Bow": "46901", "Healing Staff": "46914", "Dagger": "46888", "Fire Staff": "46911", "Frost Staff": "46912", "Shield": "46910", "Lightning Staff": "46913"},
    "Armour": {
      "Light": {"Head": "46898", "Chest": "46900", "Robe": "43808", "Shoulders": "43807", "Waist": "43809", "Legs": "46899", "Feet": "43810", "Hand": "46897"},
      "Medium": {"Head": "46905", "Chest": "46902", "Shoulders": "46907", "Waist": "46908", "Legs": "46906", "Feet": "46903", "Hand": "46904"},
      "Heavy": {"Head": "46893", "Chest": "46890", "Shoulders": "46895", "Waist": "46896", "Legs": "46894", "Feet": "46891", "Hand": "46892"}},
    "Jewellery": {"Neck": "137684", "Ring": "137516"}
  },
  "Night's Silence": {
    "Weapon": {"Axe": "47265", "Hammer": "47266", "Sword": "47267", "Two Handed Sword": "47270", "Two Handed Axe": "47268", "Two Handed Hammer": "47269", "Bow": "47287", "Healing Staff": "47297", "Dagger": "43818", "Fire Staff": "47294", "Frost Staff": "47295", "Shield": "47293", "Lightning Staff": "47296"},
    "Armour": {
      "Light": {"Head": "47282", "Chest": "47284", "Robe": "47279", "Shoulders": "47285", "Waist": "47286", "Legs": "47283", "Feet": "47280", "Hand": "47281"},
      "Medium": {"Head": "47289", "Chest": "43816", "Shoulders": "47291", "Waist": "47292", "Legs": "47290", "Feet": "47288", "Hand": "43815"},
      "Heavy": {"Head": "47275", "Chest": "47272", "Shoulders": "47277", "Waist": "47278", "Legs": "47276", "Feet": "47273", "Hand": "47274"}},
    "Jewellery": {"Neck": "137685", "Ring": "137517"}
  },
  "Shacklebreaker": {
    "Weapon": {"Axe": "122251", "Hammer": "122252", "Sword": "122253", "Two Handed Sword": "122256", "Two Handed Axe": "122254", "Two Handed Hammer": "122255", "Bow": "122258", "Healing Staff": "122262", "Dagger": "122257", "Fire Staff": "122259", "Frost Staff": "122260", "Shield": "122263", "Lightning Staff": "122261"},
    "Armour": {
      "Light": {"Head": "122274", "Chest": "122276", "Robe": "122271", "Shoulders": "122277", "Waist": "122278", "Legs": "122275", "Feet": "122272", "Hand": "122273"},
      "Medium": {"Head": "122282", "Chest": "122279", "Shoulders": "122284", "Waist": "122285", "Legs": "122283", "Feet": "122280", "Hand": "122281"},
      "Heavy": {"Head": "122267", "Chest": "122264", "Shoulders": "122269", "Waist": "122270", "Legs": "122268", "Feet": "122265", "Hand": "122266"}},
    "Jewellery": {"Neck": "137721", "Ring": "137553"}
  },
  "Innate Axiom": {
    "Weapon": {"Axe": "130370", "Hammer": "130371", "Sword": "130372", "Two Handed Sword": "130375", "Two Handed Axe": "130373", "Two Handed Hammer": "130374", "Bow": "130377", "Healing Staff": "130381", "Dagger": "130376", "Fire Staff": "130378", "Frost Staff": "130379", "Shield": "130382", "Lightning Staff": "130380"},
    "Armour": {
      "Light": {"Head": "130393", "Chest": "130395", "Robe": "130390", "Shoulders": "130396", "Waist": "130397", "Legs": "130394", "Feet": "130391", "Hand": "130392"},
      "Medium": {"Head": "130401", "Chest": "130398", "Shoulders": "130403", "Waist": "130404", "Legs": "130402", "Feet": "130399", "Hand": "130400"},
      "Heavy": {"Head": "130386", "Chest": "130383", "Shoulders": "130388", "Waist": "130389", "Legs": "130387", "Feet": "130384", "Hand": "130385"}},
    "Jewellery": {"Neck": "137722", "Ring": "137554"}
  },
  "Dauntless Combatant": {
    "Weapon": {"Axe": "159064", "Hammer": "159065", "Sword": "159066", "Two Handed Sword": "159069", "Two Handed Axe": "159067", "Two Handed Hammer": "159068", "Bow": "159071", "Healing Staff": "159075", "Dagger": "159070", "Fire Staff": "159072", "Frost Staff": "159073", "Shield": "159076", "Lightning Staff": "159074"},
    "Armour": {
      "Light": {"Head": "159087", "Chest": "159089", "Robe": "159084", "Shoulders": "159090", "Waist": "159091", "Legs": "159088", "Feet": "159085", "Hand": "159086"},
      "Medium": {"Head": "159095", "Chest": "159092", "Shoulders": "159097", "Waist": "159098", "Legs": "159096", "Feet": "159093", "Hand": "159094"},
      "Heavy": {"Head": "159080", "Chest": "159077", "Shoulders": "159082", "Waist": "159083", "Legs": "159081", "Feet": "159078", "Hand": "159079"}},
    "Jewellery": {"Neck": "159100", "Ring": "159099"}
  },
  "Hist Bark": {
    "Weapon": {"Axe": "51090", "Hammer": "51091", "Sword": "51092", "Two Handed Sword": "51095", "Two Handed Axe": "51093", "Two Handed Hammer": "51094", "Bow": "51113", "Healing Staff": "51120", "Dagger": "51096", "Fire Staff": "51117", "Frost Staff": "51118", "Shield": "51116", "Lightning Staff": "51119"},
    "Armour": {
      "Light": {"Head": "51108", "Chest": "51110", "Robe": "51105", "Shoulders": "51111", "Waist": "51112", "Legs": "51109", "Feet": "51106", "Hand": "51107"},
      "Medium": {"Head": "51114", "Chest": "43998", "Shoulders": "43995", "Waist": "43999", "Legs": "43997", "Feet": "44000", "Hand": "43996"},
      "Heavy": {"Head": "51101", "Chest": "51098", "Shoulders": "51103", "Waist": "51104", "Legs": "51102", "Feet": "51099", "Hand": "51100"}},
    "Jewellery": {"Neck": "137695", "Ring": "137527"}
  },
  "Unchained Aggressor": {
    "Weapon": {"Axe": "158690", "Hammer": "158691", "Sword": "158692", "Two Handed Sword": "158695", "Two Handed Axe": "158693", "Two Handed Hammer": "158694", "Bow": "158697", "Healing Staff": "158701", "Dagger": "158696", "Fire Staff": "158698", "Frost Staff": "158699", "Shield": "158702", "Lightning Staff": "158700"},
    "Armour": {
      "Light": {"Head": "158713", "Chest": "158715", "Robe": "158710", "Shoulders": "158716", "Waist": "158717", "Legs": "158714", "Feet": "158711", "Hand": "158712"},
      "Medium": {"Head": "158721", "Chest": "158718", "Shoulders": "158723", "Waist": "158724", "Legs": "158722", "Feet": "158719", "Hand": "158720"},
      "Heavy": {"Head": "158706", "Chest": "158703", "Shoulders": "158708", "Waist": "158709", "Legs": "158707", "Feet": "158704", "Hand": "158705"}},
    "Jewellery": {"Neck": "158726", "Ring": "158725"}
  },
  "Torug's Pact": {
    "Weapon": {"Axe": "50708", "Hammer": "50709", "Sword": "50710", "Two Handed Sword": "50713", "Two Handed Axe": "50711", "Two Handed Hammer": "50712", "Bow": "50727", "Healing Staff": "50739", "Dagger": "50714", "Fire Staff": "50736", "Frost Staff": "50737", "Shield": "50735", "Lightning Staff": "50738"},
    "Armour": {
      "Light": {"Head": "50724", "Chest": "50725", "Robe": "43979", "Shoulders": "43977", "Waist": "50726", "Legs": "43978", "Feet": "50722", "Hand": "50723"},
      "Medium": {"Head": "50731", "Chest": "50728", "Shoulders": "50733", "Waist": "50734", "Legs": "50732", "Feet": "50729", "Hand": "50730"},
      "Heavy": {"Head": "50718", "Chest": "50715", "Shoulders": "50720", "Waist": "50721", "Legs": "50719", "Feet": "50716", "Hand": "50717"}},
    "Jewellery": {"Neck": "137694", "Ring": "137526"}
  },
  "Trial by Fire": {
    "Weapon": {"Axe": "69949", "Hammer": "69951", "Sword": "69950", "Two Handed Sword": "69954", "Two Handed Axe": "69952", "Two Handed Hammer": "69953", "Bow": "69956", "Healing Staff": "69961", "Dagger": "69955", "Fire Staff": "69958", "Frost Staff": "69959", "Shield": "69957", "Lightning Staff": "69960"},
    "Armour": {
      "Light": {"Head": "69941", "Chest": "69943", "Robe": "69942", "Shoulders": "69944", "Waist": "69946", "Legs": "69947", "Feet": "69948", "Hand": "69945"},
      "Medium": {"Head": "69934", "Chest": "69935", "Shoulders": "69936", "Waist": "69938", "Legs": "69939", "Feet": "69940", "Hand": "69937"},
      "Heavy": {"Head": "69927", "Chest": "69928", "Shoulders": "69929", "Waist": "69931", "Legs": "69932", "Feet": "69933", "Hand": "69930"}},
    "Jewellery": {"Neck": "137710", "Ring": "137542"}
  },
  "Morkuldin": {
    "Weapon": {"Axe": "70649", "Hammer": "70651", "Sword": "70650", "Two Handed Sword": "70654", "Two Handed Axe": "70652", "Two Handed Hammer": "70653", "Bow": "70656", "Healing Staff": "70661", "Dagger": "70655", "Fire Staff": "70658", "Frost Staff": "70659", "Shield": "70657", "Lightning Staff": "70660"},
    "Armour": {
      "Light": {"Head": "70641", "Chest": "70643", "Robe": "70642", "Shoulders": "70644", "Waist": "70646", "Legs": "70647", "Feet": "70648", "Hand": "70645"},
      "Medium": {"Head": "70634", "Chest": "70635", "Shoulders": "70636", "Waist": "70638", "Legs": "70639", "Feet": "70640", "Hand": "70637"},
      "Heavy": {"Head": "70627", "Chest": "70628", "Shoulders": "70629", "Waist": "70631", "Legs": "70632", "Feet": "70633", "Hand": "70630"}},
    "Jewellery": {"Neck": "137712", "Ring": "137544"}
  },
  "Critical Riposte": {
    "Weapon": {"Axe": "158316", "Hammer": "158317", "Sword": "158318", "Two Handed Sword": "158321", "Two Handed Axe": "158319", "Two Handed Hammer": "158320", "Bow": "158323", "Healing Staff": "158327", "Dagger": "158322", "Fire Staff": "158324", "Frost Staff": "158325", "Shield": "158328", "Lightning Staff": "158326"},
    "Armour": {
      "Light": {"Head": "158339", "Chest": "158341", "Robe": "158336", "Shoulders": "158342", "Waist": "158343", "Legs": "158340", "Feet": "158337", "Hand": "158338"},
      "Medium": {"Head": "158347", "Chest": "158344", "Shoulders": "158349", "Waist": "158350", "Legs": "158348", "Feet": "158345", "Hand": "158346"},
      "Heavy": {"Head": "158332", "Chest": "158329", "Shoulders": "158334", "Waist": "158335", "Legs": "158333", "Feet": "158330", "Hand": "158331"}},
    "Jewellery": {"Neck": "158352", "Ring": "158351"}
  },
  "Eternal Hunt": {
    "Weapon": {"Axe": "72513", "Hammer": "72515", "Sword": "72514", "Two Handed Sword": "72518", "Two Handed Axe": "72516", "Two Handed Hammer": "72517", "Bow": "72520", "Healing Staff": "72525", "Dagger": "72519", "Fire Staff": "72522", "Frost Staff": "72523", "Shield": "72521", "Lightning Staff": "72524"},
    "Armour": {
      "Light": {"Head": "72505", "Chest": "72507", "Robe": "72506", "Shoulders": "72508", "Waist": "72510", "Legs": "72511", "Feet": "72512", "Hand": "72509"},
      "Medium": {"Head": "72498", "Chest": "72499", "Shoulders": "72500", "Waist": "72502", "Legs": "72503", "Feet": "72504", "Hand": "72501"},
      "Heavy": {"Head": "72491", "Chest": "72492", "Shoulders": "72493", "Waist": "72495", "Legs": "72496", "Feet": "72497", "Hand": "72494"}},
    "Jewellery": {"Neck": "137715", "Ring": "137547"}
  },
  "Noble's Conquest": {
    "Weapon": {"Axe": "60261", "Hammer": "60262", "Sword": "60263", "Two Handed Sword": "60266", "Two Handed Axe": "60264", "Two Handed Hammer": "60265", "Bow": "60268", "Healing Staff": "60272", "Dagger": "60267", "Fire Staff": "60269", "Frost Staff": "60270", "Shield": "60295", "Lightning Staff": "60271"},
    "Armour": {
      "Light": {"Head": "60283", "Chest": "60285", "Robe": "60280", "Shoulders": "60286", "Waist": "60287", "Legs": "60284", "Feet": "60281", "Hand": "60282"},
      "Medium": {"Head": "60291", "Chest": "60288", "Shoulders": "60293", "Waist": "60294", "Legs": "60292", "Feet": "60289", "Hand": "60290"},
      "Heavy": {"Head": "60276", "Chest": "60273", "Shoulders": "60278", "Waist": "60279", "Legs": "60277", "Feet": "60274", "Hand": "60275"}},
    "Jewellery": {"Neck": "137706", "Ring": "137538"}
  },
  "Night Mother's Gaze": {
    "Weapon": {"Axe": "49180", "Hammer": "49181", "Sword": "49182", "Two Handed Sword": "49185", "Two Handed Axe": "49183", "Two Handed Hammer": "49184", "Bow": "49203", "Healing Staff": "49212", "Dagger": "49186", "Fire Staff": "49209", "Frost Staff": "49210", "Shield": "49208", "Lightning Staff": "49211"},
    "Armour": {
      "Light": {"Head": "49198", "Chest": "49200", "Robe": "49195", "Shoulders": "49201", "Waist": "49202", "Legs": "49199", "Feet": "49196", "Hand": "49197"},
      "Medium": {"Head": "49205", "Chest": "43861", "Shoulders": "49206", "Waist": "49207", "Legs": "43860", "Feet": "49204", "Hand": "43859"},
      "Heavy": {"Head": "49191", "Chest": "49188", "Shoulders": "49193", "Waist": "49194", "Legs": "49192", "Feet": "49189", "Hand": "49190"}},
    "Jewellery": {"Neck": "137690", "Ring": "137522"}
  },
  "Armor of the Seducer": {
    "Weapon": {"Axe": "48031", "Hammer": "48032", "Sword": "48033", "Two Handed Sword": "48036", "Two Handed Axe": "48034", "Two Handed Hammer": "48035", "Bow": "48050", "Healing Staff": "48063", "Dagger": "48037", "Fire Staff": "48060", "Frost Staff": "48061", "Shield": "48059", "Lightning Staff": "48062"},
    "Armour": {
      "Light": {"Head": "48045", "Chest": "48047", "Robe": "48042", "Shoulders": "48048", "Waist": "48049", "Legs": "48046", "Feet": "48043", "Hand": "48044"},
      "Medium": {"Head": "48054", "Chest": "48051", "Shoulders": "48056", "Waist": "48057", "Legs": "48055", "Feet": "48052", "Hand": "48053"},
      "Heavy": {"Head": "43827", "Chest": "43830", "Shoulders": "43828", "Waist": "48041", "Legs": "43829", "Feet": "48039", "Hand": "48040"}},
    "Jewellery": {"Neck": "137687", "Ring": "137519"}
  },
  "Eyes of Mara": {
    "Weapon": {"Axe": "53376", "Hammer": "53377", "Sword": "53378", "Two Handed Sword": "53381", "Two Handed Axe": "53379", "Two Handed Hammer": "53380", "Bow": "53393", "Healing Staff": "53406", "Dagger": "53382", "Fire Staff": "53403", "Frost Staff": "53404", "Shield": "53402", "Lightning Staff": "53405"},
    "Armour": {
      "Light": {"Head": "44049", "Chest": "53392", "Robe": "44053", "Shoulders": "44050", "Waist": "44054", "Legs": "44052", "Feet": "53391", "Hand": "44051"},
      "Medium": {"Head": "53397", "Chest": "53394", "Shoulders": "53399", "Waist": "53400", "Legs": "53398", "Feet": "53395", "Hand": "53396"},
      "Heavy": {"Head": "53387", "Chest": "53384", "Shoulders": "53389", "Waist": "53390", "Legs": "53388", "Feet": "53385", "Hand": "53386"}},
    "Jewellery": {"Neck": "137701", "Ring": "137533"}
  },
  "Death's Wind": {
    "Weapon": {"Axe": "46499", "Hammer": "46500", "Sword": "46501", "Two Handed Sword": "46504", "Two Handed Axe": "46502", "Two Handed Hammer": "46503", "Bow": "46518", "Healing Staff": "46531", "Dagger": "46505", "Fire Staff": "46528", "Frost Staff": "46529", "Shield": "46527", "Lightning Staff": "46530"},
    "Armour": {
      "Light": {"Head": "46515", "Chest": "46516", "Robe": "43805", "Shoulders": "43803", "Waist": "46517", "Legs": "43804", "Feet": "43806", "Hand": "46514"},
      "Medium": {"Head": "46522", "Chest": "46519", "Shoulders": "46524", "Waist": "46525", "Legs": "46523", "Feet": "46520", "Hand": "46521"},
      "Heavy": {"Head": "46510", "Chest": "46507", "Shoulders": "46512", "Waist": "46513", "Legs": "46511", "Feet": "46508", "Hand": "46509"}},
    "Jewellery": {"Neck": "137683", "Ring": "137515"}
  },
  "Clever Alchemist": {
    "Weapon": {"Axe": "72163", "Hammer": "72165", "Sword": "72164", "Two Handed Sword": "72168", "Two Handed Axe": "72166", "Two Handed Hammer": "72167", "Bow": "72170", "Healing Staff": "72175", "Dagger": "72169", "Fire Staff": "72172", "Frost Staff": "72173", "Shield": "72171", "Lightning Staff": "72174"},
    "Armour": {
      "Light": {"Head": "72155", "Chest": "72157", "Robe": "72156", "Shoulders": "72158", "Waist": "72160", "Legs": "72161", "Feet": "72162", "Hand": "72159"},
      "Medium": {"Head": "72148", "Chest": "72149", "Shoulders": "72150", "Waist": "72152", "Legs": "72153", "Feet": "72154", "Hand": "72151"},
      "Heavy": {"Head": "72141", "Chest": "72142", "Shoulders": "72143", "Waist": "72145", "Legs": "72146", "Feet": "72147", "Hand": "72144"}},
    "Jewellery": {"Neck": "137714", "Ring": "137546"}
  },
  "Legacy of Karth": {
    "Weapon": {"Axe": "168373", "Hammer": "168374", "Sword": "168375", "Two Handed Sword": "168378", "Two Handed Axe": "168376", "Two Handed Hammer": "168377", "Bow": "168380", "Healing Staff": "168384", "Dagger": "168379", "Fire Staff": "168381", "Frost Staff": "168382", "Shield": "168385", "Lightning Staff": "168383"},
    "Armour": {
      "Light": {"Head": "168396", "Chest": "168398", "Robe": "168393", "Shoulders": "168399", "Waist": "168400", "Legs": "168397", "Feet": "168394", "Hand": "168395"},
      "Medium": {"Head": "168404", "Chest": "168401", "Shoulders": "168406", "Waist": "168407", "Legs": "168405", "Feet": "168402", "Hand": "168403"},
      "Heavy": {"Head": "168389", "Chest": "168386", "Shoulders": "168391", "Waist": "168392", "Legs": "168390", "Feet": "168387", "Hand": "168388"}},
    "Jewellery": {"Neck": "168409", "Ring": "168408"}
  },
  "Alessia's Bulwark": {
    "Weapon": {"Axe": "52614", "Hammer": "52615", "Sword": "52616", "Two Handed Sword": "52619", "Two Handed Axe": "52617", "Two Handed Hammer": "52618", "Bow": "52632", "Healing Staff": "52644", "Dagger": "52620", "Fire Staff": "52641", "Frost Staff": "52642", "Shield": "44024", "Lightning Staff": "52643"},
    "Armour": {
      "Light": {"Head": "52627", "Chest": "52629", "Robe": "52624", "Shoulders": "52630", "Waist": "52631", "Legs": "52628", "Feet": "52625", "Hand": "52626"},
      "Medium": {"Head": "52636", "Chest": "52633", "Shoulders": "52638", "Waist": "52639", "Legs": "52637", "Feet": "52634", "Hand": "52635"},
      "Heavy": {"Head": "44019", "Chest": "44022", "Shoulders": "44020", "Waist": "44023", "Legs": "44021", "Feet": "52622", "Hand": "52623"}},
    "Jewellery": {"Neck": "137699", "Ring": "137531"}
  },
  "Stuhn's Favor": {
    "Weapon": {"Axe": "161221", "Hammer": "161222", "Sword": "161223", "Two Handed Sword": "161226", "Two Handed Axe": "161224", "Two Handed Hammer": "161225", "Bow": "161228", "Healing Staff": "161232", "Dagger": "161227", "Fire Staff": "161229", "Frost Staff": "161230", "Shield": "161233", "Lightning Staff": "161231"},
    "Armour": {
      "Light": {"Head": "161244", "Chest": "161246", "Robe": "161241", "Shoulders": "161247", "Waist": "161248", "Legs": "161245", "Feet": "161242", "Hand": "161243"},
      "Medium": {"Head": "161252", "Chest": "161249", "Shoulders": "161254", "Waist": "161255", "Legs": "161253", "Feet": "161250", "Hand": "161251"},
      "Heavy": {"Head": "161237", "Chest": "161234", "Shoulders": "161239", "Waist": "161240", "Legs": "161238", "Feet": "161235", "Hand": "161236"}},
    "Jewellery": {"Neck": "161257", "Ring": "161256"}
  },
  "Mechanical Acuity": {
    "Weapon": {"Axe": "131070", "Hammer": "131071", "Sword": "131072", "Two Handed Sword": "131075", "Two Handed Axe": "131073", "Two Handed Hammer": "131074", "Bow": "131077", "Healing Staff": "131081", "Dagger": "131076", "Fire Staff": "131078", "Frost Staff": "131079", "Shield": "131082", "Lightning Staff": "131080"},
    "Armour": {
      "Light": {"Head": "131093", "Chest": "131095", "Robe": "131090", "Shoulders": "131096", "Waist": "131097", "Legs": "131094", "Feet": "131091", "Hand": "131092"},
      "Medium": {"Head": "131101", "Chest": "131098", "Shoulders": "131103", "Waist": "131104", "Legs": "131102", "Feet": "131099", "Hand": "131100"},
      "Heavy": {"Head": "131086", "Chest": "131083", "Shoulders": "131088", "Waist": "131089", "Legs": "131087", "Feet": "131084", "Hand": "131085"}},
    "Jewellery": {"Neck": "137724", "Ring": "137556"}
  },
  "Grave-Stake Collector": {
    "Weapon": {"Axe": "142791", "Hammer": "142792", "Sword": "142793", "Two Handed Sword": "142796", "Two Handed Axe": "142794", "Two Handed Hammer": "142795", "Bow": "142798", "Healing Staff": "142802", "Dagger": "142797", "Fire Staff": "142799", "Frost Staff": "142800", "Shield": "142803", "Lightning Staff": "142801"},
    "Armour": {
      "Light": {"Head": "142814", "Chest": "142816", "Robe": "142811", "Shoulders": "142817", "Waist": "142818", "Legs": "142815", "Feet": "142812", "Hand": "142813"},
      "Medium": {"Head": "142822", "Chest": "142819", "Shoulders": "142824", "Waist": "142825", "Legs": "142823", "Feet": "142820", "Hand": "142821"},
      "Heavy": {"Head": "142807", "Chest": "142804", "Shoulders": "142809", "Waist": "142810", "Legs": "142808", "Feet": "142805", "Hand": "142806"}},
    "Jewellery": {"Neck": "142827", "Ring": "142826"}
  },
  "Magnus' Gift": {
    "Weapon": {"Axe": "48797", "Hammer": "48798", "Sword": "48799", "Two Handed Sword": "48802", "Two Handed Axe": "48800", "Two Handed Hammer": "48801", "Bow": "48816", "Healing Staff": "48829", "Dagger": "48803", "Fire Staff": "48826", "Frost Staff": "48827", "Shield": "48825", "Lightning Staff": "48828"},
    "Armour": {
      "Light": {"Head": "43847", "Chest": "48813", "Robe": "43849", "Shoulders": "48814", "Waist": "48815", "Legs": "48812", "Feet": "43850", "Hand": "43848"},
      "Medium": {"Head": "48820", "Chest": "48817", "Shoulders": "48822", "Waist": "48823", "Legs": "48821", "Feet": "48818", "Hand": "48819"},
      "Heavy": {"Head": "48808", "Chest": "48805", "Shoulders": "48810", "Waist": "48811", "Legs": "48809", "Feet": "48806", "Hand": "48807"}},
    "Jewellery": {"Neck": "137689", "Ring": "137521"}
  },
  "Law of Julianos": {
    "Weapon": {"Axe": "69599", "Hammer": "69601", "Sword": "69600", "Two Handed Sword": "69604", "Two Handed Axe": "69602", "Two Handed Hammer": "69603", "Bow": "69606", "Healing Staff": "69611", "Dagger": "69605", "Fire Staff": "69608", "Frost Staff": "69609", "Shield": "69607", "Lightning Staff": "69610"},
    "Armour": {
      "Light": {"Head": "69591", "Chest": "69593", "Robe": "69592", "Shoulders": "69594", "Waist": "69596", "Legs": "69597", "Feet": "69598", "Hand": "69595"},
      "Medium": {"Head": "69584", "Chest": "69585", "Shoulders": "69586", "Waist": "69588", "Legs": "69589", "Feet": "69590", "Hand": "69587"},
      "Heavy": {"Head": "69577", "Chest": "69578", "Shoulders": "69579", "Waist": "69581", "Legs": "69582", "Feet": "69583", "Hand": "69580"}},
    "Jewellery": {"Neck": "137709", "Ring": "137541"}
  },
  "Sload's Semblance": {
    "Weapon": {"Axe": "136067", "Hammer": "136068", "Sword": "136069", "Two Handed Sword": "136072", "Two Handed Axe": "136070", "Two Handed Hammer": "136071", "Bow": "136074", "Healing Staff": "136078", "Dagger": "136073", "Fire Staff": "136075", "Frost Staff": "136076", "Shield": "136079", "Lightning Staff": "136077"},
    "Armour": {
      "Light": {"Head": "136090", "Chest": "136092", "Robe": "136087", "Shoulders": "136093", "Waist": "136094", "Legs": "136091", "Feet": "136088", "Hand": "136089"},
      "Medium": {"Head": "136098", "Chest": "136095", "Shoulders": "136100", "Waist": "136101", "Legs": "136099", "Feet": "136096", "Hand": "136097"},
      "Heavy": {"Head": "136083", "Chest": "136080", "Shoulders": "136085", "Waist": "136086", "Legs": "136084", "Feet": "136081", "Hand": "136082"}},
    "Jewellery": {"Neck": "138722", "Ring": "138721"}
  },
  "Diamond's Victory": {
    "Weapon": {"Axe": "173203", "Hammer": "173204", "Sword": "173205", "Two Handed Sword": "173208", "Two Handed Axe": "173206", "Two Handed Hammer": "173207", "Bow": "173210", "Healing Staff": "173214", "Dagger": "173209", "Fire Staff": "173211", "Frost Staff": "173212", "Shield": "173215", "Lightning Staff": "173213"},
    "Armour": {
      "Light": {"Head": "173226", "Chest": "173228", "Robe": "173223", "Shoulders": "173229", "Waist": "173230", "Legs": "173227", "Feet": "173224", "Hand": "173225"},
      "Medium": {"Head": "173234", "Chest": "173231", "Shoulders": "173236", "Waist": "173237", "Legs": "173235", "Feet": "173232", "Hand": "173233"},
      "Heavy": {"Head": "173219", "Chest": "173216", "Shoulders": "173221", "Waist": "173222", "Legs": "173220", "Feet": "173217", "Hand": "173218"}},
    "Jewellery": {"Neck": "173239", "Ring": "173238"}
  },
  "Assassin's Guile": {
    "Weapon": {"Axe": "121551", "Hammer": "121552", "Sword": "121553", "Two Handed Sword": "121556", "Two Handed Axe": "121554", "Two Handed Hammer": "121555", "Bow": "121558", "Healing Staff": "121562", "Dagger": "121557", "Fire Staff": "121559", "Frost Staff": "121560", "Shield": "121563", "Lightning Staff": "121561"},
    "Armour": {
      "Light": {"Head": "121574", "Chest": "121576", "Robe": "121571", "Shoulders": "121577", "Waist": "121578", "Legs": "121575", "Feet": "121572", "Hand": "121573"},
      "Medium": {"Head": "121582", "Chest": "121579", "Shoulders": "121584", "Waist": "121585", "Legs": "121583", "Feet": "121580", "Hand": "121581"},
      "Heavy": {"Head": "121567", "Chest": "121564", "Shoulders": "121569", "Waist": "121570", "Legs": "121568", "Feet": "121565", "Hand": "121566"}},
    "Jewellery": {"Neck": "137719", "Ring": "137551"}
  },
  "Orgnum's Scales": {
    "Weapon": {"Axe": "52995", "Hammer": "52996", "Sword": "52997", "Two Handed Sword": "53000", "Two Handed Axe": "52998", "Two Handed Hammer": "52999", "Bow": "53014", "Healing Staff": "53025", "Dagger": "53001", "Fire Staff": "53022", "Frost Staff": "53023", "Shield": "44036", "Lightning Staff": "53024"},
    "Armour": {
      "Light": {"Head": "53009", "Chest": "53011", "Robe": "53006", "Shoulders": "53012", "Waist": "53013", "Legs": "53010", "Feet": "53007", "Hand": "53008"},
      "Medium": {"Head": "53018", "Chest": "53015", "Shoulders": "53020", "Waist": "53021", "Legs": "53019", "Feet": "53016", "Hand": "53017"},
      "Heavy": {"Head": "44031", "Chest": "44033", "Shoulders": "53004", "Waist": "53005", "Legs": "44032", "Feet": "44034", "Hand": "53003"}},
    "Jewellery": {"Neck": "137700", "Ring": "137532"}
  },
  "Ancient Dragonguard": {
    "Weapon": {"Axe": "155778", "Hammer": "155779", "Sword": "155780", "Two Handed Sword": "155783", "Two Handed Axe": "155781", "Two Handed Hammer": "155782", "Bow": "155785", "Healing Staff": "155789", "Dagger": "155784", "Fire Staff": "155786", "Frost Staff": "155787", "Shield": "155790", "Lightning Staff": "155788"},
    "Armour": {
      "Light": {"Head": "155801", "Chest": "155803", "Robe": "155798", "Shoulders": "155804", "Waist": "155805", "Legs": "155802", "Feet": "155799", "Hand": "155800"},
      "Medium": {"Head": "155809", "Chest": "155806", "Shoulders": "155811", "Waist": "155812", "Legs": "155810", "Feet": "155807", "Hand": "155808"},
      "Heavy": {"Head": "155794", "Chest": "155791", "Shoulders": "155796", "Waist": "155797", "Legs": "155795", "Feet": "155792", "Hand": "155793"}},
    "Jewellery": {"Neck": "155814", "Ring": "155813"}
  },
  "Nocturnal's Favor": {
    "Weapon": {"Axe": "136417", "Hammer": "136418", "Sword": "136419", "Two Handed Sword": "136422", "Two Handed Axe": "136420", "Two Handed Hammer": "136421", "Bow": "136424", "Healing Staff": "136428", "Dagger": "136423", "Fire Staff": "136425", "Frost Staff": "136426", "Shield": "136429", "Lightning Staff": "136427"},
    "Armour": {
      "Light": {"Head": "136440", "Chest": "136442", "Robe": "136437", "Shoulders": "136443", "Waist": "136444", "Legs": "136441", "Feet": "136438", "Hand": "136439"},
      "Medium": {"Head": "136448", "Chest": "136445", "Shoulders": "136450", "Waist": "136451", "Legs": "136449", "Feet": "136446", "Hand": "136447"},
      "Heavy": {"Head": "136433", "Chest": "136430", "Shoulders": "136435", "Waist": "136436", "Legs": "136434", "Feet": "136431", "Hand": "136432"}},
    "Jewellery": {"Neck": "138730", "Ring": "138729"}
  },
  "New Moon Acolyte": {
    "Weapon": {"Axe": "156152", "Hammer": "156153", "Sword": "156154", "Two Handed Sword": "156157", "Two Handed Axe": "156155", "Two Handed Hammer": "156156", "Bow": "156159", "Healing Staff": "156163", "Dagger": "156158", "Fire Staff": "156160", "Frost Staff": "156161", "Shield": "156164", "Lightning Staff": "156162"},
    "Armour": {
      "Light": {"Head": "156175", "Chest": "156177", "Robe": "156172", "Shoulders": "156178", "Waist": "156179", "Legs": "156176", "Feet": "156173", "Hand": "156174"},
      "Medium": {"Head": "156183", "Chest": "156180", "Shoulders": "156185", "Waist": "156186", "Legs": "156184", "Feet": "156181", "Hand": "156182"},
      "Heavy": {"Head": "156168", "Chest": "156165", "Shoulders": "156170", "Waist": "156171", "Legs": "156169", "Feet": "156166", "Hand": "156167"}},
    "Jewellery": {"Neck": "156188", "Ring": "156187"}
  },
  "Spectre's Eye": {
    "Weapon": {"Axe": "50327", "Hammer": "50328", "Sword": "50329", "Two Handed Sword": "50332", "Two Handed Axe": "50330", "Two Handed Hammer": "50331", "Bow": "50345", "Healing Staff": "43976", "Dagger": "50333", "Fire Staff": "50355", "Frost Staff": "50356", "Shield": "50354", "Lightning Staff": "50357"},
    "Armour": {
      "Light": {"Head": "43971", "Chest": "50343", "Robe": "43972", "Shoulders": "43973", "Waist": "50344", "Legs": "50342", "Feet": "43974", "Hand": "43975"},
      "Medium": {"Head": "50349", "Chest": "50346", "Shoulders": "50351", "Waist": "50352", "Legs": "50350", "Feet": "50347", "Hand": "50348"},
      "Heavy": {"Head": "50338", "Chest": "50335", "Shoulders": "50340", "Waist": "50341", "Legs": "50339", "Feet": "50336", "Hand": "50337"}},
    "Jewellery": {"Neck": "137693", "Ring": "137525"}
  },
  "Twice-Born Star": {
    "Weapon": {"Axe": "58175", "Hammer": "58177", "Sword": "58176", "Two Handed Sword": "58180", "Two Handed Axe": "58178", "Two Handed Hammer": "58179", "Bow": "58182", "Healing Staff": "58187", "Dagger": "58181", "Fire Staff": "58184", "Frost Staff": "58185", "Shield": "58183", "Lightning Staff": "58186"},
    "Armour": {
      "Light": {"Head": "58167", "Chest": "58168", "Robe": "58174", "Shoulders": "58169", "Waist": "58171", "Legs": "58172", "Feet": "58173", "Hand": "58170"},
      "Medium": {"Head": "58160", "Chest": "58161", "Shoulders": "58162", "Waist": "58164", "Legs": "58165", "Feet": "58166", "Hand": "58163"},
      "Heavy": {"Head": "58153", "Chest": "58154", "Shoulders": "58155", "Waist": "58157", "Legs": "58158", "Feet": "58159", "Hand": "58156"}},
    "Jewellery": {"Neck": "137705", "Ring": "137537"}
  },
  "Naga Shaman": {
    "Weapon": {"Axe": "143161", "Hammer": "143162", "Sword": "143163", "Two Handed Sword": "143166", "Two Handed Axe": "143164", "Two Handed Hammer": "143165", "Bow": "143168", "Healing Staff": "143172", "Dagger": "143167", "Fire Staff": "143169", "Frost Staff": "143170", "Shield": "143173", "Lightning Staff": "143171"},
    "Armour": {
      "Light": {"Head": "143184", "Chest": "143186", "Robe": "143181", "Shoulders": "143187", "Waist": "143188", "Legs": "143185", "Feet": "143182", "Hand": "143183"},
      "Medium": {"Head": "143192", "Chest": "143189", "Shoulders": "143194", "Waist": "143195", "Legs": "143193", "Feet": "143190", "Hand": "143191"},
      "Heavy": {"Head": "143177", "Chest": "143174", "Shoulders": "143179", "Waist": "143180", "Legs": "143178", "Feet": "143175", "Hand": "143176"}},
    "Jewellery": {"Neck": "143197", "Ring": "143196"}
  },
  "Kagrenac's Hope": {
    "Weapon": {"Axe": "53757", "Hammer": "53758", "Sword": "53759", "Two Handed Sword": "53762", "Two Handed Axe": "53760", "Two Handed Hammer": "53761", "Bow": "53780", "Healing Staff": "53787", "Dagger": "53763", "Fire Staff": "53784", "Frost Staff": "53785", "Shield": "53783", "Lightning Staff": "53786"},
    "Armour": {
      "Light": {"Head": "53775", "Chest": "53777", "Robe": "53772", "Shoulders": "53778", "Waist": "53779", "Legs": "53776", "Feet": "53773", "Hand": "53774"},
      "Medium": {"Head": "44079", "Chest": "44082", "Shoulders": "44080", "Waist": "44083", "Legs": "44081", "Feet": "44084", "Hand": "53781"},
      "Heavy": {"Head": "53768", "Chest": "53765", "Shoulders": "53770", "Waist": "53771", "Legs": "53769", "Feet": "53766", "Hand": "53767"}},
    "Jewellery": {"Neck": "137702", "Ring": "137534"}
  },
  "Red Eagle's Fury": {
    "Weapon": {"Axe": "167999", "Hammer": "168000", "Sword": "168001", "Two Handed Sword": "168004", "Two Handed Axe": "168002", "Two Handed Hammer": "168003", "Bow": "168006", "Healing Staff": "168010", "Dagger": "168005", "Fire Staff": "168007", "Frost Staff": "168008", "Shield": "168011", "Lightning Staff": "168009"},
    "Armour": {
      "Light": {"Head": "168022", "Chest": "168024", "Robe": "168019", "Shoulders": "168025", "Waist": "168026", "Legs": "168023", "Feet": "168020", "Hand": "168021"},
      "Medium": {"Head": "168030", "Chest": "168027", "Shoulders": "168032", "Waist": "168033", "Legs": "168031", "Feet": "168028", "Hand": "168029"},
      "Heavy": {"Head": "168015", "Chest": "168012", "Shoulders": "168017", "Waist": "168018", "Legs": "168016", "Feet": "168013", "Hand": "168014"}},
    "Jewellery": {"Neck": "168035", "Ring": "168034"}
  },
  "Fortified Brass": {
    "Weapon": {"Axe": "130720", "Hammer": "130721", "Sword": "130722", "Two Handed Sword": "130725", "Two Handed Axe": "130723", "Two Handed Hammer": "130724", "Bow": "130727", "Healing Staff": "130731", "Dagger": "130726", "Fire Staff": "130728", "Frost Staff": "130729", "Shield": "130732", "Lightning Staff": "130730"},
    "Armour": {
      "Light": {"Head": "130743", "Chest": "130745", "Robe": "130740", "Shoulders": "130746", "Waist": "130747", "Legs": "130744", "Feet": "130741", "Hand": "130742"},
      "Medium": {"Head": "130751", "Chest": "130748", "Shoulders": "130753", "Waist": "130754", "Legs": "130752", "Feet": "130749", "Hand": "130750"},
      "Heavy": {"Head": "130736", "Chest": "130733", "Shoulders": "130738", "Waist": "130739", "Legs": "130737", "Feet": "130734", "Hand": "130735"}},
    "Jewellery": {"Neck": "137723", "Ring": "137555"}
  },
  "Willow's Path": {
    "Weapon": {"Axe": "51471", "Hammer": "51472", "Sword": "51473", "Two Handed Sword": "51476", "Two Handed Axe": "51474", "Two Handed Hammer": "51475", "Bow": "51494", "Healing Staff": "51501", "Dagger": "51477", "Fire Staff": "51498", "Frost Staff": "51499", "Shield": "51497", "Lightning Staff": "51500"},
    "Armour": {
      "Light": {"Head": "51489", "Chest": "51491", "Robe": "51486", "Shoulders": "51492", "Waist": "51493", "Legs": "51490", "Feet": "51487", "Hand": "51488"},
      "Medium": {"Head": "44001", "Chest": "44005", "Shoulders": "44002", "Waist": "51495", "Legs": "44004", "Feet": "44006", "Hand": "44003"},
      "Heavy": {"Head": "51482", "Chest": "51479", "Shoulders": "51484", "Waist": "51485", "Legs": "51483", "Feet": "51480", "Hand": "51481"}},
    "Jewellery": {"Neck": "137696", "Ring": "137528"}
  },
  "Armor Master": {
    "Weapon": {"Axe": "60961", "Hammer": "60962", "Sword": "60963", "Two Handed Sword": "60966", "Two Handed Axe": "60964", "Two Handed Hammer": "60965", "Bow": "60968", "Healing Staff": "60972", "Dagger": "60967", "Fire Staff": "60969", "Frost Staff": "60970", "Shield": "60995", "Lightning Staff": "60971"},
    "Armour": {
      "Light": {"Head": "60983", "Chest": "60985", "Robe": "60980", "Shoulders": "60986", "Waist": "60987", "Legs": "63931", "Feet": "60981", "Hand": "60982"},
      "Medium": {"Head": "60991", "Chest": "60988", "Shoulders": "60993", "Waist": "60994", "Legs": "60992", "Feet": "60989", "Hand": "60990"},
      "Heavy": {"Head": "60976", "Chest": "60973", "Shoulders": "60978", "Waist": "60979", "Legs": "60977", "Feet": "60974", "Hand": "60975"}},
    "Jewellery": {"Neck": "137708", "Ring": "137540"}
  },
  "Aetherial Ascension": {
    "Weapon": {"Axe": "168747", "Hammer": "168748", "Sword": "168749", "Two Handed Sword": "168752", "Two Handed Axe": "168750", "Two Handed Hammer": "168751", "Bow": "168754", "Healing Staff": "168758", "Dagger": "168753", "Fire Staff": "168755", "Frost Staff": "168756", "Shield": "168759", "Lightning Staff": "168757"},
    "Armour": {
      "Light": {"Head": "168770", "Chest": "168772", "Robe": "168767", "Shoulders": "168773", "Waist": "168774", "Legs": "168771", "Feet": "168768", "Hand": "168769"},
      "Medium": {"Head": "168778", "Chest": "168775", "Shoulders": "168780", "Waist": "168781", "Legs": "168779", "Feet": "168776", "Hand": "168777"},
      "Heavy": {"Head": "168763", "Chest": "168760", "Shoulders": "168765", "Waist": "168766", "Legs": "168764", "Feet": "168761", "Hand": "168762"}},
    "Jewellery": {"Neck": "168783", "Ring": "168782"}
  },
  "Hist Whisperer": {
    "Weapon": {"Axe": "172455", "Hammer": "172456", "Sword": "172457", "Two Handed Sword": "172460", "Two Handed Axe": "172458", "Two Handed Hammer": "172459", "Bow": "172462", "Healing Staff": "172466", "Dagger": "172461", "Fire Staff": "172463", "Frost Staff": "172464", "Shield": "172467", "Lightning Staff": "172465"},
    "Armour": {
      "Light": {"Head": "172478", "Chest": "172480", "Robe": "172475", "Shoulders": "172481", "Waist": "172482", "Legs": "172479", "Feet": "172476", "Hand": "172477"},
      "Medium": {"Head": "172486", "Chest": "172483", "Shoulders": "172488", "Waist": "172489", "Legs": "172487", "Feet": "172484", "Hand": "172485"},
      "Heavy": {"Head": "172471", "Chest": "172468", "Shoulders": "172473", "Waist": "172474", "Legs": "172472", "Feet": "172469", "Hand": "172470"}},
    "Jewellery": {"Neck": "172491", "Ring": "172490"}
  },
  "Vampire's Kiss": {
    "Weapon": {"Axe": "48414", "Hammer": "48415", "Sword": "48416", "Two Handed Sword": "48419", "Two Handed Axe": "48417", "Two Handed Hammer": "48418", "Bow": "48433", "Healing Staff": "48446", "Dagger": "48420", "Fire Staff": "48443", "Frost Staff": "48444", "Shield": "48442", "Lightning Staff": "48445"},
    "Armour": {
      "Light": {"Head": "48428", "Chest": "48430", "Robe": "48425", "Shoulders": "48431", "Waist": "48432", "Legs": "48429", "Feet": "48426", "Hand": "48427"},
      "Medium": {"Head": "48437", "Chest": "48434", "Shoulders": "48439", "Waist": "48440", "Legs": "48438", "Feet": "48435", "Hand": "48436"},
      "Heavy": {"Head": "48423", "Chest": "43834", "Shoulders": "43831", "Waist": "48424", "Legs": "43833", "Feet": "48422", "Hand": "43832"}},
    "Jewellery": {"Neck": "137688", "Ring": "137520"}
  },
  "Spell Parasite": {
    "Weapon": {"Axe": "163057", "Hammer": "163058", "Sword": "163059", "Two Handed Sword": "163062", "Two Handed Axe": "163060", "Two Handed Hammer": "163061", "Bow": "163064", "Healing Staff": "163068", "Dagger": "163063", "Fire Staff": "163065", "Frost Staff": "163066", "Shield": "163069", "Lightning Staff": "163067"},
    "Armour": {
      "Light": {"Head": "163080", "Chest": "163082", "Robe": "163077", "Shoulders": "163083", "Waist": "163084", "Legs": "163081", "Feet": "163078", "Hand": "163079"},
      "Medium": {"Head": "163088", "Chest": "163085", "Shoulders": "163090", "Waist": "163091", "Legs": "163089", "Feet": "163086", "Hand": "163087"},
      "Heavy": {"Head": "163073", "Chest": "163070", "Shoulders": "163075", "Waist": "163076", "Legs": "163074", "Feet": "163071", "Hand": "163072"}},
    "Jewellery": {"Neck": "163093", "Ring": "163092"}
  },
  "Adept Rider": {
    "Weapon": {"Axe": "135717", "Hammer": "135718", "Sword": "135719", "Two Handed Sword": "135722", "Two Handed Axe": "135720", "Two Handed Hammer": "135721", "Bow": "135724", "Healing Staff": "135728", "Dagger": "135723", "Fire Staff": "135725", "Frost Staff": "135726", "Shield": "135729", "Lightning Staff": "135727"},
    "Armour": {
      "Light": {"Head": "135740", "Chest": "135742", "Robe": "135737", "Shoulders": "135743", "Waist": "135744", "Legs": "135741", "Feet": "135738", "Hand": "135739"},
      "Medium": {"Head": "135748", "Chest": "135745", "Shoulders": "135750", "Waist": "135751", "Legs": "135749", "Feet": "135746", "Hand": "135747"},
      "Heavy": {"Head": "135733", "Chest": "135730", "Shoulders": "135735", "Waist": "135736", "Legs": "135734", "Feet": "135731", "Hand": "135732"}},
    "Jewellery": {"Neck": "138714", "Ring": "138713"}
  },
  "Way of the Arena": {
    "Weapon": {"Axe": "54965", "Hammer": "54966", "Sword": "54964", "Two Handed Sword": "54967", "Two Handed Axe": "54968", "Two Handed Hammer": "54969", "Bow": "54971", "Healing Staff": "54975", "Dagger": "54970", "Fire Staff": "54972", "Frost Staff": "54973", "Shield": "54976", "Lightning Staff": "54974"},
    "Armour": {
      "Light": {"Head": "54957", "Chest": "54956", "Robe": "54963", "Shoulders": "54958", "Waist": "54960", "Legs": "54961", "Feet": "54962", "Hand": "54959"},
      "Medium": {"Head": "54950", "Chest": "54949", "Shoulders": "54951", "Waist": "54953", "Legs": "54954", "Feet": "54955", "Hand": "54952"},
      "Heavy": {"Head": "54943", "Chest": "54942", "Shoulders": "54944", "Waist": "54946", "Legs": "54947", "Feet": "54948", "Hand": "54945"}},
    "Jewellery": {"Neck": "137704", "Ring": "137536"}
  },
  "Varen's Legacy": {
    "Weapon": {"Axe": "75736", "Hammer": "75737", "Sword": "75738", "Two Handed Sword": "75741", "Two Handed Axe": "75739", "Two Handed Hammer": "75740", "Bow": "75743", "Healing Staff": "75747", "Dagger": "75742", "Fire Staff": "75744", "Frost Staff": "75745", "Shield": "75748", "Lightning Staff": "75746"},
    "Armour": {
      "Light": {"Head": "75759", "Chest": "75761", "Robe": "75756", "Shoulders": "75762", "Waist": "75763", "Legs": "75760", "Feet": "75757", "Hand": "75758"},
      "Medium": {"Head": "75767", "Chest": "75764", "Shoulders": "75769", "Waist": "75770", "Legs": "75768", "Feet": "75765", "Hand": "75766"},
      "Heavy": {"Head": "75752", "Chest": "75749", "Shoulders": "75754", "Waist": "75755", "Legs": "75753", "Feet": "75750", "Hand": "75751"}},
    "Jewellery": {"Neck": "137717", "Ring": "137549"}
  },
  "Daedric Trickery": {
    "Weapon": {"Axe": "121901", "Hammer": "121902", "Sword": "121903", "Two Handed Sword": "121906", "Two Handed Axe": "121904", "Two Handed Hammer": "121905", "Bow": "121908", "Healing Staff": "121912", "Dagger": "121907", "Fire Staff": "121909", "Frost Staff": "121910", "Shield": "121913", "Lightning Staff": "121911"},
    "Armour": {
      "Light": {"Head": "121924", "Chest": "121926", "Robe": "121921", "Shoulders": "121927", "Waist": "121928", "Legs": "121925", "Feet": "121922", "Hand": "121923"},
      "Medium": {"Head": "121932", "Chest": "121929", "Shoulders": "121934", "Waist": "121935", "Legs": "121933", "Feet": "121930", "Hand": "121931"},
      "Heavy": {"Head": "121917", "Chest": "121914", "Shoulders": "121919", "Waist": "121920", "Legs": "121918", "Feet": "121915", "Hand": "121916"}},
    "Jewellery": {"Neck": "137720", "Ring": "137552"}
  },
  "Dragon's Appetite": {
    "Weapon": {"Axe": "161595", "Hammer": "161596", "Sword": "161597", "Two Handed Sword": "161600", "Two Handed Axe": "161598", "Two Handed Hammer": "161599", "Bow": "161602", "Healing Staff": "161606", "Dagger": "161601", "Fire Staff": "161603", "Frost Staff": "161604", "Shield": "161607", "Lightning Staff": "161605"},
    "Armour": {
      "Light": {"Head": "161618", "Chest": "161620", "Robe": "161615", "Shoulders": "161621", "Waist": "161622", "Legs": "161619", "Feet": "161616", "Hand": "161617"},
      "Medium": {"Head": "161626", "Chest": "161623", "Shoulders": "161628", "Waist": "161629", "Legs": "161627", "Feet": "161624", "Hand": "161625"},
      "Heavy": {"Head": "161611", "Chest": "161608", "Shoulders": "161613", "Waist": "161614", "Legs": "161612", "Feet": "161609", "Hand": "161610"}},
    "Jewellery": {"Neck": "161631", "Ring": "161630"}
  },
  "Kvatch Gladiator": {
    "Weapon": {"Axe": "75386", "Hammer": "75387", "Sword": "75388", "Two Handed Sword": "75391", "Two Handed Axe": "75389", "Two Handed Hammer": "75390", "Bow": "75393", "Healing Staff": "75397", "Dagger": "75392", "Fire Staff": "75394", "Frost Staff": "75395", "Shield": "75398", "Lightning Staff": "75396"},
    "Armour": {
      "Light": {"Head": "75409", "Chest": "75411", "Robe": "75406", "Shoulders": "75412", "Waist": "75413", "Legs": "75410", "Feet": "75407", "Hand": "75408"},
      "Medium": {"Head": "75417", "Chest": "75414", "Shoulders": "75419", "Waist": "75420", "Legs": "75418", "Feet": "75415", "Hand": "75416"},
      "Heavy": {"Head": "75402", "Chest": "75399", "Shoulders": "75404", "Waist": "75405", "Legs": "75403", "Feet": "75400", "Hand": "75401"}},
    "Jewellery": {"Neck": "137716", "Ring": "137548"}
  },
  "Heartland Conqueror": {
    "Weapon": {"Axe": "172829", "Hammer": "172830", "Sword": "172831", "Two Handed Sword": "172834", "Two Handed Axe": "172832", "Two Handed Hammer": "172833", "Bow": "172836", "Healing Staff": "172840", "Dagger": "172835", "Fire Staff": "172837", "Frost Staff": "172838", "Shield": "172841", "Lightning Staff": "172839"},
    "Armour": {
      "Light": {"Head": "172852", "Chest": "172854", "Robe": "172849", "Shoulders": "172855", "Waist": "172856", "Legs": "172853", "Feet": "172850", "Hand": "172851"},
      "Medium": {"Head": "172860", "Chest": "172857", "Shoulders": "172862", "Waist": "172863", "Legs": "172861", "Feet": "172858", "Hand": "172859"},
      "Heavy": {"Head": "172845", "Chest": "172842", "Shoulders": "172847", "Waist": "172848", "Legs": "172846", "Feet": "172843", "Hand": "172844"}},
    "Jewellery": {"Neck": "172865", "Ring": "172864"}
  },
  "Ashen Grip": {
    "Weapon": {"Axe": "49563", "Hammer": "49564", "Sword": "49565", "Two Handed Sword": "49568", "Two Handed Axe": "49566", "Two Handed Hammer": "49567", "Bow": "49583", "Healing Staff": "49595", "Dagger": "49569", "Fire Staff": "49592", "Frost Staff": "49593", "Shield": "49591", "Lightning Staff": "49594"},
    "Armour": {
      "Light": {"Head": "49578", "Chest": "49580", "Robe": "49575", "Shoulders": "49581", "Waist": "49582", "Legs": "49579", "Feet": "49576", "Hand": "49577"},
      "Medium": {"Head": "49587", "Chest": "49584", "Shoulders": "49589", "Waist": "49590", "Legs": "49588", "Feet": "49585", "Hand": "49586"},
      "Heavy": {"Head": "49573", "Chest": "43873", "Shoulders": "43871", "Waist": "49574", "Legs": "43872", "Feet": "49571", "Hand": "49572"}},
    "Jewellery": {"Neck": "137691", "Ring": "137523"}
  },
  "Vastarie's Tutelage": {
    "Weapon": {"Axe": "148688", "Hammer": "148689", "Sword": "148690", "Two Handed Sword": "148693", "Two Handed Axe": "148691", "Two Handed Hammer": "148692", "Bow": "148695", "Healing Staff": "148699", "Dagger": "148694", "Fire Staff": "148696", "Frost Staff": "148697", "Shield": "148700", "Lightning Staff": "148698"},
    "Armour": {
      "Light": {"Head": "148711", "Chest": "148713", "Robe": "148708", "Shoulders": "148714", "Waist": "148715", "Legs": "148712", "Feet": "148709", "Hand": "148710"},
      "Medium": {"Head": "148719", "Chest": "148716", "Shoulders": "148721", "Waist": "148722", "Legs": "148720", "Feet": "148717", "Hand": "148718"},
      "Heavy": {"Head": "148704", "Chest": "148701", "Shoulders": "148706", "Waist": "148707", "Legs": "148705", "Feet": "148702", "Hand": "148703"}},
    "Jewellery": {"Neck": "148724", "Ring": "148723"}
  },
  "Redistributor": {
    "Weapon": {"Axe": "60611", "Hammer": "60612", "Sword": "60613", "Two Handed Sword": "60616", "Two Handed Axe": "60614", "Two Handed Hammer": "60615", "Bow": "60618", "Healing Staff": "60622", "Dagger": "60617", "Fire Staff": "60619", "Frost Staff": "60620", "Shield": "60645", "Lightning Staff": "60621"},
    "Armour": {
      "Light": {"Head": "60633", "Chest": "60635", "Robe": "60630", "Shoulders": "60636", "Waist": "60637", "Legs": "60634", "Feet": "60631", "Hand": "60632"},
      "Medium": {"Head": "60641", "Chest": "60638", "Shoulders": "60643", "Waist": "60644", "Legs": "60642", "Feet": "60639", "Hand": "60640"},
      "Heavy": {"Head": "60626", "Chest": "60623", "Shoulders": "60628", "Waist": "60629", "Legs": "60627", "Feet": "60624", "Hand": "60625"}},
    "Jewellery": {"Neck": "137707", "Ring": "137539"}
  },
  "Oblivion's Foe": {
    "Weapon": {"Axe": "49946", "Hammer": "49947", "Sword": "49948", "Two Handed Sword": "49951", "Two Handed Axe": "49949", "Two Handed Hammer": "49950", "Bow": "49964", "Healing Staff": "49976", "Dagger": "49952", "Fire Staff": "49973", "Frost Staff": "49974", "Shield": "49972", "Lightning Staff": "49975"},
    "Armour": {
      "Light": {"Head": "43965", "Chest": "49962", "Robe": "43968", "Shoulders": "43966", "Waist": "49963", "Legs": "43967", "Feet": "43969", "Hand": "49961"},
      "Medium": {"Head": "49968", "Chest": "49965", "Shoulders": "49970", "Waist": "49971", "Legs": "49969", "Feet": "49966", "Hand": "49967"},
      "Heavy": {"Head": "49957", "Chest": "49954", "Shoulders": "49959", "Waist": "49960", "Legs": "49958", "Feet": "49955", "Hand": "49956"}},
    "Jewellery": {"Neck": "137692", "Ring": "137524"}
  },
  "Pelinal's Aptitude": {
    "Weapon": {"Axe": "76086", "Hammer": "76087", "Sword": "76088", "Two Handed Sword": "76091", "Two Handed Axe": "76089", "Two Handed Hammer": "76090", "Bow": "76093", "Healing Staff": "76097", "Dagger": "76092", "Fire Staff": "76094", "Frost Staff": "76095", "Shield": "76098", "Lightning Staff": "76096"},
    "Armour": {
      "Light": {"Head": "76109", "Chest": "76111", "Robe": "76106", "Shoulders": "76112", "Waist": "76113", "Legs": "76110", "Feet": "76107", "Hand": "76108"},
      "Medium": {"Head": "76117", "Chest": "76114", "Shoulders": "76119", "Waist": "76120", "Legs": "76118", "Feet": "76115", "Hand": "76116"},
      "Heavy": {"Head": "76102", "Chest": "76099", "Shoulders": "76104", "Waist": "76105", "Legs": "76103", "Feet": "76100", "Hand": "76101"}},
    "Jewellery": {"Neck": "137718", "Ring": "137550"}
  },
  "Tava's Favor": {
    "Weapon": {"Axe": "71813", "Hammer": "71815", "Sword": "71814", "Two Handed Sword": "71818", "Two Handed Axe": "71816", "Two Handed Hammer": "71817", "Bow": "71820", "Healing Staff": "71825", "Dagger": "71819", "Fire Staff": "71822", "Frost Staff": "71823", "Shield": "71821", "Lightning Staff": "71824"},
    "Armour": {
      "Light": {"Head": "71805", "Chest": "71807", "Robe": "71806", "Shoulders": "71808", "Waist": "71810", "Legs": "71811", "Feet": "71812", "Hand": "71809"},
      "Medium": {"Head": "71798", "Chest": "71799", "Shoulders": "71800", "Waist": "71802", "Legs": "71803", "Feet": "71804", "Hand": "71801"},
      "Heavy": {"Head": "71791", "Chest": "71792", "Shoulders": "71793", "Waist": "71795", "Legs": "71796", "Feet": "71797", "Hand": "71794"}},
    "Jewellery": {"Neck": "137713", "Ring": "137545"}
  },
  "Senche-raht's Grit": {
    "Weapon": {"Axe": "148318", "Hammer": "148319", "Sword": "148320", "Two Handed Sword": "148323", "Two Handed Axe": "148321", "Two Handed Hammer": "148322", "Bow": "148325", "Healing Staff": "148329", "Dagger": "148324", "Fire Staff": "148326", "Frost Staff": "148327", "Shield": "148330", "Lightning Staff": "148328"},
    "Armour": {
      "Light": {"Head": "148341", "Chest": "148343", "Robe": "148338", "Shoulders": "148344", "Waist": "148345", "Legs": "148342", "Feet": "148339", "Hand": "148340"},
      "Medium": {"Head": "148349", "Chest": "148346", "Shoulders": "148351", "Waist": "148352", "Legs": "148350", "Feet": "148347", "Hand": "148348"},
      "Heavy": {"Head": "148334", "Chest": "148331", "Shoulders": "148336", "Waist": "148337", "Legs": "148335", "Feet": "148332", "Hand": "148333"}},
    "Jewellery": {"Neck": "148354", "Ring": "148353"}
  },
  "Whitestrake's Retribution": {
    "Weapon": {"Axe": "47648", "Hammer": "47649", "Sword": "47650", "Two Handed Sword": "47653", "Two Handed Axe": "47651", "Two Handed Hammer": "47652", "Bow": "47671", "Healing Staff": "47680", "Dagger": "47654", "Fire Staff": "47677", "Frost Staff": "47678", "Shield": "47676", "Lightning Staff": "47679"},
    "Armour": {
      "Light": {"Head": "47666", "Chest": "47668", "Robe": "47663", "Shoulders": "47669", "Waist": "47670", "Legs": "47667", "Feet": "47664", "Hand": "47665"},
      "Medium": {"Head": "43819", "Chest": "47672", "Shoulders": "43820", "Waist": "43822", "Legs": "43821", "Feet": "47673", "Hand": "47674"},
      "Heavy": {"Head": "47659", "Chest": "47656", "Shoulders": "47661", "Waist": "47662", "Legs": "47660", "Feet": "47657", "Hand": "47658"}},
    "Jewellery": {"Neck": "137686", "Ring": "137518"}
  },
  "Might of the Lost Legion": {
    "Weapon": {"Axe": "143531", "Hammer": "143532", "Sword": "143533", "Two Handed Sword": "143536", "Two Handed Axe": "143534", "Two Handed Hammer": "143535", "Bow": "143538", "Healing Staff": "143542", "Dagger": "143537", "Fire Staff": "143539", "Frost Staff": "143540", "Shield": "143543", "Lightning Staff": "143541"},
    "Armour": {
      "Light": {"Head": "143554", "Chest": "143556", "Robe": "143551", "Shoulders": "143557", "Waist": "143558", "Legs": "143555", "Feet": "143552", "Hand": "143553"},
      "Medium": {"Head": "143562", "Chest": "143559", "Shoulders": "143564", "Waist": "143565", "Legs": "143563", "Feet": "143560", "Hand": "143561"},
      "Heavy": {"Head": "143547", "Chest": "143544", "Shoulders": "143549", "Waist": "143550", "Legs": "143548", "Feet": "143545", "Hand": "143546"}},
    "Jewellery": {"Neck": "143567", "Ring": "143566"}
  },
  "Shalidor's Curse": {
    "Weapon": {"Axe": "54138", "Hammer": "54139", "Sword": "54140", "Two Handed Sword": "54143", "Two Handed Axe": "54141", "Two Handed Hammer": "54142", "Bow": "54157", "Healing Staff": "54168", "Dagger": "54144", "Fire Staff": "44104", "Frost Staff": "54166", "Shield": "54165", "Lightning Staff": "54167"},
    "Armour": {
      "Light": {"Head": "54152", "Chest": "54154", "Robe": "54149", "Shoulders": "54155", "Waist": "54156", "Legs": "54153", "Feet": "54150", "Hand": "54151"},
      "Medium": {"Head": "54161", "Chest": "54158", "Shoulders": "54163", "Waist": "54164", "Legs": "54162", "Feet": "54159", "Hand": "54160"},
      "Heavy": {"Head": "44099", "Chest": "44102", "Shoulders": "54147", "Waist": "54148", "Legs": "44101", "Feet": "54146", "Hand": "44100"}},
    "Jewellery": {"Neck": "137703", "Ring": "137535"}
  },
  "Hunding's Rage": {
    "Weapon": {"Axe": "51852", "Hammer": "51853", "Sword": "44011", "Two Handed Sword": "51856", "Two Handed Axe": "51854", "Two Handed Hammer": "51855", "Bow": "51872", "Healing Staff": "51882", "Dagger": "44012", "Fire Staff": "51879", "Frost Staff": "51880", "Shield": "51878", "Lightning Staff": "51881"},
    "Armour": {
      "Light": {"Head": "51867", "Chest": "51869", "Robe": "51864", "Shoulders": "51870", "Waist": "51871", "Legs": "51868", "Feet": "51865", "Hand": "51866"},
      "Medium": {"Head": "44007", "Chest": "51873", "Shoulders": "51875", "Waist": "51876", "Legs": "44009", "Feet": "51874", "Hand": "44008"},
      "Heavy": {"Head": "51860", "Chest": "51857", "Shoulders": "51862", "Waist": "51863", "Legs": "51861", "Feet": "51858", "Hand": "51859"}},
    "Jewellery": {"Neck": "137697", "Ring": "137529"}
  },
  "Coldharbour's Favorite": {
    "Weapon": {"Axe": "147948", "Hammer": "147949", "Sword": "147950", "Two Handed Sword": "147953", "Two Handed Axe": "147951", "Two Handed Hammer": "147952", "Bow": "147955", "Healing Staff": "147959", "Dagger": "147954", "Fire Staff": "147956", "Frost Staff": "147957", "Shield": "147960", "Lightning Staff": "147958"},
    "Armour": {
      "Light": {"Head": "147971", "Chest": "147973", "Robe": "147968", "Shoulders": "147974", "Waist": "147975", "Legs": "147972", "Feet": "147969", "Hand": "147970"},
      "Medium": {"Head": "147979", "Chest": "147976", "Shoulders": "147981", "Waist": "147982", "Legs": "147980", "Feet": "147977", "Hand": "147978"},
      "Heavy": {"Head": "147964", "Chest": "147961", "Shoulders": "147966", "Waist": "147967", "Legs": "147965", "Feet": "147962", "Hand": "147963"}},
    "Jewellery": {"Neck": "147984", "Ring": "147983"}
  }
};

// Get Set names in alphabetical order, with "[No Set]" first:
var SET_NAMES = Object.keys(setItemIds).sort(function(s1, s2) {if (s1===NO_SET || s2===NO_SET) {return 1} else {return s1 > s2 ? 1 : -1}});


//-------------------------------------------------//
// Item Level
//-------------------------------------------------//

function getCPFromLevel(itemLevel) {
    return String(itemLevel).indexOf("CP") == 0 ? parseInt(itemLevel.slice(2)) : 0;
}

var CRAFTING_LEVELS = [
    "1", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50",
    "CP10", "CP20", "CP30", "CP40", "CP50", "CP60", "CP70", "CP80", "CP90", "CP100", "CP110", "CP120", "CP130", "CP140", "CP150", "CP160"
];


//-------------------------------------------------//
// Item Quality
//-------------------------------------------------//

function Quality(name, esoQualityId, materialAmount, jewelleryMaterialAmount, htmlColour) {
    this.name = name;
    this.esoQualityId = esoQualityId;
    this.materialAmount = materialAmount;
    this.jewelleryMaterialAmount = jewelleryMaterialAmount;
    this.htmlColour = htmlColour;
}

var QUALITIES = [
    new Quality("Normal",    1, 0, 0, "#FFFFFF"),
    new Quality("Fine",      2, 2, 1, "#2DC50E"),
    new Quality("Superior",  3, 3, 2, "#3A92FF"),
    new Quality("Epic",      4, 4, 3, "#A02EF7"),
    new Quality("Legendary", 5, 8, 4, "#EECA2A"),
];

var IMPROVEMENT_MATS = {};
IMPROVEMENT_MATS[WOOD] = [null, "Pitch", "Turpen", "Mastic", "Rosin"];
IMPROVEMENT_MATS[METAL] = [null, "Honing Stone", "Dwarven Oil", "Grain Solvent", "Tempering Alloy"];
IMPROVEMENT_MATS[CLOTH] = [null, "Hemming", "Embroidery", "Elegant Lining", "Dreugh Wax"];
IMPROVEMENT_MATS[LEATHER] = [null, "Hemming", "Embroidery", "Elegant Lining", "Dreugh Wax"];
IMPROVEMENT_MATS[OUNCES] = [null, "Terne Plating", "Iridium Plating", "Zircon Plating", "Chromium Plating"];

function getQualityImprovementMats(materialType, quality) {
    var maxQualityIndex = QUALITIES.indexOf(quality);
    var requiredMaterials = {};
    requiredMaterials[COST_QUALITY] = {};
    // Start at 1, since no materials required for no improvement:
    for (var i = 1; i <= maxQualityIndex; i++) {
        // Jewellery doesn't follow the pattern:
        var amount = materialType !== OUNCES ? QUALITIES[i].materialAmount : QUALITIES[i].jewelleryMaterialAmount;
        requiredMaterials[COST_QUALITY][IMPROVEMENT_MATS[materialType][i]] = amount;
    }
    return requiredMaterials;
}


//-------------------------------------------------//
// Item Materials
//-------------------------------------------------//

var MATERIALS = {};
MATERIALS[WOOD] = ["Sanded Maple", "Sanded Oak", "Sanded Beech", "Sanded Hickory", "Sanded Yew", "Sanded Birch", "Sanded Ash", "Sanded Mahogony", "Sanded Nightwood", "Sanded Ruby Ash"];
MATERIALS[METAL] = ["Iron Ingots", "Steel Ingots", "Orichalum Ingots", "Dwarven Ingots", "Ebony Ingots", "Calcinium Ingots", "Galatite Ingots", "Quicksilver Ingots", "Voidstone Ingots", "Rubedite Ingots"];
MATERIALS[CLOTH] = ["Jute", "Flax", "Cotton", "Spidersilk", "Ebonthread", "Kresh Fiber", "Ironthread", "Silverweave", "Void Cloth", "Ancestor Silk"];
MATERIALS[LEATHER] = ["Rawhide", "Hide", "Leather", "Thick Leather", "Fell Hide", "Topgrain Hide", "Iron Hide", "Superb Hide", "Shadowhide", "Rubedo Leather"];
MATERIALS[OUNCES] = ["Pewter Ounces", "Copper Ounces", "Silver Ounces", "Electrum Ounces", "Platinum Ounces"];

// Material costs vary between items on a shared scale:

function ItemMaterialCost(materialType, baseAmount, tier10Amount) {
    this.materialType = materialType;
    this.baseAmount = baseAmount;
    this.tier10Amount = tier10Amount;
}

var MAT_COST_WOOD_WEAPON = new ItemMaterialCost(WOOD, 3, 12);
var MAT_COST_SHIELD = new ItemMaterialCost(WOOD, 6, 14);
var MAT_COST_ONE_HAND = new ItemMaterialCost(METAL, 3, 11);
var MAT_COST_TWO_HAND = new ItemMaterialCost(METAL, 5, 14);
var MAT_COST_DAGGER = new ItemMaterialCost(METAL, 2, 10);
var MAT_COST_LIGHT_CHEST = new ItemMaterialCost(CLOTH, 7, 15);
var MAT_COST_LIGHT_LEGS = new ItemMaterialCost(CLOTH, 6, 14);
var MAT_COST_LIGHT = new ItemMaterialCost(CLOTH, 5, 13);
var MAT_COST_MEDIUM_CHEST = new ItemMaterialCost(LEATHER, 7, 15);
var MAT_COST_MEDIUM_LEGS = new ItemMaterialCost(LEATHER, 6, 14);
var MAT_COST_MEDIUM = new ItemMaterialCost(LEATHER, 5, 13);
var MAT_COST_HEAVY_CHEST = new ItemMaterialCost(METAL, 7, 15);
var MAT_COST_HEAVY_LEGS = new ItemMaterialCost(METAL, 6, 14);
var MAT_COST_HEAVY = new ItemMaterialCost(METAL, 5, 13);
// Jewellery is different:
var MAT_COST_JEWELLERY = new ItemMaterialCost(OUNCES, undefined, undefined);  

// Material costs also vary per level, on a shared scale (except jewellery!):

function MaterialLevel(level, materialIndex, amount) {
  this.level = level;
  this.materialIndex = materialIndex;
  this.amount = amount;
}

function getMaterialCostForLevel(level, itemMaterialCost) {
    return [
        new MaterialLevel("1",  0, itemMaterialCost.baseAmount + 0),
        new MaterialLevel("4",  0, itemMaterialCost.baseAmount + 1),
        new MaterialLevel("6",  0, itemMaterialCost.baseAmount + 2),
        new MaterialLevel("8",  0, itemMaterialCost.baseAmount + 3),
        new MaterialLevel("10", 0, itemMaterialCost.baseAmount + 4),
        new MaterialLevel("12", 0, itemMaterialCost.baseAmount + 5),
        new MaterialLevel("14", 0, itemMaterialCost.baseAmount + 6),
        new MaterialLevel("16", 1, itemMaterialCost.baseAmount + 1),
        new MaterialLevel("18", 1, itemMaterialCost.baseAmount + 2),
        new MaterialLevel("20", 1, itemMaterialCost.baseAmount + 3),
        new MaterialLevel("22", 1, itemMaterialCost.baseAmount + 4),
        new MaterialLevel("24", 1, itemMaterialCost.baseAmount + 5),
        new MaterialLevel("26", 2, itemMaterialCost.baseAmount + 2),
        new MaterialLevel("28", 2, itemMaterialCost.baseAmount + 3),
        new MaterialLevel("30", 2, itemMaterialCost.baseAmount + 4),
        new MaterialLevel("32", 2, itemMaterialCost.baseAmount + 5),
        new MaterialLevel("34", 2, itemMaterialCost.baseAmount + 6),
        new MaterialLevel("36", 3, itemMaterialCost.baseAmount + 3),
        new MaterialLevel("38", 3, itemMaterialCost.baseAmount + 4),
        new MaterialLevel("40", 3, itemMaterialCost.baseAmount + 5),
        new MaterialLevel("42", 3, itemMaterialCost.baseAmount + 6),
        new MaterialLevel("44", 3, itemMaterialCost.baseAmount + 7),
        new MaterialLevel("46", 4, itemMaterialCost.baseAmount + 4),
        new MaterialLevel("48", 4, itemMaterialCost.baseAmount + 5),
        new MaterialLevel("50", 4, itemMaterialCost.baseAmount + 6),
        new MaterialLevel("CP10", 5, itemMaterialCost.baseAmount + 5),
        new MaterialLevel("CP20", 5, itemMaterialCost.baseAmount + 6),
        new MaterialLevel("CP30", 5, itemMaterialCost.baseAmount + 7),
        new MaterialLevel("CP40", 6, itemMaterialCost.baseAmount + 6),
        new MaterialLevel("CP50", 6, itemMaterialCost.baseAmount + 7),
        new MaterialLevel("CP60", 6, itemMaterialCost.baseAmount + 8),
        new MaterialLevel("CP70", 7, itemMaterialCost.baseAmount + 7),
        new MaterialLevel("CP80", 7, itemMaterialCost.baseAmount + 8),
        new MaterialLevel("CP90",  8, itemMaterialCost.baseAmount + 8),
        new MaterialLevel("CP100", 8, itemMaterialCost.baseAmount + 9),
        new MaterialLevel("CP110", 8, itemMaterialCost.baseAmount + 10),
        new MaterialLevel("CP120", 8, itemMaterialCost.baseAmount + 11),
        new MaterialLevel("CP130", 8, itemMaterialCost.baseAmount + 12),
        new MaterialLevel("CP140", 8, itemMaterialCost.baseAmount + 13),
        new MaterialLevel("CP150", 9, itemMaterialCost.tier10Amount),
        new MaterialLevel("CP160", 9, itemMaterialCost.tier10Amount * 10)
    // Return only the cost for specified level:
    ].filter(function(c) {return c.level === level})[0];
}

function getNecklaceMaterialCostForLevel(level) {
    return [
        new MaterialLevel("1",  0, 3),
        new MaterialLevel("4",  0, 5),
        new MaterialLevel("6",  0, 6),
        new MaterialLevel("8",  0, 8),
        new MaterialLevel("10", 0, 9),
        new MaterialLevel("12", 0, 11),
        new MaterialLevel("14", 0, 12),
        new MaterialLevel("16", 0, 14),
        new MaterialLevel("18", 0, 15),
        new MaterialLevel("20", 0, 17),
        new MaterialLevel("22", 0, 19),
        new MaterialLevel("24", 0, 20),
        new MaterialLevel("26", 1, 5),
        new MaterialLevel("28", 1, 6),
        new MaterialLevel("30", 1, 8),
        new MaterialLevel("32", 1, 9),
        new MaterialLevel("34", 1, 11),
        new MaterialLevel("36", 1, 12),
        new MaterialLevel("38", 1, 14),
        new MaterialLevel("40", 1, 15),
        new MaterialLevel("42", 1, 17),
        new MaterialLevel("44", 1, 18),
        new MaterialLevel("46", 1, 20),
        new MaterialLevel("48", 1, 21),
        new MaterialLevel("50", 1, 23),
        new MaterialLevel("CP10", 2, 6),
        new MaterialLevel("CP20", 2, 9),
        new MaterialLevel("CP30", 2, 12),
        new MaterialLevel("CP40", 2, 15),
        new MaterialLevel("CP50", 2, 18),
        new MaterialLevel("CP60", 2, 21),
        new MaterialLevel("CP70", 2, 24),
        new MaterialLevel("CP80",  3, 8),
        new MaterialLevel("CP90",  3, 12),
        new MaterialLevel("CP100", 3, 16),
        new MaterialLevel("CP110", 3, 20),
        new MaterialLevel("CP120", 3, 24),
        new MaterialLevel("CP130", 3, 28),
        new MaterialLevel("CP140", 3, 32),
        new MaterialLevel("CP150", 4, 15),
        new MaterialLevel("CP160", 4, 150)
    // Return only the cost for specified level:
    ].filter(function (c) { return c.level === level})[0];
}

function getRingMaterialCostForLevel(level) {
    return [
        new MaterialLevel("1",  0, 2),
        new MaterialLevel("4",  0, 3),
        new MaterialLevel("6",  0, 4),
        new MaterialLevel("8",  0, 5),
        new MaterialLevel("10", 0, 6),
        new MaterialLevel("12", 0, 7),
        new MaterialLevel("14", 0, 8),
        new MaterialLevel("16", 0, 9),
        new MaterialLevel("18", 0, 10),
        new MaterialLevel("20", 0, 11),
        new MaterialLevel("22", 0, 12),
        new MaterialLevel("24", 0, 13),
        new MaterialLevel("26", 1, 3),
        new MaterialLevel("28", 1, 4),
        new MaterialLevel("30", 1, 5),
        new MaterialLevel("32", 1, 6),
        new MaterialLevel("34", 1, 7),
        new MaterialLevel("36", 1, 8),
        new MaterialLevel("38", 1, 9),
        new MaterialLevel("40", 1, 10),
        new MaterialLevel("42", 1, 11),
        new MaterialLevel("44", 1, 12),
        new MaterialLevel("46", 1, 13),
        new MaterialLevel("48", 1, 14),
        new MaterialLevel("50", 1, 15),
        new MaterialLevel("CP10", 2, 4),
        new MaterialLevel("CP20", 2, 6),
        new MaterialLevel("CP30", 2, 8),
        new MaterialLevel("CP40", 2, 10),
        new MaterialLevel("CP50", 2, 12),
        new MaterialLevel("CP60", 2, 14),
        new MaterialLevel("CP70", 2, 16),
        new MaterialLevel("CP80",  3, 6),
        new MaterialLevel("CP90",  3, 8),
        new MaterialLevel("CP100", 3, 10),
        new MaterialLevel("CP110", 3, 12),
        new MaterialLevel("CP120", 3, 14),
        new MaterialLevel("CP130", 3, 16),
        new MaterialLevel("CP140", 3, 18),
        new MaterialLevel("CP150", 4, 10),
        new MaterialLevel("CP160", 4, 100)
    // Return only the cost for specified level:
    ].filter(function (c) { return c.level === level})[0];
}


//-------------------------------------------------//
// Equipment
//-------------------------------------------------//

function CraftableItem(name, uespName, type, weight, itemMaterialCost) {
    this.name = name;
    this.uespName = uespName;
    this.type = type;
    this.weight = weight;
    this.itemMaterialCost = itemMaterialCost;
}

var CRAFTABLE_ITEMS = [
    // Weapons:
    new CraftableItem("Axe (1H)", "Axe", WEAPON, null, MAT_COST_ONE_HAND),
    new CraftableItem("Mace (1H)", "Hammer", WEAPON, null, MAT_COST_ONE_HAND),
    new CraftableItem("Sword (1H)", "Sword", WEAPON, null, MAT_COST_ONE_HAND),
    new CraftableItem("Greatsword (2H)", "Two Handed Sword", WEAPON, null, MAT_COST_TWO_HAND),
    new CraftableItem("Battle Axe (2H)", "Two Handed Axe", WEAPON, null, MAT_COST_TWO_HAND),
    new CraftableItem("Maul (2H)", "Two Handed Hammer", WEAPON, null, MAT_COST_TWO_HAND),
    new CraftableItem("Dagger", "Dagger", WEAPON, null, MAT_COST_DAGGER),
    new CraftableItem("Bow", "Bow", WEAPON, null, MAT_COST_WOOD_WEAPON),
    new CraftableItem("Restoration Staff", "Healing Staff", WEAPON, null, MAT_COST_WOOD_WEAPON),
    new CraftableItem("Inferno Staff", "Fire Staff", WEAPON, null, MAT_COST_WOOD_WEAPON),
    new CraftableItem("Ice Staff", "Frost Staff", WEAPON, null, MAT_COST_WOOD_WEAPON),
    new CraftableItem("Lightning Staff", "Lightning Staff", WEAPON, null, MAT_COST_WOOD_WEAPON),
    // Light Armour:
    new CraftableItem("Light Head", "Head", ARMOUR, LIGHT, MAT_COST_LIGHT),
    new CraftableItem("Light Jerkin", "Chest", ARMOUR, LIGHT, MAT_COST_LIGHT_CHEST),
    new CraftableItem("Light Robe", "Robe", ARMOUR, LIGHT, MAT_COST_LIGHT_CHEST),
    new CraftableItem("Light Shoulders", "Shoulders", ARMOUR, LIGHT, MAT_COST_LIGHT),
    new CraftableItem("Light Waist", "Waist", ARMOUR, LIGHT, MAT_COST_LIGHT),
    new CraftableItem("Light Legs", "Legs", ARMOUR, LIGHT, MAT_COST_LIGHT_LEGS),
    new CraftableItem("Light Feet", "Feet", ARMOUR, LIGHT, MAT_COST_LIGHT),
    new CraftableItem("Light Hand", "Hand", ARMOUR, LIGHT, MAT_COST_LIGHT),
    // Medium Armour:
    new CraftableItem("Medium Head", "Head", ARMOUR, MEDIUM, MAT_COST_MEDIUM),
    new CraftableItem("Medium Chest", "Chest", ARMOUR, MEDIUM, MAT_COST_MEDIUM_CHEST),
    new CraftableItem("Medium Shoulders", "Shoulders", ARMOUR, MEDIUM, MAT_COST_MEDIUM),
    new CraftableItem("Medium Waist", "Waist", ARMOUR, MEDIUM, MAT_COST_MEDIUM),
    new CraftableItem("Medium Legs", "Legs", ARMOUR, MEDIUM, MAT_COST_MEDIUM_LEGS),
    new CraftableItem("Medium Feet", "Feet", ARMOUR, MEDIUM, MAT_COST_MEDIUM),
    new CraftableItem("Medium Hand", "Hand", ARMOUR, MEDIUM, MAT_COST_MEDIUM),
    // Heavy Armour:
    new CraftableItem("Heavy Head", "Head", ARMOUR, HEAVY, MAT_COST_HEAVY),
    new CraftableItem("Heavy Chest", "Chest", ARMOUR, HEAVY, MAT_COST_HEAVY_CHEST),
    new CraftableItem("Heavy Shoulders", "Shoulders", ARMOUR, HEAVY, MAT_COST_HEAVY),
    new CraftableItem("Heavy Waist", "Waist", ARMOUR, HEAVY, MAT_COST_HEAVY),
    new CraftableItem("Heavy Legs", "Legs", ARMOUR, HEAVY, MAT_COST_HEAVY_LEGS),
    new CraftableItem("Heavy Feet", "Feet", ARMOUR, HEAVY, MAT_COST_HEAVY),
    new CraftableItem("Heavy Hand", "Hand", ARMOUR, HEAVY, MAT_COST_HEAVY),
    // Jewellery:
    new CraftableItem("Necklace", "Neck", JEWELLERY, null, MAT_COST_JEWELLERY),
    new CraftableItem("Ring", "Ring", JEWELLERY, null, MAT_COST_JEWELLERY),
];

var CRAFTABLE_WEAPONS = CRAFTABLE_ITEMS.filter(function(item) {return item.type === WEAPON});
var CRAFTABLE_ARMOUR = CRAFTABLE_ITEMS.filter(function(item) {return item.type === ARMOUR});
var CRAFTABLE_JEWELLERY = CRAFTABLE_ITEMS.filter(function(item) {return item.type === JEWELLERY});

var ITEM_CLASS_MAP = {};
ITEM_CLASS_MAP[WEAPON] = CRAFTABLE_WEAPONS;
ITEM_CLASS_MAP[ARMOUR] = CRAFTABLE_ARMOUR;
ITEM_CLASS_MAP[JEWELLERY] = CRAFTABLE_JEWELLERY;


//-------------------------------------------------//
// Get an itemId for a CraftableItem
//-------------------------------------------------//


function getItemId(itemSet, craftableItem) {
    // setItemIds contains all the info in a nice format, but ARMOUR is keyed with weight too:
    if (craftableItem.type === WEAPON || craftableItem.type === JEWELLERY) {
        return setItemIds[itemSet][craftableItem.type][craftableItem.uespName];
    } else if (craftableItem.type === ARMOUR) {
        return setItemIds[itemSet][craftableItem.type][craftableItem.weight][craftableItem.uespName];
    }
}


//-------------------------------------------------//
// Traits
//-------------------------------------------------//

function Trait(name, esoTraitId, type, traitMaterial) {
    this.name = name;
    this.esoTraitId = esoTraitId;
    this.type = type;
    this.traitMaterial = traitMaterial;
}

var TRAITS = [
    // No Trait:
    new Trait("[None]", 0, ANY, null),
    // Weapon Traits:
    new Trait("Charged", 2, WEAPON, "Amethyst"),
    new Trait("Decisive", 8, WEAPON, "Citrine"),
    new Trait("Defending", 5, WEAPON, "Turquoise"),
    new Trait("Infused", 4, WEAPON, "Jade"),
    new Trait("Nirnhoned", 26, WEAPON, "Potent Nirncrux"),
    new Trait("Powered", 1, WEAPON, "Chysolite"),
    new Trait("Precise", 3, WEAPON, "Ruby"),
    new Trait("Sharpened", 7, WEAPON, "Fire Opal"),
    new Trait("Training", 6, WEAPON, "Carnelian"),
    // Armour Traits:
    new Trait("Divines", 18, ARMOUR, "Sapphire"),
    new Trait("Impenetrable", 12, ARMOUR, "Diamond"),
    new Trait("Infused", 16, ARMOUR, "Bloodstone"),
    new Trait("Nirnhoned", 25, ARMOUR, "Fortified Nirncrux"),
    new Trait("Invigorating", 17, ARMOUR, "Garnet"),
    new Trait("Reinforced", 13, ARMOUR, "Sardonyx"),
    new Trait("Sturdy", 11, ARMOUR, "Quartz"),
    new Trait("Training", 15, ARMOUR, "Emerald"),
    new Trait("Well Fitted", 14, ARMOUR, "Almandine"),
    // Jewelry Traits:
    new Trait("Arcane", 22, JEWELLERY, "Cobolt"),
    new Trait("Bloodthirsty", 31, JEWELLERY, "Slaughterstone"),
    new Trait("Harmony", 29, JEWELLERY, "Dibellium"),
    new Trait("Healthy", 21, JEWELLERY, "Antimony"),
    new Trait("Infused", 33, JEWELLERY, "Aurbic Amber"),
    new Trait("Protective", 32, JEWELLERY, "Titanium"),
    new Trait("Robust", 23, JEWELLERY, "Zinc"),
    new Trait("Swift", 28, JEWELLERY, "Gilding Wax"),
    new Trait("Triune", 30, JEWELLERY, "Dawn-Prism"),
];
var TRAITS_WEAPON = TRAITS.filter(function(trait) {return trait.type === WEAPON || trait.type === ANY});
var TRAITS_ARMOUR = TRAITS.filter(function(trait) {return trait.type === ARMOUR || trait.type === ANY});
var TRAITS_JEWELLERY = TRAITS.filter(function(trait) {return trait.type === JEWELLERY || trait.type === ANY});

var CLASS_TRAIT_MAP = {};
CLASS_TRAIT_MAP[WEAPON] = TRAITS_WEAPON;
CLASS_TRAIT_MAP[ARMOUR] = TRAITS_ARMOUR;
CLASS_TRAIT_MAP[JEWELLERY] = TRAITS_JEWELLERY;


//-------------------------------------------------//
// Enchantments
//-------------------------------------------------//

function Enchantment(name, enchantId, type, essenceRuneName, potencyRuneParity) {
    this.name = name;
    this.enchantId = enchantId;
    this.type = type;
    this.essenceRuneName = essenceRuneName;
    this.potencyRuneParity = potencyRuneParity;
}

var ENCHANTMENTS = [
    new Enchantment("[None]", null, ANY, null, null),
    new Enchantment("Absorb Health", 43573, WEAPON, "Oko", -1),
    new Enchantment("Health", 26580, ARMOUR, "Oko", 1),
    new Enchantment("Absorb Magicka", 45868, WEAPON, "Makko", -1),
    new Enchantment("Magicka", 26582, ARMOUR, "Makko", 1),
    new Enchantment("Absorb Stamina", 45867, WEAPON, "Deni", -1),
    new Enchantment("Stamina", 26588, ARMOUR, "Deni", 1),
    new Enchantment("Decrease Health", 45869, WEAPON, "Okoma", -1),
    new Enchantment("Health Recovery", 26581, JEWELLERY, "Okoma", 1),
    new Enchantment("Reduce Spell Cost", 45870, JEWELLERY, "Makkoma", -1),
    new Enchantment("Magicka Recovery", 26583, JEWELLERY, "Makkoma", 1),
    new Enchantment("Reduce Feat Cost", 45871, JEWELLERY, "Denima", -1),
    new Enchantment("Stamina Recovery", 26589, JEWELLERY, "Denima", 1),
    new Enchantment("Poison Resist", 26586, JEWELLERY, "Kuoko", -1),
    new Enchantment("Poison", 26587, WEAPON, "Kuoko", 1),
    new Enchantment("Flame Resist", 26849, JEWELLERY, "Rakeipa", -1),
    new Enchantment("Flame", 26848, WEAPON, "Rakeipa", 1),
    new Enchantment("Frost Resist", 5364, JEWELLERY, "Dekeipa", -1),
    new Enchantment("Frost", 5365, WEAPON, "Dekeipa", 1),
    new Enchantment("Shock Resist", 43570, JEWELLERY, "Meip", -1),
    new Enchantment("Shock", 26844, WEAPON, "Meip", 1),
    new Enchantment("Disease Resist", 26847, JEWELLERY, "Haoko", -1),
    new Enchantment("Foulness", 26841, WEAPON, "Haoko", 1),
    new Enchantment("Crushing", 26845, WEAPON, "Deteri", -1),
    new Enchantment("Hardening", 5366, WEAPON, "Deteri", 1),
    new Enchantment("Weakening", 26591, WEAPON, "Okori", -1),
    new Enchantment("Weapon Damage", 54484, WEAPON, "Okori", 1),
    new Enchantment("Potion Speed", 45875, JEWELLERY, "Oru", -1),
    new Enchantment("Potion Boost", 45874, JEWELLERY, "Oru", 1),
    new Enchantment("Decrease Physical Harm", 45885, JEWELLERY, "Taderi", -1),
    new Enchantment("Increase Physical Harm", 45883, JEWELLERY, "Taderi", 1),
    new Enchantment("Decrease Spell Harm", 45886, JEWELLERY, "Makderi", -1),
    new Enchantment("Increase Magical Harm", 45884, JEWELLERY, "Makderi", 1),
    new Enchantment("Shielding", 45873, JEWELLERY, "Kaderi", -1),
    new Enchantment("Bashing", 45872, JEWELLERY, "Kaderi", 1),
    new Enchantment("Prismatic Onslaught", 68344, WEAPON, "Hakeijo", -1),
    new Enchantment("Prismatic Defense", 68343, ARMOUR, "Hakeijo", 1),
    new Enchantment("Reduce Skill Cost", 166046, JEWELLERY, "Indeko", -1),
    new Enchantment("Prismatic Recovery", 166047, JEWELLERY, "Indeko", 1),
];

var ENCHANTS_WEAPON = ENCHANTMENTS.filter(function(enchant) {return enchant.type === WEAPON || enchant.type === ANY});
var ENCHANTS_ARMOUR = ENCHANTMENTS.filter(function(enchant) {return enchant.type === ARMOUR || enchant.type === ANY});
var ENCHANTS_JEWELLERY = ENCHANTMENTS.filter(function(enchant) {return enchant.type === JEWELLERY || enchant.type === ANY});

var CLASS_ENCHANT_MAP = {};
CLASS_ENCHANT_MAP[WEAPON] = ENCHANTS_WEAPON;
CLASS_ENCHANT_MAP[ARMOUR] = ENCHANTS_ARMOUR;
CLASS_ENCHANT_MAP[JEWELLERY] = ENCHANTS_JEWELLERY;

function PotencyRune(level, parity, name) {
    this.level = level;
    this.parity = parity;
    this.name = name;
}

var POTENCY_RUNES = [
    new PotencyRune("1",  1, "Jora"),
    new PotencyRune("1", -1, "Jode"),
    new PotencyRune("5",  1, "Porade"),
    new PotencyRune("5", -1, "Notade"),
    new PotencyRune("10",  1, "Jera"),
    new PotencyRune("10", -1, "Ode"),
    new PotencyRune("15",  1, "Jejora"),
    new PotencyRune("15", -1, "Tade"),
    new PotencyRune("20",  1, "Odra"),
    new PotencyRune("20", -1, "Jayde"),
    new PotencyRune("25",  1, "Pojora"),
    new PotencyRune("25", -1, "Edode"),
    new PotencyRune("30",  1, "Edora"),
    new PotencyRune("30", -1, "Pojode"),
    new PotencyRune("35",  1, "Jaera"),
    new PotencyRune("35", -1, "Rekude"),
    new PotencyRune("40",  1, "Pora"),
    new PotencyRune("40", -1, "Hade"),
    new PotencyRune("CP10",  1, "Denara"),
    new PotencyRune("CP10", -1, "Idode"),
    new PotencyRune("CP30",  1, "Rera"),
    new PotencyRune("CP30", -1, "Pode"),
    new PotencyRune("CP50",  1, "Derado"),
    new PotencyRune("CP50", -1, "Kedeko"),
    new PotencyRune("CP70",  1, "Rekura"),
    new PotencyRune("CP70", -1, "Rede"),
    new PotencyRune("CP100",  1, "Kura"),
    new PotencyRune("CP100", -1, "Kude"),
    new PotencyRune("CP150",  1, "Rejera"),
    new PotencyRune("CP150", -1, "Jehade"),
    new PotencyRune("CP160",  1, "Repora"),
    new PotencyRune("CP160", -1, "Itade")
];

var ENCHANTMENT_LEVELS = POTENCY_RUNES.filter(function(rune) {return rune.parity === 1}).map(function(rune) {return rune.level});

function getEnchantmentLevel(itemLevel) {
    var itemCP = getCPFromLevel(itemLevel);
    itemLevel = itemCP > 0 ? 50 : parseInt(itemLevel);
    // Find the highest enchantment level below the itemLevel:
    var level = null;
    for (var i = 0; i < ENCHANTMENT_LEVELS.length; i++) {
        var enchantLevelStr = ENCHANTMENT_LEVELS[i];
        var enchantCP = getCPFromLevel(enchantLevelStr);
        var enchantLevel = enchantCP > 0 ? 50 : parseInt(enchantLevelStr);
        if (enchantLevel > itemLevel || enchantCP > itemCP) {
            break;  // Gone too many levels, stop and return the last level!
        }
        level = enchantLevelStr;
    }
    return level;
}

function getPotencyRune(itemLevel, parity) {
    var enchantLevel = getEnchantmentLevel(itemLevel);
    for (var i = 0; i < POTENCY_RUNES.length; i++) {
        var rune = POTENCY_RUNES[i];
        if (enchantLevel === rune.level && parity === rune.parity) {
            return rune;
        }
    }
}

function getAspectQualityRuneName(qualityName) {
    return {
        "Normal": "Ta",
        "Fine": "Jejota",
        "Superior": "Denata",
        "Epic": "Rekuta",
        "Legendary": "Kuta",
    }[qualityName];
}


//-------------------------------------------------//
// Styles
//-------------------------------------------------//

function Style(name, styleMaterial, craftingMotifNumber, esoStyleId) {
    this.name = name;
    this.styleMaterial = styleMaterial;
    this.craftingMotifNumber = craftingMotifNumber;
    this.esoStyleId = esoStyleId;
}

var NO_STYLE = new Style("[None]", null, null, null);

var STYLES =[
    new Style("[Any Style]", "[any style material]", 0, 1),
    new Style("Altmer", "Adamantite", 1, 7),
    new Style("Dunmer", "Obsidian", 2, 4),
    new Style("Bosmer", "Bone", 3, 8),
    new Style("Nord", "Corundum", 4, 5),
    new Style("Breton", "Molybdenum", 5, 1),
    new Style("Redguard", "Starmetal", 6, 2),
    new Style("Khajiit", "Moonstone", 7, 9),
    new Style("Orc", "Manganese", 8, 3),
    new Style("Argonian", "Flint", 9, 6),
    new Style("Imperial", "Nickel", 10, 34),
    new Style("Ancient Elf", "Palladium", 11, 15),
    new Style("Barbaric", "Bronze", 12, 17),
    new Style("Primal", "Argentum", 13, 19),
    new Style("Daedric", "Daedra Heart", 14, 20),
    new Style("Dwemer", "Dwemer Frame", 15, 14),
    new Style("Glass", "Malachite", 16, 28),
    new Style("Xivkyn", "Charcoal of Remorse", 17, 29),
    new Style("Akaviri", "Goldscale", 18, 33),
    new Style("Mercenary", "Laurel", 19, 26),
    new Style("Yokudan", "Ferrous Salts", 20, 35),
    new Style("Ancient Orc", "Cassiterite", 21, 105),
    new Style("Trinimac", "Auric Tusk", 22, 21),
    new Style("Malacath", "Potash", 23, 13),
    new Style("Outlaw", "Rogue's Soot", 24, 47),
    new Style("Aldmeri Dominion", "Eagle Feather", 25, 25),
    new Style("Daggerfall Covenant", "Lion Fang", 26, 23),
    new Style("Ebonheart Pact", "Dragon Scute", 27, 24),
    new Style("Ra Gada", "Ancient Sandstone", 28, 44),
    new Style("Soul-Shriven", "Azure Plasm", 29, 30),
    new Style("Morag Tong", "Boiled Carapace", 30, 43),
    new Style("Skinchanger", "Wolfsbane Incense", 31, 42),
    new Style("Abah's Watch", "Polished Shilling", 32, 41),
    new Style("Thieves Guild", "Fine Chalk", 33, 11),
    new Style("Assassins League", "Tainted Blood", 34, 46),
    new Style("Dro-m'Athra", "Defiled Whiskers", 35, 45),
    new Style("Dark Brotherhood", "Black Beeswax", 36, 12),
    new Style("Ebony", "Night Pumice", 37, 40),
    new Style("Draugr", "Pristine Shroud", 38, 31),
    new Style("Minotaur", "Oxblood Fungus", 39, 39),
    new Style("Order of the Hour", "Pearl Sand", 40, 16),
    new Style("Celestial", "Star Sapphire", 41, 27),
    new Style("Hollowjack", "Amber Marble", 42, 59),
    new Style("Grim Harlequin", "Grinstones", 43, 58),
    new Style("Silken Ring", "Distilled Slowsilver", 44, 56),
    new Style("Mazzatun", "Leviathan Scrimshaw", 45, 57),
    new Style("Stalhrim Frostcaster", "Stalhrim Shard", 46, 53),
    new Style("Buoyant Armiger", "Volcanic Viridian", 47, 52),
    new Style("Ashlander", "Ash Canvas", 48, 54),
    new Style("Militant Ordinator", "Lustrous Sphalerite", 49, 50),
    new Style("Telvanni", "Wrought Ferrofungus", 50, 51),
    new Style("Hlaalu", "Refined Bonemold Resin", 51, 49),
    new Style("Redoran", "Polished Scarab Elytra", 52, 48),
    new Style("Tsaesci", "Snake Fang", 53, 38),
    new Style("Bloodforge", "Bloodroot Flux", 54, 61),
    new Style("Dreadhorn", "Minotaur Bezoar", 55, 62),
    new Style("Apostle", "Tempered Brass", 56, 65),
    new Style("Ebonshadow", "Tenebrous Cord", 57, 66),
    new Style("Fang Lair", "Dragon Bone", 58, 69),
    new Style("Scalecaller", "Infected Flesh", 59, 70),
    new Style("Worm Cult", "Desecrated Grave Soil", 60, 55),
    new Style("Psijic", "Vitrified Malondo", 61, 71),
    new Style("Sapiarch", "Culanda Lacquer", 62, 72),
    new Style("Dremora", "Warrior's Heart Ashes", 63, 74),
    new Style("Pyandonean", "Sea Serpent Hide", 64, 75),
    new Style("Huntsman", "Bloodscent Dew", 65, 77),
    new Style("Silver Dawn", "Argent Pelt", 66, 78),
    new Style("Welkynar", "Gryphon Plume", 67, 73),
    new Style("Honor Guard", "Red Diamond Seal", 68, 80),
    new Style("Dead-Water", "Crocodile Leather", 69, 79),
    new Style("Elder Argonian", "Hackwing Plumage", 70, 81),
    new Style("Coldsnap", "Goblin-Cloth Scrap", 71, 82),
    new Style("Meridian", "Auroran Dust", 72, 83),
    new Style("Anequina", "Shimmering Sand", 73, 84),
    new Style("Pellitine", "Dragonthread", 74, 85),
    new Style("Sunspire", "Frost Embers", 75, 86),
    new Style("Dragonguard", "Gilding Salts", 76, 92),
    new Style("Stags of Z'en", "Oath Cord", 77, 89),
    new Style("Moongrave Fane", "Blood of Sahrotnax", 78, 93),
    new Style("Refabricated", "Polished Rivets", 79, 60),
    new Style("Shield of Senchal", "Carmine Shieldsilk", 80, 95),
    new Style("New Moon Priest", "Aeonstone Shard", 81, 94),
    new Style("Icereach Coven", "Fryse Willow", 82, 97),
    new Style("Pyre Watch", "Consecrated Myrrh", 83, 98),
    new Style("Blackreach Vanguard", "Gloomspore Chitin", 84, 100),
    new Style("Greymoor", "Bat Oil", 85, 101),
    new Style("Sea Giant", "Sea Snake Fang", 86, 102),
    new Style("Ancestral Nord", "Etched Corundum", 87, 103),
    new Style("Ancestral Orc", "Etched Manganese", 88, 105),
    new Style("Ancestral High Elf", "Etched Adamantite", 89, 104),
    new Style("Thorn Legion", "Thorn Sigil", 90, 106),
    new Style("Hazardous Alchemy", "Viridian Phial", 91, 107),
    new Style("Ancestral Akaviri", "Burnished Goldscale", 92, 108),
    new Style("Ancestral Reach", "Etched Bronze", 94, 110),
    new Style("Nighthollow", "Umbral Droplet", 95, 111),
    new Style("Arkthzand Armory", "Arkthzand Sprocket", 96, 112),
    new Style("Wayward Guardian", "Hawk Skull", 97, 113),
    new Style("Waking Flame", "Chokeberry Extract", 99, 117),
    new Style("True-Sworn", "Fulgid Epidote", 101, 116),
    new Style("Ivory Brigade", "Ivory Brigade Clasp", 101, 121),
];


//-------------------------------------------------//
// Item Links
//-------------------------------------------------//

function getInternalLevel(itemLevel) {
    var itemCP = getCPFromLevel(itemLevel);
    return itemCP > 0 ? 50 : parseInt(itemLevel);
}

function generateSubType(itemLevel, itemQualityId) {
    var baseSubType;
    var itemQualityZeroIndexed = itemQualityId - 1;
    var itemCP = getCPFromLevel(itemLevel);
    itemLevel = itemCP > 0 ? 50 : parseInt(itemLevel);

    if (itemLevel <= MAX_LEVEL && itemCP === 0) {
        // Non-CP:
        //    baseSubType differs by quality, in steps by level:
        //        30-34 = L1 (Normal-Legendary)
        //        25-29 = L4 (Normal-Legendary)
        //        20-24 = L6 (Normal-Legendary)
        if (itemLevel < 4) {
            baseSubType = 30;
        } else if (itemLevel < 6) {
            baseSubType = 25;
        } else {
            baseSubType = 20;
        }
        return baseSubType + itemQualityZeroIndexed;
    } else {
        itemCP = Math.max(10, itemCP);
        if (itemCP < 110) {
            // Old VR1-VR10, from VR1=CP10 to VR10=CP100:
            //    baseSubType differs by VR, in steps by quality:
            //        125-134 = Normal    (VR1-VR10)
            //        135-144 = Fine      (VR1-VR10)
            //        145-154 = Superior  (VR1-VR10)
            //        155-164 = Epic      (VR1-VR10)
            //        165-174 = Legendary (VR1-VR10)
            baseSubType = 125 + Math.floor((itemCP - 10) / 10);
            return baseSubType + itemQualityZeroIndexed * 10;
        } else if (itemCP < 160) {
            // Old VR11-VR15:
            //    baseSubType differs by quality, in steps by VR:
            //        236-240 = VR11/CP110 (Normal-Legendary)
            //        254-258 = VR12/CP120 (Normal-Legendary)
            //        272-276 = VR13/CP130 (Normal-Legendary)
            //        290-294 = VR14/CP140 (Normal-Legendary)
            //        308-312 = VR15/CP150 (Normal-Legendary)
            //    Note the gap of 18 between start of each group.
            baseSubType = 236 + Math.floor((itemCP - 110) / 10) * 18;
            return baseSubType + itemQualityZeroIndexed;
        } else {
            // CP160 is different:
            //    baseSubType:
            //        366-370 = VR16/CP160 (Normal-Legendary)
            baseSubType = 366;
            return baseSubType + itemQualityZeroIndexed;
        }
    }
    return 0;
}

function generateItemLink(itemId, itemLevel, quality, trait, style, enchantment) {
    var templateItemLink = "|H1:item:{{itemId}}:{{subType}}:{{internalLevel}}:{{enchantId}}:{{enchantSubType}}:{{enchantLevel}}:{{transmutedTrait}}:0:0:0:0:0:0:0:0:{{style}}:0:0:0:10000:0|h{{friendlyName}}|h";
    var itemLink = templateItemLink;
    var enchantLevel = getEnchantmentLevel(itemLevel);
    itemLink = itemLink.replace("{{itemId}}", itemId);
    itemLink = itemLink.replace("{{subType}}", generateSubType(itemLevel, quality.esoQualityId));
    itemLink = itemLink.replace("{{internalLevel}}", getInternalLevel(itemLevel));
    itemLink = itemLink.replace("{{enchantId}}", enchantment.enchantId ? enchantment.enchantId : 0);
    itemLink = itemLink.replace("{{enchantSubType}}", enchantment.enchantId ? generateSubType(enchantLevel, quality.esoQualityId) : 0);
    itemLink = itemLink.replace("{{enchantLevel}}", enchantment.enchantId ? getInternalLevel(enchantLevel) : 0);
    itemLink = itemLink.replace("{{transmutedTrait}}", trait.esoTraitId);
    itemLink = itemLink.replace("{{style}}", style.esoStyleId);
    itemLink = itemLink.replace("{{friendlyName}}", "");
    return itemLink;
}


//-------------------------------------------------//
// Human-readable Item Summary
//-------------------------------------------------//

function generateItemSummary(item, itemLevel, quality, trait, style, enchantment, setName) {
    var summaryInfo = [];
    var itemCP = getCPFromLevel(itemLevel);
    var levelStr = itemCP > 0 ? itemLevel : "L" + itemLevel;
    
    summaryInfo.push(item.name);
    summaryInfo.push(levelStr);
    summaryInfo.push(setName);
    summaryInfo.push(style.name);
    if (trait.esoTraitId !== 0) {
      summaryInfo.push(trait.name);
    }
    summaryInfo.push(quality.name);
    if (enchantment.enchantId !== null) {
      summaryInfo.push(enchantment.name + " Enchant");
    }

    // Return the summary, removing [ and ] from some names:
    return summaryInfo.join(", ").replace(/[\[\]]/g, "");
}


//-------------------------------------------------//
// Sum up the material costs:
//-------------------------------------------------//

// Add a single extra cost to a costs dictionary:
function addMaterialCost(resultCostDict, costType, materialName, amount) {
    if (!resultCostDict.hasOwnProperty(costType)) {
        resultCostDict[costType] = {};
    }
    if (!resultCostDict[costType].hasOwnProperty(materialName)) {
        resultCostDict[costType][materialName] = 0;
    }
    resultCostDict[costType][materialName] += amount;
}

// Combine two cost dictionaries, merging into the first:
function mergeMaterialCosts(matCosts1, matCosts2) {
    for (var j = 0; j < COST_TYPES.length; j++) {
        var costType = COST_TYPES[j];
        if (matCosts2.hasOwnProperty(costType)) {
            var mat2s = Object.keys(matCosts2[costType]);
            for (var i = 0; i < mat2s.length; i++) {
                var mat2 = mat2s[i];
                if (!matCosts1.hasOwnProperty(costType)) {
                    matCosts1[costType] = {};
                }
                if (!matCosts1[costType].hasOwnProperty(mat2)) {
                    matCosts1[costType][mat2] = 0;
                }
                matCosts1[costType][mat2] += matCosts2[costType][mat2];
            }
        }
    }
    // Have modified matCosts1 in-place, but return a reference to it too:
    return matCosts1;
}

function costToText(costDict, costType) {
    if (!costDict.hasOwnProperty(costType)) {
        return "";
    }
    var costsForType = costDict[costType];
    return Object.keys(costsForType)
        .sort(function(a, b) {return costsForType[a] > costsForType[b] ? -1 : 1})
        .reduce(function(outputStr, materialName) {return outputStr += "{n} x {mat}\n".replace("{n}", costsForType[materialName]).replace("{mat}", materialName)}, "");
}


//-------------------------------------------------//
// Build the GUI
//-------------------------------------------------//

// We need to make unique HTML element IDs:
var nRows = 0;

// Each row will register a function that returns its material cost:
function RowFunctions(costFn, itemLinkFn, itemSummaryFn) {
    this.costFn = costFn;
    this.itemLinkFn = itemLinkFn;
    this.itemSummaryFn = itemSummaryFn;
}

var rowOutputFunctions = [];

// Use the list of cost functions to get the total cost:
function getTotalMaterialCost() {
    return rowOutputFunctions.map(function(outputFns) {return outputFns.costFn()}).reduce(mergeMaterialCosts, {});
}

// Callback function to update the visual outputs:
function updateOutputs() {
    // The material cost outputs:
    var totalMaterialCostDict = getTotalMaterialCost();
    document.getElementById("cost_raw_mats").value = costToText(totalMaterialCostDict, COST_RAW);
    document.getElementById("cost_style_mats").value = costToText(totalMaterialCostDict, COST_STYLES);
    document.getElementById("cost_trait_mats").value = costToText(totalMaterialCostDict, COST_TRAITS);
    document.getElementById("cost_enchant_mats").value = costToText(totalMaterialCostDict, COST_ENCHANT);
    document.getElementById("cost_quality_mats").value = costToText(totalMaterialCostDict, COST_QUALITY);
    
    // The itemLink outputs:
    document.getElementById("item_link_output").value = rowOutputFunctions.map(function(outputFns) {return outputFns.itemSummaryFn() + ":\n" + outputFns.itemLinkFn()}).join("\n\n");
}

// Add a new crafting row to the GUI table and register its functions:
function addCraftingRow() {
    // Clone the template row, ensuring a distinct element ID:
    var craftingTableBody = document.getElementById("eso_crafting_table").getElementsByTagName("tbody")[0];
    var templateRow = document.getElementById("template_row");
    var newRow = templateRow.cloneNode(true);
    newRow.id = "crafted_item_spec_" + nRows++;
    newRow.classList.add("crafted-item-spec");

    // Find dropdowns:
    var itemClassSelect = newRow.getElementsByClassName("item-class")[0];
    var itemTypeSelect = newRow.getElementsByClassName("item-type")[0];
    var itemLevelSelect = newRow.getElementsByClassName("item-level")[0];
    var itemStyleSelect = newRow.getElementsByClassName("item-style")[0];
    var itemTraitSelect = newRow.getElementsByClassName("item-trait")[0];
    var itemEnchantSelect = newRow.getElementsByClassName("item-enchant")[0];
    var itemQualitySelect = newRow.getElementsByClassName("item-quality")[0];
    var itemSetSelect = newRow.getElementsByClassName("item-set")[0];

    // Initialise the static dropdowns:
    for (var i = 0; i < EQUIPMENT_CLASSES.length; i++) {
        var newOption = document.createElement("option");
        newOption.text = EQUIPMENT_CLASSES[i];
        newOption.value = i;
        itemClassSelect.options.add(newOption);
    }
    for (var i = 0; i < CRAFTING_LEVELS.length; i++) {
        var newOption = document.createElement("option");
        newOption.text = CRAFTING_LEVELS[i];
        newOption.value = i;
        itemLevelSelect.options.add(newOption);
    }
    for (var i = 0; i < SET_NAMES.length; i++) {
        var newOption = document.createElement("option");
        newOption.text = SET_NAMES[i];
        newOption.value = i;
        itemSetSelect.options.add(newOption);
    }
    for (var i = 0; i < QUALITIES.length; i++) {
        var newOption = document.createElement("option");
        newOption.text = QUALITIES[i].name;
        newOption.value = i;
        itemQualitySelect.options.add(newOption);
    }

    // The Item Type and Trait dropdows are dynamic and depend on the value of the selected Item Class:
    var onItemClassChange = function() {
        var currentItemClassIndex = parseInt(itemClassSelect.selectedOptions[0].value);
        var currentItemClass = EQUIPMENT_CLASSES[currentItemClassIndex];

        // Populate the possible Item Types for this Class:
        var itemTypesForClass = ITEM_CLASS_MAP[currentItemClass];
        itemTypeSelect.options.length = 0;   // Remove existing options!
        for (var i = 0; i < itemTypesForClass.length; i++) {
            var newOption = document.createElement("option");
            newOption.text = itemTypesForClass[i].name;
            newOption.value = i;
            itemTypeSelect.options.add(newOption);
        }
        // Populate the possible styles for this Item Class:
        var relevantStyles = currentItemClass !== JEWELLERY ? STYLES : [NO_STYLE];
        //    Use a length check as a hack to avoid erasing an already-selected style 
        //    unless the change is to or from Jewellery which has no styles:
        if (relevantStyles.length !== itemStyleSelect.options.length) {
            itemStyleSelect.options.length = 0;   // Remove existing options!
            for (var i = 0; i < relevantStyles.length; i++) {
                var newOption = document.createElement("option");
                newOption.text = relevantStyles[i].name;
                newOption.value = i;
                itemStyleSelect.options.add(newOption);
            }
        }
        // Populate the possible Traits for this Item Class:
        var itemTraitsForClass = CLASS_TRAIT_MAP[currentItemClass];
        itemTraitSelect.options.length = 0;   // Remove existing options!
        for (var i = 0; i < itemTraitsForClass.length; i++) {
            var newOption = document.createElement("option");
            newOption.text = itemTraitsForClass[i].name;
            newOption.value = i;
            itemTraitSelect.options.add(newOption);
        }
        // Populate the possible Enchantments for this Item Class:
        var itemEnchantsForClass = CLASS_ENCHANT_MAP[currentItemClass];
        itemEnchantSelect.options.length = 0;   // Remove existing options!
        for (var i = 0; i < itemEnchantsForClass.length; i++) {
            var newOption = document.createElement("option");
            newOption.text = itemEnchantsForClass[i].name;
            newOption.value = i;
            itemEnchantSelect.options.add(newOption);
        }
    }

    // Initialise the dynamic dropdowns with the defaults:
    onItemClassChange();
    // Keep the dynamic dropdowns up-to-date:
    itemClassSelect.addEventListener("change", onItemClassChange);

    // Calculate the crafting cost of this row:
    var getCraftingMaterialCost = function() {
        // Store the results:
        var resultMaterials = {};
        // The current selections:
        var currentItemClass = EQUIPMENT_CLASSES[itemClassSelect.selectedOptions[0].value];
        var currentItem = ITEM_CLASS_MAP[currentItemClass][itemTypeSelect.selectedOptions[0].value];
        var currentLevel = CRAFTING_LEVELS[itemLevelSelect.selectedOptions[0].value];
        var currentStyle = STYLES[itemStyleSelect.selectedOptions[0].value];
        var currentTrait = CLASS_TRAIT_MAP[currentItemClass][itemTraitSelect.selectedOptions[0].value];
        var currentEnchant = CLASS_ENCHANT_MAP[currentItemClass][itemEnchantSelect.selectedOptions[0].value];
        var currentQuality = QUALITIES[itemQualitySelect.selectedOptions[0].value];

        // Raw material:
        var matCostForLevel;
        if (currentItem.type !== JEWELLERY) {
            matCostForLevel = getMaterialCostForLevel(currentLevel, currentItem.itemMaterialCost);
        } else {
            var matCostForLevelFn = currentItem.name === "Ring" ? getRingMaterialCostForLevel : getNecklaceMaterialCostForLevel;
            matCostForLevel = matCostForLevelFn(currentLevel);
        }
        var materialName = MATERIALS[currentItem.itemMaterialCost.materialType][matCostForLevel.materialIndex];
        addMaterialCost(resultMaterials, COST_RAW, materialName, matCostForLevel.amount);
        // Style material:
        if (currentItemClass !== JEWELLERY) {
            addMaterialCost(resultMaterials, COST_STYLES, currentStyle.styleMaterial, 1);
        }
        // Trait material:
        if (currentTrait.traitMaterial !== null) {
            addMaterialCost(resultMaterials, COST_TRAITS, currentTrait.traitMaterial, 1);
        }
        // Quality improvement materials:
        if (currentQuality.materialAmount !== 0) {
            var improvementMaterials = getQualityImprovementMats(currentItem.itemMaterialCost.materialType, currentQuality);
            mergeMaterialCosts(resultMaterials, improvementMaterials);
        }
        // Enchantment materials:
        if (currentEnchant.enchantId !== null) {
            addMaterialCost(resultMaterials, COST_ENCHANT, currentEnchant.essenceRuneName, 1);
            addMaterialCost(resultMaterials, COST_ENCHANT, getPotencyRune(currentLevel, currentEnchant.potencyRuneParity).name, 1);
            addMaterialCost(resultMaterials, COST_ENCHANT, getAspectQualityRuneName(currentQuality.name), 1);
        }

        return resultMaterials;
    }

    // Get the ESO itemLink for the row:
    var getRowItemLink = function() {
        var currentItemClass = EQUIPMENT_CLASSES[itemClassSelect.selectedOptions[0].value];
        var currentItem = ITEM_CLASS_MAP[currentItemClass][itemTypeSelect.selectedOptions[0].value];
        var currentLevel = CRAFTING_LEVELS[itemLevelSelect.selectedOptions[0].value];
        var currentStyle = STYLES[itemStyleSelect.selectedOptions[0].value];
        var currentTrait = CLASS_TRAIT_MAP[currentItemClass][itemTraitSelect.selectedOptions[0].value];
        var currentEnchant = CLASS_ENCHANT_MAP[currentItemClass][itemEnchantSelect.selectedOptions[0].value];
        var currentQuality = QUALITIES[itemQualitySelect.selectedOptions[0].value];
        var currentSet = SET_NAMES[itemSetSelect.selectedOptions[0].value];

        var itemId = getItemId(currentSet, currentItem);

        return generateItemLink(itemId, currentLevel, currentQuality, currentTrait, currentStyle, currentEnchant);
    }

    // Get a human-readable summary of the item for double-checking:
    var getRowItemSummary = function() {
        var currentItemClass = EQUIPMENT_CLASSES[itemClassSelect.selectedOptions[0].value];
        var currentItem = ITEM_CLASS_MAP[currentItemClass][itemTypeSelect.selectedOptions[0].value];
        var currentLevel = CRAFTING_LEVELS[itemLevelSelect.selectedOptions[0].value];
        var currentStyle = STYLES[itemStyleSelect.selectedOptions[0].value];
        var currentTrait = CLASS_TRAIT_MAP[currentItemClass][itemTraitSelect.selectedOptions[0].value];
        var currentEnchant = CLASS_ENCHANT_MAP[currentItemClass][itemEnchantSelect.selectedOptions[0].value];
        var currentQuality = QUALITIES[itemQualitySelect.selectedOptions[0].value];
        var currentSet = SET_NAMES[itemSetSelect.selectedOptions[0].value];
              
        return generateItemSummary(currentItem, currentLevel, currentQuality, currentTrait, currentStyle, currentEnchant, currentSet);
    }

    // The output functions:
    var rowFns = new RowFunctions(getCraftingMaterialCost, getRowItemLink, getRowItemSummary);

    // Add the new row to the main table:
    craftingTableBody.appendChild(newRow);
    // Register the row in the list of output functions:
    rowOutputFunctions.push(rowFns);

    // Allow removal of the row:
    var rowRemovalButton = newRow.getElementsByClassName("remove-row-button")[0];
    var removeRowClick = function() {
        // Remove from GUI:
        craftingTableBody.removeChild(newRow);
        // Remove from cost functions list:
        var fnIndex = rowOutputFunctions.indexOf(rowFns);
        if (fnIndex > -1) {
          rowOutputFunctions.splice(fnIndex, 1);
        }
        // Recompute output:
        updateOutputs();
    }
    rowRemovalButton.addEventListener("click", removeRowClick);

    // Recompute output:
    updateOutputs();
}


//-------------------------------------------------//
// Initialisation (used in HTML for body.onload)
//-------------------------------------------------//

function initialise() {

    // Allow adding of new rows to the page:
    var addRowButton = document.getElementById("add_row");
    addRowButton.addEventListener("click", addCraftingRow);

    // Start with one row added:
    addCraftingRow();

    // Udpate the costs when any change event bubbles up from the selects to the parent table:
    document.getElementById("eso_crafting_table").addEventListener("change", updateOutputs);

}