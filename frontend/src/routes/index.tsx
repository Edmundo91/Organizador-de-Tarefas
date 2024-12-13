import Cadastro from "../pages/cadastro";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";  


export function AppRoutes(){ 
return( 
<BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/cadastro" element={<Cadastro/>}></Route>
      </Routes>
</BrowserRouter>


)

}

