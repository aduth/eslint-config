const deepmerge = require('deepmerge');
const detectInstalled = require('detect-installed');
const jsdoc = require('./jsdoc.js');
const prettier = require('./prettier.js');
const typescript = require('./typescript.js');

module.exports = [jsdoc, prettier, typescript].reduce(
	(result, { dependencies, config }) =>
		dependencies.every((dependency) => detectInstalled.sync(dependency, { local: true }))
			? deepmerge(result, config)
			: result,
	{}
);
