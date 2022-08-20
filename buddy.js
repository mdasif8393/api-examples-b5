const randomUsers = () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data => showUsers(data.results))
}

const showUsers = (data) =>{
    const section = document.getElementById('show-users');
    
    for(const user of data){
        const p = document.createElement('p');
        p.innerText = user.name.first;
        section.appendChild(p);
    }
}

randomUsers();