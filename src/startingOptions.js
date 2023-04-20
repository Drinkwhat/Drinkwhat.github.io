let memoryTable = []

let firstClick = true
let firstGenCoord = []
let cellRevealed = 0
let BOMBNUMBER = 0
let cellGenerated = []
let bombGenerated = []

const start = () => {
  //location.replace("../view/index.html")
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
  console.log("ciao")
  onLoadTableGenerator()
  console.log(memoryTable)
  if (difficulty <= tableSize ** 2 - 9) {
    BOMBNUMBER = difficulty
  } else {
    BOMBNUMBER = tableSize ** 2 - 9
    alert ("inserite tante bombe quanto possibile: " + BOMBNUMBER)
  }
}