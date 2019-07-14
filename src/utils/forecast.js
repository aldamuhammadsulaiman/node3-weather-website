const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/e4acc09e868c7fb57a18a999e7ac6284/' + latitude + ','  + longitude

    request({url , json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to service!', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}
module.exports = forecast 