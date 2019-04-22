const request = require('request')

const url = 'https://api.darksky.net/forecast/adc8e1765abbd4506c2e98e7d14f5495/51.1000000,17.0333300?units=si&lang=pl'

request({ url: url, json: true }, (error, response) => {
    const data = response.body
    const temperature = data.currently.temperature
    const precipProbability = data.currently.precipProbability
    const allday = data.daily.data[0].summary
    console.log(`Jet aktualnie ${temperature} stopni Celsjusza. Prawdopodobieństwo deszczu wynosi ${precipProbability}% Przewidywana pogoda: ${allday}`)
})