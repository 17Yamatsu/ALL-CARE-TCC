import React, { useState } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert,} from 'react-native';
import {  ArrowLeft, Lock, Eye, EyeOff, ShieldCheck, ArrowRight,} from 'lucide-react-native';

export default function CreatePasswordScreen({
  navigation,
  route,
}) {
  const { dadosCadastro } = route.params;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleRegister = async () => {
    if (!password || !confirmPassword) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas são diferentes');
      return;
    }

    try {
    const newUser = {
      usr_name: dadosCadastro.nome,
      usr_mail: dadosCadastro.email,
      usr_birthday: dadosCadastro.dataNascimento, // formato YYYY-MM-DD
      usr_cpf: dadosCadastro.cpf,
      usr_address_country: "Brasil",
      usr_address_state: dadosCadastro.estado,
      usr_address_city: dadosCadastro.cidade,
      usr_adress_streetname: dadosCadastro.endereco,
      usr_adress_cep: dadosCadastro.cep,
      usr_address_number: dadosCadastro.numero,
      usr_address_type: "Casa", // ou "Apartamento/Condomínio"
      usr_address_neighborhood: dadosCadastro.bairro,
      usr_pwd: password
};


      const response = await fetch(
        'http://localhost:8001/usuarios',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao cadastrar.');
      }

      Alert.alert(
        'Sucesso',
        'Cadastro finalizado',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ]
      );

    } catch (error) {
      console.log(error);

      Alert.alert(
        'Erro',
        'Não foi possível finalizar o cadastro.'
      );
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color="#2563EB" strokeWidth={2.5} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.card}>
          <View style={styles.header}>
            <View style={styles.lockCircle}>
              <Lock size={50} color="#2563EB" />
            </View>

            <Text style={styles.title}>
              Crie sua senha
            </Text>

            <Text style={styles.description}>
              Para finalizar seu cadastro,
              crie uma senha segura para sua conta.
            </Text>
          </View>

          {/* SENHA */}
          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Lock size={18} color="#2563EB" />

              <Text style={styles.label}>
                Senha
              </Text>
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Digite sua senha"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff
                    size={22}
                    color="#9CA3AF"
                  />
                ) : (
                  <Eye
                    size={22}
                    color="#9CA3AF"
                  />
                )}
              </TouchableOpacity>
            </View>

            <Text style={styles.helperText}>
              A senha deve ter pelo menos 6 caracteres.
            </Text>
          </View>

          {/* CONFIRMAR SENHA */}
          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Lock size={18} color="#2563EB" />

              <Text style={styles.label}>
                Confirmar senha
              </Text>
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Digite novamente sua senha"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={
                  !showConfirmPassword
                }
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
                  <EyeOff
                    size={22}
                    color="#9CA3AF"
                  />
                ) : (
                  <Eye
                    size={22}
                    color="#9CA3AF"
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* BOX SEGURANÇA */}
          <View style={styles.securityBox}>
            <View style={styles.securityHeader}>
              <ShieldCheck
                size={24}
                color="#2563EB"
              />

              <Text style={styles.securityTitle}>
                Dicas para uma senha segura:
              </Text>
            </View>

            <Text style={styles.securityText}>
              • Use pelo menos 6 caracteres
            </Text>

            <Text style={styles.securityText}>
              • Combine letras, números e símbolos
            </Text>

            <Text style={styles.securityText}>
              • Evite informações pessoais
            </Text>
          </View>

          {/* BOTÃO */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>
              Finalizar cadastro
            </Text>

            <ArrowRight
              size={24}
              color="#FFFFFF"
            />
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

  lockCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#10233F',
    marginBottom: 8,
  },

  description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#4B586D',
    lineHeight: 20,
    paddingHorizontal: 10,
  },

  inputContainer: {
    marginBottom: 14,
  },

  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },

  label: {
    fontSize: 13,
    marginBottom: 0,
    color: '#254A75',
    fontWeight: '600',
  },

  inputWrapper: {
    height: 50,
    backgroundColor: '#F5F8FC',
    borderWidth: 1,
    borderColor: '#E0E7FF',
    borderRadius: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
  },

  helperText: {
    marginTop: 8,
    color: '#7C8FA0',
    fontSize: 12,
  },

  securityBox: {
    backgroundColor: '#F5F8FC',
    borderRadius: 16,
    padding: 16,
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#E0E7FF',
  },

  securityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },

  securityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#254A75',
  },

  securityText: {
    fontSize: 13,
    color: '#4B586D',
    marginTop: 6,
    lineHeight: 18,
  },

  button: {
    height: 50,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});