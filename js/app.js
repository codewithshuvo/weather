const product_KEY = `3fefbe666adc27d6df694bc36569d288`
const cityName = () => {
    const cityTemparature = document.getElementById('review-city').value
    cityTemparature.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityTemparature}&appid=${product_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => tempatureData(data))


}

const cityTemp = (id, text) => {
    document.getElementById(id).innerText = text;
}
const tempatureData = temperature => {
    cityTemp('city', temperature.name)
    cityTemp('city-temp', temperature.main.temp)
    cityTemp('weather-city', temperature.weather[0].main)
    console.log(temperature)
    // set icon part 
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imageIcon = document.getElementById('icon-image')
    imageIcon.setAttribute('src', url)
}