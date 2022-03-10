class AiPaddle extends Paddle {
    constructor(board) {
        super(board.width - 15, board, 1)
    }

    moveToBall(ball, board) {
        if (ball.y < this.y + this.height / 2) {
            this.move('up', board)
        } else if (ball.y > this.y + this.height / 2) {
            this.move('down', board)
        }
    }

    checkForHit(ball) {
        if (ball.x + ball.radius >= this.x && ball.x <= this.x + this.width) {
            if (ball.isSameHeight(this)) {
                ball.xVelocity = ball.xVelocity * -1;
            }
        }
    }
}