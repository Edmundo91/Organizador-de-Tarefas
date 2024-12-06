import {TfiAgenda} from "react-icons/tfi";

export default function app(){ 
return( 
<div className="bg-emerald-950 min-h-screen w-full flex justify-center">

<div className="absolute bg-green-950-600 left-5 top-10">
<TfiAgenda size={150} color="white" />
</div>
<h1 className="w-90 text-4xl font-mono text-white absolute top-24 left-32">     - Organizador de Tarefas</h1>

<main className="bg-green-950 w-1/3 h-100 my-48 rounded-2xl border-2 border-white"> 
<h1 className="text-3xl font-bold text-white flex justify-center my-3">Login</h1>
</main>


</div>
)

}