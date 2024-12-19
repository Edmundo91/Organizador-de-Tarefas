import { FastifyRequest, FastifyReply } from "fastify"; 
import { listTarefa } from "../services/listTarefa"; 


class listarefaController{ 
async handle(reply: FastifyReply, request: FastifyRequest){ 

const {autorid} = request.body as {autorid: number} 

const lista = new listTarefa 

const metodo = await lista.execute(autorid)

reply.send(metodo)
}

} 

export {listarefaController}