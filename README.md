## Goal
It's would be better to have a place to put your frequently used SVG symbols/templates into a place for using in your working domain.

> this is my general SVG related reusable components, I'm using it in InkScape, you can use it for other general SVG tools

## Setup
> to use the symbols and templates in inkscape

> note: we can also store symbols in templates, they will appear as the template's symbols and also in the symbols panel. because we map the 'templates' folder as a subfolder of the '$env:AppData/inkscape/symbols' folder.

1. goto https://github.com/metasong/SvgLib and folk to create your own repo in github: i.e. https://github.com/metaseed/SvgLib
1. we can clone the repo into your preferred directory: `cd M:\Resources;git clone https://github.com/metaseed/SvgLib` -depth 1
1. Setup symbols: On Windows Inkscape stores symbols in $env:AppData/inkscape/symbols directory. $env:AppData normally is on system disk, i.e. c:. We can map it to the above directory with the pwsh command: `new-item -ItemType Junction -Target M:\Resources\SvgLib $env:AppData/inkscape/symbols`
1. Setup templates: `new-item -ItemType Junction -Target M:\Resources\SvgLib\templates $env:AppData/inkscape/templates`