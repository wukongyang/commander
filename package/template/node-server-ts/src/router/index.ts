
import {IncomingMessage, ServerResponse} from 'http';

export default (req: IncomingMessage,res: ServerResponse)=>{
  console.log(req,res);
}