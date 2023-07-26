// modify below line to import different color palette data
import { colorPalette } from './palette-data/data-visualization.mjs';

import fs from 'fs/promises';
import { EOL } from 'os';

const separator ='#373748';

// color is {name:'black', value: '#000000'} or '#000000'
function rgb(color) {
	const name = color.name ?? color;
	const value = color.value?? color;

	if (value.startsWith('#')) {
		let cleanedHex = value.replace('#', '');
		let hexValue = parseInt(cleanedHex, 16);

		// Extract R, G, B values
		let r = (hexValue >> 16) & 255;
		let g = (hexValue >> 8) & 255;
		let b = hexValue & 255;
		return `${r} ${g} ${b}\t${name}`;
	}
	return color;
}


async function writeFile() {
	const fileName = `../${colorPalette.name}.gpl`;
	try {
		// header
		await fs.writeFile(fileName, `GIMP Palette${EOL}Name:${colorPalette.name}${EOL}Columns:${colorPalette.columns}${EOL}`);

		for (let i = 0; i < colorPalette.data.length; i++) {
			const name = colorPalette.data[i].name;
			const colors = colorPalette.data[i].colors;

			// segment colors
			await fs.appendFile(fileName, `${EOL}#${name}${EOL}`);

			for (let j = 0; j < colors.length; j++) {
				const color = colors[j];
				const str = `${rgb(color)} ${name}`;
				await fs.appendFile(fileName, `${str}${EOL}`);
			}

			// separator
			fs.appendFile(fileName, `${rgb(separator)} separator${EOL}`);
			fs.appendFile(fileName, `${rgb(separator)} separator${EOL}`);

		}
	} catch (err) {
		console.error(err);
	}
}

writeFile();

