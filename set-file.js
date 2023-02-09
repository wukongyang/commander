// 所需要的文件
const fs = require('fs')

function main() {
	// eslint-disable-next-line node/no-path-concat
	const source = fs.readFileSync(__dirname + '/package.json').toString('utf-8')
	const sourceObj = JSON.parse(source)
	sourceObj.scripts = {}
	sourceObj.devDependencies = {}
	sourceObj.bin = {
		'@cli': 'lib/index.js'
	}
	fs.writeFileSync(
		// eslint-disable-next-line node/no-path-concat
		__dirname + '/dist/package.json',
		Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8')
	)

	// eslint-disable-next-line node/no-path-concat
	fs.copyFileSync(__dirname + '/README.md', __dirname + '/dist/README.md')
}

main()
