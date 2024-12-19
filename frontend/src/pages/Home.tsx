import {TfiAgenda} from "react-icons/tfi";
import { useRef } from "react";
import { FormEvent } from "react";
import { api } from "../services/api"; 
import { useNavigate } from "react-router-dom";



export default function Home(){ 

const emailRef = useRef<HTMLInputElement | null>(null) 
const senhaRef = useRef<HTMLInputElement | null>(null)

const navigate = useNavigate();
const logininvalido: string = "n"



async function handleSubmit(FormEvent: FormEvent){ 
 FormEvent.preventDefault();
 
 
   
 if(!emailRef.current?.value || !senhaRef.current?.value) return;
    const response = await api.post("/login", {
    
     email: emailRef.current?.value, 
     senha: senhaRef.current?.value })
     console.log(response.data)
     
     
     if(response.data === logininvalido) alert('login inválido'); 
     
     else{ 

      
      const id = response.data.user.id
      
      navigate(`/user/${id}`);

     }

   }

return( 
<div className="bg-emerald-950 min-h-screen w-full flex justify-center">

<div className="absolute bg-green-950-600 left-20 top-10">
<TfiAgenda size={100} color="black" />
</div>

<h1 className="w-90 text-xl font-medium text-black absolute top-24 left-48">Organizador de Tarefas</h1>

<main className="bg-green-950 w-96 h-72 my-40 rounded-2xl border-2 border-white md:min-w-4xl absolute"> 
<h1 className="text-3xl font-bold text-white flex justify-center my-3">Login</h1>


<form className=" w-full h-full my-12" onSubmit={handleSubmit} >

<label className="font-medium text-white text-lg ml-4">Email:</label> 
<input type="text" placeholder="Digite o seu email"
className="h-8 w-72 ml-2.5 rounded-lg absolute justify-center"
ref={emailRef}
/>


<div className=" my-10">
<label className="font-medium text-white text-lg ml-4">Senha:</label>
<input type="password" placeholder="Digite a sua senha"
className="h-8 w-72 ml-1.5 rounded-lg absolute justify-center"
ref={senhaRef}
/>
</div>



<div className=" w-full justify-center">
<a href="\cadastro" className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-4 
absolute my-2">Inscreva-se aqui</a>
<input 
type="submit" 
value="entrar" 
className="w-44  bg-green-600 h-10 rounded-xl font-medium cursor-pointer
 border-black border-2 ml-48"
></input>
</div>

</form>


</main>


</div>
)

}