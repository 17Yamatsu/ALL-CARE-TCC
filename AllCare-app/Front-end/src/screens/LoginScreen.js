import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { loginUser } from '../services/api';
import InputField from '../components/InputField';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
  try {
    const user = await loginUser(
      email.trim(),
      password.trim()
    );

    if (user) {
      navigation.replace('Home', { user });
    } else {
      alert('Email ou senha incorretos');
    }
  } catch (error) {
    console.error(error);
    alert('Erro ao conectar com o servidor');
  }
};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        <View style={styles.logoArea}>
          <Text style={styles.logo}>
            AllCare
          </Text>

          <Text style={styles.slogan}>
            Cuidando de quem você{'\n'}
            ama, em todos os momentos
          </Text>
        </View>

        <Text style={styles.title}>
          Fazer Login
        </Text>

        <InputField
          placeholder="insira seu email..."
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          placeholder="insira sua senha..."
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.checkboxRow}>
          <View style={styles.checkbox}/>
          <Text style={styles.policy}>
            Aceito de Política de Privacidade Termos de Uso
          </Text>
        </View>

        {/* 🔥 BOTÃO COM NAVEGAÇÃO */}
        <TouchableOpacity 
          style={styles.button}
          onPress={handleLogin}
          // onPress={() => navigation.replace('Home')}
        >
          <Text style={styles.buttonText}>
            ENTRAR
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line}/>
          <Text style={styles.or}>Ou</Text>
          <View style={styles.line}/>
        </View>

        <Text style={styles.noAccount}>
          Não tem conta?
        </Text>

        <TouchableOpacity>
          <Text style={styles.signup}>
            cadastrar-se
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#bbaead',
    padding:12
  },

  card:{
    flex:1,
    backgroundColor:'#87CEFA',
    borderRadius:18,
    paddingHorizontal:28,
    paddingTop:70
  },

  logoArea:{
    alignItems:'center',
    marginBottom:50
  },

  logo:{
    fontSize:40,
    fontWeight:'700',
    color:'#2d5f87'
  },

  slogan:{
    fontSize:14,
    textAlign:'center',
    color:'#2d5f87'
  },

  title:{
    fontSize:34,
    fontWeight:'600',
    marginBottom:25,
    color:'#222'
  },

  checkboxRow:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:50
  },

  checkbox:{
    width:18,
    height:18,
    borderWidth:1,
    borderColor:'#111',
    marginRight:8
  },

  policy:{
    fontSize:10
  },

  button:{
    backgroundColor:'#fff',
    width:180,
    height:50,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:20
  },

  buttonText:{
    fontSize:22,
    fontWeight:'600'
  },

  forgot:{
    textAlign:'center',
    color:'#eef7ff',
    marginBottom:60,
    fontSize:16
  },

  dividerContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:25
  },

  line:{
    flex:1,
    height:1,
    backgroundColor:'#333'
  },

  or:{
    marginHorizontal:15,
    fontSize:22
  },

  noAccount:{
    textAlign:'center',
    fontSize:28,
    fontWeight:'600'
  },

  signup:{
    textAlign:'center',
    marginTop:10,
    fontSize:20,
    color:'#eef7ff'
  }

});
