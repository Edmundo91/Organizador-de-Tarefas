import { error } from "console";
import prismaClient from "../prisma"; 
import { errorCodes } from "fastify";

class CreateUser {
async execute(nome: string, email: string, senha: string){ 


  if (!nome || !email || !senha){ 
    throw error("Preencha todos os campos!")
  }

  try{
const user = await prismaClient.user.create({ 
          data:{ 
          nome, 
          email,
          senha
          }
     })

    } catch (error: any){ 
    if(error.code === 'P2002'){ 
    
      return ('Este email já está registrado. tente outro.')
    }

    }

return('cadastro efetuado')
 
} 

}

export {CreateUser}