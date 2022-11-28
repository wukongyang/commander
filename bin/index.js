#!/usr/bin/env node

const { Command } = require('commander');
const { name, version } = require('../package.json');
const commands = require('../command/index.js');
const program = new Command();

program.name(name).version(version);

// 创建命令
Reflect.ownKeys(commands).map((name) => {
    const { params, alias, action, description } = commands[name] || {};
    program.command(`${name} ${params || ''}`) 
      .alias(alias) 
      .description(description) 
      .action((...args) => {
        typeof action === 'function' && action(...args);
      })
  });
  
program.parse(process.argv);