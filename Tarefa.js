import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View } from 'react-native';

export default function Tarefa({tarefas, handleFinalizado}){
    return (
        <View style={styles.container}>
       <Text 
       style={styles.tarefa}>{tarefas.title}</Text> 
       <TouchableOpacity style={styles.botao}
       onPress={()=>{handleFinalizado(tarefas.id)}}>
           <Text>Finalizado</Text>
       </TouchableOpacity>
       </View>
   

   )

}

const styles = StyleSheet.create({
        container:{
          flexDirection:"row",
          justifyContent:"space-between",
          margin: 10,
          borderBottomColor: "#e6e6e6",
          borderBottomWidth: 1,
          alignItems:"center"
          
        },
        
        tarefa:{
            flex:1,
            textTransform:"capitalize",
            fontSize: 17
        },

        botao: {
            backgroundColor: '#e6e6e6',
            padding: 10,
            margin: 5

        },


})