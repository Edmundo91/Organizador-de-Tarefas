import { FastifyInstance, FastifyReply, FastifyRequest, FastifyPluginOptions } from "fastify"; 
import { CreateUserController } from "./controllers/CreateUserController"; 
import { loginController } from "./controllers/loginController";


export async function routes(fastify: FastifyInstance){  

fastify.post("/cadastro", async (request: FastifyRequest, reply: FastifyReply) => 
{ return new CreateUserController().handle(request, reply)

})
    

fastify.post("/login", async (request: FastifyRequest, reply: FastifyReply) => 
{ return new loginController().handle(reply, request)

})


}
