require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5d068f793e9aa16ed40894f0', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})