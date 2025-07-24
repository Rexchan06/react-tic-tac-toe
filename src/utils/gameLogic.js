export function checkWin(turn, board) {
  if (turn == 0) {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] == 'O' && board[i][1] == 'O' && board[i][2] == 'O') {
        return {gameOver: true, tie: false}
      }
      if (board[0][i] == 'O' && board[1][i] == 'O' && board[2][i] == 'O') {
        return {gameOver: true, tie: false}
      }
    }
    if (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
      return {gameOver: true, tie: false}
    }
    if (board[2][0] == 'O' && board[1][1] == 'O' && board[0][2] == 'O') {
      return {gameOver: true, tie: false}
    }
  }
  if (turn == 1) {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] == 'X' && board[i][1] == 'X' && board[i][2] == 'X') {
        return {gameOver: true, tie: false}
      }
      if (board[0][i] == 'X' && board[1][i] == 'X' && board[2][i] == 'X') {
        return {gameOver: true, tie: false}
      }
    }
    if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
      return {gameOver: true, tie: false}
    }
    if (board[2][0] == 'X' && board[1][1] == 'X' && board[0][2] == 'X') {
      return {gameOver: true, tie: false}
    }
  }

  const boardFull = board.flat().every(cell => cell !== '');

  if (boardFull) {
    return {gameOver: false, tie: true}
  }

  return {gameOver: false, tie: false}
}