> note: this documentation is for Windows only for now.

## How to create your symbols in InkScape
1. open Inkscape and create a new Inkscape document.
1. draw some diagram i.e., rectangle. and select it. then right click and open the 'Object Properties' panel, give it a Title, click the 'Set' button of the panel.
1. open symbols panel: Object>Symbols, in the panel make the 'symbol set' selection as 'current document', and click the '+' button at the bottom of the panel to convert selected objects as symbol.
1. 'File>DocumentProperties' to open the doc properties dialog, select the 'MetaData' tab, and give the document a 'Title'.
1. Optionally: you can select and delete the used elements in the document.(not needed, because already saved as symbols, but you can also keep it for illustrative purposes).
1. save the document into the symbols directory, i.e., M:\Resources\SvgLib\symbols\_. Optionally: you can select save 'plain svg' instead of the default 'inkscape svg' to make it as general svg symbols.(you could also use 'inkscape svg' too)
1. reopen the Inkscape to load the symbols again.
    >  you can always open your symbol file to adjust, and save again

1. commit your changes to your own repo, if you think it can be shared with others, you can create a pull request.

## How to edit a symbol and save it again
1. open your symbol file.
1. open the symbol panel: Object>Symbols...
1. drag a symbol to the document.
1. Edit>Clone>UnlinkClone
1. do you own adjustments
1. select and add it to the document symbols via the '+' button of the 'symbols panel' when the current document is selected as the 'symbol set'
1. optionally: select all objects on document and delete them.
1. save your file

