import { useState } from 'react';
import GameStatus from './components/gameStatus';
import Board from './components/board';
import ResetButton from './components/resetButton';
import { checkWin } from './utils/gameLogic';

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
    var gameResult = checkWin(turn, newBoard)
    if (gameResult.gameOver == true) {
      setGameEnd(true)
      return
    } else if (gameResult.tie == true) {
      setGameTie(true)
    }

    if (!gameResult.gameOver && !gameResult.tie) {
      setTurn(1 - turn)
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