const merge = require('deepmerge');
const isInstalled = require('@aduth/is-installed');
const jsdoc = require('./jsdoc.js');
const prettier = require('./prettier.js');
const typescript = require('./typescript.js');

module.exports = [jsdoc, prettier, typescript].reduce(
	(result, { dependencies, config }) =>
		isInstalled(dependencies) ? merge(result, config) : result,
	{}
);
