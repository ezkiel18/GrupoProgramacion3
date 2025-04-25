const parrafos = document.querySelectorAll(".parrafo");

document.getElementById("resaltador").addEventListener("click", () => {
    parrafos.forEach(x => {
        x.classList.add('resaltado');
    })
});

document.getElementById("ocultador").addEventListener("click", () => {
    parrafos.forEach(x => {
        x.classList.toggle('oculto')
    })
})