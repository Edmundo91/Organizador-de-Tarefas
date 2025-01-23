
import { api } from '@/services/api';




export async function HandleDelete(idTarefa: number){ 
  
  
  
  
  await api.delete("/detarefa", { 
    data:{
    idTarefa: idTarefa, 
    }
  }
  
  )}