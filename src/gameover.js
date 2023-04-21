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
  } else if (trigger === "win") {
    clearInterval(timerId)
    document.getElementById("timer").innerHTML = `Hai vinto! \n ${hour} : ${min} : ${sec}`
  }
}