import { deleteTarefa } from "../services/deleteTarefa"; 
import { FastifyRequest, FastifyReply } from "fastify";

class deleteTarefaController{ 
async handle(request: FastifyRequest, reply: FastifyReply){ 

    const {idTarefa} = request.body as {idTarefa: number} 

    const dTarefa = new deleteTarefa 
    const metodo = await dTarefa.execute(idTarefa)

    reply.send(metodo)

    }
} 

export{deleteTarefaController}
