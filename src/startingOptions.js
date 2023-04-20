let memoryTable = []
let flag = 0
let firstClick = true
let firstGenCoord = []
let cellRevealed = 0
let BOMBNUMBER = 0
let cellGenerated = []
let bombGenerated = []

const start = () => {
  flag = 0  
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
  console.log(memoryTable)
  BOMBNUMBER = difficulty

  firstClick = true
  firstGenCoord = []

  cellRevealed = 0

  cellGenerated = []
  bombGenerated = []
}