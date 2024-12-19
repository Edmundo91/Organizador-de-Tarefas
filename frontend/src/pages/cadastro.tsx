import {TfiAgenda} from "react-icons/tfi";
import { useRef } from "react"; 
import { FormEvent } from "react";
import { api } from "../services/api";

export default function Cadastro(){ 
    
    const nomeRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const senhaRef = useRef<HTMLInputElement | null>(null)
    
    async function handleSubmit(FormEvent: FormEvent) {
        FormEvent.preventDefault();
        
        if(!emailRef.current?.value || !nomeRef.current?.value || !senhaRef.current?.value) return;
        const response = await api.post("/cadastro", { 
        
        nome: nomeRef.current?.value, 
        email: emailRef.current?.value, 
        senha: senhaRef.current?.value, 
        })
    
        alert(response.data)
        window.location.reload();
    
    }
    
    return( 
    <div className="bg-emerald-950 min-h-screen w-full flex justify-center">
    
    <div className="absolute bg-green-950-600 left-20 top-10">
<TfiAgenda size={100} color="black" />
</div>

<h1 className="w-90 text-xl font-medium text-black absolute top-24 left-48">Organizador de Tarefas</h1>
    
    <main className="bg-green-950 w-80 h-80 my-40 rounded-2xl border-2 border-white md:min-w-4xl absolute"> 
    <h1 className="text-3xl font-bold text-white flex justify-center my-3">Cadastro</h1>
    
    
    <form className=" w-full h-52 absolute top-11" onSubmit={handleSubmit}>
    
    <label className="font-medium text-white text-lg ml-4 flex flex-col">Informe o seu nome:</label> 
    <input type="text" placeholder="Digite o seu nome"
    className="h-8 w-72 ml-2.5 rounded-lg absolute justify-center"
    ref={nomeRef} 
    />
    
    
    <div className=" my-10">
    <label className="font-medium text-white text-lg ml-4 flex flex-col">Informe o seu email:</label>
    <input type="text" placeholder="Digite o seu email"
    className="h-8 w-72 ml-2.5 rounded-lg absolute justify-center"
    ref={emailRef}
    />
    </div>
    
    <div className=" my-11">
    <label className="font-medium text-white text-lg ml-4 flex flex-col">Defina uma senha:</label>
    <input type="password" placeholder="Digite sua senha"
    className="h-8 w-72 ml-2.5 rounded-lg absolute justify-center"
    ref={senhaRef}
    />
    </div> 
   
    <div className=" w-full my-11">
    <input 
    type="submit" 
    value="cadastrar" 
    className="w-44  bg-green-600 h-10 rounded-xl font-medium cursor-pointer
     border-black border-2 ml-16"
    ></input>
    </div>
    
     <div className=" w-full absolute top-72 top ml-4">
     <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Fazer Login</a>
     </div>

    
    </form>
    
    
    </main>
    
    
    </div>
    )
    
    }