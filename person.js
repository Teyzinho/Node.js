class Person {
    constructor(name){
        this.name = name;
    }

    sayMyName(){
        return `My name is ${this.name}!`;
    }
}

//Exportando Person
module.exports = {
    Person
};