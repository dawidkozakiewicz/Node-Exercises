const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Pomogę Ci')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('Your weather')
})

app.get('/prawda', (req, res) => {
    res.send('Księża to pedofile!')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})