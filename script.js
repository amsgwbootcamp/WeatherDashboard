var searchLat;
var searchLon;
var currentDate;
var counter = 1;

//
// Function to process the city button that was clicked from the list.  
//
function cityButtonClickListener(event) 
{
    var a = this.event.target.value;
    getInfo(a);
    getFiveDay(a);
    localStorage.setItem("lastCity",a);
}
//
// Function to create a new city button that was entered in the search box.  
//
function createCityButton(str) {
var cityButton = $("<input/>").attr({
             type: "button",
             id: "btn"+counter,
             value: str,
             onclick: "cityButtonClickListener()"
        });
        cityButton.css("width","100%");
        cityButton.css("border","none");
        cityButton.css("text-align","left");
        counter = counter + 1;
        $(".container").append(cityButton);
        $(".container").append("<br>");
        localStorage.setItem("lastCity",str);
}

//
// Function to get all of the information needed for the five day forecast.  
//
function getFiveDay(searchCity)
{
    var APIKey = "9c487a7f9aa142c820a7b4aa2d194f2f";
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" 
            + searchCity + "&appid=" + APIKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
  
        // Transfer content to HTML
        // Entry 1
        $(".fTitle").text("5 Day Forecast:");
        $(".fTitle").css("visibility","visible");
        var mDate1 = response.list[0].dt_txt;
        var dMonth1 = mDate1.substring(5,7);
        var dDay1 = mDate1.substring(8,10);
        var dYear1 = mDate1.substring(0,4);
        var dDate1 = dMonth1 + "/" + dDay1 + "/" + dYear1;
        $(".displayDate1").text(dDate1);
        var tempF1 = (response.list[4].main.temp - 273.15) * 1.80 + 32;
        var degreeSymbol = "\xB0";
        $(".displayTemp1").text("Temperature: " + tempF1.toFixed(2)  + " " + degreeSymbol + "F");
        var iconcode = response.list[4].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $("#wicon1").attr("src",iconurl);
        $("#wicon1").css("visibility","visible");
        $(".displayHumidity1").text("Humidity: " + response.list[4].main.humidity + "%");
        // Entry 2
        var mDate2 = response.list[8].dt_txt;
        var dMonth2 = mDate2.substring(5,7);
        var dDay2 = mDate2.substring(8,10);
        var dYear2 = mDate2.substring(0,4);
        var dDate2 = dMonth2 + "/" + dDay2 + "/" + dYear2;
        $(".displayDate2").text(dDate2);
        var tempF2 = (response.list[12].main.temp - 273.15) * 1.80 + 32;
        var degreeSymbol = "\xB0";
        $(".displayTemp2").text("Temperature: " + tempF2.toFixed(2)  + " " + degreeSymbol + "F");
        var iconcode = response.list[12].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $("#wicon2").attr("src",iconurl);
        $("#wicon2").css("visibility","visible");
        $(".displayHumidity2").text("Humidity: " + response.list[12].main.humidity + "%");
        // Entry 3
        var mDate3 = response.list[16].dt_txt;
        var dMonth3 = mDate3.substring(5,7);
        var dDay3 = mDate3.substring(8,10);
        var dYear3 = mDate3.substring(0,4);
        var dDate3 = dMonth3 + "/" + dDay3 + "/" + dYear3;
        $(".displayDate3").text(dDate3);
        var tempF3 = (response.list[20].main.temp - 273.15) * 1.80 + 32;
        var degreeSymbol = "\xB0";
        $(".displayTemp3").text("Temperature: " + tempF3.toFixed(2)  + " " + degreeSymbol + "F");
        var iconcode = response.list[20].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $("#wicon3").attr("src",iconurl);
        $("#wicon3").css("visibility","visible");
        $(".displayHumidity3").text("Humidity: " + response.list[20].main.humidity + "%");
        // Entry 4
        var mDate4 = response.list[24].dt_txt;
        var dMonth4 = mDate4.substring(5,7);
        var dDay4 = mDate4.substring(8,10);
        var dYear4 = mDate4.substring(0,4);
        var dDate4 = dMonth4 + "/" + dDay4 + "/" + dYear4;
        $(".displayDate4").text(dDate4);
        var tempF4 = (response.list[28].main.temp - 273.15) * 1.80 + 32;
        var degreeSymbol = "\xB0";
        $(".displayTemp4").text("Temperature: " + tempF4.toFixed(2)  + " " + degreeSymbol + "F");
        var iconcode = response.list[28].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $("#wicon4").attr("src",iconurl);
        $("#wicon4").css("visibility","visible");
        $(".displayHumidity4").text("Humidity: " + response.list[28].main.humidity + "%");
        // Entry 5
        var mDate5 = response.list[32].dt_txt;
        var dMonth5 = mDate5.substring(5,7);
        var dDay5 = mDate5.substring(8,10);
        var dYear5 = mDate5.substring(0,4);
        var dDate5 = dMonth5 + "/" + dDay5 + "/" + dYear5;
        $(".displayDate5").text(dDate5);
        var tempF5 = (response.list[36].main.temp - 273.15) * 1.80 + 32;
        var degreeSymbol = "\xB0";
        $(".displayTemp5").text("Temperature: " + tempF5.toFixed(2)  + " " + degreeSymbol + "F");
        var iconcode = response.list[36].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $("#wicon5").attr("src",iconurl);
        $("#wicon5").css("visibility","visible");
        $(".displayHumidity5").text("Humidity: " + response.list[36].main.humidity + "%");
        
    }); 
} 
//
// Function to get information for the current day forecast.  
//
function getInfo(searchCity)
{
    currDate = moment().format('MMMM Do YYYY');
    var APIKey = "9c487a7f9aa142c820a7b4aa2d194f2f";
    
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
            + searchCity + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
  
        // Transfer content to HTML
        $(".displayCity").text("Weather for: " + searchCity + " on " + currentDate);
        var iconcode = response.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $("#wicon").attr("src",iconurl);
        $("#wicon").css("visibility","visible");
        $(".displayHumidity").text("Humidity: " + response.main.humidity  + "%");
        $(".displayWindSpeed").text("Wind Speed: " + response.wind.speed  + " MPH");
        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var degreeSymbol = "\xB0";
        // add temp content to html
        $(".displayTemp").text("Temperature: " + tempF.toFixed(2) + " " + degreeSymbol + "F");
        searchLat = response.coord.lat;
        searchLon = response.coord.lon;
        getUVIndex(searchLon,searchLat);
        $(".fTitle").css("visibility","visible");
    }); 
}
//
// Function to get the UV Index and color code it based on the index level.  
//
function getUVIndex(cityLon, cityLat)
{
    var APIKey = "9c487a7f9aa142c820a7b4aa2d194f2f";
    //var searchCity = $("#search").val();
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" 
            + APIKey + "&lat=" + cityLat + "&lon=" + cityLon;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
        $(".displayUVIndex").text("UV Index: " + response.value);
        $(".displayUVIndex").show();
        var uvIndex = response.value;

        switch(parseInt(uvIndex))
        {
            case 0:
            case 1:
            case 2:
            case 3:
                $(".displayUVIndex").css("background-color","green");
                break;
            case 4:
            case 5:
            case 6:
                 $(".displayUVIndex").css("background-color","yellow");
                 break;
            case 7:
            case 8:
                $(".displayUVIndex").css("background-color","orange");
                break;
            default:
                $(".displayUVIndex").css("background-color","red");
                break;
        }
    }); 
}
//
// Event listeners.  
//
$(".clearButton").on("click", function()
{
    localStorage.clear();
});

$(".searchButton").on("click", function() {

    var str = $("#search").val();
    getInfo(str);
    getFiveDay(str);
    createCityButton(str);
    $("#search").val("");  
});
//
// Initial setup of all buttons that are used in the html.  
//
$(document).ready(function(){
    
    currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    var lastSearch = localStorage.getItem("lastCity");
    if (lastSearch !== null)
    {
        getInfo(lastSearch);
        getFiveDay(lastSearch);
        $("#search").val("");  
    }
    else
    {
        $(".displayCity").text("Please enter a city to search for on the left");
        $(".displayUVIndex").css("visiblity","hidden");
        $(".fTitle").css("visibility","hidden");
        $("#wicon").css("visibility","hidden");
        $("#wicon1").css("visibility","hidden");
        $("#wicon2").css("visibility","hidden");
        $("#wicon3").css("visibility","hidden");
        $("#wicon4").css("visibility","hidden");
        $("#wicon5").css("visibility","hidden");
    }
});