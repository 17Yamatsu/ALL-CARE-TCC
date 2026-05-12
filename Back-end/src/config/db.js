//importante o banco de dados
import mysql from 'mysql2';
import dotenv from 'dotenv';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'allcare'
});

connection.connect((err) => {
    //caso de erro:
    //bd desligado ou senha errada, ira devolvero err
    if(err) {
        console.error('Deu ruim, Não consegui conectar:', err);
        return;
    }
    //caso tenha dado sucesso:
    console.log('Sucesso! Conectado ao banco de dados')

});
    export default connection;