$(document).ready(function() {
    const apiKey = 'bfd723830b59c52067da108a378280c1';
    $('form').submit(function(event){
        event.preventDefault();
        const city = $('#city').val();
        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, function(data){
            console.log(data);
            $('#weatherCard').append(`
                <div id="info">
                    <h1>${data.name}, ${data.sys.country}</h1>
                    <h3>${Math.round(data.main.temp)}</h3>
                    <p>${data.weather[0].description}</p>
                    <div id="details">
                        <p>Feels like: ${data.main.feels_like} <sup>o</sup></p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Wind: ${data.wind.speed} km/h</p>
                        <span>Min: ${data.main.temp_min} <sup>o</sup> </span><span> Max: ${data.main.temp_max}<sup>o</sup></span>
                        </div>
                </div>
            `)
        })
        
    })
})
