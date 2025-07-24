function GameStatus(prop) {
      // Win message
      if (prop.gameEnd) {
          const winner = prop.turn === 0 ? '1' : '2';
          const winnerColor = prop.turn === 0 ? 'text-primary' : 'text-danger';

          return (
              <div className="text-center mb-3" style={{minHeight: '4rem'}}> {/* Changed to minHeight and increased */}
                  <h1 className={`${winnerColor} fw-bold`} 
                      style={{
                          fontSize: '2.2rem',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                          fontFamily: 'Arial, sans-serif',
                          lineHeight: '1.2' // Add line height control
                      }}>
                      🎉 Player {winner} Wins! 🎉
                  </h1>
              </div>
          );
      }

      // Tie message
      if (prop.gameTie) {
          return (
              <div className="text-center mb-3" style={{minHeight: '4rem'}}> {/* Same here */}
                  <h1 className="text-warning fw-bold" 
                      style={{
                          fontSize: '2.2rem',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                          fontFamily: 'Arial, sans-serif',
                          lineHeight: '1.2'
                      }}>
                      🤝 It's a Tie! 🤝
                  </h1>
              </div>
          );
      }

      // Current turn message
      const currentPlayer = prop.turn + 1;
      const playerColor = prop.turn === 0 ? 'text-primary' : 'text-danger';
      const playerSymbol = prop.turn === 0 ? '⭕' : '❌';

      return (
          <div className="text-center mb-3" style={{minHeight: '4rem'}}> {/* And here */}
              <h2 className={`${playerColor} fw-bold`}
                  style={{
                      fontSize: '2rem',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                      fontFamily: 'Arial, sans-serif',
                      letterSpacing: '1px',
                      lineHeight: '1.2'
                  }}>
                  {playerSymbol} Player {currentPlayer}'s Turn {playerSymbol}
              </h2>
          </div>
      );
  }

  export default GameStatus