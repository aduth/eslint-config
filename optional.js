const deepmerge = require('deepmerge');
const detectInstalled = require('detect-installed');
const jsdoc = require('./jsdoc.js');

module.exports = [jsdoc].reduce(
	(result, { dependencies, config }) =>
		dependencies.every((dependency) => detectInstalled.sync(dependency, { local: true }))
			? deepmerge(result, config)
			: result,
	{}
);
