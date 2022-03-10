class PlayerPaddle extends Paddle {
    constructor(board) {
        super(0, board, 20)
    }

    startListeners(board) {
        $(document).keydown((e) => {
            if (e.keyCode === 38) {
                this.move('up', board)
            } else if (e.keyCode === 40) {
                this.move('down', board)
            }
        })
    }

    checkForHit(ball) {
        if (ball.x - ball.radius <= this.x + this.width && ball.x > this.x) {
            if (ball.isSameHeight(this)) {
                ball.xVelocity = ball.xVelocity * -1;
            }
        }
    }
}