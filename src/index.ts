const { Command } = require('commander');
import commands from "./command/index"

const program = new Command()

let keys = Reflect.ownKeys(commands) as string[]
// 创建命令
keys.map((name) => {
  const { params, action, description } = commands[name] || {};
  program.command(`${name} ${params || ''}`)
    .description(description)
    .action((arg: any) => {
      typeof action === 'function' && action(arg);
    })
});

program.parse(process.argv);