"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const url_1 = __importDefault(require("url"));
const index_1 = __importDefault(require("./router/index"));
// '127.0.0.1'表明只有本机可访问，'0.0.0.0'表示所有人可访问
const hostname = '127.0.0.1';
const port = 3001;
// 通过http.createServer获取一个server实例
// 其中(req, res) => {}，在服务器每次接收到请求时都会被执行
const server = http_1.default.createServer((req, res) => {
    let method = req.method; // 客户端请求方法
    let url = url_1.default.parse(req.url); // 将请求url字符串转换为node的url对象
    // 如果客户端GET请求'/'，会执行这个分支里面的逻辑
    (0, index_1.default)(req, res);
    if (method === 'GET' && url.pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
        return;
    }
    // 如果客户端GET请求'/api/user'，会执行这个分支里面的逻辑
    if (method === 'GET' && url.pathname === '/api/user') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            code: 0,
            msg: '',
            result: {
                username: 'shasharoman'
            }
        }));
        return;
    }
    // 没有匹配其他分支的话，执行以下逻辑
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
});
// server开始监听，等待请求到来
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
