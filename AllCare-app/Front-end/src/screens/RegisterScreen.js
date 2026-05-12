import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function RegisterScreen() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        cpf: "",
        dataNascimento: "",
        cep:"",
        numero:"",
        endereco:"",
        complemento:"",
        bairro:"",
        cidade:"",
        estado:"",
    });
    const handleChange = (field, value) => {
  setForm({ ...form, [field]: value });
    }
};

const handleCepBlur = async () => {
  try {
    const response = await fetch(`http://localhost:8001/cep/${form.cep}`);
    const data = await response.json(); // precisa usar .json() no fetch
    setForm({
      ...form,
      endereco: data.rua,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
    });
  } catch (error) {
    console.log("Erro ao buscar endereço:", error);
  }
};

    const handleNext = () => {
            //envia od dados coletados para a tela (senha)
            navigation.navigate("Password", {dadosCadastro: form});
        return (
            <ScrollView style={styles.container}>
         <InputField placeholder="Nome de usuário" value={form.nome} onChangeText={(text) => handleChange("nome", text)} />
         <InputField placeholder="Email" value={form.email} onChangeText={(text) => handleChange("email", text)} />
         <InputField placeholder="CPF" value={form.cpf} onChangeText={(text) => handleChange("cpf", text)} />
         <InputField placeholder="Data de nascimento" value={form.datanascimento} onChangeText={(t) => handleChange("dataNascimento", text)} />
         <InputField placeholder="CEP" value={form.cep} onChangeText={(text) => handleChange("cep", text)} onBlur={handleCepBlur} />
         <InputField placeholder="Número" value={form.numero} onChangeText={(text) => handleChange("numero", text)} />
         <InputField placeholder="Endereço" value={form.endereco} onChangeText={(text) => handleChange("endereco", text)} />
         <InputField placeholder="Complemento" value={form.complemento} onChangeText={(text) => handleChange("complemento", text)} />
         <InputField placeholder="Bairro" value={form.bairro} onChangeText={(text) => handleChange("bairro", text)} />
         <InputField placeholder="Cidade" value={form.cidade} onChangeText={(text) => handleChange("cidade", text)} />
         <InputField placeholder="Estado" value={form.estado} onChangeText={(text) => handleChange("estado", text)} />
          <Button title="Próximo" onPress={handleNext} />
        </ScrollView>
        );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#fff',
        },
    });