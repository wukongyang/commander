import {ServerResponse,IncomingMessage} from 'http'
import routerPath from '../router'
import nUrl from 'url'
interface controllerReturnType{
  status?:number,
  success?:boolean,
}
export default function (res:ServerResponse,req:IncomingMessage):controllerReturnType{
  let url = nUrl.parse(req.url as string); 
  
  return {
    status:200,
    success:true
  }
}