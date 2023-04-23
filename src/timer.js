/* eslint-disable no-unused-vars */
let timerId
let hour = 0
let hourDigitLeft = 0
let hourDigitRight = 0
let min = 0
let minDigitLeft = 0
let minDigitRight = 0
let sec = 0
let secDigitLeft = 0
let secDigitRight = 0
let ctx = `<div id="container-timer"><img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
          : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
          : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"></img>`
const timerInit = () => {
  hour = 0
  min = 0
  sec = 1
  clearInterval(timerId)
  timerId = setInterval(() => {
    if (sec === 60) {
      min ++
      sec = 0
    }
    if (min === 60) {
      hour ++
      min = 0
    }
    if (hour >= 69) {
      // eslint-disable-next-line no-undef
      gameover("afk")
    }
    if (hour < 10) {
      hourDigitLeft = "zero"
      hourDigitRight = hour === 0 ? "zero" : hour
    } else {
      hourDigitLeft = String(hour)[0]
      hourDigitRight = String(hour)[1] === "0" ? "zero" : String(hour)[1]
    }

    if (min < 10) {
      minDigitLeft = "zero"
      minDigitRight = min === 0 ? "zero" : min
    } else {
      minDigitLeft = String(min)[0]
      minDigitRight = String(min)[1] === "0" ? "zero" : String(min)[1]
    }

    if (sec < 10) {
      secDigitLeft = "zero"
      secDigitRight = sec === 0 ? "zero" : sec
    } else {
      secDigitLeft = String(sec)[0]
      secDigitRight = String(sec)[1] === "0" ? "zero" : String(sec)[1]
    }

    ctx = `<div id="container-timer"><img src="../img/number_${hourDigitLeft}.svg"><img src="../img/number_${hourDigitRight}.svg"> 
    : <img src="../img/number_${minDigitLeft}.svg"><img src="../img/number_${minDigitRight}.svg"> 
    : <img src="../img/number_${secDigitLeft}.svg"><img src="../img/number_${secDigitRight}.svg"></img>`
    document.getElementById("timer").innerHTML = ctx
    sec ++
  }, 1000)
}