//const input = document.getElementById('searchInput');
const input = document.querySelector('#searchInput');
const userList = document.querySelector('#users');
let datospokemon = [];

// let url = "https://pokeapi.co/api/v2/pokemon/";
let url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

document.addEventListener('DOMContentLoaded', async() => {
    userList.innerHTML = `<h1>Cargando...</h1>`;
    const data = await loadUsers();
    //console.log(data.count);
    renderUsers(data);
});

input.addEventListener('keyup', e => {
    /*console.log(input.value);
    const newUsers = users.filter(user => `${user.firstname.toLowerCase()} `.includes(input.value.toLowerCase()));*/
    // renderUsers(newUsers);
    let id;

    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
        .then((res) => res.json())
        .then((data) => {
            console.log("hola");
            console.log(data.id);
            console.log(data.name);

            const newUsers = users.filter(data => `${data.id.toLowerCase()} `.includes(data.value.toLowerCase()));
            renderUsers(newUsers);

        });


});

async function loadUsers() {
    let respuesta = await fetch(url);
    return res = respuesta.json();
    //console.log(res);
}

const createUserItems = users => users.map(user => `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.count}</li>`).join(' ');

function renderUsers(users) {
    //const itemsString = createUserItems(users);
    //userList.innerHTML = itemsString;
    userList.innerHTML = ``;

    for (let i = 1; i < users.results.length; i++) {
        let ability = [];
        let tipo = [];
        let stat1 = [];
        let stat2 = [];

        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then((res) => res.json())
            .then((data) => {
                // createPokemon(data);
                // spinner.style.display = "none";
                //console.log(data);
                for (let j = 0; j < data.abilities.length; j++) {
                    //console.log(data.abilities[j].ability.name);
                    ability[j] = data.abilities[j].ability.name;

                }
                for (let z = 0; z < data.types.length; z++) {
                    //console.log(data.types[z].type.name);
                    tipo[z] = data.types[z].type.name;
                    datospokemon = data.id + data.name + tipo[z];

                }

                for (let x = 0; x < data.stats.length; x++) {

                    stat1[x] = data.stats[x].stat.name;
                    stat2[x] = data.stats[x].base_stat;
                }



                console.log("datos");
                console.log(datospokemon);
                userList.innerHTML += `<li class="tarjeta"> 
                    <div class="rectangulo">   
                    </div>
                
                    <img src="${data.sprites.front_default}"><br>
                    ${data.id.toString().padStart(3, 0)}<br>
                    ${data.name}<br>
                    ${tipo.join('<br>')}<br>
                    ${ability.join('<br>')}

                    <div style="display: flex; gap: 25px; justify-content: center; align-items: center;">
                    <p class="area" style="text-align: left;">${stat1.join('<br/>')}</p>
                    <p>${stat2.join('<br/>')}</p>
                </div>
                </li>`

            });






    }
}