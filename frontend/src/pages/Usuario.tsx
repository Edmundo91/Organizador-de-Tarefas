import { useNavigate } from "react-router-dom"

export default function Usuario(){ 

    const navigate = useNavigate(); 

    async function handleSubmit(){ 
     navigate('/novaTarefa')

    }


return( 
<div className="bg-emerald-950 min-h-screen w-full flex justify-center">




<div className=" w-56 bg-emerald-950 h-10  my-4 mr-32"> 
<input 
type="submit" 
value = "Criar nova Tarefa"
className=" w-full rounded-xl h-10 font-medium cursor-pointer
 border-black border-1 bg-white" onClick={handleSubmit}> 

</input>



</div>
<main className="bg-green-950 w-96 h-4/6 rounded-2xl my-12 border-2 border-white md:min-w-4xl absolute"> 
<h1 className="text-3xl font-bold text-white flex justify-center my-3">Suas tarefas</h1>
</main>


</div>
)

}