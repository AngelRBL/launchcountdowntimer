const dia = document.querySelector('.dia')
const hora = document.querySelector('.hora')
const minuto = document.querySelector('.minuto')
const segundo = document.querySelector('.segundo')

const layerdia = document.querySelector('.card-dia')
const layerhora = document.querySelector('.card-hora')
const layerMin = document.querySelector('.card-minuto')
const layerSeg = document.querySelector('.card-segundo')

const data = new Date()

let _seg = data.getSeconds()
let _min = data.getMinutes()
let _hora = data.getHours()
let _dia = data.getDay()
let diaFinal = _dia + 6

function contadorDeDias() {
  if (diaFinal === _dia) {
  clearInterval(timeinterval)
  }

  if (diaFinal > _dia) {
    _seg --
  }

  if (_seg == 00) {
    _min --
    _seg = 60
    layerMin.classList.toggle('layer-active')
  }

  if (_min == 00) {
    _hora --
    _min = 60
    layerhora.classList.toggle('layer-active')
  }

  if (_hora == 0) {
    diaFinal --
    _hora = 60
    layerdia.classList.toggle('layer-active')
  }

  dia.innerHTML = diaFinal
  hora.innerHTML = _hora
  minuto.innerHTML = _min
  segundo.innerHTML = _seg

}

var timeinterval = setInterval(contadorDeDias, 1000)