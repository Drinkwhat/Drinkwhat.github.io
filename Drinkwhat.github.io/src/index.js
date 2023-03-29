class Entity {
  constructor(x, y, hidden, flagged){
    this.x = x
    this.y = y
    this.hidden = hidden
    this.flagged = flagged
    this.click = () => {}
    this.render = () => {}
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
    this.render = () => {

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
  constructor(x, y, hidden = true, flagged = false){
    super(x, y, hidden, flagged)
    // espansione
    this.click = () => {
      if (this.hidden === true) {
        this.hidden = false
        console.log(`esplodo ${this.x}, ${this.y}`)
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
  [new VoidCell(0,3), new VoidCell(1,3), new VoidCell(2,3), new VoidCell(3,3), new VoidCell(4,3), new VoidCell(5,3), new VoidCell(6,3), new VoidCell(7,3), new VoidCell(8,3)],
  [new VoidCell(0,4), new VoidCell(1,4), new VoidCell(2,4), new VoidCell(3,4), new VoidCell(4,4), new VoidCell(5,4), new VoidCell(6,4), new VoidCell(7,4), new VoidCell(8,4)],
  [new VoidCell(0,5), new VoidCell(1,5), new VoidCell(2,5), new VoidCell(3,5), new VoidCell(4,5), new VoidCell(5,5), new VoidCell(6,5), new VoidCell(7,5), new VoidCell(8,5)],
  [new VoidCell(0,6), new VoidCell(1,6), new VoidCell(2,6), new VoidCell(3,6), new VoidCell(4,6), new VoidCell(5,6), new VoidCell(6,6), new VoidCell(7,6), new VoidCell(8,6)],
  [new VoidCell(0,7), new VoidCell(1,7), new VoidCell(2,7), new VoidCell(3,7), new VoidCell(4,7), new VoidCell(5,7), new VoidCell(6,7), new VoidCell(7,7), new VoidCell(8,7)],
  [new VoidCell(0,8), new VoidCell(1,8), new VoidCell(2,8), new VoidCell(3,8), new VoidCell(4,8), new VoidCell(5,8), new VoidCell(6,8), new VoidCell(7,8), new VoidCell(8,8)]
]