/* eslint-disable no-undef */


// eslint-disable-next-line no-unused-vars
const gameover = (reason) => {
  if (reason === "afk") {
    alert("spegni il computer")
  } else if (reason === "bomb") {
    clearInterval(timerId)
    document.getElementById("timer").innerHTML = `Hai detonato una bomba \n ${hour} : ${min} : ${sec}`
    memoryTable.forEach(e => {
      e.forEach(elem => {
        elem.hidden = false
        elem.render()
      })
    })
  } else if (reason === "win") {
    clearInterval(timerId)
    document.getElementById("timer").innerHTML = `Hai vinto! \n ${hour} : ${min} : ${sec}`
  }
}
