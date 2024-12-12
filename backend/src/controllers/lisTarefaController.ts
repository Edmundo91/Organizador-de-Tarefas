import { FastifyRequest, FastifyReply } from "fastify"; 
import { listTarefa } from "../services/listTarefa"; 


class listarefaController{ 
async handle(reply: FastifyReply, request: FastifyRequest){ 

const {id} = request.body as {id: number} 

const lista = new listTarefa 

const metodo = await lista.execute(id)

reply.send(metodo)
}

} 

export {listarefaController}