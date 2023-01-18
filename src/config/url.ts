const BaseGitUrl = 'https://gitee.com/wukongyang/'
const urlList: Record<Lang, Record<string, string>> = {
	react: {
		mini: 'mini-template',
		pc: 'pc-template',
		h5: 'h5-template'
	},
	weapp: {
		js: 'weapp-template',
		ts: 'weapp-template-ts'
	},
	vue: {}
}

export function getUrl(lang: Lang, type: string) {
	return `${BaseGitUrl}${urlList[lang][type]}.git`
}
