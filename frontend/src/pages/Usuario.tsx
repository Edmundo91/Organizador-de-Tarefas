
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useEffect } from "react";

export default function Usuario(){ 

    
    const { id } = useParams<{ id: string }>();
    const numId = Number(id); 
    
    useEffect(() => { 
    tarefaList();
    }, [])
    
   
   async function tarefaList(){  
     const response = await api.post('/listtarefa', {  
     autorid: numId, 
     }) 
    console.log(response.data)
      

   }
   
   
   
    const navigate = useNavigate();  
    async function handleSubmit(){ 
      navigate('/novaTarefa')
    
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






<main className="bg-green-950 w-96 h-3/5 rounded-2xl my-28 border-2 border-white md:min-w-4xl absolute"> 
<h1 className="text-3xl font-bold text-white flex justify-center my-3">Suas tarefas</h1>






</main>


</div>
)

}