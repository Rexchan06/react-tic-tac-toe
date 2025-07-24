import { useState } from 'react';

function Board(prop) {
    const [hoveredCell, setHoveredCell] = useState(null);
    return (
        <div className="bg-white p-4 rounded-3 shadow-lg border" style={{backgroundColor: '#f8f9fa'}}>
            {prop.board.map((row, row_index) =>
            <div key={row_index} className="d-flex">
                {row.map((col, col_index) => {
                const isThisCellHovered = hoveredCell && hoveredCell.row === row_index && hoveredCell.col === col_index;
                const gameIsActive = !prop.gameEnd && !prop.gameTie;
                const shouldShowPreview = col === '' && isThisCellHovered && gameIsActive;
                return <button 
                    className="btn btn-light border-dark rounded-0"
                    style={{
                    width: '120px', 
                    height: '120px', 
                    fontSize: '42px', 
                    fontWeight: 'bold',
                    borderWidth: '2px'
                    }}
                    key={col_index} 
                    disabled={prop.gameEnd || prop.gameTie || col !== ''}
                    onMouseEnter={() => setHoveredCell({row: row_index, col: col_index})}
                    onMouseLeave={() => setHoveredCell(null)}
                    onClick={() => prop.updateBoard(row_index, col_index, prop.turn)
                    }
                >
                    
                    {col !== '' ? col : shouldShowPreview ? (prop.turn == 0 ? 'O' : 'X') : ''}
                </button>
                }
                )}
            </div>
            )}
        </div>
    )
}

export default Board