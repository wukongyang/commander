const fs = require('fs')
// 微信小程序写入less和scss编译插件
function handleWxFile<T extends createActionType>(
	answer: T,
	configOptions: string[]
): Promise<string> {
	return new Promise((resolve, reject) => {
		try {
			const filePath =
				process.cwd() + `/${answer.projectName}/project.config.json`
			const sourceObj = JSON.parse(fs.readFileSync(filePath).toString('utf-8'))
			//    需要重命名的文件
			if (configOptions.length > 0) {
				let basePath
				if (answer.type === 'ts') {
					basePath = `/${answer.projectName}/miniprogram`
				} else {
					basePath = `/${answer.projectName}`
				}
				fs.rename(
					process.cwd() + `${basePath}/app.wxss`,
					process.cwd() + `${basePath}/app.${configOptions[0]}`
				)
				fs.rename(
					process.cwd() + `${basePath}/components/ViscidGlobe/ViscidGlobe.wxss`,
					process.cwd() +
						`${basePath}/components/ViscidGlobe/ViscidGlobe.${configOptions[0]}`
				)
				fs.rename(
					process.cwd() + `${basePath}/pages/index/index.wxss`,
					process.cwd() + `${basePath}/pages/index/index.${configOptions[0]}`
				)
			}
			// 写入配置
			configOptions.forEach(plugin => {
				sourceObj.setting.useCompilerPlugins.push(plugin)
			})
			fs.writeFileSync(
				filePath,
				Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8')
			)
			resolve('success')
		} catch (error) {
			console.log(error)
			reject(error)
		}
	})
}
export default handleWxFile
