/**
 * @type {import("prettier").Config}
 */
const baseConfig = {
	plugins: ['prettier-plugin-sql', 'prettier-plugin-embed', 'prettier-plugin-tailwindcss'],
	trailingComma: 'all',
	singleQuote: true,
	tabWidth: 4,
	printWidth: 120,
	proseWrap: 'preserve',
	useTabs: true,
	bracketSpacing: true,
	arrowParens: 'always',
	endOfLine: 'auto',
};

/** @type {import('prettier-plugin-embed').PrettierPluginEmbedOptions} */
const prettierPluginEmbedConfig = {
	embeddedSqlTags: ['sql'],
};

/** @type {import('prettier-plugin-sql').SqlBaseOptions} */
const prettierPluginSqlConfig = {
	language: 'postgresql',
	keywordCase: 'upper',
	expressionWidth: 120,
};

const config = {
	...baseConfig,
	...prettierPluginEmbedConfig,
	...prettierPluginSqlConfig,
};

export default config;
