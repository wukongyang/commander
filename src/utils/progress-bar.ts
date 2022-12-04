
const singleRowLog =require('single-line-log').stdout
const chalk=require('chalk')
class progress {
    config:any
    constructor(config = {}){
        this.initConfig(config);
    }
    initConfig(config:any){
        const defaultConfig = {
            duration: 100,
            current: 0,
            block:'█',
            showNumber:true,
            tip:{
                0: '努力构建中🔧……',
                50:'加载一半啦，不要着急🐶……',
                75:'马上就加载完了😊……',
                100:'创建完成😄'
            },
            color:'blue'
        };
        Object.assign(defaultConfig,config);
        this.config = defaultConfig;
    }
    run(current:number){
        const {block, duration, tip, color, showNumber} = this.config;
        let tipList = Object.keys(tip).sort((a,b)=>  parseInt(b) - parseInt(a));
        let showTip = tip[0];
        const step = duration / 100;
        const len = Math.floor(current / step);
        for(let i = 0; i < tipList.length; i++){
            if(len >= parseInt(tipList[i]) ) {
                showTip = tip[tipList[i]];
                break;
            }
        }
        singleRowLog(chalk[color](block.repeat(Math.floor(len / 2)),(showNumber ? (len + '% ') : '') + showTip));
        if(len == 100) console.log('');
    }
   
} 
export default progress