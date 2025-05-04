const input = document.getElementById("inputTexto");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

btnAgregar.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto === "") return;

  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = texto;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "eliminar";

  btnEliminar.addEventListener("click", () => {
    lista.removeChild(nuevoLi);
  });

  nuevoLi.appendChild(btnEliminar);
  lista.appendChild(nuevoLi);

  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btnAgregar.click();
  }
});
