export const Especies
const app = {
  SelectPersonajes: 0,

  iniciar: function () {
    console.log("iniciamos")
  },
  buscador: function (element) {
    document.getElementById("buscador").addEventListener("click", this.handleBuscador)
  },
  handleBuscador: function (event) {
    console.log(event)
  }
}

export default app

// para el buscador

// para el desplegable de los personajes

// para el desplegable de las especies

// para el desplegable de los episodios
