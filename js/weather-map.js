// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US",
//     units: "imperial"
// }).done(function(data) {
//     console.log(data);
// });


$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat: 29.423017,
    lon: -98.48527,
    units: "imperial"
}).done(function (data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);

    $("#current-weather").append("<p>" + data.current.temp + " °F   " +  "Feels Like" + "    " +  data.current.feels_like + "°F" + "<p>")
    // $("#current").append("<p>" + data.current.temp + " °F   " +  "</p>")
    // $("#feel").append("<p>" + "Feels Like" + "    " +  data.current.feels_like + "°F" + "</p>")
    $("#current-weather").append("<img src='http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png'>")
    console.log('A step further - information for tomorrow: ', data.daily[1]);
    data.daily.forEach(function (dailyForcast, index) {
        if (index < 5) {
            console.log(new Date(dailyForcast.dt * 1000));
            console.log(dailyForcast)

            $("#forcast").append("<div class='card w-25'>")
            // $("#forcast").append("<br>")
            $("#forcast").append("<p>" + new Date(dailyForcast.dt * 1000) + "</p>").after
            $("#forcast").append("<p>" + " High" + "  " + dailyForcast.temp.max + "   " + "Low" + "   " +  dailyForcast.temp.min + "</p>")
            $("#forcast").append("<p>" + dailyForcast.weather[0].description + "</p>")
            // $("#forcast").append("<p>" + dailyForcast.weather[0].id + "</p>")
            $("#forcast").append("<img src='http://openweathermap.org/img/wn/" + dailyForcast.weather[0].icon + "@2x.png'>")
            // $("#forcast").append("<br>")
            $("#forcast").append("</div>")
            // $("#forcast").append("<p>" + dailyForcast.temp.max + "</p>")
        }

        let current_datetime = new Date()
        console.log(current_datetime.toString())
    })
});




