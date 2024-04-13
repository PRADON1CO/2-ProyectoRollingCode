const parametrosURL = new URLSearchParams(window.location.search);
const codigoPelicula = parametrosURL.get("codigo");

const listaJuegos = JSON.parse(localStorage.getItem("listaJuegosKey")) || [];

const juegoBuscada = listaJuegos.find(
  (itemJuego) => itemJuego.codigo === codigoPelicula
);

//dibujar la card
const seccionDetalle = document.querySelector("#seccionDetalle");
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


  <section class="container my-5">
  <p class="display-6">Reseñas</p>
      <hr />
                  <img src="../img/EstebanLopez.jpg" width="64" height="64" alt="Comentario de usuario">
                  <article class="media-body">
                      <p class="nombre">Rafael<span>15:52 pm, Hoy</span></p>
                      <p class="comentario">Desde el momento en que inicié mi primera partida, 
                        quedé impresionado por la calidad visual de <span class="badge rounded-pill bg-dark"> ${juegoBuscada.nombre}</span>.
                        Este juego ha recibido críticas impresionantes. La meticulosa atención a los detalles, desde los entornos hasta 
                        los personajes, crea una experiencia envolvente que realmente se siente auténtica.</p>
                  </article>
                  <div class="botones text-right">
                      <a href="/pages/error.html">Responder</a>
                      <a href="/pages/error.html">Editar</a>
                      <a href="/pages/error.html">Borrar</a>
                  </div>
  </section>

</div>`;
