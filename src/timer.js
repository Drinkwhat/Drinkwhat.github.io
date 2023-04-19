/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

let timerId
let hour = 0
let min = 0
let sec = 0
const timerInit = () => {
  timerId = setInterval(() => {
    if (sec === 60) {
      min++
      sec = 0
    }
    if (min === 60) {
      hour++
      min = 0
    }
    if (hour >= 69) {
      gameover("afk")
    }
    document.getElementById("timer").innerHTML = `${hour} : ${min} : ${sec}`
    sec ++
  }, 1000)
}