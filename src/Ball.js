class Ball {
    constructor(board) {
        this.radius = 7;
        this.height = board.height;
        this.width = board.width;

        this.reset()
        this.boardScore = board.score;
        this.board = board;
    }

    reset() {
        this.x = this.width / 2;
        this.y = this.height / 2;
        this.generateInitialVeloctiy()
    }

    renderIntoBoard(board) {
        board.beginPath();
        board.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        board.fill();
    }

    generateInitialVeloctiy() {
        this.xVelocity = 1.4;
        this.yVelocity = 1.4;

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
            if (this.x < this.radius) this.boardScore.ai += 1
            if (this.x > this.width + this.radius) this.boardScore.player += 1

            this.board.renderScore()
            this.reset()
        }

        this.x += this.xVelocity;
        this.y += this.yVelocity;

        paddles.forEach((paddle) => paddle.checkForHit(this));
    }

    isSameHeight(paddle) {
        return this.y >= paddle.y && this.y <= paddle.y + paddle.height;
    }
}