const url = 'https://api.openweathermap.org/data/2.5/'
const key = '893ffe3a4822cd5557db1a77a14efdeb'

const setQuery = (e) => {
if (e.keyCode == '13')
getResult(searchBar.value)
}

const getResult = (cityName) => {
let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
fetch(query)
.then(weather => {
    return weather.json()
})
.then(displayResult)
}

const displayResult = (result) => {
let city = document.querySelector('.city')
city.innerText = `${result.name}, ${result.sys.country}`

let temp = document.querySelector('.temp')
temp.innerHTML = `${Math.round(result.main.temp)}<span>°c</span>`

let desc = document.querySelector('.desc')
desc.innerText = result.weather[0].description

let minMax = document.querySelector('.min-max')
minMax.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c`
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)
