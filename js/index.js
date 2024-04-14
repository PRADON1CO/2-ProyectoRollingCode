const listaJuegos =
  JSON.parse(localStorage.getItem("listaJuegosKey")) || [];

//dibujar columnas
listaJuegos.map((Juego) => {
  crearColumna(Juego);
});

function crearColumna(Juego) {
  let grilla = document.querySelector("#grilla");
  grilla.innerHTML += `
  <div class="col-md-4 col-lg-3 mb-3">
  <div class="card h-100" >
    <img src="${Juego.imagen}" class="card-img-top" alt="${Juego.nombre}">
    <div class="card-body">
      <h5 class="card-title">${Juego.nombre}</h5>
      <h6 class="card-title">$${Juego.precio}</h6>
    </div>
    <div class='card-footer text-end '>
    <button class="btn btn-primary" onclick='verDetalleJuego("${Juego.codigo}")'>Ver Detalle</button>
    </div>
  </div>
</div>
    `;
}

function verDetalleJuego(codigo){
 console.log(codigo)
 console.log(window.location.origin +'/pages/detalle.html')
 window.location.href = window.location.origin +'/pages/detalle.html?codigo='+codigo;
}
