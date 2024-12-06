import { FastifyRequest, FastifyReply } from "fastify" 
import { CreateUser} from "../services/createUser"

class CreateUserController{ 
 async handle(request: FastifyRequest, reply: FastifyReply){
 
  const{nome, email, senha} = request.body as {nome: string, email: string, senha: string};
  
  const CreateController = new CreateUser();
  
  const User2 = await CreateController.execute(nome, email, senha); 
  
  reply.send(User2)
 
  } 
}

 export {CreateUserController}



