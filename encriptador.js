document.addEventListener('DOMContentLoaded', (event) => {
    const botonEncriptar = document.querySelector(".encriptar");
    const botonDesencriptar = document.querySelector(".desencriptar"); // Selecciona el botón de desencriptar
    const textArea = document.getElementById("textArea");
    const parteDerecha = document.querySelector(".parteDerecha");

    function encriptar(mensaje) {
        return mensaje.replace(/[aeiou]/g, match => {
            switch (match) {
                case 'a': return 'ai';
                case 'e': return 'enter';
                case 'i': return 'imes';
                case 'o': return 'ober';
                case 'u': return 'ufat';
            }
        });
    }

    function desencriptar(mensaje) {
        return mensaje
            .replace(/ufat/g, 'u')  
            .replace(/ober/g, 'o')
            .replace(/imes/g, 'i')
            .replace(/enter/g, 'e')
            .replace(/ai/g, 'a');      
    }

    function actualizarParteDerecha(texto, esEncriptado) {
        if (texto) {
            const textoProcesado = esEncriptado ? encriptar(texto) : desencriptar(texto);
            parteDerecha.innerHTML = `<h2 class = "textoProcesado">${textoProcesado}</h2>`;
            
            const botonCopiar = document.createElement("button");
            botonCopiar.textContent = "COPIAR";
            botonCopiar.className = "nuevo-boton";

            //  evento de copiado al "botonCopiar"
            botonCopiar.addEventListener('click', () => {
                navigator.clipboard.writeText(textoProcesado);
                botonCopiar.textContent="COPIADO"
            });

            // Agrega el nuevo botón a "parteDerecha"
            parteDerecha.appendChild(botonCopiar);
            textArea.value = '';  
        } else {
            parteDerecha.innerHTML = `
                <img src="images/Muñeco.png" width="336px" height="304px">
                <div class="mensajeMuñeco">
                    <h2>Ningún mensaje fue encontrado</h2>
                    <p>Ingresa el texto que desees encriptar o desencriptar.</p>
                </div>
            `;
        }
    }

    botonEncriptar.addEventListener('click', () => {
        const texto = textArea.value;
        actualizarParteDerecha(texto, true);
    });

    botonDesencriptar.addEventListener('click', () => {
        const texto = textArea.value;
        actualizarParteDerecha(texto, false);
    });
    
   
  
});

