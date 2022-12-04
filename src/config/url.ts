const BaseGitUrl='https://gitee.com/wukongyang/'
let urlList:Record<Lang,Record<string,string>> = {
    react:{
        mini: 'mini-template',
        pc: 'pc-template',
        h5: 'h5-template'
    },
    weapp:{
        js:'weapp-template',
        ts:'weapp-template-ts'
    },
    vue:{

    }
   
}

export function getUrl<T>(lang:Lang,type:string,configOptions:T) {
    return `${BaseGitUrl}${urlList[lang][type]}.git`
}