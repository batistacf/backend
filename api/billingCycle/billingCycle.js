const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: {type: String, require: true },
  value: {type: Number, min: 0, min: 0, require: true }
})

const debitSchema = new mongoose.Schema ({
  name: {type: String, require: true},
  value: {type: Number, min: 0, require: [true, 'Informe o valor do debito!']},
  status: {type: String, require: false, uppercase: true},
    enum: ['PAGO','PENDENTE', 'AGENDADO' ]

})

const billingCycleSchema = new mongoose.Schema ({
  name: {type: String, require: true},
  month: {type: Number, min: 1, max: 12, require: true},
  year: {type: Number, min: 1970, max: 2100, require: true},
  credits:[creditSchema],
  debts:[debitSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
