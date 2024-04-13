const parametrosURL = new URLSearchParams(window.location.search);
const codigoPelicula = parametrosURL.get('codigo')

const listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey')) || [];

const juegoBuscada = listaJuegos.find((itemJuego)=> itemJuego.codigo === codigoPelicula)

//dibujar la card 
const seccionDetalle = document.querySelector('#seccionDetalle')
seccionDetalle.innerHTML = `<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img
      src="${juegoBuscada.imagen}"
      class="img-fluid rounded-start"
      alt="${juegoBuscada.nombre}"
    />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${juegoBuscada.nombre}</h5>
      <p class="card-text">${juegoBuscada.descripcion}</p>
      <p class="card-text">
        Categoria:
        <span class="badge rounded-pill bg-info"> ${juegoBuscada.categoria}</span>
      </p>
      <p class="card-text">Precio: ${juegoBuscada.precio}</p>
      <p class="card-text">Requisitos: ${juegoBuscada.requisitos} min</p>
      <p class="card-text">Desarrollador: ${juegoBuscada.desarrollador}</p>
      <p class="card-text">Código: ${juegoBuscada.codigo}</p>
    </div>
  </div>
</div>
</div>`