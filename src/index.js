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
    if (this.flagged === true) {
      document.getElementById(`cell_${this.x}_${this.y}`).classList.add("Flag")
      document.getElementById(`cell_${this.x}_${this.y}`).innerHTML = `<img src="./img/flag.svg" width="45" height="45" class="Img">`
    } else if (this.hidden === false) {
      document.getElementById(`cell_${this.x}_${this.y}`).classList.add("Shown")
      document.getElementById(`cell_${this.x}_${this.y}`).innerHTML = `<img src="./img/bomb.svg" width="45" height="45" class="Img">`
    }
    return `<div id="cell_${this.x}_${this.y}" class="Bomb" onclick="cellClicked(${this.x}, ${this.y})" oncontextmenu="cellRightClicked(event, ${this.x}, ${this.y})"> <div>`

  }
  click = () => {
    console.log(this)
    if (this.hidden === true) {
      this.hidden = false
      this.render()
      alert("hai perso")
    }
  }
}

class NumberCell extends Entity {
  constructor(x, y,  hidden = true, flagged = false, number = 0) {
    super(x, y, hidden, flagged)
    this.number = number
  }
  render = () => {
    if (this.flagged === true) {
      document.getElementById(`cell_${this.x}_${this.y}`).classList.add("Flag")
      document.getElementById(`cell_${this.x}_${this.y}`).innerHTML = `<img src="./img/flag.svg" width="45" height="45" class="Img">`
    } else if (this.hidden === false) {
      document.getElementById(`cell_${this.x}_${this.y}`).classList.add("Shown")
      document.getElementById(`cell_${this.x}_${this.y}`).innerHTML = `<img src="./img/number_${this.number}.svg" width="45" height="45" class="Img">`
    }
    return `<div id="cell_${this.x}_${this.y}" class="NumberCell" onclick="cellClicked(${this.x}, ${this.y})" oncontextmenu="cellRightClicked(event, ${this.x}, ${this.y})"> <div>`
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
      cellClicked(this.x, this.y)
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
    this.render()
    return counter
  }
}

const onLoadTableGenerator = () => {
  // crea solo celle
  memoryTable.forEach((e, indY) => {
    e.forEach((elem, indX) => {
      memoryTable[indY][indX] = new NumberCell(indX, indY) 
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
      }
    })
  })

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
  const bombChance = Math.floor(Math.random() * 10)

  if (bombChance <= 2) {
    return new Bomb(x, y)
  } else {
    return new NumberCell(x, y)
  }
}

const cellClicked = (x, y) => {
  console.log(x, y, "clicked")
  memoryTable[y][x].click()
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