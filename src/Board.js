class Board {
    constructor() {
        this.canvas = $('#gameBoard')[0].getContext('2d');
        this.canvas.fillStyle = 'white';
        this.paddles = []
        this.width = $('#gameBoard').width()
        this.height = $('#gameBoard').height()
    }

    renderPaddle(paddle) {
        if (!this.paddles.includes(paddle)) this.paddles.push(paddle)
        paddle.renderIntoBoard(this.canvas)
    }

    clear() {
        this.canvas.fillStyle = 'black'
        this.canvas.fillRect(0, 0, this.width, this.height);
        this.canvas.fillStyle = 'white'
    }

    update() {
        this.clear()
        this.paddles.forEach(paddle => this.renderPaddle(paddle))
    }
}