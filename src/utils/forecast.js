const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=b8a29c2e59d84d33b17135242200810&q=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        // let data1 = JSON.parse(body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Its a '+ body.current.condition.text + ' day. ' + 'It currently '+ body.current.temp_c + ' degrees out.')
        }
    })
}

module.exports = forecast