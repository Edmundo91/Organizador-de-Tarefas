import prismaClient from "../prisma"; 

class createTarefa{ 

async execute(titulo: string, descricao: string, autorid: number){
    if(!titulo || !descricao || !autorid){ 
        throw new Error('dados insuficientes para criar uma tarefa')
    }

const tarefa = prismaClient.tarefas.create({ 
data:{ 
titulo, 
descricao, 
autorid
}
})

return (tarefa)

}

} 


export {createTarefa}