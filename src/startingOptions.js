const start = () => {
    let difficulty = document.getElementById("difficultyInput").value
    let tableSize = document.getElementById("tableSizeInput").value

    const memoryTable = []
    for (let y = 0; y < tableSize; y++) {
        memoryTable.push(new Array)
        for (let x = 0; x < tableSize; x++) {
            memoryTable[y].push(x)
        }
    }
    console.log(memoryTable)
}