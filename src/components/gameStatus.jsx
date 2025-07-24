function GameStatus(prop) {
    return (
        <h1 className="text-center mb-5" style={{height: '2.5rem'}}>
            {prop.gameEnd && `Player ${prop.turn == 0 ? '1' : '2'} wins!`}
            {prop.gameTie && `Game Tie!`}
            {(!prop.gameEnd && !prop.gameTie) && `Player ${prop.turn + 1}'s turn:`}
        </h1>
    )
}

export default GameStatus