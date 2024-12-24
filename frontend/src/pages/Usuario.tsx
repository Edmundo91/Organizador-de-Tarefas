
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";




interface TarefasProps{ 
idTarefa: number; 
titulo: string
descricao: string; 
}

export default function Usuario(){ 


const [tarefas, setTarefas] = useState<TarefasProps[]>([])

    
    const { id } = useParams<{ id: string }>();
    const numId = Number(id); 
    
    useEffect(() => { 
    tarefaList();
    }, [])
    
   
   async function tarefaList(){  
     const response = await api.post('/listtarefa', {  
     autorid: numId, 
      
    }) 
    setTarefas(response.data)
    }
   
    
    async function HandleDelete(idTarefa: number){ 
    await api.delete("/detarefa", { 
      data:{
      idTarefa: idTarefa, 
      }
    
      
    }) 
    const alltarefas = tarefas.filter((tarefas) => tarefas.idTarefa != idTarefa) 
    setTarefas(alltarefas)
  }
   

    const navigate = useNavigate();  
    async function handleSubmit(){ 
      numId
      
      navigate(`/${numId}/novaTarefa`)
    }

  
return( 
<div className="bg-emerald-950 min-h-screen w-full flex justify-center">

<input 
type="submit" 
value = "Criar nova Tarefa"
className=" w-40 rounded-xl h-10 font-medium cursor-pointer
 border-black border-1  bg-green-600 my-16 mr-48  absolute" onClick={handleSubmit}> 

</input>
<a href="\" className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-52 
absolute my-20">Logout</a> 

<main className="bg-green-950 w-96 h-4/6 rounded-2xl my-28 border-2 border-white md:min-w-4xl absolute "> 
<h1 className="text-3xl font-bold text-white flex justify-center my-3">Suas tarefas</h1>


<section className="flex flex-col gap-2 my-6 overflow-y-auto border border-green-950 p-2 h-4/5">
 {tarefas.map( (tarefa) => (
  <article 
  key={tarefa.idTarefa}
  className="w-64 bg-emerald-950 relative ml-14 my-2 rounded-lg border-black border-2  h-28 p-2 hover:scale-105">
  
  
  <button className=" w-7 h-7 bg-white absolute right-2 -top-2  border-black border-1 rounded-full 
  flex items-center justify-center">
  <GoTrash 
  color="red" 
  size={14}
  className="cursor-pointer" 
  onClick={() => HandleDelete(tarefa.idTarefa)}/></button> 
    
    <p><span className=" text-white flex justify-center font-bold">{tarefa.titulo}</span></p>
    <p><span className=" text-blue-600 text-sm break-words">{tarefa.descricao}</span></p>
   </article>
))}
</section>


</main>










</div>
)

   }