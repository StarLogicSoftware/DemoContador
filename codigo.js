const boton = document.getElementById('boton')
const botonReset = document.getElementById('boton')
const contador = document.getElementById('contador')

let cuenta = 0

boton.onclick = function () {
    cuenta += 1
    contador.textContent = cuenta
}

botonReset.onclick = function () {
    cuenta = 0
    contador.textContent = cuenta
}