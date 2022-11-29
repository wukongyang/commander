import { Command } from 'commander'
import pkg from '../package.json'
import commands from "./command/index"
 
const program = new Command(pkg.name)

let keys=Reflect.ownKeys(commands) as string[]
// 创建命令
keys.map((name) => {
    const { params, alias, action, description } = commands[name] || {};
    program.command(`${name} ${params || ''}`) 
      .alias(alias) 
      .description(description) 
      .action((...args) => {
        typeof action === 'function' && action(...args);
      })
  });
  
program.parse(process.argv);