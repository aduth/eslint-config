import { isDependency } from '@aduth/is-dependency';

const isLocalDependency = (name) =>
	isDependency(name, { fields: ['dependencies', 'devDependencies'] });

const optionals = [];

if (isLocalDependency('eslint-plugin-jsdoc')) {
	const { default: jsdoc } = await import('./jsdoc.js');
	optionals.push(...jsdoc);
}

if (isLocalDependency(['eslint-plugin-prettier', 'eslint-config-prettier'])) {
	const { default: prettier } = await import('./prettier.js');
	optionals.push(...prettier);
}

if (isLocalDependency('typescript-eslint')) {
	const { default: typescript } = await import('./typescript.js');
	optionals.push(...typescript);
}

export default optionals;
