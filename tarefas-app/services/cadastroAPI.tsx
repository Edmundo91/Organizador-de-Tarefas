import HomeScreen from "@/app/(tabs)/cadastro"; 
import  {api}  from "@/services/api";
import React from "react";
import { useState } from "react";
import { Alert } from "react-native";





export async function cadastrar(nome: string, email: string, senha: string){ 
 const response = await api.post("/cadastro", {   

nome: nome, 
email: email, 
senha: senha,
})

const dataString = JSON.stringify(response.data)


Alert.alert('', dataString)



} 