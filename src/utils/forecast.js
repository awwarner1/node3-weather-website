const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=475381ae1e564af6a558ed082065621d&query=' + lat + ',' + lon + '&units=f'

request({url, json: true}, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service.', undefined)
    } else if (body.error) {
        callback('Unable to find location.', undefined)
    } else {
        const callbackString = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. Feels like ' + body.current.feelslike + ' degrees.'
        callback(undefined, callbackString)
    }
})
}

module.exports = forecast