const btnAgregarJuego = document.getElementById("btnAgregarJuego");
const modalJuego = new bootstrap.Modal(document.getElementById("modalJuego"));

function mostrarModalJuego() {
  modalJuego.show();
}

btnAgregarJuego.addEventListener("click", mostrarModalJuego);
