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

let noFlag = false

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
      div.classList.add("Bomb")
    }
    return `<div id="cell_${this.x}_${this.y}" class="Cell" onclick="memoryTable[${this.y}][${this.x}].click()" oncontextmenu="cellRightClicked(event, ${this.x}, ${this.y})"> <div>`
  }
  click = () => {
    if (this.flagged === false && this.hidden === true) {
      this.hidden = false
      this.render()
      gameover("bomb")
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
      div.innerHTML = `<img src="../img/number_${this.number}.svg">`
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
      console.log(BOMBNUMBER)
      tableGenerator()
      timerInit()
      firstClick = false
      this.click()
      memoryTable.forEach(e => {
        e.forEach(elem => {
          elem.flagged = false
          elem.render()
        })
      })
    } else if (this.hidden === true) {
      this.hidden = false
      cellRevealed++
      if (memoryTable.length ** 2 - BOMBNUMBER === cellRevealed) {
        gameover("win")
      }
      if (this.numberCheck() === 0) {
        for (let counterY = -1; counterY <= 1; counterY++) {
          for (let counterX = -1; counterX <= 1; counterX++) {
            try {
              //if (memoryTable[this.y - counterY][this.x - counterX].constructor.name !== "Bomb") {
                noFlag = true
                memoryTable[this.y - counterY][this.x - counterX].click()
                noFlag = false
              //}
            } catch (error) {
            }
          }
        }
      }
      this.render()
    } else if (this.hidden === false && this.numberCheck() !== 0 && this.flagged === false) {
      let flagCounter = 0
      for (let counterY = -1; counterY <= 1; counterY++) {
        for (let counterX = -1; counterX <= 1; counterX++) {
          try {
            if (memoryTable[this.y - counterY][this.x - counterX].flagged === true) {
              flagCounter++
            }
          } catch (error) {
          }
        }
      }
      if (flagCounter === this.numberCheck()) {
        for (let counterY = -1; counterY <= 1; counterY++) {
          for (let counterX = -1; counterX <= 1; counterX++) {
            if (counterY !== 0 || counterX !== 0) {
              try {
                if (memoryTable[this.y - counterY][this.x - counterX].flagged === false && memoryTable[this.y - counterY][this.x - counterX].hidden === true) {
                  if (memoryTable[this.y - counterY][this.x - counterX].constructor.name === "Bomb") {
                    memoryTable[this.y - counterY][this.x - counterX].click()
                  } else if (memoryTable[this.y - counterY][this.x - counterX].numberCheck() === 0) {
                    memoryTable[this.y - counterY][this.x - counterX].click()
                  } else {
                    memoryTable[this.y - counterY][this.x - counterX].hidden = false
                    memoryTable[this.y - counterY][this.x - counterX].render()
                    cellRevealed++
                    if (memoryTable.length ** 2 - BOMBNUMBER === cellRevealed) {
                      gameover("win")
                    }
                  }
                }
              } catch (error) {
              }
            }
          }
        }
      }
      let hiddenCounter = 0
      for (let counterY = -1; counterY <= 1; counterY++) {
        for (let counterX = -1; counterX <= 1; counterX++) {
          try {
            if (memoryTable[this.y - counterY][this.x - counterX].hidden === true) {
              hiddenCounter++
            }
          } catch (error) {
          }
        }
      }
      if (hiddenCounter === this.number) {
        for (let counterY = -1; counterY <= 1; counterY++) {
          for (let counterX = -1; counterX <= 1; counterX++) {
            if (counterY !== 0 || counterX !== 0) {
              try {
                if (memoryTable[this.y - counterY][this.x - counterX].hidden === true && noFlag === false) {
                  memoryTable[this.y - counterY][this.x - counterX].flagged = true
                  memoryTable[this.y - counterY][this.x - counterX].render()
                }
              } catch (error) {
              }
            }
          }
        }
      }
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

// eslint-disable-next-line no-unused-vars
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
      if (!firstGenCoord.includes(`${indY}_${indX}`)) {
        memoryTable[indY][indX] = bombGenerator(indX, indY)
      } else {
        const oldCellIndex = cellGenerated.findIndex((cell) => {
          if (cell.x === indX && cell.y === indY) {
            return true
          }
          return false
        })
        cellGenerated.splice(oldCellIndex, 1)
      }
    })
  })

  bombNumberCheck()

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
  const  bombChance = Math.floor(Math.random() * 10)
  if (bombChance <= 2) {
    bombGenerated.push(memoryTable[y][x])
    const oldCellIndex = cellGenerated.findIndex((cell) => {
      if (cell.x === x && cell.y === y) {
        return true
      }
      return false
    })
    if (oldCellIndex !== -1) {
      cellGenerated.splice(oldCellIndex, 1)
    }
    return new Bomb(x, y)
  }
  return new NumberCell(x, y)
}

const bombNumberCheck = () => {
  if (BOMBNUMBER > bombGenerated.length) {
    // meno bombe del dovuto
    const cellSurplusIndex = Math.floor(Math.random() * cellGenerated.length)
    const x = cellGenerated[cellSurplusIndex].x
    const  y = cellGenerated[cellSurplusIndex].y
    memoryTable[y][x] = new Bomb(x, y)
    bombGenerated.push(memoryTable[y][x])
    cellGenerated.splice(cellSurplusIndex, 1)
    bombNumberCheck()

  } else if (BOMBNUMBER < bombGenerated.length) {
    // più bombe del dovuto
    const bombSurplusIndex = Math.floor(Math.random() * bombGenerated.length)
    const x = bombGenerated[bombSurplusIndex].x
    const y = bombGenerated[bombSurplusIndex].y
    memoryTable[y][x] = new NumberCell(x, y)
    cellGenerated.push(memoryTable[y][x])
    bombGenerated.splice(bombSurplusIndex, 1)
    bombNumberCheck()
  }
}

// eslint-disable-next-line no-unused-vars
const cellRightClicked = (e, x, y) => {
  e.preventDefault()
  if (memoryTable[y][x].hidden === false  || firstClick === true) {
    return
  }
  //memoryTable[y][x].flagged = !memoryTable[y][x].flagged
   if (memoryTable[y][x].flagged === true) {
    memoryTable[y][x].flagged = false
  } else {
    memoryTable[y][x].flagged = true
  }
  memoryTable[y][x].render()
}

// eslint-disable-next-line no-unused-vars
const mostraBombe = () => {
  memoryTable.forEach((e, y) => {
    e.forEach((elem, x) => {
      if (elem.constructor.name === "Bomb") {
        document.getElementById(`cell_${x}_${y}`).classList.add("Bomb")
        elem.render()
      }
    })
  })
}
