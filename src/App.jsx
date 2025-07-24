import { useState, useEffect } from 'react';
import GameStatus from './components/gameStatus';
import Board from './components/board';
import ResetButton from './components/resetButton';
import Stats from './components/stats';
import { checkWin } from './utils/gameLogic';

function App() {
  const [turn, setTurn] = useState(0)
  const [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']])
  const [gameEnd, setGameEnd] = useState(false)
  const [gameTie, setGameTie] = useState(false)
  const [statsLoaded, setStatsLoaded] = useState(false);
  const [showStats, setShowStats] = useState(true);

  const [stats, setStats] = useState({
    totalGames: 0,
    player1Wins: 0,
    player2Wins: 0,
    ties: 0
  })

  useEffect(() => {
    try {
      const savedStats = localStorage.getItem('ticTacToeStats');
      if (savedStats) {
        setStats(JSON.parse(savedStats));
      }
    } catch (error) {
      console.log('Error loading stats, resetting:', error);
      // Reset to default if there's an error
      localStorage.removeItem('ticTacToeStats');
    }
    setStatsLoaded(true)
  }, [])

  useEffect(() => {
    if (statsLoaded) {
      localStorage.setItem('ticTacToeStats', JSON.stringify(stats));
    }
  }, [stats, statsLoaded])

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
      setStats(prev => ({
        ...prev,
        totalGames: prev.totalGames + 1,
        player1Wins: turn == 0 ? prev.player1Wins + 1 : prev.player1Wins,
        player2Wins: turn == 1 ? prev.player2Wins + 1 : prev.player2Wins,
      }))
      return
    } else if (gameResult.tie == true) {
      setGameTie(true)
      setStats(prev => ({
        ...prev,
        totalGames: prev.totalGames + 1,
        ties: prev.ties + 1
      }))
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

  function clearStats() {
    setStats({
      totalGames: 0,
      player1Wins: 0,
      player2Wins: 0,
      ties: 0
    })
  }

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className={`${showStats ? "col-md-8" : "col-md-12"} d-flex justify-content-center align-items-center`}>
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
        <button
        className="btn position-fixed"
        style={{
          top: '20px',
          right: '20px',
          zIndex: 1000,
          borderRadius: '50%',
          width: '60px',
          height: '60px'
        }}
        onClick={() => setShowStats(!showStats)}
        >
          {showStats ? '❌' : '✨'}
        </button>
        {showStats && (
          <div className="col-md-4 bg-light border-start p-4">
            <Stats 
              totalGames={stats.totalGames} 
              player1Wins={stats.player1Wins} 
              player2Wins={stats.player2Wins} 
              ties={stats.ties}
              clearStats={clearStats}
            />
          </div>
        )}
      </div>
    </div>
  )
}
export default App