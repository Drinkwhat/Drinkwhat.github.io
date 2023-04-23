let memoryTable = []
let flag = 0
let firstClick = true
let firstGenCoord = []
let cellRevealed = 0
let BOMBNUMBER = 0
let cellGenerated = []
let bombGenerated = []

const start = () => {
  document.getElementById("timer").innerHTML = ctx
  flag = 0
  firstClick = true
  firstGenCoord = []
  cellRevealed = 0
  cellGenerated = []
  bombGenerated = []
  memoryTable = []
  const difficulty = document.getElementById("difficultyInput").value
  const tableSize = document.getElementById("tableSizeInput").value

  for (let y = 0; y < tableSize; y++) {
    memoryTable.push(new Array)
    for (let x = 0; x < tableSize; x++) {
      memoryTable[y].push(x)
    }
  }
  onLoadTableGenerator()
  if (difficulty <= tableSize ** 2 - 9) {
    BOMBNUMBER = difficulty
  } else {
    BOMBNUMBER = tableSize ** 2 - 9
    alert ("inserite tante bombe quanto possibile: " + BOMBNUMBER)
  }
  flag = BOMBNUMBER
  document.getElementById("txtRighe").classList.add("Hidden")
  document.getElementById("tableSizeInput").classList.add("Hidden")
  document.getElementById("txtBombe").classList.add("Hidden")
  document.getElementById("difficultyInput").classList.add("Hidden")
  document.getElementById("start").innerHTML = "RICOMINCIA"
  document.getElementById("restart").classList.remove("Hidden")
  document.getElementById("timer").classList.remove("Hidden")
  clearInterval(timerId)
  ctx = `<div id="container-timer"><img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
          : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
          : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"></img>`
  document.getElementById("timer").innerHTML = ctx
}

const restart = () => {
  document.getElementById("txtRighe").classList.remove("Hidden")
  document.getElementById("tableSizeInput").classList.remove("Hidden")
  document.getElementById("txtBombe").classList.remove("Hidden")
  document.getElementById("difficultyInput").classList.remove("Hidden")
  document.getElementById("start").innerHTML = "INIZIAMO!"
  document.getElementById("restart").classList.add("Hidden")
  document.getElementById("timer").classList.add("Hidden")
  clearInterval(timerId)
  ctx = `<div id="container-timer"><img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
          : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
          : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"></img>`
  document.getElementById("timer").innerHTML = ctx
  document.getElementById("container").innerHTML = ""

}