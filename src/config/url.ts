
export function getUrl(type: string) {
    let urlList:Record<string,string> = {
        mini: 'https://gitee.com/wukongyang/mini-template.git',
        pc: 'https://gitee.com/wukongyang/pc-template.git',
        h5: 'https://gitee.com/wukongyang/h5-template.git'
    }
    return urlList[type]
}