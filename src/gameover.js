/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const gameover = (trigger) => {
  if (trigger === "afk") {
    alert("spegni il computer")
  } else if (trigger === "bomb") {
    clearInterval(timerId)
    memoryTable.forEach(e => {
      e.forEach(elem => {
        elem.hidden = false
        elem.render()
      })
    })
    document.getElementById("timer").innerHTML = "HAI PERSO OMG!!!" + ctx
  } else if (trigger === "win") {
    clearInterval(timerId)
    document.getElementById("timer").innerHTML = "HAI VINTO OMG!!!" + ctx
  }
  hour = 0
  hourDigitLeft = 0
  hourDigitRight = 0
  min = 0
  minDigitLeft = 0
  minDigitRight = 0
  sec = 0
  secDigitLeft = 0
  secDigitRight = 0
  ctx = `<div id="container-timer"><img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
          : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
          : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"></img>`
}