const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema de la tabla usuarios
// autor: @Jonathan Morocho
const UserSchema = new Schema({
    first_name: {type: String},
    last_name: {type: String},
    DNI: { type: String},
    address: { type: String},
    telephone: { type: String},
    email: { type: String},
    age: { type: String}
});

module.exports = User = mongoose.model('Users', UserSchema);