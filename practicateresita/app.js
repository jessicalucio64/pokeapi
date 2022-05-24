//const input = document.getElementById('searchInput');
const input = document.querySelector('#searchInput');
const userList = document.querySelector('#users');
let arreglopokemon = [];

class pokemon {
    constructor() {
        this.datospokemon = []

    }

    getArticulosCarrito() {
        return this.datospokemon
    }
    setArticulosCarrito(datospokemon) {
        this.datospokemon = datospokemon
    }

    cargarCursos() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0").then(curso => {
            return curso.json();
        }).then(data => {
            let datos = data.cursos;
            datos.forEach(cursito => {
                const dive = document.createElement('div');
                dive.innerHTML =
                    `<div class="card card__custom">
                <img src="${cursito.name}" >
                
                </div>`;
                console.log(cursito.name);
                columnas.appendChild(dive);
            })
        })
    }

}