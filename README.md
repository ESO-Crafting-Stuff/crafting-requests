# ESO Crafting Requests

A simple webpage to calculate the material requirements of, and generate in-game item links for, craftable set items in the [Elder Scrolls Online](https://www.elderscrollsonline.com/).

[Try it out here](https://eso-crafting-stuff.github.io/crafting-requests).

## Related tools

This was heavily inspired by [an outdated page](http://msa-mraz.com/crafting/craftchart.html) 
and [a much more up-to-date page](https://sc2mitch.github.io/eso-crafting/) which offer similar functionality but do not cover enchantments nor generate item links.

It is intended to be used with the [Dolgubon's Lazy Set Crafter addon](https://www.esoui.com/downloads/info1697-DolgubonsLazySetCrafter.html);
the item links can be sent in-game and added to a crafter's queue with a single click to dramatically simplify the request process.

## Updating

When new crafable sets or new in-game craftable styles are released, the item IDs or style IDs will need to be added to the code.
The simplest way to update these is to update the `ALL_SET_ITEM_IDS` or `STYLES` constants in [`eso_crafting.js`](./eso_crafting.js) to include the new style or set using existing values as a template.

The initial set of item IDs was extracted from data downloaded from the [UESP wiki](https://en.uesp.net/wiki/Online:Online), specifically [the mined and recorded items data](https://esoitem.uesp.net/viewlog.php),
in bulk to reduce the manual overhead. A script to aid this extraction and a copy of the raw data can be found in the [data directory](./data).

