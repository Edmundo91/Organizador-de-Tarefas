
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { Suspense, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TextInput, Button } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import {  RootStackParamList, User } from '@/routes/params';
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
import { api } from '@/services/api';
import { HandleDelete } from '@/services/userAPI';
import Entypo from '@expo/vector-icons/Entypo';
import Dialog from 'react-native-dialog';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'User'>;
};

interface TarefasProps{ 
  titulo: string,
  descricao: string,
  idTarefa: number, 
  }

export default function UserPage({route, navigation}: User) {
  
  const {id} = route.params
  
  const [visible, setVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TarefasProps | null>(null);


  const showDialog = (tarefa: TarefasProps) => { 
    
    setSelectedTask(tarefa)
    
    setVisible(true);
  }
  
  
  
  const hideDialog = () => { 
  
  setSelectedTask(null);
  setVisible(false);

  }
  

  async function apagarTarefa(idTarefa: number){ 
    
    const defTarefa: number = (idTarefa)

   
    return idTarefa 
  }
  
   


  
  const fetchData = async (id: number) => {
    const response = await api.post<TarefasProps[]>('/listtarefa', { autorid: id });
    return response.data; 
  };

  const { data, isLoading, error } = useQuery<TarefasProps[]>({
    queryKey: ['fetchData', id],
    queryFn: () => fetchData(id), 
    refetchInterval: 1000,
  });

  
  if (isLoading) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

 
  if (error) {
    return (
   <View style={styles.back}>
   <View style={styles.container}>
   <View style={styles.box}>
   
   <View style={styles.buttonApagar}></View>
   
   <Text style={styles.text}>Suas tarefas:</Text>
   <View style={styles.tarefa}> 
   <Text>Erro ao carregar as tarefas.</Text>
   </View>
   </View>
  </View>
  </View>
  );
  }
  

return (
    
    <View style={styles.back}>
    <MaterialCommunityIcons name="notebook-outline" size={70} color="black" style={styles.icon} />
    
    <TouchableOpacity style={styles.buttonNovaTarefa} onPress={() => navigation.navigate('NovaTarefa', { id: id })}>
       <Text  style={styles.buttonTextNovaTarefa}>Adicionar tarefa</Text>
    </TouchableOpacity>
    


    <View style={styles.container}>
   
    
    
    <View style={styles.box}>
    <Text style={styles.text}>Suas tarefas:</Text>
    <ScrollView style={styles.scrollView}>
     {data?.map((tarefa) => (
     <View key={tarefa.idTarefa} style={styles.tarefa}>
     <TouchableOpacity style={styles.buttonApagar} onPress={() => showDialog(tarefa)}>
     <Entypo name="trash" size={20} color="white"  style={styles.trashIcon}/>
     </TouchableOpacity>
     <Dialog.Container visible={visible} key={tarefa.idTarefa}>
        <Dialog.Title>Confirmação</Dialog.Title>
        <Dialog.Description>Você deseja mesmo apagar a tarefa: {selectedTask?.titulo}?</Dialog.Description>
        <Dialog.Button label="Cancelar" onPress={hideDialog} />
        <Dialog.Button label="Confirmar" onPress={() => {HandleDelete(selectedTask!.idTarefa); hideDialog();}} />
      </Dialog.Container>
      
     <Text style={styles.tituloTarefa}>{tarefa.titulo}</Text>
     <Text style={styles.descTarefa}>{tarefa.descricao}</Text>
     </View>
     ))}
   </ScrollView>
  </View>
    
    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonLog}>
       <Text style={styles.buttonTextLog}>Logout</Text>
    </TouchableOpacity>
   
    </View>
      </View>
        
)}

const styles = StyleSheet.create({ 

icon: { 
left: 250,
 top: 675,
position: 'absolute'

},
 
 back:{ 
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'rgb(14, 66, 52)' 
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 300,
    height: 550,
    backgroundColor: 'rgb(7, 54, 7)',
    justifyContent: 'flex-start', 
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'column',
 position: 'absolute'
  },
  text: {
    marginTop: 10,
    textAlign: 'center', 
    color: 'white',
    fontSize: 20,
    fontWeight: 900,
  },
  

tarefa: { 
marginTop: 10,
  width: 220,
  height: 160,
  backgroundColor: 'rgb(14, 66, 52)',
  borderWidth: 1,
  borderColor: 'white',
  marginLeft: 30,
  borderRadius: 10,
},

tituloTarefa: { 
color: 'blue',
textAlign: 'center',
fontWeight: 900,

},

descTarefa: { 
marginTop: 10,
textAlign: 'center',
color: 'white',
width: 210,
marginLeft: 4,
},


scrollView: {
  flex: 1,
  backgroundColor: 'rgb(7, 54, 7)',
  borderRadius: 8,
  padding: 8,

},

buttonApagar: { 
backgroundColor: '#B22222',
width: 30,
height: 30,
borderRadius: 30,
marginLeft: 200,
top: -10,
position: 'absolute',
borderColor: 'white',
borderWidth: 1,
},

trashIcon: { 

marginLeft: 4, 
top: 3

},


buttonLog: {  
  marginTop: 100, 
  marginLeft: -150,
  fontSize: 15,
  textDecorationLine: 'underline',
  fontWeight: 900,
  backgroundColor: 'white',  
  borderRadius: 10,
  top: 250, 
  
},

  buttonTextLog: { 
    textAlign: 'center', 
    width: 120,
    height: 30, 
    marginTop: -6, 
    top: 7,
    fontSize: 15,
    fontWeight: 900,
    
  },


buttonNovaTarefa: { 
top:65,
marginLeft: 180,
width: 140,
height: 40, 
backgroundColor: 'rgb(7, 54, 7)',
position: 'absolute',
borderRadius: 10,
borderColor: 'white',
borderWidth: 1,

},

buttonTextNovaTarefa: { 
  marginLeft: 7,
  textAlign: 'center', 
  width: 120,
  height: 30, 
  marginTop: -6, 
  top: 13,
  fontSize: 15,
  fontWeight: 900,
  color: 'white',
},





}) 

