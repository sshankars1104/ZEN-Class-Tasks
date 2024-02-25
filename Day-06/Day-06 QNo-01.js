//---------------------------------Day-06 QNo-01----------------------------------------

//---------------------Solving problems using array functions on rest countries data--------
//--------------------------------(https://restcountries.com/v3.1/all).---------------------

const XMLHttpRequest = require("xhr2");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {


  //--------a.Get all the countries from Asia continent /region using Filter function.---------------------

    
    
  const data = JSON.parse(xhr.responseText);

  const asianCountries = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].region === "Asia") {
      asianCountries.push(data[i]);
    }
  }
  console.log(asianCountries);

  //--------b.Get all the countries with a population of less than 2 lakhs using Filter function---------------

    
    
    
  const countriesWithLessThan2LakhsPopulation = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].population < 200000) {
      countriesWithLessThan2LakhsPopulation.push(data[i]);
    }
  }
  console.log(countriesWithLessThan2LakhsPopulation);

    
    
    
  //--------c.Print the following details name, capital, flag, using forEach function---------------------------

    
    
    
  data.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital[0]);
    console.log("Flag:", country.flags.png);
    console.log("--------------------------"); //for space separated
  });

    
    
    
  //--------d.Print the total population of countries using reduce function---------------------------

    
    
    
  const totalPopulation = data.reduce((accumulator, country) => {
    return accumulator + country.population;
  }, 0);
  console.log("Total population of countries:", totalPopulation);

    
    
    
  //--------e.Print the country that uses US dollars as currency.---------------------------

    
    
    
  const countriesWithUSDCurrency = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].currencies === "USD") {
      countriesWithUSDCurrency.push(data[i]);
    }
  }
  console.log(countriesWithUSDCurrency);
};
