function ResetButton(prop) {
    return (
        <button 
            className="btn btn-warning btn-lg rounded-pill shadow"
            onClick={prop.resetGame}
        >
            ⭐ New Game ⭐
        </button>
    )
}

export default ResetButton