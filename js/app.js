const btnAgregarJuego = document.getElementById("btnAgregarJuego");
const modalJuego = new bootstrap.Modal(document.getElementById("modalJuego"));
let crearJuego = true;
const formJuego = document.getElementById("formJuego");

function mostrarModalJuego() {
  crearJuego = true;
  modalJuego.show();
}

function administrarFormJuego(e) {
  e.preventDefault();
}


btnAgregarJuego.addEventListener("click", mostrarModalJuego);
formJuego.addEventListener("submit", administrarFormJuego);
