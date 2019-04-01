const printMessage = require('./notes')
const validator = require('validator')

printMessage('Hello')

console.log(validator.isEmail('dawid@dawid.dawid'))

console.log(validator.isURL('www.google.com'))