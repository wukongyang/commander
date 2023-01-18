import { getUrl } from '../config/url'
import handleFile, { deleteall } from '../utils/index'
import ProgressBar from '../utils/progress-bar'
import createBox from '../utils/box'
const chalk = require('chalk')
const inquirer = require('inquirer')
const { exec } = require('child_process')
const Fs = require('fs')

function createAction<T extends createActionType>(answer: T) {
	// console.log('----',answer);
	// return

	if (Fs.existsSync(answer.projectName)) {
		console.log(chalk.red(`file ${answer.projectName} already exist！！！`))
		process.exit()
	}
	// 整理所选的类型和其他配置项
	const typeArr: string[] = answer.type.split('+')
	answer.type = typeArr.shift() as string
	const configOptions = typeArr

	let i = 0
	const progressBarC = new ProgressBar()
	const timer: NodeJS.Timer = setInterval(() => {
		progressBarC.run(i++)
		if (i === 50) {
			clearInterval(timer)
		}
	}, 100)
	console.log(chalk.green(createBox(answer).stringify()))

	return
	exec(
		`git clone ${getUrl(answer.lang, answer.type)} ${answer.projectName}`,
		(error: any, stdout: any, stderr: any) => {
			if (error) {
				console.log(error)
				process.exit()
			}
			progressBarC.run(75)
			// 清除git记录
			exec('rm -fr .git')
			handleFile(answer, configOptions)
				.then(() => {
					progressBarC.run(100)

					// console.log(chalk.green("Create Project Success!!!"));
					// console.log(chalk.green(`cd ${answer.projectName}`));
					// if(answer.lang!=='weapp'){
					//     console.log(chalk.green(`npm install`));
					// }
					process.exit()
				})
				.catch(() => {
					clearInterval(timer)
					console.log(chalk.red(`create ${answer.projectName} fail!!!`))
					// 删除目录
					deleteall(process.cwd() + `/${answer.projectName}`)
				})
		}
	)
}

const create: commanderType = {
	params: '[project-name]',
	description: 'create a new project',
	action: <T extends createActionType>(project: T) => {
		const _create = createAction
		project
			? _create(project)
			: inquirer
					.prompt([
						{
							type: 'input',
							message: '项目名称:',
							name: 'projectName',
							validate: (val: string) => {
								// 对输入的值做判断
								if (!val || !val.trim()) {
									return chalk.red('项目名不能为空，请重新输入')
								} else if (val.includes(' ')) {
									return chalk.red('项目名不能包含空格，请重新输入')
								}
								return true
							}
						},
						{
							type: 'list',
							message: '请选择你需要创建的模版',
							name: 'lang',
							choices: ['react', 'vue', 'weapp']
						},
						{
							type: 'list',
							message: '请选择你需要创建的模版',
							name: 'type',
							when: (answer: any) => {
								return answer.lang === 'weapp'
							},
							choices: ['ts', 'ts+less', 'ts+scss', 'js', 'js+less', 'js+scss']
						},
						{
							type: 'list',
							when: (answer: any) => {
								return answer.lang === 'Vue'
							},
							message: '请选择你需要创建的项目类型',
							name: 'type',
							choices: ['Vue-ssr', 'Vue-h5']
						},

						{
							type: 'list',
							when: (answer: any) => {
								return answer.lang === 'react'
							},
							message: '请选择你需要创建的项目类型',
							name: 'type',
							choices: ['pc', 'mini', 'h5']
						}
					])
					.then((answer: T) => {
						_create(answer)
					})
	}
}

export default create
