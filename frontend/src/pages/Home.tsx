import {TfiAgenda} from "react-icons/tfi";

export default function Home(){ 
return( 
<div className="bg-emerald-950 min-h-screen w-full flex justify-center">

<div className="absolute bg-green-950-600 left-5 top-10">
<TfiAgenda size={100} color="white" />
</div>
<h1 className="w-90 text-2xl font-medium text-white absolute top-24 left-32">Organizador de Tarefas</h1>

<main className="bg-green-950 w-96 h-72 my-48 rounded-2xl border-2 border-white md:min-w-4xl absolute"> 
<h1 className="text-3xl font-bold text-white flex justify-center my-3">Login</h1>


<form className=" w-full h-full my-12">

<label className="font-medium text-white text-lg ml-4">Email:</label> 
<input type="text" placeholder="Digite o seu email"
className="h-8 w-72 ml-2.5 rounded-lg absolute justify-center"
/>


<div className=" my-10">
<label className="font-medium text-white text-lg ml-4">Senha:</label>
<input type="text" placeholder="Digite a sua senha"
className="h-8 w-72 ml-1.5 rounded-lg absolute justify-center"
/>
</div>



<div className=" w-full justify-center">
<a href="\cadastro" className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-4 
absolute my-2">Inscreva-se aqui</a>
<input 
type="submit" 
value="entrar" 
className="w-44 bg-white h-10 rounded-xl font-medium cursor-pointer
 border-black border-2 ml-48"
></input>
</div>

</form>


</main>


</div>
)

}