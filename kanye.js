
const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => showQuotes(data))
}

const showQuotes = (data) =>{
    console.log(data.quote);
    const p =document.getElementById('section');
    p.innerText = data.quote;
}