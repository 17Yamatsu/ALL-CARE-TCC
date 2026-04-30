import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { getUser} from '../services/api';

function MenuCard({icon,title}) {
return(
<TouchableOpacity style={styles.card}>
<Text style={styles.icon}>{icon}</Text>
<Text style={styles.cardText}>{title}</Text>
</TouchableOpacity>
)
}

export default function HomeScreen(){

return(
<SafeAreaView style={styles.container}>

<View style={styles.header}>
<View>
<Text style={styles.logo}>AllCare</Text>
<Text style={styles.subtitle}>
Cuidando de quem você ama
</Text>
</View>

<View style={styles.avatar}/>
</View>


<View style={styles.grid}>

<MenuCard
icon="🩺"
title="AGENDE SUA CONSULTA"
/>

<MenuCard
icon="🩺"
title="MEUS AGENDAMENTOS"
/>

<MenuCard
icon="🗓"
title="HISTÓRICO DE ATENDIMENTO"
/>

<MenuCard
icon="⭐"
title="AVALIAÇÃO DO ATENDIMENTO"
/>

<MenuCard
icon="📞"
title="NOS CONTATE"
/>

<MenuCard
icon="👨‍👩‍👧"
title="FAMÍLIA"
/>

</View>


<View style={styles.bottomTab}>
<Text>🏠</Text>
<Text>🔍</Text>
<Text>👤</Text>
</View>

</SafeAreaView>
)
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'#87CEFA',
padding:12
},

header:{
backgroundColor:'#fff',
borderRadius:20,
padding:20,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
marginBottom:40
},

logo:{
fontSize:34,
fontWeight:'700',
color:'#2d5f87'
},

subtitle:{
fontSize:12,
color:'#2d5f87'
},

avatar:{
width:50,
height:50,
borderRadius:25,
backgroundColor:'#ddd'
},

grid:{
flexDirection:'row',
flexWrap:'wrap',
justifyContent:'space-around'
},

card:{
width:110,
height:110,
backgroundColor:'#fff',
borderRadius:16,
justifyContent:'center',
alignItems:'center',
marginBottom:35,
shadowColor:'#000',
shadowOpacity:0.1,
shadowOffset:{width:0,height:2},
elevation:3
},

icon:{
fontSize:42
},

cardText:{
marginTop:10,
textAlign:'center',
fontSize:12,
fontWeight:'500'
},

bottomTab:{
marginTop:'auto',
backgroundColor:'#2d6b9a',
borderRadius:18,
paddingVertical:18,
flexDirection:'row',
justifyContent:'space-around'
}

});
