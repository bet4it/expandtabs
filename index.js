'use strict';
const stringWidth = require('string-width');

module.exports = (string, tabSize) => {
	const spaces = (new Array((tabSize = tabSize || 8) + 1)).join(' ');
	return string.replace(/([^\r\n\t]*)\t/g, (_, part) => {
		return part + spaces.slice(stringWidth(part) % tabSize);
	});
};
