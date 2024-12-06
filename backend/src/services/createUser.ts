import { error } from "console";
import prismaClient from "../prisma"; 

class CreateUser {
async execute(nome: string, email: string, senha: string){ 


  if (!nome || !email || !senha){ 
    throw error("Preencha todos os campos!")
  }

const user = await prismaClient.user.create({ 
          data:{ 
          nome, 
          email,
          senha
          }
     })

return user
 
} 

}

export {CreateUser}