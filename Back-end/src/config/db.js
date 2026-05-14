import mysql from 'mysql2';
import dotenv from 'dotenv';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ALLCARE'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

export default connection;
