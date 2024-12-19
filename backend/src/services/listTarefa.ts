import prismaClient from "../prisma"; 


class listTarefa{
async execute(autorid: number){ 

    if(!autorid){ 
    throw new Error('usuário não encontrado')
    }

    const lista = await prismaClient.tarefas.findMany({
    where: {autorid}, 
    select: {titulo: true, descricao:true},
})

return lista
}

}

export {listTarefa}