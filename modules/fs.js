const fs = require('fs')
const path = require('path')

// Função de criar Pasta
fs.mkdir(path.join(__dirname, '/pasta-teste'), (error) => {
    if (error) {
        // return console.log('Error: ', error)
    }

    console.log('Pasta criada com sucesso!')
})

// Função de Criar um arquivo, Primeiro o path do arquivo, o conteudo, e o callback
fs.writeFile(path.join(__dirname, '/pasta-teste', 'teste.txt'), 'hello World! ', (error) => {
    if (error) {
        return console.log('Error: ', error)
    }

    console.log('Arquivo Criado com sucesso!')

    // Função Adiciona mais conteudo à um arquivo
    fs.appendFile(path.join(__dirname, '/pasta-teste', 'teste.txt'), 'Hello Node!', (error) => {
        if (error) {
            return console.log('Error: ', error)
        }

        console.log('Texto Adicionado com sucesso!')
    })

    // Função para Ler arquivos, Passar sistema de caracteres como segundo parâmetro, e o callback
    fs.readFile(path.join(__dirname, '/pasta-teste', 'teste.txt'), 'utf-8', (error, data) => {
        if (error) {
            return console.log('error : ', error)
        }

        console.log(data)
    })

})



