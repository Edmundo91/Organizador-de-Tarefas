
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TextInput} from 'react-native';
import { novaTarefa, RootStackParamList } from '@/routes/params';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { adicionarTarefa } from '@/services/novaTarefaAPI';
import Dialog from 'react-native-dialog';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Cadastro'>;
};


export default function NovaTarefaPage({route, navigation}: novaTarefa) {

  const {id} = route.params
  const [titulo, setTitulo] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  
  const [visible, setVisible] = useState(false);
    
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);


  
  async function addtarefa(titulo: string, descricao: string){ 
    
   adicionarTarefa(titulo, descricao, id)
   
   showDialog()
   
   setTitulo('') 
   setDescricao('')
  
  }
  
  return (
    
    <View style={styles.back}>
    
    <MaterialCommunityIcons name="notebook-outline" size={100} color="black" style={styles.icon} />
    <Text style={styles.icontwo}>Organizador de Tarefas</Text>
    
    <View style={styles.container}>
    <View style={styles.box}>
    <Text style={styles.text}>Nova Tarefa</Text>
    
    <Text style={styles.TituloTarefa}>Título da Tarefa:</Text>
    <TextInput 
    style={styles.inputTitulo}
    onChangeText={setTitulo}
    value={titulo}
    placeholder='Digite o título da tarefa'
    maxLength={20}
    />
    
    <Text style={styles.DescricaoText}>Descrição da Tarefa:</Text>
    <TextInput 
    multiline={true}
    style={styles.inputDescricao}
    onChangeText={setDescricao}
    value={descricao}
    placeholder='Descreva a tarefa'
    maxLength={195}
    />
    
    <Dialog.Container visible={visible}>
        <Dialog.Title>Confirmação:</Dialog.Title>
        <Dialog.Description>Uma nova foi tarefa adicionada</Dialog.Description>
        <Dialog.Button label="Confirmar" onPress={hideDialog} />
      </Dialog.Container>

    <TouchableOpacity style={styles.button} onPress={() => addtarefa(titulo, descricao)}>
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
    </TouchableOpacity>
    
    
      <TouchableOpacity onPress={() => navigation.navigate('User', {id})} style={styles.buttonLog}>
    <Text style={styles.buttonTextLog}>Voltar</Text>
        </TouchableOpacity>
    
    </View>
      </View>
        </View>
)}

const styles = StyleSheet.create({ 

icon: { 
left: 28,
 top: 110,
position: 'absolute'

},
 
icontwo: { 
  left: 120,
  top: 165,
  position: 'absolute',
 fontWeight: 900,
 fontSize: 18
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
    height: 325,
    backgroundColor: 'rgb(7, 54, 7)',
    justifyContent: 'flex-start', 
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  text: {
    marginTop: 10,
    textAlign: 'center', 
    color: 'white',
    fontSize: 20,
    fontWeight: 900,
  },
  
  TituloTarefa:{ 
   color: 'white',
   marginLeft: 20, 
   top: 10
},
  
  inputTitulo: { 
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  
  },
 
  
  DescricaoText: { 

    color: 'white',
    marginLeft: 20, 
    top: -1
 
 
  },
  
  inputDescricao: { 
    height: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 1,
    textAlignVertical: 'top',
},

  senhaText: { 

    color: 'white',
    marginLeft: 20, 
    top: -1
  },

  inputSenha: { 
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 1
  },

  button: { 
  backgroundColor: 'green', 
  width: 140,
  height: 40,
  marginLeft: 80,
  borderRadius: 10,  
  top: 2

}, 
  
  buttonText: { 
    textAlign: 'center', 
    height: 30, 
    marginTop: 3, 
    top: 6
  
  },

  link: { 
  color: 'blue', 
  marginTop: -330, 
  marginLeft: 190,
fontSize: 15,
textDecorationLine: 'underline',
fontWeight: 900,

},

buttonLog: {  
  marginTop: 30, 
  marginLeft: 190,
  fontSize: 15,
  textDecorationLine: 'underline',
  fontWeight: 900,
  backgroundColor: 'white',  
  borderRadius: 10,
  },
  
   buttonTextLog: { 
    textAlign: 'center', 
    height: 30, 
    marginTop: -1, 
    top: 6
  
  },





})