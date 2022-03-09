class Paddle {
    constructor(x) {
        this.x = x
        this.y = 10
        this.width = 15
        this.height = 60
    }

    renderIntoBoard(board) {
        board.fillRect(this.x, this.y, this.width, this.height)
    }
}