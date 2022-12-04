
const fs = require("fs");
// 微信小程序写入less和scss编译插件
function handleWxFile<T extends createActionType>(answer: T, configOptions: string[]):Promise<string> {
  return new Promise((resolve,reject)=>{
        try {
            let filePath = process.cwd() + `/${answer.projectName}/project.config.json`
            const sourceObj = JSON.parse(fs.readFileSync(filePath).toString('utf-8'));
            //    重命名文件
            fs.rename(process.cwd() + `/${answer.projectName}/miniprogram/app.wxss`, process.cwd() + `/${answer.projectName}/miniprogram/app.${configOptions[0]}`, () => {
            })
            // 写入配置
            configOptions.forEach(plugin => {
                sourceObj.setting.useCompilerPlugins.push(plugin)
            })
            fs.writeFileSync(filePath, Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8"));
            resolve('success')
        } catch (error) {
            reject(error)
        }

    })
   
}
export default handleWxFile