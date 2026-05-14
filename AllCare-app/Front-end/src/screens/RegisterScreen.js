import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import InputField from '../components/InputField';

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    cep: '',
    numero: '',
    endereco: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleCepBlur = async () => {
    if (form.cep.length === 8) { // CEP deve ter 8 dígitos
      try {
        const response = await fetch(`https://viacep.com.br/ws/${form.cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          setForm({
            ...form,
            endereco: data.logradouro || '',
            bairro: data.bairro || '',
            cidade: data.localidade || '',
            estado: data.uf || '',
          });
        } else {
          console.log('CEP não encontrado');
        }
      } catch (error) {
        console.log('Erro ao buscar endereço:', error);
      }
    }
  };

  const handleNext = () => {
    const requiredFields = [
      'nome',
      'email',
      'cpf',
      'dataNascimento',
      'cep',
      'numero',
      'endereco',
      'bairro',
      'cidade',
      'estado',
    ];

    const emptyField = requiredFields.find(
      (field) => !form[field] || form[field].trim() === ''
    );

    if (emptyField) {
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    navigation.navigate('Password', { dadosCadastro: form });
  };

  const handleGoBack = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <ArrowLeft size={24} color="#2563EB" strokeWidth={2.5} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.header}>
            <View style={styles.avatarWrapper}>
              <Text style={styles.avatarIcon}>+</Text>
            </View>
            <Text style={styles.pageTitle}>Cadastro de Paciente</Text>
            <Text style={styles.subtitle}>Preencha os dados abaixo para criar o cadastro</Text>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Nome do paciente</Text>
            <InputField
              placeholder="Digite o nome completo"
              value={form.nome}
              onChangeText={(text) => handleChange('nome', text)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <InputField
              placeholder="Digite seu email"
              value={form.email}
              onChangeText={(text) => handleChange('email', text)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>CPF</Text>
            <InputField
              placeholder="000.000.000-00"
              value={form.cpf}
              onChangeText={(text) => handleChange('cpf', text)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Data de nascimento</Text>
            <InputField
              placeholder="DD/MM/AAAA"
              value={form.dataNascimento}
              onChangeText={(text) => handleChange('dataNascimento', text)}
            />
          </View>

          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Endereço</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowItem}>
              <Text style={styles.label}>CEP</Text>
              <InputField
                placeholder="00000-000"
                value={form.cep}
                onChangeText={(text) => handleChange('cep', text)}
                onBlur={handleCepBlur}
              />
            </View>
            <View style={styles.rowItem}>
              <Text style={styles.label}>Número</Text>
              <InputField
                placeholder="Digite o número"
                value={form.numero}
                onChangeText={(text) => handleChange('numero', text)}
              />
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Endereço (rua, avenida, etc.)</Text>
            <InputField
              placeholder="Digite o endereço"
              value={form.endereco}
              onChangeText={(text) => handleChange('endereco', text)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Complemento (opcional)</Text>
            <InputField
              placeholder="Ex.: Apto 101, Bloco B, Casa 2..."
              value={form.complemento}
              onChangeText={(text) => handleChange('complemento', text)}
            />
          </View>

          <View style={styles.row}>
            <View style={styles.rowItem}>
              <Text style={styles.label}>Bairro</Text>
              <InputField
                placeholder="Digite o bairro"
                value={form.bairro}
                onChangeText={(text) => handleChange('bairro', text)}
              />
            </View>
            <View style={styles.rowItem}>
              <Text style={styles.label}>Cidade</Text>
              <InputField
                placeholder="Digite a cidade"
                value={form.cidade}
                onChangeText={(text) => handleChange('cidade', text)}
              />
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Estado</Text>
            <InputField
              placeholder="Selecione"
              value={form.estado}
              onChangeText={(text) => handleChange('estado', text)}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleNext}>
            <Text style={styles.submitButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#E6F2FF',
  },
  backButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 8,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarWrapper: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#E8F3FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarIcon: {
    fontSize: 34,
    color: '#2563EB',
    fontWeight: '700',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#10233F',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#4B586D',
    paddingHorizontal: 10,
  },
  sectionTitleWrapper: {
    marginTop: 18,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F3A65',
  },
  formGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    marginBottom: 6,
    color: '#254A75',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItem: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
