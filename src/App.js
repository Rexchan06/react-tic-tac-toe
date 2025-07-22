import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function App() {
  const [turn, setTurn] = useState(0)
  const [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']])
  const [gameEnd, setGameEnd] = useState(false)

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
          break
        }
        if (board[0][i] == 'O' && board[1][i] == 'O' && board[2][i] == 'O') {
          setGameEnd(true)
          break
        }
      }
      if (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
        setGameEnd(true)
      }
      if (board[2][0] == 'O' && board[1][1] == 'O' && board[0][2] == 'O') {
        setGameEnd(true)
      }
    }
    if (turn == 1) {
      for (let i = 0; i < 3; i++) {
        if (board[i][0] == 'X' && board[i][1] == 'X' && board[i][2] == 'X') {
          setGameEnd(true)
          break
        }
        if (board[0][i] == 'X' && board[1][i] == 'X' && board[2][i] == 'X') {
          setGameEnd(true)
          break
        }
      }
      if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
        setGameEnd(true)
      }
      if (board[2][0] == 'X' && board[1][1] == 'X' && board[0][2] == 'X') {
        setGameEnd(true)
      }
    }
  }

  function resetGame() {
    setBoard([['', '', ''], ['', '', ''], ['', '', '']])
    setTurn(0)
    setGameEnd(false)
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div>
        {gameEnd && <h1 className="text-center mb-3">Player {turn == 0 ? '2' : '1'} wins!</h1>}
      <div className="bg-white p-4 rounded-3 shadow-lg border" style={{backgroundColor: '#f8f9fa'}}>
        {board.map((row, row_index) =>
          <div key={row_index} className="d-flex">
            {row.map((col, col_index) =>
              <button 
                className="btn btn-light border-dark rounded-0"
                style={{
                  width: '90px', 
                  height: '90px', 
                  fontSize: '32px', 
                  fontWeight: 'bold',
                  borderWidth: '2px'
                }}
                key={col_index} 
                disabled={gameEnd || col !== ''}
                onClick={() => updateBoard(row_index, col_index, turn)}
              >
                {col}
              </button>
            )}
          </div>
        )}
      </div>
          {gameEnd && (
          <div className="text-center my-4">
            <button 
              className="btn btn-warning btn-lg rounded-pill shadow"
              onClick={resetGame}
            >
              ⭐ New Game ⭐
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default App