class Ball {
    constructor(board) {
        this.radius = 7
        this.x = board.width / 2
        this.y = board.height / 2

        this.height = board.height
        this.width = board.width

        this.generateInitialVeloctiy()
        this.boardLoop = board.loop
        this.boardScore = board.score
    }

    renderIntoBoard(board) {
        board.beginPath()
        board.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
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
            clearInterval(this.boardLoop)

            const reloadURL = new URL(window.location.href)
            if (this.x < this.radius) {
                reloadURL.searchParams.set('aiScore', parseInt(this.boardScore[1]) + 1)
                reloadURL.searchParams.set('playerScore', this.boardScore[0])
            }
            if (this.x > this.width + this.radius) {
                reloadURL.searchParams.set('playerScore', parseInt(this.boardScore[0]) + 1)
                reloadURL.searchParams.set('aiScore', this.boardScore[1])
            }
            window.location.href = reloadURL.href
        }

        this.x += this.xVelocity;
        this.y += this.yVelocity;

        paddles.forEach(paddle => paddle.checkForHit(this))
    }

    isSameHeight(paddle) {
        return this.y >= paddle.y && this.y <= paddle.y + paddle.height
    }
}