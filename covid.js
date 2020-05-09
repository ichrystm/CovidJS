
function getCovidStats() {
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/28')
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        
        let population = data.location.country_population;
        let cases = data.location.latest.confirmed;
        let deaths = data.location.latest.deaths;

        document.getElementById('npopulation').innerHTML = population.toLocaleString('en');
        document.getElementById('ncases').innerHTML = cases.toLocaleString('en');
        document.getElementById('ndeaths').innerHTML = deaths.toLocaleString('en');

        
    })
    .catch(function() {
        console.log("error");
    })
}

getCovidStats();