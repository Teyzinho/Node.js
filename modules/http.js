const http = require('http')

const port = 8080;

const server = http.createServer((req, res) => {
    // Se a url do cliente for 'home'
    if(req.url === '/home'){
        // Tipo de conteudo que está enviando
        res.writeHead(200, {'Content-Type': 'text/html'})
        // Conteudo que está enviando
        res.end('<h1> Home page </h1>')
    }

    if(req.url === '/users'){
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
        // Conteudo tipo json
        res.writeHead(200, {'Content-Type': 'application/json'})

        res.end(JSON.stringify(users))
    }

})

// Coloca o server Online
server.listen(port, () => console.log(`Rodando na Port ${port}`))