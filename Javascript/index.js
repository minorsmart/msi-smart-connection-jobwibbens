var mijnVariabele;
mijnVariabele = 'Job';
console.log(mijnVariabele)


function myFunction() {
    document.getElementById("demo").innerHTML  ="Dit is een test";
    alert("Succesvolle test");
      }

function myFunction1() {
    document.getElementById("foto").innerHTML = "Dit is een test";
}

// google API


           // WeerAPI
           function weatherBalloon( cityID ) {
            var key = 'ed17490d1c5f059d0c7d79217d96eb9f';
            fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
            drawWeather(data);
             })
            .catch(function() {
               // catch any errors
             });
            }

            window.onload = function() {
            weatherBalloon( 2750053 );
            }

            function drawWeather( d ) {
            var celcius = Math.round(parseFloat(d.main.temp)-273.15);
            var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
           
            document.getElementById('location').innerHTML = d.name;
            document.getElementById('temp').innerHTML = celcius + '&deg;';
            document.getElementById('description').innerHTML = d.weather[0].description;
            }
//covidAPI
 fetch('https://api.covid19api.com/summary')
            .then(function(resp) {return resp.json()}) //convert data to json
            .then(function(data){
                console.log(data);
                console.log(data.Countries[119].Country);
                console.log(data.Countries[119].TotalDeaths);
                console.log(data.Countries[119].NewDeaths);
    
                document.getElementById("land").innerHTML = (data.Countries[119].Country);
                document.getElementById("datum").innerHTML = (data.Countries[119].Date);
                document.getElementById("nieuwe doden").innerHTML = (data.Countries[119].NewDeaths);
                document.getElementById("totaal doden").innerHTML = (data.Countries[119].TotalDeaths);
                document.getElementById("nieuwe besmettingen").innerHTML = (data.Countries[119].NewConfirmed);
                document.getElementById("totaal besmettingen").innerHTML = (data.Countries[119].TotalConfirmed);
            })
            .catch(function(){ //catch any errors
            });
            
