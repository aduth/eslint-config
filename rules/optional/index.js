const merge = require('deepmerge');
const { isDependency } = require('@aduth/is-dependency');
const jsdoc = require('./jsdoc.js');
const prettier = require('./prettier.js');
const typescript = require('./typescript.js');

module.exports = [jsdoc, prettier, typescript].reduce(
	(result, { dependencies, config }) =>
		isDependency(dependencies) ? merge(result, config) : result,
	{}
);
