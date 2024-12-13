import {TfiAgenda} from "react-icons/tfi";

export default function Cadastro(){ 
    return( 
    <div className="bg-emerald-950 min-h-screen w-full flex justify-center">
    
    <div className="absolute bg-green-950-600 left-5 top-10">
    <TfiAgenda size={100} color="white" />
    </div>
    <h1 className="w-90 text-2xl font-medium text-white absolute top-24 left-32">Organizador de Tarefas</h1>
    
    <main className="bg-green-950 w-80 h-96 my-48 rounded-2xl border-2 border-white md:min-w-4xl absolute"> 
    <h1 className="text-3xl font-bold text-white flex justify-center my-3">Cadastro</h1>
    
    
    <form className=" w-full h-full my-4">
    
    <label className="font-medium text-white text-lg ml-4 flex flex-col">Informe o seu nome:</label> 
    <input type="text" placeholder="Digite o seu nome"
    className="h-8 w-72 ml-2.5 rounded-lg absolute justify-center"
    />
    
    
    <div className=" my-10">
    <label className="font-medium text-white text-lg ml-4 flex flex-col">Informe o seu email:</label>
    <input type="text" placeholder="Digite o seu email"
    className="h-8 w-72 ml-2.5 rounded-lg absolute justify-center"
    />
    </div>
    
    <div className=" my-11">
    <label className="font-medium text-white text-lg ml-4 flex flex-col">Defina uma senha:</label>
    <input type="text" placeholder="Digite sua senha"
    className="h-8 w-72 ml-2.5 rounded-lg absolute justify-center"
    />
    </div> 
   
    <div className=" w-full my-16">
    <input 
    type="submit" 
    value="cadastrar" 
    className="w-44 bg-white h-10 rounded-xl font-medium cursor-pointer
     border-black border-2 ml-16"
    ></input>
    </div>
    
     <div className=" w-full absolute top-80 my-7 ml-4">
     <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Retornar à página inicial</a>
     </div>

    
    </form>
    
    
    </main>
    
    
    </div>
    )
    
    }