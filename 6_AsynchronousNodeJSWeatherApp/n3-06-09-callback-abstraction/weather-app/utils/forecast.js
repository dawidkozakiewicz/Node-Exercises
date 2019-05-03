const request = require('request')

const forecast = (address, callback) => {
    const url = 'https://api.darksky.net/forecast/adc8e1765abbd4506c2e98e7d14f5495/'+ address + '?units=si&lang=pl'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                forecast: response.body.daily.data[0].summary + ' Obecnie jest ' + response.body.currently.temperature + ' stopni Celsiusza. Prawdopodobieństwo deszczu wynosi ' + response.body.currently.precipProbability + '%',
                address: url
            })
        }
    })
}

module.exports = forecast