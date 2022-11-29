const chalk = require("chalk");
const inquirer = require("inquirer");
const { exec } = require("child_process");
const Url = require("../config/url")
const Fs = require("fs");



function createAction(answer:any) {
    if (Fs.existsSync(answer.projectName)) {
        console.log(chalk.red(`file ${answer.projectName} already exist！！！`));
        process.exit();
    }
    console.log(Url);
    
    // 克隆项目
    exec(`git clone ${Url[answer.type]} ${answer.projectName}`, (error:any, stdout:any, stderr:any) => {
        if (error) {
            console.log(error);
            process.exit();
        }
        console.log(chalk.green("Create Project Success!!!"));
        console.log(chalk.green(`cd ${answer.projectName}`));
        console.log(chalk.green(`npm install`));
        process.exit();
    });
}

const create:{
    params:any, alias:any, action:any, description:any
} = {
    alias: "c",
    params: "[project-name]",
    description: "create a new project",
    action:  (project:any)=> {
        let _create = createAction
        project
            ? _create(project)
            : inquirer
                .prompt([
                    {
                        type: "input",
                        message: "项目名称:",
                        name: "projectName",
                        validate: (val:string) => {
                            // 对输入的值做判断
                            if (!val || !val.trim()) {
                                return chalk.red("项目名不能为空，请重新输入");
                            } else if (val.includes(" ")) {
                                return chalk.red("项目名不能包含空格，请重新输入");
                            }
                            return true;
                        },
                    },
                    {
                        type: "list",
                        message: "请选择你需要创建的模版",
                        name: "lang",
                        choices: [
                            'React',
                            'Vue'
                        ]
                    },
                    {
                        type: "list",
                        when:(answer:any)=>{
                            return answer.lang==='Vue'
                        },
                        message: "请选择你需要创建的项目类型",
                        name: "type",
                        choices: [
                            'Vue-ssr',
                            'Vue-h5',
                        ]
                    },

                    {
                        type: "list",
                        when:(answer:any)=>{
                            return answer.lang==='React'
                        },
                        message: "请选择你需要创建的项目类型",
                        name: "type",
                        choices: [
                            'pc',
                            'mini',
                            'h5'
                        ]
                    },
                ])
                .then( (answer:any)=> {
                    _create(answer);
                });
    },
};

export default create
