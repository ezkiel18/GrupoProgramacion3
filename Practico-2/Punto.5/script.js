const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const edad = parseInt(document.getElementById("edad").value.trim());

  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorEdad").textContent = "";

  let hayErrores = false;

  if (nombre === "") {
    document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
    hayErrores = true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("errorEmail").textContent = "El email es obligatorio.";
    hayErrores = true;
  } else if (!emailRegex.test(email)) {
    document.getElementById("errorEmail").textContent = "El email no es válido.";
    hayErrores = true;
  }

  if (isNaN(edad)) {
    document.getElementById("errorEdad").textContent = "La edad debe ser un número.";
    hayErrores = true;
  } else if (edad <= 18) {
    document.getElementById("errorEdad").textContent = "Debes tener más de 18 años.";
    hayErrores = true;
  }

  if (!hayErrores) {
    alert("Formulario enviado correctamente 🎉");
    formulario.reset();
  }
});
