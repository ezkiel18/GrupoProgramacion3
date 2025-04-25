// Selecciona el título por ID y cambia su texto
let titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Nuevo título cambiado por JavaScript";

// Selecciona los párrafos por clase y cambia su color
let parrafos = document.getElementsByClassName("parrafo");
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.color = "blue";
}

// Selecciona todos los <li> y agrega texto al final de cada uno
let elementosLista = document.querySelectorAll("#contenedor li");
elementosLista.forEach((li, index) => {
  li.textContent += ` (ítem ${index + 1})`;
});
