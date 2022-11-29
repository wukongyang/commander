
// 所需要的文件
const fs = require("fs");


function main() {
    const source = fs.readFileSync(__dirname + "/package.json").toString('utf-8');
    const sourceObj = JSON.parse(source);
    sourceObj.scripts = {};
    sourceObj.devDependencies = {};
    sourceObj.bin = {
        "@cli": "lib/index.js"
    }
    fs.writeFileSync(__dirname + "/dist/package.json", Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8"));

    fs.copyFileSync(__dirname + "/README.md", __dirname + "/dist/README.md");
}

main();