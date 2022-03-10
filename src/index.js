function initPong() {
    const board = new Board()
    const playerPaddle = new PlayerPaddle(board)
    const aiPaddle = new AiPaddle(board)

    board.renderPaddle(playerPaddle)
    board.renderPaddle(aiPaddle)

    startListeners(playerPaddle, board)
}

function startListeners(playerPaddle, board) {
    $(document).keydown(function (e) {
        if (e.keyCode === 38) {
            playerPaddle.move('up', board)
        } else if (e.keyCode === 40) {
            playerPaddle.move('down', board)
        }
    })
}