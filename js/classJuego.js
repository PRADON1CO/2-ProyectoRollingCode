class Pelicula {
  #codigo;
  #nombre;
  #descripcion;
  #precio;
  #imagen;
  #categoria;
  #requisitos;
  #desarrollador;

  constructor(
    nombre,
    descripcion,
    precio,
    imagen,
    categoria,
    requisitos,
    desarrollador
  ) {
    this.#codigo = crypto.randomUUID();
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#precio = precio;
    this.#imagen = imagen;
    this.#categoria = categoria;
    this.#requisitos = requisitos;
    this.#desarrollador = desarrollador;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get descripcion() {
    return this.#descripcion;
  }

  set descripcion(nuevaDescripcion) {
    this.#descripcion = nuevaDescripcion;
  }

  get precio() {
    return this.#precio;
  }

  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }

  get imagen() {
    return this.#imagen;
  }

  set imagen(nuevaImagen) {
    this.#imagen = nuevaImagen;
  }

  get categoria() {
    return this.#categoria;
  }

  set categoria(nuevaCategoria) {
    this.#categoria = nuevaCategoria;
  }

  get requisitos() {
    return this.#requisitos;
  }

  set requisitos(nuevosRequisitos) {
    this.#requisitos = nuevosRequisitos;
  }

  get desarrollador() {
    return this.#desarrollador;
  }

  set desarrollador(nuevoDesarrollador) {
    this.#desarrollador = nuevoDesarrollador;
  }
}
