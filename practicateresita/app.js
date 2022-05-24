//const input = document.getElementById('searchInput');
const input = document.querySelector('#searchInput');
const userList = document.querySelector('#users');
let arreglopokemon = [];

class pokemon {
    constructor() {
        this.datospokemon = []
        this.cargarCursos();

    }

    getArticulosCarrito() {
        return this.datospokemon
    }
    setArticulosCarrito(datospokemon) {
        this.datospokemon = datospokemon
    }


    cargarCursos() {
        fetch("https://pokeapi.co/api/v2/pokemon/").then(curso => {
            return curso.json();
        }).then(data => {
            let datos = data.cursos;
            datos.forEach(cursito => {
                const dive = document.createElement('div');
                dive.innerHTML =
                    `<div class="card card__custom">
                    <p>${cursito.results.name}</p>
                </div>`;
                console.log(cursito);

            })
        })
    }
}