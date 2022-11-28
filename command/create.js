const chalk = require("chalk");
const inquirer = require("inquirer");
const { exec } = require("child_process");
const Url = require("../config/url")
const Fs = require("fs");



function createAction(answer) {
    if (Fs.existsSync(answer.projectName)) {
        console.log(chalk.red(`file ${answer.projectName} already exist！！！`));
        process.exit();
    }
    // 克隆项目
    exec(`git clone ${Url[answer.type]} ${answer.projectName}`, (error, stdout, stderr) => {
        if (error) {
            console.log(error);
            process.exit();
        }
        console.log(chalk.green("Create Project Success!"));
        console.log(chalk.green(`cd ${answer.projectName}`));
        console.log(chalk.green(`npm install`));
        process.exit();
    });
}

const create = {
    alias: "c",
    params: "[project-name]",
    description: "create a new project",
    action: function (project) {
        let _create = createAction
        project
            ? _create(project)
            : inquirer
                .prompt([
                    {
                        type: "input",
                        message: "项目名称:",
                        name: "projectName",
                        validate: (val) => {
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
                        name: "type",
                        choices: [
                            'pc',
                            'mini',
                            'h5'
                        ]
                    },
                ])
                .then(function (answer) {
                    console.log(answer);
                    _create(answer);
                });
    },
};

module.exports = create;
