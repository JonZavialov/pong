class Board {
    constructor() {
        this.canvas = $('#gameBoard')[0].getContext('2d');
        this.canvas.fillStyle = 'white';
    }

    renderPaddle(paddle) {
        console.log(paddle.x)
        paddle.renderIntoBoard(this.canvas)
    }
}