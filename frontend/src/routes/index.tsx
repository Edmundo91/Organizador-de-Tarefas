import Cadastro from "../pages/cadastro";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Usuario from "../pages/Usuario";
import NovaTarefa from "../pages/NovaTarefa"; 


export function AppRoutes(){ 
return( 
<BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/cadastro" element={<Cadastro/>}></Route>
         <Route path="/user/:id" element={<Usuario/>}></Route>
         <Route path=":id/novaTarefa" element={<NovaTarefa/>}></Route>
      </Routes>
</BrowserRouter>


)

}

