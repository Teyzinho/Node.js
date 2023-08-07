// Criando server pelo Express
const express = require('express')

// Inicia o express
const app = express();

// Url da resposta
app.get('/home', (req,res) => {
    res.contentType('application/html')
    res.status(200).send('<h1>Hello World!</h1>')
})

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'John',
            email: 'john@email.com'
        },
        {
            name: 'jose',
            email: 'jose@email.com'
        },
        {
            name: 'rafa',
            email: 'rafa@email.com'
        },
    ]

    // Retorna Json
    res.status(200).json(users)
})

const port = 8080

app.listen(port, () => console.log(`Running in localhost:${port}`))