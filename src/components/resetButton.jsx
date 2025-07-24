  function ResetButton(prop) {
      return (
          <div className="text-center">
              <button 
                  className="btn btn-warning btn-lg rounded-pill shadow-lg position-relative overflow-hidden"   
                  onClick={prop.resetGame}
                  style={{
                      background: 'linear-gradient(45deg, #ffc107, #ffeb3b)',
                      border: '3px solid #ff9800',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      padding: '12px 30px',
                      transition: 'all 0.3s ease',
                      transform: 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '';
                  }}
              >
                  🎮 New Game 🎮
              </button>

              <div className="mt-2">
                  <small className="text-muted fst-italic">
                      Ready for another round?
                  </small>
              </div>
          </div>
      )
  }

export default ResetButton