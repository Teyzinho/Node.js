// npm i nodemon --save-dev (Nodemon executa o código node toda vez que tiver uma mudança)

//Importa Peson
const { Person } = require("./person");

// require("./modules/path")
// require("./modules/fs")
// require ("./modules/http")

require("./modules/express")

const person = new Person('zé')

console.log(person.sayMyName())