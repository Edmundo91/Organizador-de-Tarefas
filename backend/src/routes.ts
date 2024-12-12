import { FastifyInstance, FastifyReply, FastifyRequest, FastifyPluginOptions } from "fastify"; 
import { CreateUserController } from "./controllers/CreateUserController"; 
import { loginController } from "./controllers/loginController";
import { createTarefaController } from "./controllers/createTarefaController";
import { deleteTarefaController } from "./controllers/deleteTarefaController";
import { request } from "http";
import { listarefaController } from "./controllers/lisTarefaController";


export async function routes(fastify: FastifyInstance){  

fastify.post("/cadastro", async (request: FastifyRequest, reply: FastifyReply) => 
{ return new CreateUserController().handle(request, reply)

})
    

fastify.post("/login", async (request: FastifyRequest, reply: FastifyReply) => 
{ return new loginController().handle(reply, request)

})

fastify.post("/adtarefa", async (request:FastifyRequest, reply: FastifyReply) => 
{ return new createTarefaController().handle(request, reply)  

})

fastify.delete("/detarefa", async (request: FastifyRequest, reply: FastifyReply) => 
{ return new deleteTarefaController().handle(request, reply) 

})

fastify.post("/listtarefa", async (request: FastifyRequest, reply: FastifyReply) => 
{return new listarefaController().handle(reply, request)
    
})

}
