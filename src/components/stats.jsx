  function Stats(prop) {
      const totalGames = prop.totalGames || 0;
      const p1WinRate = totalGames > 0 ? Math.round((prop.player1Wins / totalGames) * 100) : 0;
      const p2WinRate = totalGames > 0 ? Math.round((prop.player2Wins / totalGames) * 100) : 0;
      const tieRate = totalGames > 0 ? Math.round((prop.ties / totalGames) * 100) : 0;

      return (
          <div>
            <br />
            <br />
              <h3 className="text-center mb-4 text-primary">
                  📊 Game Statistics
              </h3>

              <div className="card mb-3 shadow-sm">
                  <div className="card-body text-center">
                      <h2 className="card-title text-success">{prop.totalGames}</h2>
                      <p className="card-text text-muted">Total Games Played</p>
                  </div>
              </div>

              <div className="row mb-3">
                  <div className="col-6">
                      <div className="card h-100 border-primary">
                          <div className="card-body text-center">
                              <h4 className="text-primary">Player 1</h4>
                              <h3 className="text-primary">{prop.player1Wins}</h3>
                              <small className="text-muted">{p1WinRate}% wins</small>
                          </div>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="card h-100 border-danger">
                          <div className="card-body text-center">
                              <h4 className="text-danger">Player 2</h4>
                              <h3 className="text-danger">{prop.player2Wins}</h3>
                              <small className="text-muted">{p2WinRate}% wins</small>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="card border-warning">
                  <div className="card-body text-center">
                      <h5 className="text-warning">🤝 Ties</h5>
                      <h4 className="text-warning">{prop.ties}</h4>
                      <small className="text-muted">{tieRate}% of games</small>
                  </div>
              </div>

              {totalGames > 0 && (
                  <div className="mt-4 p-3 bg-info bg-opacity-10 rounded text-center">
                      <small className="text-info">
                          🎯 {prop.player1Wins > prop.player2Wins ? "Player 1 is leading!" :
                              prop.player2Wins > prop.player1Wins ? "Player 2 is leading!" :
                              "It's a tie race!"}
                      </small>
                  </div>
              )}
            <button
                className="btn btn-outline-danger btn-sm mt-3 w-100 shadow-sm"
                onClick={() => {
                if (window.confirm('Are you sure you want to clear all statistics? This cannot be undone.')) {
                    prop.clearStats();
                }
                }}
                style={{
                borderRadius: '20px',
                fontWeight: 'bold',
                fontSize: '13px',
                padding: '10px 15px',
                transition: 'all 0.3s ease',
                borderWidth: '2px'
                }}
                onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#dc3545';
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                e.target.style.backgroundColor = '';
                e.target.style.color = '';
                e.target.style.transform = 'scale(1)';
                }}
            >
                🗑️ Clear All Stats
            </button>
          </div>
      )
  }

export default Stats