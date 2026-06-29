const board = document.querySelector("#board")
let currentPlayer = "red"

board.addEventListener("click", function(event) {
    const clickedBox = event.target

    if (clickedBox.classList.contains("box")) {
        if ((clickedBox.classList.contains("red")) || clickedBox.classList.contains("yellow")) {
            return
        
        }
        clickedBox.classList.add(currentPlayer)

    } if (currentPlayer === "red") {
        currentPlayer ="yellow"
    } else {
        currentPlayer = "red"
    
    }
})

