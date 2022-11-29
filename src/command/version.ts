
const chalk = require("chalk");
// const pkg=require(__dirname + "/package.json")
const version:commanderType = {
    params: "[package-version]",
    description: "package version",
    action:  ()=> {
     console.log(chalk.green(`1.0.1`));
    },
};
export default version