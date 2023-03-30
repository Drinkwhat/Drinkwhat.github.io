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
	constructor(x, y, hidden, flagged){
	  this.x = x
	  this.y = y
	  this.hidden = hidden
	  this.flagged = flagged
	  this.click = () => {}
	}
}
  
class Bomb extends Entity {
	constructor(x, y, hidden = true, flagged = false){
	  super(x, y, hidden, flagged)
	  this.click = () => {
		if (this.hidden === true) {
		  this.hidden = false
		  alert("hai perso")
		}
	  }
	  this.render = () => {
		  return `<div id="cell_${this.x}_${this.y}" class="Bomb" onclick="cellClicked(${this.x}, ${this.y})"> </div>`
	  }
	}
}
  
class NumberCell extends Entity {
	constructor(x, y,  hidden = true, flagged = false, number = 0){
	  super(x, y, hidden, flagged)
	  this.number = number
	  this.click = () => {
		if (this.hidden === true) {
		  this.hidden = false
		}
	  }
	}
	render = () => {
	  return `<div id="cell_${this.x}_${this.y}" class="NumberCell" onclick="cellClicked(${this.x}, ${this.y})"> <div>`
	}
	numberCheck = () => {
	  let counter = 0
	  try {
		if (memoryTable[this.x-1][this.y-1].constructor.name === "Bomb") {
		  counter++
		}
	  } catch (error) {
		console.log(error)
	  }
	  try {
		if (memoryTable[this.x][this.y-1].constructor.name === "Bomb") {
		  counter++
		}
	  } catch (error) {
		console.log(error)
	  }
	  try {
		if (memoryTable[this.x+1][this.y-1].constructor.name === "Bomb") {
		  counter++
		}
	  } catch (error) {
		console.log(error)
	  }
	  try {
		if (memoryTable[this.x-1][this.y].constructor.name === "Bomb") {
		  counter++
		}
	  } catch (error) {
		console.log(error)
	  }
	  try {
		if (memoryTable[this.x+1][this.y].constructor.name === "Bomb") {
		  counter++
		}
	  } catch (error) {
		console.log(error)
	  }
	  try {
		if (memoryTable[this.x-1][this.y+1].constructor.name === "Bomb") {
		  counter++
		}
	  } catch (error) {
		console.log(error)
	  }
	  try {
		if (memoryTable[this.x][this.y+1].constructor.name === "Bomb") {
		  counter++
		}
	  } catch (error) {
		console.log(error)
	  }
	  try {
		if (memoryTable[this.x+1][this.y+1].constructor.name === "Bomb") {
		  counter++
		}
	  } catch (error) {
		console.log(error)
	  }
	  this.number = counter
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
  */
  
const tableGenerator = () => {
  
  const tempMemoryTable = []
 
  memoryTable.forEach( (e, y) => {
  e.forEach((elem, x) => {
	memoryTable[x][y] = bombGenerator(x, y)
	console.log(elem)			
	  })
  })
  
  /* 	memoryTable.forEach( (e, i) => {
		  e.forEach((elem, ind) => {
			  memoryTable[i][ind] = tempMemoryTable[i][ind]
		  });		
	  }); */
  
	const container = document.getElementById("container")
		container.innerHTML = ""
	  
	  memoryTable.forEach((e,i) => {
		container.innerHTML += `<div id="column_${i}" class="column"> </div>`
		e.forEach((elem, ind) => {
			let column = document.getElementById(`column_${i}`)
			column.innerHTML += elem.render()
			})
		})
	console.log(memoryTable)
  }
  
  const bombGenerator = (x, y) => {
	  let bombChance = Math.floor(Math.random() * 10)
	  if (bombChance <= 2) {
			return new Bomb(x, y)
	  } else {
		  return new NumberCell(x, y)
	  }
  }
  
 /*  const bombDrawControl = (x, y) => {
	  console.log(memoryTable[y], memoryTable[y][x])
	  if (memoryTable[y][x] == -1) {
		  return true
	  } else {
		  return false
	  }
  } */
  
const cellClicked = (x, y) => {
  console.log (`hai premuto la cesella n.${x} - ${y}`)
	let cell = memoryTable[x][y]
	console.log (cell)
	console.log (cell.numberCheck())
	

}

const prova = () => {
	console.log (memoryTable)
	/*const swap = (x, y) => {
		return x, y 
	}
	const tempMemoryTable = memoryTable.map(swap)

	for {}

	/*memoryTable.forEach ((e, i) => {
		memoryTable.forEach ((elem, ind) => {
			tempMemoryTable [ind][i] = memoryTable [i][ind]
		})
	})
	console.log(tempMemoryTable)*/
}