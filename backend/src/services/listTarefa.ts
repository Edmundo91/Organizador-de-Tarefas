import prismaClient from "../prisma"; 


class listTarefa{
async execute(id: number){ 

    if(!id){ 
    throw new Error('usuário não encontrado')
    }

    const lista = await prismaClient.user.findMany({
    where: {id}, 
    include: {tarefas:true}
})

return lista
}

}

export {listTarefa}