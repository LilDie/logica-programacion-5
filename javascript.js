document.addEventListener("DOMContentLoaded", function() {
    const numeroSecreto = generarNumeroSecreto();
    const intentos = [];
  
    document.getElementById("adivinarBtn").addEventListener("click", function() {
      const inputNumero = document.getElementById("numeroInput").value.trim();
  
      if (validarNumero(inputNumero)) {
        const numeroUsuario = parseInt(inputNumero);
  
        intentos.push(numeroUsuario);
  
        if (numeroUsuario === numeroSecreto) {
          mostrarResultado("Felicidades, adivinaste el número secreto");
          mostrarIntentos();
        } else {
          mostrarResultado("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
          mostrarMayorMenor(numeroUsuario);
        }
      } else {
        mostrarResultado("Por favor, ingresa un número válido del 1 al 100.");
      }
    });
  
    function generarNumeroSecreto() {
      return Math.floor(Math.random() * 100) + 1;
    }
  
    function validarNumero(numero) {
      return !isNaN(numero) && numero !== "" && numero >= 1 && numero <= 100;
    }
  
    function mostrarResultado(mensaje) {
      document.getElementById("resultado").innerText = mensaje;
    }
  
    function mostrarIntentos() {
      const intentosTexto = "Números introducidos: " + intentos.join(", ");
      document.getElementById("intentos").innerText = intentosTexto;
    }
  
    function mostrarMayorMenor(numeroUsuario) {
      const mensaje = (numeroUsuario < numeroSecreto) ? "El número es mayor." : "El número es menor.";
      document.getElementById("mensajeMayorMenor").innerText = mensaje;
    }
  });
  