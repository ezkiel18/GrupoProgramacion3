const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const edad = document.getElementById("edad");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorEdad = document.getElementById("error-edad");

form.querySelector("button").addEventListener("click", function(e) {
  e.preventDefault();

  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorEdad.textContent = "";

  let ok = true;

  if (nombre.value.trim() === "") {
    errorNombre.textContent = "Completa el nombre.";
    ok = false;
  }

  const emailFormato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    errorEmail.textContent = "Completa el email.";
    ok = false;
  } else if (!emailFormato.test(email.value.trim())) {
    errorEmail.textContent = "Email no válido.";
    ok = false;
  }

  if (edad.value.trim() === "") {
    errorEdad.textContent = "Completa la edad.";
    ok = false;
  } else if (Number(edad.value) <= 18) {
    errorEdad.textContent = "Debes tener más de 18.";
    ok = false;
  }

  if (ok) {
    form.submit();
  }
});
