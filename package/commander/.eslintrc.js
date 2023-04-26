module.exports = {
	parser: '@typescript-eslint/parser', // 解析器

	env: {
		node: true,
		es6: true
	},

	parserOptions: {
		ecmaVersion: 2020, // 指定js版本
		sourceType: 'module' // 默认为script，使用es6 module设置为module
	},

	extends: [
		// 集成的代码规范
		'eslint-config-standard',
		'plugin:@typescript-eslint/recommended',
		'prettier' // 放在最后
	],
	plugins: ['prettier'], // 插件

	rules: {
		// 单独配置规则，会覆盖extends的规则
		'prettier/prettier': 'error',
		'@typescript-eslint/no-var-requires': 0 // require 引入警告
	}
}
