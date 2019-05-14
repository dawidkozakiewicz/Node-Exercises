const https = require('https')
const url = 'https://api.darksky.net/forecast/adc8e1765abbd4506c2e98e7d14f5495/51,17?units=si&lang=pl'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()