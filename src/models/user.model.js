const mongoose = require('mongoose')

// Criação do Schema com suas Propriedades e regras
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
    }
});

// Criação do Model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;