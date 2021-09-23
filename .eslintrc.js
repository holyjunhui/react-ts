const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.tsx', '.ts', '.js', '.json'],
			},
			alias: {
				map: [['@', './src/']],
				extensions: ['.tsx', '.ts', '.jsx', '.js'],
			},
		},
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'no-useless-escape': 'error',
		'prettier/prettier': 'error',
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
		'import/extensions': [
			ERROR,
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
				json: 'never',
				js: 'never',
			},
		],
		'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
		'import/prefer-default-export': OFF,
		'import/no-unresolved': ERROR,
		'import/no-dynamic-require': OFF,
		'@typescript-eslint/no-useless-constructor': ERROR,
		'@typescript-eslint/no-empty-function': WARN,
		'@typescript-eslint/no-var-requires': OFF,
		'@typescript-eslint/explicit-function-return-type': OFF,
		'@typescript-eslint/explicit-module-boundary-types': OFF,
		'@typescript-eslint/no-explicit-any': OFF,
		'@typescript-eslint/no-use-before-define': ERROR,
		'@typescript-eslint/no-unused-vars': WARN,
		'no-unused-vars': OFF,

		'react/jsx-filename-extension': [
			ERROR,
			{ extensions: ['.tsx', 'ts', '.jsx', 'js'] },
		],
		'react/jsx-one-expression-per-line': OFF,
		'react/destructuring-assignment': OFF,
		'react/state-in-constructor': OFF,
		'react/jsx-props-no-spreading': OFF,
		'react/prop-types': OFF,

		'jsx-a11y/click-events-have-key-events': OFF,
		'jsx-a11y/no-noninteractive-element-interactions': OFF,
		'jsx-a11y/no-static-element-interactions': OFF,

		'lines-between-class-members': [ERROR, 'always'],
		// indent: [ERROR, 2, { SwitchCase: 1 }],
		'linebreak-style': [ERROR, 'unix'],
		semi: [OFF, 'always'],
		'no-unused-expressions': WARN,
		'no-plusplus': OFF,
		'no-console': OFF,
		'class-methods-use-this': ERROR,
		'global-require': OFF,
		'no-use-before-define': OFF,
		'no-restricted-syntax': OFF,
		'no-continue': OFF,
	},
}
