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
    if (this.hidden === false) {
      console.log("ciao")
      document.getElementById(`cell_${this.x}_${this.y}`).classList.add("Shown")
      return
    }
    return `<div id="cell_${this.x}_${this.y}" class="Bomb" onclick="cellLeftClicked(${this.x}, ${this.y})" contexmenu="cellRightClicked(${this.x}, ${this.y})"> </div>`
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
    if (this.hidden === false) {
      document.getElementById(`cell_${this.x}_${this.y}`).classList.add("Shown")
      document.getElementById(`cell_${this.x}_${this.y}`).innerHTML = this.number
    }
    return `<div id="cell_${this.x}_${this.y}" class="NumberCell" onclick="cellLeftClicked(${this.x}, ${this.y})" contexmenu="cellRightClicked(${this.x}, ${this.y})"> <div>`
  }

  click = () => {
    console.log(this)
    if (this.hidden === true) {
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

// eslint-disable-next-line no-unused-vars
const tableGenerator = () => {
  memoryTable.forEach((e, indY) => {
    e.forEach((elem, indX) => {
      memoryTable[indY][indX] = bombGenerator(indX, indY)
    })
  })

  const container = document.getElementById("container")
  container.innerHTML = ""

  memoryTable.forEach((e, i) => {
    container.innerHTML += `<div id="row_${i}" class="row"> </div>`
    e.forEach(elem => {
      const row = document.getElementById(`row_${i}`)
      row.innerHTML += elem.render()
    })
  })
  console.log(memoryTable)
}

const bombGenerator = (x, y) => {
  const bombChance = Math.floor(Math.random() * 10)

  if (bombChance <= 2) {
    return new Bomb(x, y)
  } else {
    return new NumberCell(x, y)
  }
}

// eslint-disable-next-line no-unused-vars
const prova = () => {
  console.log(memoryTable)
}
// eslint-disable-next-line no-unused-vars
const cellLeftClicked = (x, y) => {
  console.log(x, y, "sinistro")
  memoryTable[y][x].click()
}

const cellRightClicked = (x, y) => {
  Event.preventDefault()
  console.log(x, y, "destro")
}