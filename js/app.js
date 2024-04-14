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
  limpiarFormJuego()
  modalJuego.show();
}

function administrarFormJuego(e) {
  e.preventDefault();
  if (crearJuego === true) {
    altaJuego();
  } else {
    editarJuego()
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
      ${juego.precio}
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
          <i class="bi bi-x-square fs-4" onclick="borrarJuego('${juego.codigo}')"></i>
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

function editarJuego() {
  let posicionJuego = listaJuegos.findIndex((juego) => juego.codigo === codigo.value);
  listaJuegos[posicionJuego].nombre = nombre.value;
  listaJuegos[posicionJuego].imagen = imagen.value;
  listaJuegos[posicionJuego].descripcion = descripcion.value;
  listaJuegos[posicionJuego].categoria = categoria.value;
  listaJuegos[posicionJuego].desarrollador = desarrollador.value;
  listaJuegos[posicionJuego].requisitos = requisitos.value;
  listaJuegos[posicionJuego].precio = precio.value;

  guardarLocalStorage();
  const tbody = document.querySelector("#tablaJuegos");
  tbody.children[posicionJuego].children[1].innerHTML = nombre.value;
  tbody.children[posicionJuego].children[2].innerHTML = precio.value;
  tbody.children[posicionJuego].children[3].children[0].src = imagen.value;
  tbody.children[posicionJuego].children[4].innerHTML = categoria.value;
  Swal.fire(
    "Juego modificado",
    "El juego fue modificada exitosamente",
    "success"
  );
  limpiarFormJuego();
  modalJuego.hide();
}

window.borrarJuego = (idJuego) => {
  Swal.fire({
    title: "¿Estas seguro de borrar el Juego?",
    text: "No puedes revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#042b2c",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const posicionJuego = listaJuegos.findIndex(
        (itemJuego) => itemJuego.codigo === idJuego
      );
      console.log(posicionJuego);
      listaJuegos.splice(posicionJuego, 1);
      guardarLocalStorage();
      const tbody = document.querySelector("#tablaJuegos");
      tbody.removeChild(tbody.children[posicionJuego]);
      Swal.fire({
        title: "Juego eliminado",
        text: `El juego fue eliminado correctamente`,
        icon: "success",
      });
    }
  });
};

btnAgregarJuego.addEventListener("click", mostrarModalJuego);
formJuego.addEventListener("submit", administrarFormJuego);

cargaInicial();
