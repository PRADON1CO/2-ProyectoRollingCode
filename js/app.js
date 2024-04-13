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
  dibujarFila(juegoNuevo);
}

function guardarLocalStorage() {
  localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
}

function limpiarFormJuego() {
  formJuego.reset();
}

function cargaInicial() {
  if (listaJuegos.length > 0) {
    listaJuegos.map((juego) => dibujarFila(juego));
  }
}

function dibujarFila(juego) {
  console.log(juego);
  const tbody = document.querySelector("#tablaJuegos");
  tbody.innerHTML += `<tr data-id="${juego.codigo}">
    <th scope="row" class="colId">${juego.codigo}</th>
    <td >${juego.nombre}</td>
    <td class="">
      $${juego.precio}
    </td>
    <td>
      <img
        class="img-thumbnail rounded img-fluid thumbnail"
        src=${juego.imagen}
        alt=${juego.nombre}
      />
    </td>
    <td>${juego.categoria}</td>
    <td>
        <button class="btn btn-outline-verde m-1">
          <i class="bi bi-pencil-square fs-4" onclick="prepararEditarJuego('${juego.codigo}')"></i>
        </button>
        <button class="btn btn-outline-verde m-1">
          <i class="bi bi-x-square fs-4"></i>
        </button>
    </td>
  </tr>`;
}

window.prepararEditarJuego = (idJuego) => {
  mostrarModalJuego();
  crearJuego = false;
  const juegoBuscada = listaJuegos.find((juego) => juego.codigo === idJuego);
  
  codigo.value = juegoBuscada.codigo;
  nombre.value = juegoBuscada.nombre;
  descripcion.value = juegoBuscada.descripcion;
  categoria.value = juegoBuscada.categoria;
  imagen.value = juegoBuscada.imagen;
  desarrollador.value = juegoBuscada.desarrollador;
  precio.value = juegoBuscada.precio;
  requisitos.value = juegoBuscada.requisitos;
};

btnAgregarJuego.addEventListener("click", mostrarModalJuego);
formJuego.addEventListener("submit", administrarFormJuego);

cargaInicial();
