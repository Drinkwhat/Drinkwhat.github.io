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
  click = () => {
    console.log(this)
    if (this.hidden === true) {
      this.hidden = false
      alert("hai perso")
      this.render()
    }
  }
  render = () => {
    if (this.hidden === false) {
      return `<div id="cell_${this.x}_${this.y}" class="Bomb Shown" onclick="cellClicked(${this.x}, ${this.y})"> </div>`
    }
    return `<div id="cell_${this.x}_${this.y}" class="Bomb" onclick="cellClicked(${this.x}, ${this.y})"> </div>`
  }
}

class NumberCell extends Entity {
  constructor(x, y,  hidden = true, flagged = false, number = 0) {
    super(x, y, hidden, flagged)
    this.number = number
  }

  click = () => {
    console.log(this)
    if (this.hidden === true && this.numberCheck() === 0) {
      this.hidden = false
      try {
        if (memoryTable[this.y - 1][this.x - 1].constructor.name !== "Bomb") {
          memoryTable[this.y - 1][this.x - 1].click()
        }
      } catch (error) {
        // console.log(error)
      }
      try {
        if (memoryTable[this.y - 1][this.x].constructor.name !== "Bomb") {
          memoryTable[this.y - 1][this.x].click()
        }
      } catch (error) {
        // console.log(error)
      }
      try {
        if (memoryTable[this.y - 1][this.x + 1].constructor.name !== "Bomb") {
          memoryTable[this.y - 1][this.x + 1].click()
        }
      } catch (error) {
        // console.log(error)
      }
      try {
        if (memoryTable[this.y][this.x - 1].constructor.name !== "Bomb") {
          memoryTable[this.y][this.x - 1].click()
        }
      } catch (error) {
        // console.log(error)
      }
      try {
        if (memoryTable[this.y][this.x + 1].constructor.name !== "Bomb") {
          memoryTable[this.y][this.x + 1].click()
        }
      } catch (error) {
        // console.log(error)
      }
      try {
        if (memoryTable[this.y + 1][this.x - 1].constructor.name !== "Bomb") {
          memoryTable[this.y + 1][this.x - 1].click()
        }
      } catch (error) {
        // console.log(error)
      }
      try {
        if (memoryTable[this.y + 1][this.x].constructor.name !== "Bomb") {
          memoryTable[this.y + 1][this.x].click()
        }
      } catch (error) {
        // console.log(error)
      }
      try {
        if (memoryTable[this.y + 1][this.x + 1].constructor.name !== "Bomb") {
          memoryTable[this.y + 1][this.x + 1].click()
        }
      } catch (error) {
        // console.log(error)
      }
    }
  }
  render = () => {
    if (this.hidden === false) {
      return `<div id="cell__${this.x}_${this.y}" class="NumberCell Shown" onclick="cellClicked(${this.x}, ${this.y})"> <div>${this.numberCheck()}</div> </div>`
    }
    return `<div id="cell__${this.x}_${this.y}" class="NumberCell" onclick="cellClicked(${this.x}, ${this.y})"> <div>`
  }
  numberCheck = () => {
    let counter = 0
    try {
      if (memoryTable[this.y - 1][this.x - 1].constructor.name === "Bomb") {
        counter++
      }
    } catch (error) {
      // console.log(error)
    }
    try {
      if (memoryTable[this.y - 1][this.x].constructor.name === "Bomb") {
        counter++
      }
    } catch (error) {
      // console.log(error)
    }
    try {
      if (memoryTable[this.y - 1][this.x + 1].constructor.name === "Bomb") {
        counter++
      }
    } catch (error) {
      // console.log(error)
    }
    try {
      if (memoryTable[this.y][this.x - 1].constructor.name === "Bomb") {
        counter++
      }
    } catch (error) {
      // console.log(error)
    }
    try {
      if (memoryTable[this.y][this.x + 1].constructor.name === "Bomb") {
        counter++
      }
    } catch (error) {
      // console.log(error)
    }
    try {
      if (memoryTable[this.y + 1][this.x - 1].constructor.name === "Bomb") {
        counter++
      }
    } catch (error) {
      // console.log(error)
    }
    try {
      if (memoryTable[this.y + 1][this.x].constructor.name === "Bomb") {
        counter++
      }
    } catch (error) {
      // console.log(error)
    }
    try {
      if (memoryTable[this.y + 1][this.x + 1].constructor.name === "Bomb") {
        counter++
      }
    } catch (error) {
      // console.log(error)
    }
    this.number = counter
    this.render()
    return counter
  }
}
/*
  class VoidCell extends Entity {
	constructor(x, y, hidden = true, flagged = false){
	  super(x, y, hidden, flagged)
	  this.click = () => {
		if (this.hidden === true) {
		  this.hidden = false
		  try {
			if (memoryTable[this.y-1][this.x-1].constructor.name !== "Bomb") {
			  memoryTable[this.y-1][this.x-1].click()
			}
		  } catch (error) {
			// console.log(error)

		  }
		  try {
			if (memoryTable[this.y-1][this.x].constructor.name !== "Bomb") {
			  memoryTable[this.y-1][this.x].click()
			}
		  } catch (error) {
			// console.log(error)

		  }
		  try {
			if (memoryTable[this.y-1][this.x+1].constructor.name !== "Bomb") {
			  memoryTable[this.y-1][this.x+1].click()
			}
		  }
		  catch (error) {
			// console.log(error)

		  }
		  try {
			if (memoryTable[this.y][this.x-1].constructor.name !== "Bomb") {
			  memoryTable[this.y][this.x-1].click()
			}
		  }
		  catch (error) {
			// console.log(error)

		  }
		  try {
			if (memoryTable[this.y][this.x+1].constructor.name !== "Bomb") {
			  memoryTable[this.y][this.x+1].click()
			}
		  }
		  catch (error) {
			// console.log(error)

		  }
		  try {
			if (memoryTable[this.y+1][this.x-1].constructor.name !== "Bomb") {
			  memoryTable[this.y+1][this.x-1].click()
			}
		  }
		  catch (error) {
			// console.log(error)

		  }
		  try {
			if (memoryTable[this.y+1][this.x].constructor.name !== "Bomb") {
			  memoryTable[this.y+1][this.x].click()
			}
		  }
		  catch (error) {
			// console.log(error)

		  }
		  try {
			if (memoryTable[this.y+1][this.x+1].constructor.name !== "Bomb") {
			  memoryTable[this.y+1][this.x+1].click()
			}
		  }
		  catch (error) {
			// console.log(error)

		  }
		}
	  }
	}
  }
*/

const tableGenerator = () => {
  memoryTable.forEach((e, indY) => {
    e.forEach((elem, indX) => {
      memoryTable[indY][indX] = bombGenerator(indX, indY)
    })
  })

  /* 	memoryTable.forEach( (e, i) => {
		  e.forEach((elem, ind) => {
			  memoryTable[i][ind] = tempMemoryTable[i][ind]
		  });
	  }); */
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

/* const bombDrawControl = (x, y) => {
	  console.log(memoryTable[y], memoryTable[y][x])
	  if (memoryTable[y][x] == -1) {
		  return true
	  } else {
		  return false
	  }
} */

const prova = () => {
  console.log(memoryTable)
}
const cellClicked = (x, y) => {
  console.log(x, y)
  memoryTable[y][x].click()
}