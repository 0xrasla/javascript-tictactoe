const players = ["X", "O"]
const BOXES = document.querySelectorAll('.basebox')
let currentPlayer = players[Math.floor(Math.random() * players.length)]
const turnIndicator = document.querySelector('.player')

let WINNER = ''

turnIndicator.textContent = currentPlayer + ' Turn'

function mainGameLoop() {
    Array.from(BOXES).forEach(e => {
        e.addEventListener('click', () =>{
           if(!e.classList.contains('filled') && !WINNER) {
                clickHandler(currentPlayer, e)
                currentPlayer = switchPlayer(currentPlayer)
           }

           if(WINNER) {
              WINNER = switchPlayer(currentPlayer)
               turnIndicator.textContent = "Winner is " + WINNER 
           }
        })
    })
}

function switchPlayer(currentPlayer) {
    if(currentPlayer == "X") return "O"
    if(currentPlayer == "O") return "X"
}

function clickHandler(currentPlayer, e) {
    e.textContent = currentPlayer
    
    if(currentPlayer == "X") turnIndicator.textContent = switchPlayer(currentPlayer) + ' Turn'
    if(currentPlayer == "O") turnIndicator.textContent = switchPlayer(currentPlayer) + ' Turn'
    e.classList.add('filled')
    e.style.backgroundColor = 'rgba(65, 105, 225, 0.7)'
    WINNER = checkForWinner(BOXES, currentPlayer)
}

function checkForWinner(board, currentPlayer) {

    // check horizontal
    
   if(board[0].textContent != '' && board[0].textContent == board[1].textContent && board[1].textContent == board[2].textContent && board[2].textContent == board[0].textContent) {
       return currentPlayer;
   }
   else if(board[3].textContent != '' && board[3].textContent == board[4].textContent && board[4].textContent == board[5].textContent && board[5].textContent == board[3].textContent) {
        return currentPlayer;
    }
   else if(board[6].textContent != '' && board[6].textContent == board[7].textContent && board[7].textContent == board[8].textContent && board[8].textContent == board[6].textContent) {
        return currentPlayer;
   }

   // check verticle

   if(board[0].textContent != '' && board[0].textContent == board[3].textContent && board[3].textContent == board[6].textContent && board[6].textContent == board[0].textContent) {
       return currentPlayer;
   }
   else if(board[1].textContent != '' && board[1].textContent == board[4].textContent && board[4].textContent == board[7].textContent && board[7].textContent == board[1].textContent) {
        return currentPlayer;
    }
    else if(board[2].textContent != '' && board[2].textContent == board[5].textContent && board[5].textContent == board[8].textContent && board[8].textContent == board[2].textContent) {
        return currentPlayer;
    }
    
    // check diagonals

    if(board[0].textContent != '' && board[0].textContent == board[4].textContent && board[4].textContent == board[8].textContent && board[8].textContent == board[0].textContent) {
        return currentPlayer;
    }
    else if(board[2].textContent != '' && board[2].textContent == board[4].textContent && board[4].textContent == board[6].textContent && board[6].textContent == board[2].textContent) {
         return currentPlayer;
     }

    if( Array.from(board).every((e) =>e.textContent != '')) {
        turnIndicator.textContent = "Its a tie"
    }

}

mainGameLoop()