const input = document.getElementById("inputTexto");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

btnAgregar.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto === "") return;

  // Crear nuevo <li>
  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = texto;

  // Crear botón de eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "eliminar";

  // Evento para eliminar el <li>
  btnEliminar.addEventListener("click", () => {
    lista.removeChild(nuevoLi);
  });

  // Agregar botón al <li> y <li> a la lista
  nuevoLi.appendChild(btnEliminar);
  lista.appendChild(nuevoLi);

  // Limpiar el input
  input.value = "";
});

 // Código para facilitar la entrada de elementos con la tecla Enter
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btnAgregar.click();
  }
});
