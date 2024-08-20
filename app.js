const desplazamiento = 3; 

function esEntradaValida(entrada) {
    const expresionRegular = /^[a-z\s\W]*$/;
    return expresionRegular.test(entrada);
}

function encriptar() {
    const elementoEntrada = document.querySelector('.cajon_de_captura_texto');
    const entrada = elementoEntrada.value.trim();

    if (!esEntradaValida(entrada)) {
        mostrarMensaje('Error: Solo se permiten letras minúsculas sin acentos. Otros caracteres como espacios y signos de puntuación son aceptados.', true);
        return;
    }

    let palabraEncriptada = '';

    for (let i = 0; i < entrada.length; i++) {
        let codigoCaracter = entrada.charCodeAt(i);

        
        if (codigoCaracter >= 97 && codigoCaracter <= 122) {
            codigoCaracter = ((codigoCaracter - 97 + desplazamiento) % 26) + 97;
        }

        palabraEncriptada += String.fromCharCode(codigoCaracter);
    }

    mostrarMensaje(`Palabra encriptada: ${palabraEncriptada}`, false);
}

function desencriptar() {
    const elementoEntrada = document.querySelector('.cajon_de_captura_texto');
    const entrada = elementoEntrada.value.trim();

    if (!esEntradaValida(entrada)) {
        mostrarMensaje('Error: Solo se permiten letras minúsculas sin acentos. Otros caracteres como espacios y signos de puntuación son aceptados.', true);
        return;
    }

    let palabraDesencriptada = '';

    for (let i = 0; i < entrada.length; i++) {
        let codigoCaracter = entrada.charCodeAt(i);

        
        if (codigoCaracter >= 97 && codigoCaracter <= 122) {
            codigoCaracter = ((codigoCaracter - 97 - desplazamiento + 26) % 26) + 97;
        }

        palabraDesencriptada += String.fromCharCode(codigoCaracter);
    }

    mostrarMensaje(`Palabra desencriptada: ${palabraDesencriptada}`, false);
}

function mostrarMensaje(mensaje, esError) {
    const elementoMensaje = document.querySelector('.texto-mensaje');
    elementoMensaje.textContent = mensaje;
    elementoMensaje.style.color = esError ? 'red' : 'black'; 
}

document.querySelector('.boton-encriptador').addEventListener('click', encriptar);
document.querySelector('.boton-desencriptar').addEventListener('click', desencriptar);

