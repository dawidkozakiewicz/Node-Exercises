const request = require('request')

const url = 'https://api.darksky.net/forecast/adc8e1765abbd4506c2e98e7d14f5495/51.1000000,17.0333300'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})