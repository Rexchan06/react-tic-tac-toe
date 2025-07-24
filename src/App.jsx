import { useState } from 'react';
import GameStatus from './components/gameStatus';
import Board from './components/board';
import ResetButton from './components/resetButton';

function App() {
  const [turn, setTurn] = useState(0)
  const [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']])
  const [gameEnd, setGameEnd] = useState(false)
  const [gameTie, setGameTie] = useState(false)

  function updateBoard(row, column, turn) {
    if (board[row][column] !== '') {
      return
    } 
    const newBoard = board.map(row => [...row])
    if (turn == 0) {
      newBoard[row][column] = 'O'
    }
    if (turn == 1) {
      newBoard[row][column] = 'X'
    }

    setBoard(newBoard)
    checkWin(turn, newBoard)
    setTurn(1 - turn)
  }

  function checkWin(turn, board) {
    if (turn == 0) {
      for (let i = 0; i < 3; i++) {
        if (board[i][0] == 'O' && board[i][1] == 'O' && board[i][2] == 'O') {
          setGameEnd(true)
          return
        }
        if (board[0][i] == 'O' && board[1][i] == 'O' && board[2][i] == 'O') {
          setGameEnd(true)
          return
        }
      }
      if (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
        setGameEnd(true)
        return
      }
      if (board[2][0] == 'O' && board[1][1] == 'O' && board[0][2] == 'O') {
        setGameEnd(true)
        return
      }
    }
    if (turn == 1) {
      for (let i = 0; i < 3; i++) {
        if (board[i][0] == 'X' && board[i][1] == 'X' && board[i][2] == 'X') {
          setGameEnd(true)
          return
        }
        if (board[0][i] == 'X' && board[1][i] == 'X' && board[2][i] == 'X') {
          setGameEnd(true)
          return
        }
      }
      if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
        setGameEnd(true)
        return
      }
      if (board[2][0] == 'X' && board[1][1] == 'X' && board[0][2] == 'X') {
        setGameEnd(true)
        return
      }
    }

    const boardFull = board.flat().every(cell => cell !== '');

    if (boardFull) {
      setGameTie(true)
    }
    }

  function resetGame() {
    setBoard([['', '', ''], ['', '', ''], ['', '', '']])
    setTurn(0)
    setGameTie(false)
    setGameEnd(false)
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div>
        <GameStatus turn={turn} gameEnd={gameEnd} gameTie={gameTie}></GameStatus>
        <Board board={board} turn={turn} gameEnd={gameEnd} gameTie={gameTie} updateBoard={updateBoard}></Board>
          {(gameEnd || gameTie) && (
          <div className="text-center my-4">
            <ResetButton resetGame={resetGame}></ResetButton>
          </div>
        )}
      </div>
    </div>
  )
}
export default App