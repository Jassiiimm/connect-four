const board = document.querySelector("#board")
const boxes = document.querySelectorAll(".box")
let currentPlayer = "red"
const message = document.querySelector("#message")
let gameOver = false


  board.addEventListener("click", function(event) {
  const clickedBox = event.target

if (clickedBox.classList.contains("box")) {
    const clickedId = Number(clickedBox.id)
    const column = clickedId % 7
    console.log(column)
    
    for (let boxId = column + 35; boxId >= 0; boxId -= 7) {
      const box = boxes[boxId]
      if (!box.classList.contains("red") && !box.classList.contains("yellow")) {
        box.classList.add(currentPlayer)
        if (boxId <=20 && boxes[boxId +7].classList.contains(currentPlayer) && boxes[boxId+14].classList.contains(currentPlayer) && boxes[boxId+21].classList.contains(currentPlayer)) {
         message.textContent = currentPlayer + " wins" 
         gameOver = true 
         return
        }
        const rowStart = boxId - (boxId % 7)
        const rowEnd = rowStart+6
        
        if ((boxId - 3 >= rowStart && boxes[boxId - 1].classList.contains(currentPlayer) && boxes[boxId - 2].classList.contains(currentPlayer) && boxes[boxId - 3].classList.contains(currentPlayer))
         || (boxId - 2 >= rowStart && boxId + 1 <= rowEnd && boxes[boxId - 1].classList.contains(currentPlayer) && boxes[boxId - 2].classList.contains(currentPlayer) && boxes[boxId + 1].classList.contains(currentPlayer)) 
         || (boxId - 1 >= rowStart && boxId + 2 <= rowEnd && boxes[boxId - 1].classList.contains(currentPlayer) && boxes[boxId + 1].classList.contains(currentPlayer) && boxes[boxId + 2].classList.contains(currentPlayer)) 
         || (boxId + 3 <= rowEnd && boxes[boxId + 1].classList.contains(currentPlayer) && boxes[boxId + 2].classList.contains(currentPlayer) && boxes[boxId + 3].classList.contains(currentPlayer))) {
          message.textContent = currentPlayer + " wins"
          gameOver = true
          return
        }
        if (currentPlayer === "red") {
          currentPlayer = "yellow"
        } 
        else {
          currentPlayer = "red"
        } return
  }
  }
  }
})