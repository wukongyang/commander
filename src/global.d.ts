declare type commanderType = Record<
	'params' | 'description' | 'action',
	any | (<T>(p: T) => void)
>
declare enum Lang {
	REACT = 'react',
	WEAPP = 'weapp',
	VUE = 'vue'
}
declare type createActionType = {
	projectName: string
	type: string
	lang: Lang
}
