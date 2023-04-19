const gameover = (trigger) => {
    if(trigger === "afk") {
        alert("spegni il computer")
    } else if(trigger === "bomb") {
        clearInterval(timerId)
        document.getElementById("timer").innerHTML = `Hai detonato una bomba \n ${hour} : ${min} : ${sec}`
        memoryTable.forEach(e => {
            e.forEach(elem => {
            elem.hidden = false
            elem.render()
            })
        })
    } else if(trigger === "win") {
        clearInterval(timerId)
        document.getElementById("timer").innerHTML = `Hai vinto! \n ${hour} : ${min} : ${sec}`
    }
}