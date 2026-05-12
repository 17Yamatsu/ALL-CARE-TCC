export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:8001/usuarios');
    const users = await response.json();

    console.log('EMAIL DIGITADO:', email);
    console.log('SENHA DIGITADA:', password);
    console.log('USUÁRIOS DO BANCO:', users);

    return users.find(
      (user) =>
        user.usr_mail === email.trim() &&
        user.usr_pwd === password.trim()
    );

  } catch (error) {
    console.error('Erro na API:', error);
    return null;
  }
};