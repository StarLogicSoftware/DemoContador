var boton = document.getElementById('boton')
var contador = document.getElementById('contador')
var cuenta = 0

boton.onclick = function () {
    cuenta += 1
    contador.textContent = cuenta
}