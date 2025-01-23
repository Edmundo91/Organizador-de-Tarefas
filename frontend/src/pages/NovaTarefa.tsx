import { useRef } from "react"
import { FormEvent } from "react" 
import { api } from "../services/api"
import { useParams } from "react-router-dom"




export default function NovaTarefa(){ 
    const { id } = useParams<{ id: string }>();
    const numId = Number(id); 
    
    const tituloRef = useRef<HTMLInputElement | null>(null) 
    const descricaoRef = useRef<HTMLTextAreaElement | null>(null) 

    async function handleSubmit(FormEvent: FormEvent){ 
        FormEvent.preventDefault();
        if(!tituloRef.current?.value || !descricaoRef.current?.value) return; 

    await api.post("/adtarefa", { 

    titulo: tituloRef.current?.value,
    descricao: descricaoRef.current?.value,
    autorid: numId,
    }) 
    
    alert('Tarefa dicionada')
    window.location.reload();
    
    }
    
    return( 
    <div className="bg-emerald-950 min-h-screen w-full flex justify-center"> 
    <div className=" w-56 bg-emerald-950 h-10  my-4 mr-32"> 
    </div>
    <main className="bg-green-950 w-96 h-96 rounded-2xl my-12 border-2 border-white md:min-w-4xl absolute"> 
    <h1 className="text-3xl font-bold text-white flex justify-center my-3">Registre uma nova tarefa</h1>
    
    
    
    <div className="bg-green-950 w-full h-72 my-4">
    
    <form onSubmit={handleSubmit}>
    
    <label className="font-medium text-white text-lg ml-9 flex flex-col">Título da tarefa:</label>
    <input
    type="text"
    placeholder="Digite o título da tarefa"
    className=" ml-7 w-80 rounded-lg"
    ref={tituloRef}
    maxLength={22}
    />
    
    
    <label className="font-medium text-white text-lg ml-9 flex my-4 flex-col">Descrição da tarefa:</label>
    <textarea
    ref={descricaoRef}
    placeholder="Escreva uma nova tarefa"
    className=" ml-7 w-80 rounded-lg absolute top-40 h-32"
    maxLength={90}
    />

    <input 
     type="submit" 
     value="registrar tarefa" 
     className="w-44 h-10 rounded-xl font-medium cursor-pointer
      border-black border-2 ml-24 my-36 bg-green-600"

     ></input>
    
    </form>
    
    
    </div>
    
    
    <div className=" w-full absolute top-96 top ml-4">
     <a href={`/user/${numId}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Retornar à página inicial</a>
     </div>


    </main>
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    </div>
    )
}