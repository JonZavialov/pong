function initPong() {
    const board = new Board()
    const playerPaddle = new PlayerPaddle(board)
    const aiPaddle = new AiPaddle(board)
    const ball = new Ball(board)

    board.renderPaddle(playerPaddle)
    board.renderPaddle(aiPaddle)
    board.renderBall(ball)
    startListeners(playerPaddle, board)
    board.init()
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