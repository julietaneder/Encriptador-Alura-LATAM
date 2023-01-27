var textoEntrada = document.getElementById("entradaTexto"); //tomar datos texto entrada
var textoSalida = document.getElementById("salidaTexto"); //salida del texto encriptado o desencriptado

btnCopiar.hidden= true; //esconder botón copiar al inicio
salidaTexto.hidden= true; //esconder cuadro de texto al inicio

function codificar(cadena){ //codificación
    return cadena
    .replace(/e/ig,"enter")
    .replace(/i/ig,"imes")
    .replace(/a/ig,"ai")
    .replace(/o/ig,"ober")
    .replace(/u/ig,"ufat");
}

function decodificar (rev){ //decodificación
    return rev
    .replace(/enter/ig,"e")
    .replace(/imes/ig,"i")
    .replace(/ai/ig,"a")
    .replace(/ober/ig,"o")
    .replace(/ufat/ig,"u");
}

function encriptar(){
    var texto = textoEntrada.value;
    var transformarTexto = texto.toLowerCase();
    var normalizar = transformarTexto.normalize("NFKD");
    document.querySelector(".munieco").style.display = "none";
    document.querySelector(".sinMensaje").style.display = "none";
    document.querySelector(".mensajeTextoVacio").style.display = "none";
    btnCopiar.hidden= false;
    salidaTexto.hidden= false;
    textoEntrada.value= ""; //Para que luego de encriptar o desencriptar, limpie el campo del textarea.
    textoSalida.textContent = codificar(normalizar);
}

function desencriptar(){
    var texto = textoEntrada.value;
    var transformarTexto = texto.toLowerCase();
    var normalizar = transformarTexto.normalize("NFKD");
    textoSalida.textContent = decodificar(normalizar);
    document.querySelector(".munieco").style.display = "none";
    document.querySelector(".sinMensaje").style.display = "none";
    document.querySelector(".mensajeTextoVacio").style.display = "none";
    btnCopiar.hidden= false;
    salidaTexto.hidden= false;
}

function copiar(){
    textoSalida.select();
    textoSalida.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoSalida.value);
    alert("El texto fue copiado al portapapeles.");
}