let titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Nuevo título cambiado por JavaScript";

let parrafos = document.getElementsByClassName("parrafo");
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.color = "blue";
}

let elementosLista = document.querySelectorAll("#contenedor li");
elementosLista.forEach((li, index) => {
  li.textContent += ` (ítem ${index + 1})`;
});
