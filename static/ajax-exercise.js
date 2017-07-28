"use strict";

// PART 1: SHOW A FORTUNE

function showFortune(results) {
    var fortune = results;
    $('#fortune-text').html(fortune);
    // TODO: get the fortune and show it in the #fortune-text div
}

function getFortune() {
    $.get('/fortune', showFortune);
}

$('#get-fortune-button').on('click', getFortune);


// PART 2: SHOW WEATHER

function showWeather(results) {

    var forecast = results['forecast'];
    // var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    $('#weather-info').html(forecast);
}

function getWeather(evt) {
    evt.preventDefault();

    var zipcode =  {'zipcode': $('#zipcode-field').val()};

    $.get('/weather.json', zipcode, showWeather);
}
    // TODO: request weather with that URL and show the forecast in #weather-info

$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


