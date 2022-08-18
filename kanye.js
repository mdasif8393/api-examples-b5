
const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => showQuotes(data))
}
loadQuotes()
const showQuotes = (data) =>{
    console.log(data.quote);
}