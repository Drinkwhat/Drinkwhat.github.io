/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const gameover = (trigger) => {
  document.getElementById("textBG").classList.replace("InGameTextBG", "EndGameTextBG")

  if (trigger === "afk") {
    alert("spegni il computer")
  } else if (trigger === "bomb") {
    document.getElementById("timer").innerHTML = ctx + "HAI PERSO OMG!!!"

    memoryTable.forEach((e, y) => {
      e.forEach((elem, x) => {
        if (elem.flagged === true) {
          elem.flagged = false
          elem.render()
        }
      })
    })
  } else if (trigger === "win") {
    document.getElementById("timer").innerHTML = ctx + "HAI VINTO OMG!!!"

    memoryTable.forEach((e, y ) => {
      e.forEach((elem, x) => {
        if (elem.hidden === true) {
          elem.flagged = true
          elem.render()
        }
      })
    })
    flag = 0
    document.getElementById("numeroFlag").value = flag
  }
  
  clearInterval(timerId)
  memoryTable.forEach(e => {
    e.forEach(elem => {
      elem.hidden = false
      elem.render()
    })
  })

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