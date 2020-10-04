import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View  } from 'react-native';
import Tarefa from './Tarefa';

export default function App() {

  const [tarefas, SetTarefas]= useState([
    {id:1, title:'Atualizar seus dados;'},
    {id:2, title:'Conceder nota para a atividade;'},
    {id:3, title:'Criar questões para os skills'},
    {id:4, title:'Visualizar as avaliações recebidas'},
    {id:5, title:'Relizar pesquisa de feedback 360º',
    }
  
  ]);
  
  function handleFinalizado(tarefaId){
    {alert ('Já foi concluído essa ação')}
    const tarefas_pendentes= tarefas.filter(({id})=>{ return id !== tarefaId})
     
    SetTarefas(tarefas_pendentes)
  }
  
  return (
    <View style={styles.container}>
   
     {tarefas.map((tarefas)=>
      
       <Tarefa 
       key={tarefas.id}
       tarefas={tarefas}
       handleFinalizado={handleFinalizado}/>
     )}
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5555',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
