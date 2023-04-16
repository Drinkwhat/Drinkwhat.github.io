/* eslint-disable no-console */
const memoryTable = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

let firstClick = true

const firstGenCoord = []

const BOMBNUMBER = 20
const cellGenerated = [] // per bombNumberCheck
const bombGenerated = []

class Entity {
  constructor(x, y, hidden, flagged) {
    this.x = x
    this.y = y
    this.hidden = hidden
    this.flagged = flagged
  }
  click = () => {}
  render = () => {}
}

class Bomb extends Entity {
  constructor(x, y, hidden = true, flagged = false) {
    super(x, y, hidden, flagged)
  }
  render = () => {
    const div = document.getElementById(`cell_${this.x}_${this.y}`)
    if (this.flagged === true && this.hidden === true) {
      div.classList.add("Flag")
    } else if (this.hidden === true && this.flagged === false) {
      try {
        div.classList.remove("Flag")
      } catch (error) {
      }
    } else if (this.hidden === false) {
      div.classList.add("Shown", "Bomb")
    }
    return `<div id="cell_${this.x}_${this.y}" class="Cell" onclick="memoryTable[${this.y}][${this.x}].click()" oncontextmenu="cellRightClicked(event, ${this.x}, ${this.y})"> <div>`

  }
  click = () => {
    if (this.flagged === false && this.hidden === true) {
      this.hidden = false
      this.render()
      alert("hai perso")
      memoryTable.forEach(e => {
        e.forEach(elem => {
          elem.hidden = false
          elem.render()
        })
      })
      /* setTimeout(() => {
        location.reload()
      }, 10000) */
    }
  }
}

class NumberCell extends Entity {
  constructor(x, y,  hidden = true, flagged = false, number = 0) {
    super(x, y, hidden, flagged)
    this.number = number
  }
  render = () => {
    const div = document.getElementById(`cell_${this.x}_${this.y}`)
    if (this.flagged === true && this.hidden === true) {
      div.classList.add("Flag")
    } else if (this.hidden === true && this.flagged === false) {
      try {
        div.classList.remove("Flag")
      } catch (error) {
      }
    } else if (this.hidden === false) {
      div.classList.add("Shown")
      this.numberCheck()
      div.innerHTML = `<img src="./img/number_${this.number}.svg">`
    }
    return `<div id="cell_${this.x}_${this.y}" class="Cell" onclick="memoryTable[${this.y}][${this.x}].click()" oncontextmenu="cellRightClicked(event, ${this.x}, ${this.y})"> <div>`
  }

  click = () => {
    // coordinate celle prima generazione
    if (firstClick === true) {
      for (let counterY = -1; counterY <= 1; counterY++) {
        for (let counterX = -1; counterX <= 1; counterX++) {
          firstGenCoord.push(`${this.y - counterY}_${this.x - counterX}`)
        }
      }
      tableGenerator()
      firstClick = false
      memoryTable[this.y][this.x].click()
    } else if (this.hidden === true) {
        if (this.numberCheck() === 0) {
          this.hidden = false
          for (let counterY = -1; counterY <= 1; counterY++) {
            for (let counterX = -1; counterX <= 1; counterX++) {
              try {
                if (memoryTable[this.y - counterY][this.x - counterX].constructor.name !== "Bomb") {
                  memoryTable[this.y - counterY][this.x - counterX].click()
                }
              } catch (error) {
              }
            }
          }
        }
        this.hidden = false
        this.render()
      }
    }
    
  numberCheck = () => {
    let counter = 0
    for (let counterY = -1; counterY <= 1; counterY++) {
      for (let counterX = -1; counterX <= 1; counterX++) {
        try {
          if (memoryTable[this.y - counterY][this.x - counterX].constructor.name === "Bomb") {
            counter ++
          }
        } catch (error) {

        }
      }
    }
    this.number = counter
    return counter
  }
}

const onLoadTableGenerator = () => {
  // crea solo celle
  memoryTable.forEach((e, indY) => {
    e.forEach((elem, indX) => {
      memoryTable[indY][indX] = new NumberCell(indX, indY)
      cellGenerated.push(memoryTable[indY][indX])
    })
  })

  // crea div con solo celle
  const container = document.getElementById("container")
  container.innerHTML = ""

  memoryTable.forEach((e, i) => {
    container.innerHTML += `<div id="row_${i}" class="row"> </div>`
    e.forEach(elem => {
      const row = document.getElementById(`row_${i}`)
      row.innerHTML += elem.render()
    })
  })
}

const tableGenerator = () => {
  memoryTable.forEach((e, indY) => {
    e.forEach((elem, indX) => {
      if(!firstGenCoord.includes(`${indY}_${indX}`)) {
        memoryTable[indY][indX] = bombGenerator(indX, indY)
      } else {
        let oldCellIndex = cellGenerated.findIndex((cell) => {
          if(cell.x == indX && cell.y == indY) {
            return true
          } else {
            return false
          }
        })
        cellGenerated.splice(oldCellIndex, 1)
      }
    })
  })

  bombNumberCheck()

  container = document.getElementById("container")
  container.innerHTML = ""

  memoryTable.forEach((e, i) => {
    container.innerHTML += `<div id="row_${i}" class="row"> </div>`
    e.forEach(elem => {
      const row = document.getElementById(`row_${i}`)
      row.innerHTML += elem.render()      
    })
  })
}

const bombGenerator = (x, y) => {
  let bombChance = Math.floor(Math.random() * 10)
  if (bombChance <= 2) {
    bombGenerated.push(memoryTable[y][x])
        let oldCellIndex = cellGenerated.findIndex((cell) => {
          if(cell.x == x && cell.y == y) {
            return true
          } else {
            return false
          }
        })
        if (oldCellIndex != -1) {
          cellGenerated.splice(oldCellIndex, 1)
        }
    return new Bomb(x, y)
  } else {
    return new NumberCell(x, y)
  }
}

const bombNumberCheck = () => {
  if (BOMBNUMBER > bombGenerated.length) {
    // meno bombe del dovuto
    let cellSurplusIndex = Math.floor(Math.random() * cellGenerated.length)
    let x = cellGenerated[cellSurplusIndex].x
    let y = cellGenerated[cellSurplusIndex].y
    memoryTable[y][x] = new Bomb(x, y)
    bombGenerated.push(memoryTable[y][x])
    cellGenerated.splice(cellSurplusIndex, 1)
    bombNumberCheck()

  } else if (BOMBNUMBER < bombGenerated.length) {
    // più bombe del dovuto
    let bombSurplusIndex = Math.floor(Math.random() * bombGenerated.length)
    let x = bombGenerated[bombSurplusIndex].x
    let y = bombGenerated[bombSurplusIndex].y
    memoryTable[y][x] = new NumberCell(x, y)
    cellGenerated.push(memoryTable[y][x])
    bombGenerated.splice(bombSurplusIndex, 1)
    bombNumberCheck()
  }
}

const cellRightClicked = (e, x, y) => {
  e.preventDefault()
  if (memoryTable[y][x].flagged === false) {
    memoryTable[y][x].flagged = true
  } else {
    memoryTable[y][x].flagged = false
  }
  memoryTable[y][x].render()
  console.log(x, y, "right clicked")
}