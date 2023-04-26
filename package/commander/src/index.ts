import commands from './command/index'
const { Command } = require('commander')

const program = new Command()

const keys = Reflect.ownKeys(commands) as string[]
// 创建命令
keys.forEach(name => {
	const { params, action, description } = commands[name] || {}
	program
		.command(`${name} ${params || ''}`)
		.description(description)
		.action((arg: any) => {
			typeof action === 'function' && action(arg)
		})
})

program.parse(process.argv)
