import Juego from "./classJuego.js";

const btnAgregarJuego = document.getElementById("btnAgregarJuego");
const modalJuego = new bootstrap.Modal(document.getElementById("modalJuego"));
let crearJuego = true;
const formJuego = document.getElementById("formJuego");
const codigo = document.getElementById("codigo");
const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const imagen = document.getElementById("imagen");
const categoria = document.getElementById("categoria");
const requisitos = document.getElementById("requisitos");
const desarrollador = document.getElementById("desarrollador");

function mostrarModalJuego() {
  crearJuego = true;
  modalJuego.show();
}

function administrarFormJuego(e) {
  e.preventDefault();
  if (crearJuego === true) {
    altaJuego();
  } else {
  }
}

function altaJuego() {
  const juegoNuevo = new Juego(
    nombre.value,
    descripcion.value,
    precio.value,
    imagen.value,
    categoria.value,
    requisitos.value,
    desarrollador.value
  );
}

btnAgregarJuego.addEventListener("click", mostrarModalJuego);
formJuego.addEventListener("submit", administrarFormJuego);
