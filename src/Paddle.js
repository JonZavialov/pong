class Paddle {
    constructor(x, board, moveCoeff) {
        this.width = 15
        this.height = 60
        this.x = x
        this.y = board.height / 2 - this.height / 2
        this.moveCoeff = moveCoeff
    }

    renderIntoBoard(board) {
        board.fillRect(this.x, this.y, this.width, this.height)
    }

    move(direction, board) {
        if (this.y === 0 && direction === 'up') return
        if (this.y === board.height - this.height && direction === 'down') return

        if (direction === 'up') this.y -= this.moveCoeff
        else if (direction === 'down') this.y += this.moveCoeff
    }
}