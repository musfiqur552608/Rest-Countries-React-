const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data));
}

const displayCountries = countries =>{
    console.log(countries);
    const allCountriesHTML = countries.map(country=> getCountryHTML(country));
    // console.log(allCountriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}

const getCountryHTML = ({name, flags}) =>{

    // const {name, flags} = country;

    return `
    
    <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
    </div>
    
    `
}

loadCountries();