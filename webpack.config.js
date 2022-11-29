const path = require('path') // node包里面的path模块，主要是为了帮我们拼接路径

// webpack中所有的配置信息都应该写在module.exports中
module.exports = {
    target: "node",
    mode: 'development',
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包文件输出目录
    output: {
        path: path.resolve(__dirname, 'dist'), //'./dist' 使用path拼接完整路径
        // 打包后文件的名字
        filename: 'bundle.js', // 随意命名
    },
    // 指定webpack打包时要使用的模块，哪些loader
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是对那些文件生效
                test: /\.ts$/, // 通过正则表达式匹配文件的名字
                use: [ // 加载器的执行顺序是从后往前，要先执行ts-loader，在执行babel
                    // babel 需要一些配置
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11" // ie11不支持箭头函数

                                        },
                                        // 设置corejs的版本，下载的版本几写几
                                        "corejs": 3,
                                        // 使用corejs的方式, "usage"为按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: 'ts-loader', // 通过ts-loader处理以ts结尾的文件
                        options: {
                            configFile: path.resolve(__dirname, './ts.config.json')
                        }

                    }
                ],
                exclude: /node_modules/, // 指定要排除的文件
            }
        ]
    },
    // 用来设置哪些可以作为模块引入
    resolve: {
        extensions: ['.ts', '.js'] //以ts、js为后缀的文件可以作为模块引入，打包不报错
    }
}