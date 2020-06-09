const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=aa23e9735665777ee02e519418f74c63&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const { temperature, precip, weather_descriptions } = body.current
            callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees out. There is a ${precip}% chance of rain.`)
        }
    })
}

module.exports = forecast