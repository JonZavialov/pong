class Board {
    constructor() {
        this.canvas = $('#gameBoard')[0].getContext('2d');
        this.canvas.fillStyle = 'white';
        this.width = $('#gameBoard').width()
        this.height = $('#gameBoard').height()

        this.paddles = []
    }

    renderPaddle(paddle) {
        if (!this.paddles.includes(paddle)) this.paddles.push(paddle)
        paddle.renderIntoBoard(this.canvas)
    }

    renderBall(ball) {
        if (!this.ball) this.ball = ball
        ball.renderIntoBoard(this.canvas)
    }

    clear() {
        this.canvas.fillStyle = 'black'
        this.canvas.fillRect(0, 0, this.width, this.height);
        this.canvas.fillStyle = 'white'
    }

    update() {
        this.clear()
        this.paddles.forEach(paddle => this.renderPaddle(paddle))
        this.renderBall(this.ball)
    }

    init() {
        this.loop = setInterval(() => {
            this.ball.move()
            this.update()
        }, 10)
    }
}