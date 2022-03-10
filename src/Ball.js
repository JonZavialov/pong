class Ball {
    constructor(board) {
        this.radius = 7
        this.x = board.width / 2 - this.radius
        this.y = board.height / 2 - this.radius

        this.height = board.height
        this.width = board.width

        this.generateInitialVeloctiy()
    }

    renderIntoBoard(board) {
        board.beginPath()
        board.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI);
        board.fill();
    }

    generateInitialVeloctiy() {
        this.xVelocity = 1.4
        this.yVelocity = 1.4

        if (Math.random() < 0.5) this.xVelocity = this.xVelocity * -1;
        if (Math.random() < 0.5) this.yVelocity = this.yVelocity * -1;
    }

    move(paddles) {
        // if it hits the top or bottom change direction
        if (this.y < this.radius || this.y > this.height - this.radius) {
            this.yVelocity = -this.yVelocity;
        }

        // if it goes to the end of the sreen restart the game
        if (this.x < this.radius || this.x > this.width + this.radius) {
            console.log('lost')
        }

        this.x += this.xVelocity;
        this.y += this.yVelocity;

        paddles.forEach(paddle => paddle.checkForHit(this))
    }

    isSameHeight(player) {
        return this.y >= player.y && this.y <= player.y + player.height
    }
}