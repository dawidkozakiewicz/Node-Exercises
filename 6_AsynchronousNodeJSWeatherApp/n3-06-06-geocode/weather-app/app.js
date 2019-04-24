const request = require('request')

// const url = 'https://api.darksky.net/forecast/adc8e1765abbd4506c2e98e7d14f5495/51.10773,17.03533?units=si&lang=pl'

// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.daily.data[0].summary + ' Aktualnie mamy ' + response.body.currently.temperature + ' stopni. Prawdopodobieństwo deszczu wynosi: ' + response.body.currently.precipProbability + ' %')
// })

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Lisboa.json?access_token=pk.eyJ1IjoidHVyZ29yMTk5NiIsImEiOiJjanV2aDYyazMwMWt5M3pxaHl0MmNtNzNhIn0.Fe0DCxTICfJ9zzbbxv9bmw'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})


const restCountries ='https://restcountries.eu/rest/v2/all'

request({url: restCountries, json: true}, (error, response) => {
    const country = response.body[0].nativeName
    console.log(`Debile sami na siebie mówią tak: ${country}`)
      
    })
    
