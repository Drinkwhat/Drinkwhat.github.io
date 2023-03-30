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
  /* 
  const memoryTable = [
	[new NumberCell(0, 0), new Bomb(1, 0) , new Bomb(2, 0), 0, 0, 0, 0, 0, 0],
	[new Bomb(0, 1), new NumberCell(1, 1) , new Bomb(2, 1), 0, 0, 0, 0, 0, 0],
	[new Bomb(0, 2), new Bomb(1, 2), new Bomb(2, 2), 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
  ] */
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
  
	  memoryTable.forEach( (e, i) => {
	  e.forEach((elem, ind) => {
		memoryTable[ind][i] = bombGenerator(ind, i)
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
		  container.innerHTML += `<div id="row_${i}" class="row"> </div>`
		  e.forEach((elem, ind) => {
			  let row = document.getElementById(`row_${i}`)
		row.innerHTML += elem.render()
  
		  })
	  })
	console.log(memoryTable)
	
  }
  
  const bombGenerator = (x, y) => {
	  let bombChance = Math.floor(Math.random() * 10)
  
	  if (bombChance <= 2) {
		  return new Bomb(x,y)
	  } else {
		  return new NumberCell(x,y)
	  }
  }
  
  const bombDrawControl = (x, y) => {
	  console.log(memoryTable[y], memoryTable[y][x])
	  if (memoryTable[y][x] == -1) {
		  return true
	  } else {
		  return false
	  }
  }
  
  const cellClicked = (x, y) => {
	  console.log(`hai premuto la cesella n.${x} - ${y}`)
  }