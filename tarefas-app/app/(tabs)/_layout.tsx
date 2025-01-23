import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '.';
import UserPage from './user';
import { RootStackParamList } from '@/routes/params';
import Register from './cadastro';
import { useEffect } from 'react';
import { focusManager, onlineManager, QueryClientProvider, QueryCache, QueryClient } from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';
import { AppState, AppStateStatus } from 'react-native';
import NovaTarefaPage from './novaTarefa';


const client = new QueryClient({ 
  queryCache: new QueryCache({ 
  
  })
  });

const Stack = createNativeStackNavigator<RootStackParamList>();;

export default function StackLayout() {
  
  useEffect(() => {

    onlineManager.setEventListener((setOnline) => { 
    return NetInfo.addEventListener((state) => {  
    setOnline(!!state.isConnected);
    })
    })},[NetInfo, onlineManager])
    
    useEffect(() => { 
    const subscriber = AppState.addEventListener('change', onFocusRefetch); 
    
      return () => subscriber.remove() 
    },[])
    
    const onFocusRefetch = (status: AppStateStatus) => { 
    focusManager.setFocused(status == 'active')
    }
  
  
  return (
    <QueryClientProvider client={client}>
    <Stack.Navigator initialRouteName="Home">            
    <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
    <Stack.Screen name="User" component={UserPage} options={{headerShown: false}}/>    
    <Stack.Screen name="Cadastro" component={Register} options={{headerShown: false}}/> 
    <Stack.Screen name="NovaTarefa" component={NovaTarefaPage} options={{headerShown: false}}/>
    </Stack.Navigator>
    </QueryClientProvider>
  );
}
