
// Función para encriptar el texto
function encriptadorDetexto() {
    let encriptador = document.getElementById("encriptador").value;
    let textoEncriptado = CryptoJS.AES.encrypt(encriptador, 'clave-secreta').toString();
    document.getElementById("encriptador").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptadorDetexto() {
    let encriptado = document.getElementById("encriptador").value;
    let bytes = CryptoJS.AES.decrypt(encriptado, 'clave-secreta');
    let textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("encriptador").value = textoDesencriptado;
}

// Eventos para los botones
document.querySelector('.boton-encriptador1').addEventListener('click', encriptadorDetexto);
document.querySelector('.boton-desencriptar').addEventListener('click', desencriptadorDetexto);

// Función para copiar el texto encriptado/desencriptado
function copiarTexto() {
    let textoParaCopiar = document.querySelector('.evaluar');
    textoParaCopiar.select();
    document.execCommand('copy');
    alert('Texto copiado: ' + textoParaCopiar.value);
}

document.querySelector('button[type="submit"]').addEventListener('click', copiarTexto);
