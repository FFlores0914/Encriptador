const shift = 3; 

function isValidInput(input) {
    const regex = /^[a-z]+$/; 
    return regex.test(input);
}

function encrypt() {
    const inputElement = document.querySelector('.cajon_de_captura_texto');
    const input = inputElement.value.trim();

    if (!isValidInput(input)) {
        displayMessage('Error: Solo se permiten letras minúsculas sin espacios ni caracteres especiales.', true);
        return;
    }

    let encryptedWord = '';

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + shift) % 26) + 97;
        }

        encryptedWord += String.fromCharCode(charCode);
    }

    displayMessage(`Palabra encriptada: ${encryptedWord}`, false);
}

function decrypt() {
    const inputElement = document.querySelector('.cajon_de_captura_texto');
    const input = inputElement.value.trim();

    if (!isValidInput(input)) {
        displayMessage('Error: Solo se permiten letras minúsculas sin espacios ni caracteres especiales.', true);
        return;
    }

    let decryptedWord = '';

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 - shift + 26) % 26) + 97;
        }

        decryptedWord += String.fromCharCode(charCode);
    }

    displayMessage(`Palabra desencriptada: ${decryptedWord}`, false);
}

function displayMessage(message, isError) {
    const messageElement = document.querySelector('.texto-mensaje');
    messageElement.textContent = message;
    messageElement.style.color = isError ? 'red' : 'black'; 
}

document.querySelector('.boton-encriptador').addEventListener('click', encrypt);
document.querySelector('.boton-desencriptar').addEventListener('click', decrypt);
