import prismaClient from "../prisma"; 

class login{ 
async execute(email: string, senha: string){   

    
if(!email || !senha){ 
    throw Error('preencha todos os campos!')
}

const user = await prismaClient.user.findUnique(
{ where: {email, senha}, select: { id: true},});

if(user == null){ 
    return('n')
}

return{user}


}
    
} 

export {login}