const btnAgregarJuego = document.getElementById("btnCrearJuego");
const modalJuego = new bootstrap.Modal(document.getElementById("modalJuego"));
let agregarJuego = true;
const formJuego = document.getElementById("formJuego");

function mostrarModalJuego() {
  agregarJuego = true;
  modalJuego.show();
}

function administrarFormJuego(e) {
  e.preventDefault();
  if (agregarJuego === true) {
    altaJuego();
  } else {
  }
}

function altaJuego() {}

btnAgregarJuego.addEventListener("click", mostrarModalJuego);
formJuego.addEventListener("submit", administrarFormJuego);
