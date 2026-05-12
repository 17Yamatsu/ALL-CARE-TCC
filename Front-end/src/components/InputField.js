import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function InputField(props){
 return(
   <TextInput
    {...props}
    style={styles.input}
    placeholderTextColor="#666"
   />
 );
}

const styles = StyleSheet.create({
 input:{
   backgroundColor:'#efefef',
   height:50,
   borderRadius:8,
   paddingHorizontal:15,
   marginBottom:15
 }
});
