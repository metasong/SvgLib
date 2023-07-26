## Goal
It's would be better to have a place to put your frequently used SVG symbols/templates/palettes/scripts into a place for using in your working domain.

> this is my general SVG related reusable components, I'm using it in InkScape, you can use it for other general SVG tools

## Setup
> to use the symbols, templates and colorPalettes in inkscape

> note: we can also store symbols in templates, they will appear as the template's own symbols and also in the symbols panel. because we map the 'templates' folder as a subfolder of the '$env:AppData/inkscape/symbols' folder.

1. Goto https://github.com/metasong/SvgLib and folk to create your own repo in github: i.e. https://github.com/metaseed/SvgLib
1. Clone your repo locally: `cd M:\Resources; git clone https://github.com/metaseed/SvgLib` -depth 1
1. Setup symbols: `new-item -ItemType Junction -Target M:\Resources\SvgLib\symbols $env:AppData/inkscape/symbols`
    > On Windows Inkscape stores symbols in $env:AppData/inkscape/symbols directory. $env:AppData normally is on system disk, i.e. c:. We can map it to the local repo directory
1. Setup templates: `new-item -ItemType Junction -Target M:\Resources\SvgLib\templates $env:AppData/inkscape/templates`
1. Setup color palettes: `new-item -ItemType Junction -Target M:\Resources\SvgLib\palettes $env:AppData/inkscape/palettes`
1. Don't forget to create a pull request to me if your think it's good to share your idea with others.