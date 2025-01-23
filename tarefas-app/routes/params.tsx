import type { NativeStackScreenProps } from "@react-navigation/native-stack"; 



export type RootStackParamList = { 
Home: undefined, 
User: {id: number},
Cadastro: undefined, 
NovaTarefa: {id: number},
} 

export type Home = NativeStackScreenProps<RootStackParamList, 'Home'>; 
export type User = NativeStackScreenProps<RootStackParamList, 'User'>; 
export type Cadastro = NativeStackScreenProps<RootStackParamList, 'Cadastro'> 
export type novaTarefa = NativeStackScreenProps<RootStackParamList, 'NovaTarefa'>