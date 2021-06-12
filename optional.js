const deepmerge = require('deepmerge');
const detectInstalled = require('detect-installed');
const jsdoc = require('./jsdoc.js');
const prettier = require('./prettier.js');

module.exports = [jsdoc, prettier].reduce(
	(result, { dependencies, config }) =>
		dependencies.every((dependency) => detectInstalled.sync(dependency, { local: true }))
			? deepmerge(result, config)
			: result,
	{}
);
