function initPong() {
    const board = new Board()
    const playerPaddle = new PlayerPaddle()
    const aiPaddle = new AiPaddle()

    board.renderPaddle(playerPaddle)
    board.renderPaddle(aiPaddle)
}
