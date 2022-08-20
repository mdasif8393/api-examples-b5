const showCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

showCountries()

const displayCountries = (data) => {
    const countriesContainer = document.getElementById('countries-container');
    data.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country-div')
        div.innerHTML = `
            <h4>Country Name: ${country.name.common}
            <button onClick="showDetail('${country.name.common}')">Details</button>
        `
        countriesContainer.appendChild(div)
    });
}

const showDetail = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => {
        console.log(data[0]);
        const countryContainer = document.getElementById('country-container');
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${data[0].name.common}</p>
            <img src="${data[0].flags.png}"></img>
        `
        countryContainer.appendChild(div)
    })
}
