let memoryTable = []
let flag = 0
let firstClick = true
let firstGenCoord = []
let cellRevealed = 0
let BOMBNUMBER = 0
let cellGenerated = []
let bombGenerated = []
let noFlag = false

const facile = () => {
  document.getElementById("tableSizeInput").value = 9
  document.getElementById("difficultyInput").value = 15
}

const medio = () => {
  document.getElementById("tableSizeInput").value = 17
  document.getElementById("difficultyInput").value = 40
}

const difficile = () => {
  document.getElementById("tableSizeInput").value = 24
  document.getElementById("difficultyInput").value = 100
}

const arduo = () => {
  document.getElementById("tableSizeInput").value = 25
  document.getElementById("difficultyInput").value = 200
}

const estremo = () => {
  document.getElementById("tableSizeInput").value = 25
  document.getElementById("difficultyInput").value = 420
}

const start = () => {
  document.getElementById("timer").innerHTML = ctx
  flag = 0
  firstClick = true
  firstGenCoord = []
  cellRevealed = 0
  cellGenerated = []
  bombGenerated = []
  memoryTable = []
  const tableSize = document.getElementById("tableSizeInput").value
  const difficulty = document.getElementById("difficultyInput").value

  if (tableSize < 4) {
    alert ("inserire dimensioni maggiori!")
  } else {
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
    console.log("ciao" + flag)

    document.getElementById("txtRighe").classList.add("Hidden")
    document.getElementById("tableSizeInput").classList.add("Hidden")
    document.getElementById("txtBombe").classList.add("Hidden")
    document.getElementById("difficultyInput").classList.add("Hidden")
    document.getElementById("facile").classList.add("Hidden")
    document.getElementById("medio").classList.add("Hidden")
    document.getElementById("difficile").classList.add("Hidden")
    document.getElementById("arduo").classList.add("Hidden")
    document.getElementById("estremo").classList.add("Hidden")
    document.getElementById("textBG").className = "InGameTextBG"
    document.getElementById("start").innerHTML = "RICOMINCIA"
    document.getElementById("restart").classList.remove("Hidden")
    document.getElementById("timer").classList.remove("Hidden")
    document.getElementById("txtFlag").classList.remove("Hidden")
    document.getElementById("numeroFlag").classList.remove("Hidden")
    document.getElementById("numeroFlag").value = (flag)
    clearInterval(timerId)
    ctx = `<div id="container-timer"><img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
    : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
    : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"></img>`
    document.getElementById("timer").innerHTML = ctx
  }
}

const restart = () => {
  document.getElementById("txtRighe").classList.remove("Hidden")
  document.getElementById("tableSizeInput").classList.remove("Hidden")
  document.getElementById("txtBombe").classList.remove("Hidden")
  document.getElementById("difficultyInput").classList.remove("Hidden")
  document.getElementById("facile").classList.remove("Hidden")
  document.getElementById("medio").classList.remove("Hidden")
  document.getElementById("difficile").classList.remove("Hidden")
  document.getElementById("arduo").classList.remove("Hidden")
  document.getElementById("estremo").classList.remove("Hidden")
  document.getElementById("textBG").className = "StartingTextBG"
  document.getElementById("start").innerHTML = "INIZIAMO!"
  document.getElementById("restart").classList.add("Hidden")
  document.getElementById("timer").classList.add("Hidden")
  document.getElementById("txtFlag").classList.add("Hidden")
  document.getElementById("numeroFlag").classList.add("Hidden")
  clearInterval(timerId)
  ctx = `<div id="container-timer"><img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
          : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"> 
          : <img src="../img/number_zero.svg"><img src="../img/number_zero.svg"></img>`
  document.getElementById("timer").innerHTML = ctx
  document.getElementById("container").innerHTML = ""
}