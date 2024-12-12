import prismaClient from "../prisma"; 

class deleteTarefa{ 
async execute(idTarefa: number){ 

    if(!idTarefa){ 
throw new Error("Escolha uma tarefa")    
}

const deltarefa = await prismaClient.tarefas.delete({ 

   where: { 
    idTarefa,
   } 

}) 

return('tarefa deletada')

}

} 

export {deleteTarefa}