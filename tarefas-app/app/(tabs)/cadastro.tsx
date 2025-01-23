

import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import { cadastrar } from '@/services/cadastroAPI';
import { red } from 'react-native-reanimated/lib/typescript/Colors';
import { Cadastro, RootStackParamList } from '@/routes/params';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Cadastro'>;
};


export default function Register({navigation}: Cadastro) {
  
  
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  
  
  async function cadastro(){ 
    if (!nome || !email || !senha) {
      Alert.alert('', 'Todos os campos são obrigatórios!');
      return;
    }
  
  
  await cadastrar(nome, email, senha) 
  
  setNome('');
  setEmail('');
  setSenha('');
   
   
  

}
  
  return (
    
    <View style={styles.back}>
    
    <MaterialCommunityIcons name="notebook-outline" size={100} color="black" style={styles.icon} />
    <Text style={styles.icontwo}>Organizador de Tarefas</Text>
    
    <View style={styles.container}>
    <View style={styles.box}>
    <Text style={styles.text}>Cadastro</Text>
    
    <Text style={styles.nomeText} >Nome:</Text>
    <TextInput 
    style={styles.inputNome}
    onChangeText={setNome}
    value={nome}
    placeholder='Digite o seu nome'
    />
    
    <Text style={styles.emailText} >Email:</Text>
    <TextInput 
    style={styles.inputEmail}
    onChangeText={setEmail}
    value={email}
    placeholder='Digite o seu email'
    
    />
    

    <Text style={styles.senhaText} >Senha:</Text>
    <TextInput 
    style={styles.inputSenha}
    onChangeText={setSenha}
    value={senha}
    placeholder='Defina uma senha'
    secureTextEntry
    />


    <TouchableOpacity style={styles.button} onPress={cadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
    
    
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonLog}>
    <Text style={styles.buttonTextLog}>Fazer login</Text>
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
  
  nomeText:{ 
   color: 'white',
   marginLeft: 20, 
   top: 10
},
  
  inputNome: { 
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  
  },
 
  
  emailText: { 

    color: 'white',
    marginLeft: 20, 
    top: -1
 
 
  },
  
  inputEmail: { 
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 1
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
