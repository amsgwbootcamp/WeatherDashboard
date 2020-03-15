// Here we run our AJAX call to the OpenWeatherMap API
function getInfo(searchCity)
{
    var APIKey = "9c487a7f9aa142c820a7b4aa2d194f2f";
    //var searchCity = $("#search").val();
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
            + searchCity + "&appid=" + APIKey;

    //alert("We are looking for " + searchCity);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
  
        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);
  
        // Transfer content to HTML
        $(".displayCity").text(searchCity);
        $(".displayHumidity").text("Humidity: " + response.main.humidity  + "%");
        $(".displayWindSpeed").text("Wind Speed: " + response.wind.speed  + " MPH");
        //$(".displayUVIndex").text("UV Index: " + response.name);
          
        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var degreeSymbol = "\xB0";
        // add temp content to html
        $(".displayTemp").text("Temperature: " + tempF.toFixed(2) + " " + degreeSymbol + "F");
          
        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
    }); 
}

/* function getFiveDay(searchCity)
{
    var APIKey = "9c487a7f9aa142c820a7b4aa2d194f2f";
    // Here we are building the URL we need to query the database
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" 
            + searchCity + "&appid=" + APIKey;

    alert("We are looking for " + searchCity);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
  
        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);
  
        // Transfer content to HTML
        //$(".displayCity").text(searchCity);
        //$(".displayHumidity").text("Humidity: " + response.main.humidity);
        //$(".displayWindSpeed").text("Wind Speed: " + response.wind.speed);
        //$(".displayUVIndex").text("UV Index: " + response.name);
          
        // Convert the temp to fahrenheit
        //var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        // add temp content to html
        //$(".displayTemp").text("Temperature: " + tempF.toFixed(2));
          
        // Log the data in the console as well
        //console.log("Wind Speed: " + response.wind.speed);
        //console.log("Humidity: " + response.main.humidity);
        //console.log("Temperature (F): " + tempF);
    }); 
} */

$(".searchButton").on("click", function() {
    var str = $("#search").val();  
//    alert("button has been clicked");
//    alert(str);
    $(".container").append("<div>"+ str + "</div>");
    getInfo(str);
    //getFiveDay(str);
    $("#search").val("");
});
