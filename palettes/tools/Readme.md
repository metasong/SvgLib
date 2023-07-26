node js tool for your to create your own color palette
> tool to generate your own color palette

## how to use it
1. create your own color palette data file and put it into 'palette-data' directory.
```js
export var colorPalette = {
	name: '_data-visualization-color-palette',
	description: 'Categorical colors must be displayed in sequence and contrast with one another. Use a sequential color palette for graphics with sequentially ordered values',
	columns: 9,
	data: [
		// segment 1
		{
			name: 'Retro Metro',
			// the value can be a color string or name value pair, name will be used in the tooltip, other wise the color string will be used.
			colors: ['#ea5545', {name: 'hot',value:'#f46a9b'}, '#ef9b20', '#edbf33', '#ede15b', '#bdcf32', '#87bc45', '#27aeef', '#b33dc6']
		},
		// segment 2
		{
			name: 'Dutch Field',
			colors: ['#e60049', '#0bb4ff', '#50e991', '#e6d800', {name: 'cool',value:'#9b19f5'} , '#ffa300', '#dc0ab4', '#b3d4ff', '#00bfa0']
		},
	]
	}
```
1. modify the first line in `./palette-generator.mjs` to import different color palette data.
1. run the following:
	```js
	node palette-generator.mjs
	```