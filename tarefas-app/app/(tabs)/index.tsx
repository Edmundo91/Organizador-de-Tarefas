
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TextInput, Button } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { navigate } from 'expo-router/build/global-state/routing';
import { Home, RootStackParamList } from '@/routes/params';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { api } from '@/services/api';



type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};


export default function HomePage({navigation}: Home) {
  
 const logininvalido: string = "n"
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  
async function login(){ 
  if(!email || !senha){ 
    alert('todos os campos precisam ser preenchidos'); 
    return;
  } 
  
  const response = await api.post("/login", { 
  
  email: email, 
  senha: senha,
  
  })

  if (response.data === logininvalido){ 

    Alert.alert('', 'login inválido');
}

else  
navigation.navigate("User", { id: response.data.user.id });


}
  


  return (
    <View style={styles.back}>
    
    <MaterialCommunityIcons name="notebook-outline" size={100} color="black" style={styles.icon} />
    <Text style={styles.icontwo}>Organizador de Tarefas</Text>
    
    <View style={styles.container}>
    <View style={styles.box}>
    <Text style={styles.text}>Login</Text>
    
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
    placeholder='Digite a sua senha'
    secureTextEntry
    />
    
    <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.buttonCadastrese}>
<Text style={styles.buttonTextCad}>Cadastre-se</Text>
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
    height: 250,
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
  
  emailText:{ 
   color: 'white',
   marginLeft: 20, 
   top: 10
},
  
  inputEmail: { 
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  
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

buttonCadastrese: {  
marginTop: 30, 
marginLeft: 190,
fontSize: 15,
textDecorationLine: 'underline',
fontWeight: 900,
backgroundColor: 'white',  
borderRadius: 10,
},

 buttonTextCad: { 
  textAlign: 'center', 
  height: 30, 
  marginTop: -1, 
  top: 6

},


})
