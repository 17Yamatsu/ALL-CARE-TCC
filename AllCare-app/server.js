import express from 'express'
import connection from './db.js'

const app = express()
app.use(express.json())

// ➕ CRIAR USUÁRIO
app.post('/usuarios', (req, res) => {

    const {
        usr_name,
        usr_mail,
        usr_birhday,
        usr_cpf,
        usr_address,
        usr_cep,
        usr_type,
        usr_pwd,
        usr_medicalinfo
    } = req.body

    const sql = `
        INSERT INTO usuario 
        (usr_name, usr_mail, usr_birhday, usr_cpf, usr_address, usr_cep, usr_type, usr_pwd, usr_medicalinfo)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    connection.query(sql, [
        usr_name,
        usr_mail,
        usr_birhday,
        usr_cpf,
        usr_address,
        usr_cep,
        usr_type,
        usr_pwd,
        usr_medicalinfo
    ], (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json(err)
        }

        res.status(201).json({
            message: 'Usuário criado',
            id: result.insertId
        })
    })
})

app.put('/usuarios/:id', (req, res) => {

    const {id} = req.params

    const {
        usr_name,
        usr_mail,
        usr_birhday,
        usr_cpf,
        usr_address,
        usr_cep,
        usr_type,
        usr_pwd,
        usr_medicalinfo
    } = req.body

    const sql = `
        INSERT INTO usuario 
        (usr_name, usr_mail, usr_birhday, usr_cpf, usr_address, usr_cep, usr_type, usr_pwd, usr_medicalinfo)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    
        connection.query(sql, [
        usr_name,
        usr_mail,
        usr_birhday,
        usr_cpf,
        usr_address,
        usr_cep,
        usr_type,
        usr_pwd,
        usr_medicalinfo
    ], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({
                    erro: 'Email ou CPF já cadastrado'
                })
            }    
    }
    return res.status(500).json(err)
    
        if (result.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Usuário não encontrado'
        
        })
    })
})
        



// 📋 LISTAR USUÁRIOS
app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuario', (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json(err)
        }

        res.json(results)
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})