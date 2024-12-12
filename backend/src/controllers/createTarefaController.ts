import { FastifyReply, FastifyRequest } from "fastify"; 
import { createTarefa } from "../services/createTarefa"; 

class createTarefaController{ 
async handle(request: FastifyRequest, reply: FastifyReply){ 

const {titulo, descricao, autorid} = request.body as {titulo: string, descricao: string, autorid: number} 

const tarefa = new createTarefa 

const metodoTarefa = tarefa.execute(titulo, descricao, autorid)

reply.send (metodoTarefa)

   }
} 

export {createTarefaController}