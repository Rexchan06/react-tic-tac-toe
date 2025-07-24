function Board(prop) {
    return (
        <div className="bg-white p-4 rounded-3 shadow-lg border" style={{backgroundColor: '#f8f9fa'}}>
            {prop.board.map((row, row_index) =>
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
                    disabled={prop.gameEnd || prop.gameTie || col !== ''}
                    onClick={() => prop.updateBoard(row_index, col_index, prop.turn)}
                >
                    {col}
                </button>
                )}
            </div>
            )}
        </div>
    )
}

export default Board