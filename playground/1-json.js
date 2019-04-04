const fs = require('fs')


// const book = {
//     title: "Koziol Matol",
//     author: "Kornel Makuszynski"
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer)
// const dataJSON = dataBuffer.toString()
// console.log(dataJSON)
// const data = JSON.parse(dataJSON)
// console.log(data)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)
data.name = 'David'
data.age = 40
const ready = JSON.stringify(data)
fs.writeFileSync('1-json.json', ready)


