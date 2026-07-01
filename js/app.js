const board = document.querySelector("#board")
const boxes = document.querySelectorAll(".box")
let currentPlayer = "red"
const message = document.querySelector("#message")
let gameOver = false
const resetBtn = document.querySelector("#reset-btn")


  board.addEventListener("click", function(event) {
  const clickedBox = event.target

if (clickedBox.classList.contains("box")) {
  if (gameOver === true) {
    return
  }

    const clickedId = Number(clickedBox.id)
    const column = clickedId % 7

    
    for (let boxId = column + 35; boxId >= 0; boxId -= 7) {
      const box = boxes[boxId]
      if (!box.classList.contains("red") && !box.classList.contains("yellow")) {
        box.classList.add(currentPlayer)

        if (boxId <=20 && boxes[boxId +7].classList.contains(currentPlayer) 
          && boxes[boxId+14].classList.contains(currentPlayer) 
        && boxes[boxId+21].classList.contains(currentPlayer)) {
         message.textContent = currentPlayer + " wins" 
         gameOver = true 
         return
        }
        const rowStart = boxId - (boxId % 7)
        const rowEnd = rowStart+6
        
        if ((boxId - 3 >= rowStart 
          && boxes[boxId - 1].classList.contains(currentPlayer) 
            && boxes[boxId - 2].classList.contains(currentPlayer) 
           && boxes[boxId - 3].classList.contains(currentPlayer))
         || (boxId - 2 >= rowStart 
          && boxId + 1 <= rowEnd 
            && boxes[boxId - 1].classList.contains(currentPlayer)
          && boxes[boxId - 2].classList.contains(currentPlayer)
           && boxes[boxId + 1].classList.contains(currentPlayer)) 
         || (boxId - 1 >= rowStart 
           && boxId + 2 <= rowEnd 
             && boxes[boxId - 1].classList.contains(currentPlayer)
           && boxes[boxId + 1].classList.contains(currentPlayer)
            && boxes[boxId + 2].classList.contains(currentPlayer)) 
         ||  (boxId + 3 <= rowEnd 
          && boxes[boxId + 1].classList.contains(currentPlayer) 
          && boxes[boxId + 2].classList.contains(currentPlayer)
          && boxes[boxId + 3].classList.contains(currentPlayer))) {
          message.textContent = currentPlayer + " wins"
          gameOver = true
          return
        }

     const row = Math.floor(boxId / 7)
const columnNumber = boxId % 7

// \ diagonal (row - is up, column - left)
if (row - 3 >= 0 && columnNumber - 3 >= 0) {
  if ( boxes[boxId - 8].classList.contains(currentPlayer) 
    && boxes[boxId - 16].classList.contains(currentPlayer) 
  && boxes[boxId - 24].classList.contains(currentPlayer)) {
    message.textContent = currentPlayer + " wins"
    gameOver = true
    return
  }
}

if (row + 3 <= 5 && columnNumber + 3 <= 6) {
  if (boxes[boxId + 8].classList.contains(currentPlayer) 
    && boxes[boxId + 16].classList.contains(currentPlayer) 
  && boxes[boxId + 24].classList.contains(currentPlayer)) {
    message.textContent = currentPlayer + " wins"
    gameOver = true
    return
  }
}

if (row - 2 >= 0 && columnNumber - 2 >= 0 && row + 1 <= 5 && columnNumber + 1 <= 6) {
  if (boxes[boxId - 8].classList.contains(currentPlayer)
    && boxes[boxId - 16].classList.contains(currentPlayer)
  && boxes[boxId + 8].classList.contains(currentPlayer)) {
    message.textContent = currentPlayer + " wins"
    gameOver = true
    return
  }
}

if (row - 1 >= 0 && columnNumber - 1 >= 0 && row + 2 <= 5 && columnNumber + 2 <= 6) {
  if (boxes[boxId - 8].classList.contains(currentPlayer)
    && boxes[boxId + 8].classList.contains(currentPlayer)
  && boxes[boxId + 16].classList.contains(currentPlayer)) {
    message.textContent = currentPlayer + " wins"
    gameOver = true
    return
  }
}

// / diagonal (same idea just flip the signs and change 8 to 6)

if (row - 3 >= 0 && columnNumber + 3 <= 6) {
  if (boxes[boxId - 6].classList.contains(currentPlayer)
    && boxes[boxId - 12].classList.contains(currentPlayer)
  && boxes[boxId - 18].classList.contains(currentPlayer)) {
    message.textContent = currentPlayer + " wins"
    gameOver = true
    return
  }
}

if (row + 3 <= 5 && columnNumber - 3 >= 0) {
  if (boxes[boxId + 6].classList.contains(currentPlayer)
    && boxes[boxId + 12].classList.contains(currentPlayer)
  && boxes[boxId + 18].classList.contains(currentPlayer)) {
    message.textContent = currentPlayer + " wins"
    gameOver = true
    return
  } 
}

if (row - 2 >= 0 && columnNumber + 2 <= 6 && row + 1 <= 5 && columnNumber - 1 >= 0) {
  if (boxes[boxId - 6].classList.contains(currentPlayer)
    && boxes[boxId - 12].classList.contains(currentPlayer)
  && boxes[boxId + 6].classList.contains(currentPlayer)) {
    message.textContent = currentPlayer + " wins"
    gameOver = true
    return
  }
}

if (row - 1 >= 0 && columnNumber + 1 <= 6 && row + 2 <= 5 && columnNumber - 2 >= 0) {
  if (boxes[boxId - 6].classList.contains(currentPlayer)
    && boxes[boxId + 6].classList.contains(currentPlayer)
    && boxes[boxId + 12].classList.contains(currentPlayer)) {
    message.textContent = currentPlayer + " wins"
    gameOver = true
    return
  }
}

if (currentPlayer === "red") {
          currentPlayer = "yellow"
        } 
        else {
          currentPlayer = "red"
        } 
      message.textContent = currentPlayer + "'s turn"
        return 
  }
  }
  }
})

resetBtn.addEventListener("click", function() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("red")
    boxes[i].classList.remove("yellow")
  }

  currentPlayer = "red"
  gameOver = false
  message.textContent = "red's turn"
})

