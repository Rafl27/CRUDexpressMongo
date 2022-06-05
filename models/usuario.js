const mongoose = require('mongoose');
const usuariosSchema = mongoose.Schema({
    
    cpf : {
        type : String,
        required : true
    },
    nome : {
        type : String,
        required : true
    },
    telefone : {
        type : String,
        required : true
    },
    email : {   
        type : String,
        required : true
    },
    senha : {   
        type : String,
        required : true
    },
    permissao : {
        type : Boolean,
        required : true
    },
    endereco : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('usuariosExport', usuariosSchema);
// Posts PostSchema