const mongoose = require('mongoose')
module.export = mongoose.connect('mongodb://localhost/db_finance')
/*
mongoose.Error.messages.general.required = "O atributo '{PATH}' e obrigatorio."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado e menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado e maior que o limite maximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' nao e valido para o atributo '{PAHT}'."
*/
