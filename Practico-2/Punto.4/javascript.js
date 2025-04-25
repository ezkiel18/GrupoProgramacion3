const form = document.getElementById("formulario");
const input = document.getElementById("tarea");
const lista = document.getElementById("lista");

form.addEventListener("submit",function (e) {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto === "") {
        input.value = "";
        return;
    }
    const li = document.createElement("li");
    li.textContent = texto;

    lista.appendChild(li);
    input.value = "";
})