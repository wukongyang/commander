import {IncomingMessage,ServerResponse} from 'http'
export default function (res:ServerResponse,req:IncomingMessage){
    const {method}=req
    if (method === 'GET') {
        res.setHeader('Content-Type', 'text/plain');
        return;
      }
      // 如果客户端GET请求'/api/user'，会执行这个分支里面的逻辑
      if (method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        return;
      }
}