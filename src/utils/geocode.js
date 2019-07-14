const request = require('request')


const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxkYW11aGFtbWFkc3VsYWltYW4iLCJhIjoiY2p4cjgzd2M5MDY2bjNtbnZqN3cyZTF0YyJ9.GU-v4K9X4pV5yZDvFoLxSA'
 
    request({ url, json:true}, (error, {body}) =>{
       if(error){
          callback('Unable to connect to location service!', undefined)
       } else if (body.features.length === 0){
          callback('Unable to find location. Try another search', undefined)
       } else {
          callback(undefined, {
             latitude : body.features[0].center[1],
             longitude: body.features[0].center[0],
             location : body.features[0].place_name
          })
       }
    })
 }

 module.exports = geocode