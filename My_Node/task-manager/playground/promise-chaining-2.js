require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d064919dfb0ad3f7454c91d').then((task) => {
    console.log(`${task} ojojoj`)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(`${result} kuku`)
}).catch((e) => {
    console.log(e)
})