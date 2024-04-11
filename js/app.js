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
const listaJuegos = JSON.parse(localStorage.getItem("listaJuegosKey")) || [];

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
  listaJuegos.push(juegoNuevo);
  guardarLocalStorage();
  limpiarFormJuego();
}

function guardarLocalStorage() {
  localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
}

function limpiarFormJuego() {
  formJuego.reset();
}

btnAgregarJuego.addEventListener("click", mostrarModalJuego);
formJuego.addEventListener("submit", administrarFormJuego);
