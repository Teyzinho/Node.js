//Maneira de pegar o caminho dos aruivos
const path = require('path')

// Basename Nome do arquivo atual
console.log(path.basename(__filename))

// dirname Nome do Diretório Atual
console.log(path.dirname(__filename))

// extname Extensão do arquivo
console.log(path.extname(__filename))

// parse Criar objeto Path
console.log(path.parse(__filename))

// Junta Caminhos de arquivos
console.log(path.join(__dirname, "test", "teste.js"))