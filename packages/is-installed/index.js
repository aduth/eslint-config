const { join } = require('path');

let cache;

function isInstalled(names) {
	if (!cache) {
		const { dependencies, devDependencies } = require(join(process.cwd(), 'package.json'));
		cache = Object.assign(Object.create(null), dependencies, devDependencies);
	}

	return names.every((name) => cache[name]);
}

module.exports = isInstalled;
