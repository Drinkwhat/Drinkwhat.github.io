class Entity {
  constructor(x, y, hidden, flagged){
    this.x = x
    this.y = y
    this.hidden = hidden
    this.flagged = flagged
    this.click = () => {}
  }
}

class Bomb extends Entity {
  constructor(x, y, hidden, flagged){
    super(x, y, hidden, flagged)
    this.click = () => {
      if (this.hidden === true) {
        this.hidden = false
        alert("hai perso")
      }
    }
  }
}

class NumberCell extends Entity {
  constructor(x, y, hidden, flagged){
    super(x, y, hidden, flagged)
    this.num = () => {
      let counter = 0
      try {
        if (memoryTable[this.y-1][this.x-1].constructor.name === "Bomb") {
          counter++
        }
      } catch (error) {
        console.log(error)
      }
      try {
        if (memoryTable[this.y-1][this.x].constructor.name === "Bomb") {
          counter++
        }
      } catch (error) {
        console.log(error)
      }
      try {
        if (memoryTable[this.y-1][this.x+1].constructor.name === "Bomb") {
          counter++
        }
      } catch (error) {
        console.log(error)
      }
      try {
        if (memoryTable[this.y][this.x-1].constructor.name === "Bomb") {
          counter++
        }
      } catch (error) {
        console.log(error)
      }
      try {
        if (memoryTable[this.y][this.x+1].constructor.name === "Bomb") {
          counter++
        }
      } catch (error) {
        console.log(error)
      }
      try {
        if (memoryTable[this.y+1][this.x-1].constructor.name === "Bomb") {
          counter++
        }
      } catch (error) {
        console.log(error)
      }
      try {
        if (memoryTable[this.y+1][this.x].constructor.name === "Bomb") {
          counter++
        }
      } catch (error) {
        console.log(error)
      }
      try {
        if (memoryTable[this.y+1][this.x+1].constructor.name === "Bomb") {
          counter++
        }
      } catch (error) {
        console.log(error)
      }
      return counter
    }
    this.click = () => {
      if (this.hidden === true) {
        this.hidden = false
      }
    }
  }
}

class VoidCell extends Entity {
  constructor(x, y, hidden, flagged){
    super(x, y, hidden, flagged)
    this.click = () => {
      if (this.hidden === true) {
        this.hidden = false
        try {
          if (memoryTable[this.y-1][this.x-1].constructor.name !== "Bomb") {
            memoryTable[this.y-1][this.x-1].click()
          }
        } catch (error) {
          console.log(error)
        }
        try {
          if (memoryTable[this.y-1][this.x].constructor.name !== "Bomb") {
            memoryTable[this.y-1][this.x].click()
          }
        } catch (error) {
          console.log(error)
        }
        try {
          if (memoryTable[this.y-1][this.x+1].constructor.name !== "Bomb") {
            memoryTable[this.y-1][this.x+1].click()
          }
        }
        catch (error) {
          console.log(error)
        }
        try {
          if (memoryTable[this.y][this.x-1].constructor.name !== "Bomb") {
            memoryTable[this.y][this.x-1].click()
          }
        }
        catch (error) {
          console.log(error)
        }
        try {
          if (memoryTable[this.y][this.x+1].constructor.name !== "Bomb") {
            memoryTable[this.y][this.x+1].click()
          }
        }
        catch (error) {
          console.log(error)
        }
        try {
          if (memoryTable[this.y+1][this.x-1].constructor.name !== "Bomb") {
            memoryTable[this.y+1][this.x-1].click()
          }
        }
        catch (error) {
          console.log(error)
        }
        try {
          if (memoryTable[this.y+1][this.x].constructor.name !== "Bomb") {
            memoryTable[this.y+1][this.x].click()
          }
        }
        catch (error) {
          console.log(error)
        }
        try {
          if (memoryTable[this.y+1][this.x+1].constructor.name !== "Bomb") {
            memoryTable[this.y+1][this.x+1].click()
          }
        }
        catch (error) {
          console.log(error)
        }

      }
    }
  } 
}


function prova() {
  console.log(memoryTable[0][1].click())
}

const memoryTable = [
  [0, new Bomb(1, 0, true, false) , new Bomb(2, 0, true, false), 0, 0, 0, 0, 0, 0],
  [new Bomb(0, 1, true, false), new NumberCell(1, 1, true, false) , new Bomb(2, 1, true, false), 0, 0, 0, 0, 0, 0],
  [new Bomb(0, 2, true, false), new Bomb(1, 2, true, false), new Bomb(2, 2, true, false), 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]