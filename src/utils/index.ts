import wxDispose from './wx-dispose'

const fs = require('fs')
async function handleFile<T extends createActionType>(
	answer: T,
	configOptions: string[]
) {
	if (answer.lang === 'weapp') {
		return await wxDispose(answer, configOptions)
	}
}
export function deleteall(path: string) {
	let files = []

	if (fs.existsSync(path)) {
		files = fs.readdirSync(path)

		files.forEach((file: File, index: number) => {
			const curPath = path + '/' + file
			if (fs.statSync(curPath).isDirectory()) {
				// recurse
				deleteall(curPath)
			} else {
				// delete file
				fs.unlinkSync(curPath)
			}
		})
		fs.rmdirSync(path)
	}
}
export default handleFile
