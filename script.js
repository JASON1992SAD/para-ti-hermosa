function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "Eres lo más bonito de mi mundo 💗";
  mensaje.classList.remove("oculto");
  mensaje.classList.add("visible");
}
