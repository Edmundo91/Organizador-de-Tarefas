
import { FastifyReply, FastifyRequest } from "fastify"; 
import { login } from "../services/login";


class loginController{ 
async handle (reply: FastifyReply, request: FastifyRequest){

 const {email, senha} = request.body as {email: string, senha:string};
  
 const user = new login; 

 const metodo = await user.execute(email, senha)

reply.send(metodo)
   }
} 

export {loginController}