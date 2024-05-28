var inputvalue = document.querySelector('#cityinput')
var btn = document.getElementById('btn')
var cityOutput = document.querySelector('#cityoutput')
var description = document.querySelector('#description')
var tempOutput = document.querySelector('#temp')
var windOutput = document.querySelector('#wind')
var apik = "0b2b14838f3b4e346c6ed0e5c7fb0ce7"

function convertion(val)
{
    return (val - 273).toFixed(3)
}



btn.addEventListener('click', function(){
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputvalue.value +'&appid='+ apik)
    .then(res => res.json())

    .then(data=>{
        var nameval = data['name']
        var descrip = data['weather'][0]['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']

        cityOutput.innerHTML= `Weather of <span>${nameval}</span>`
        description.innerHTML = `Sky conditions: <span>${descrip}</span>`
        tempOutput.innerHTML = `Temperature: <span>${ convertion(temperature)} C </span>`
        windOutput.innerHTML= `Wind Speed: <span>${windspeed}km/h</span>`

    })

    .catch(err=> alert('You entered Wrong City Name'));
})