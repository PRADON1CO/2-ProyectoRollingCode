const btnAgregarJuego = document.getElementById("btnCrearJuego");
const modalJuego = new bootstrap.Modal(document.getElementById("modalJuego"));

const mostrarModalJuego = () => {
  modalJuego.show();
};

btnAgregarJuego.addEventListener("click", mostrarModalJuego);
