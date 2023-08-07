// Criando server pelo Express
const express = require('express')
const UserModel = require('../src/models/user.model')

// Inicia o express
const app = express();

// Sinalisa que iremos receber json nas nossas requisições
app.use(express.json());

// Url da resposta
app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1>Hello World!</h1>')
})

// retorna todos usuários
app.get('/users', async (req, res) => {

    try {
        const users = await UserModel.find({});

        res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }

})

// Retorna usuários pelo Id
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id)

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

// Registrar Usuário
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)

        // Status 201 significa que o registro foi criado com sucesso
        res.status(201).json(user);

    } catch (error) {
        res.status(500).send(error.message)
    }
})

// atualizar usuário
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id

        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true }) //New para retornar o registro atualizado

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Deletar usuário
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id

        const user = await UserModel.findByIdAndRemove(id)

        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

const port = 8080

app.listen(port, () => console.log(`Running in localhost:${port}`))