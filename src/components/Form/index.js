import React from "react";
import { TextInput, View } from "react-native"

export default function Form(){
    return(
       <View>
           <View> //serve para visualizar ;
               <Text>Altura</Text>
               <TextInput placeholder="Ex. 1,75" keyboardType="numeric"/>
               <Text>Peso</Text>  
               <TextInput placeholder="Ex. 69" keyboardType="numeric"/>         
           </View>
       </View>
    );
}