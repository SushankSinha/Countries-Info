
document.getElementById('main-card-body').style.display = 'none';

async function myFunc() {
try {
let country = document.getElementById("inputCountry").value;

  const countryName = country.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toLowerCase()
  );

  let promise = fetch("https://restcountries.com/v3.1/all");
  promise
    .then((data) => data.json())
    .then((country) => {
      country.forEach((obj) => {
        if (
          countryName == obj.name.common.toLowerCase() ||
          countryName == obj.cca3.toLowerCase()
        ) {
          document.getElementById('main-card-body').style.display = 'grid';

           document.getElementById(
            "first"
          ).innerHTML = `${obj.name.common.toUpperCase()}`;

          document.getElementById("first-flag").src = obj.flags.png;
          document.getElementById(
            "capital"
          ).innerHTML = `Capital : <b> ${obj.capital} </b>`;
          document.getElementById(
            "continent"
          ).innerHTML = `Continent : <b> ${obj.continents} </b>`;
          document.getElementById(
            "countryCode"
          ).innerHTML = `Country Code : <b> ${obj.cca3} </b>`;
          document.getElementById(
            "latlong"
          ).innerHTML = `Latitude, Longitude : <b> ${obj.latlng} </b>`;

          document.getElementById(
            "population"
          ).innerHTML = `Population : <b> ${obj.population} </b>(Approx.)`;
          document.getElementById(
            "timezone"
          ).innerHTML = `Time Zone : <b> ${(obj.timezones).slice(0,3)} </b>`;
          document.getElementById(
            "info"
          ).href = `https://en.wikipedia.org/wiki/${obj.name.common}`;

          document.getElementById("inputCountry").value = "";      
          document.getElementById("bottomText").innerHTML = "";
        }
      });
    });
} catch (err){
  alert('error')
}
}
myFunc ();

