import { api } from "@/services/api";




export async function adicionarTarefa( titulo: string, descricao: string, id: number){ 
if(!titulo || !descricao || !id) return; 

const response = await api.post("/adtarefa", { 

titulo: titulo, 
descricao: descricao, 
autorid: id
})



} 