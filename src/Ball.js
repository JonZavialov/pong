class Ball {
    constructor(board) {
        this.radius = 7
        this.x = board.width / 2 - this.radius
        this.y = board.height / 2 - this.radius

        this.generateInitialVeloctiy()
    }

    renderIntoBoard(board) {
        board.beginPath()
        board.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        board.fill();
    }

    generateInitialVeloctiy() {
        this.xVelocity = Math.floor(Math.random() * 3) + 1; // random num between 1 and 3
        this.yVelocity = Math.floor(Math.random() * 3) + 1;

        if (Math.random() < 0.5) this.xVelocity = this.xVelocity * -1;
        if (Math.random() < 0.5) this.yVelocity = this.yVelocity * -1;
    }

    move() {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }
}