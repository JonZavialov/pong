function initPong() {
    const board = new Board()
    const playerPaddle = new PlayerPaddle(true)
    const aiPaddle = new AiPaddle(false)

    board.renderPaddle(playerPaddle)
    board.renderPaddle(aiPaddle)
}