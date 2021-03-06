class Board {
  constructor() {
    this.canvas = $("#gameBoard")[0].getContext("2d");
    this.canvas.fillStyle = "white";
    this.canvas.lineWidth = 15;
    this.width = $("#gameBoard").width();
    this.height = $("#gameBoard").height();

    this.paddles = [];
    this.score = {
      player: 0,
      ai: 0,
    }
    this.renderScore();
  }

  renderScore() {
    $("#playerScore").text(this.score.player);
    $("#playerScore").css(
      "transform",
      `translate(${174 - (this.score.player.toString().length - 1) * 18}px, -284px)`
    );
    $("#aiScore").text(this.score.ai);
  }

  renderPaddle(paddle) {
    if (!this.paddles.includes(paddle)) this.paddles.push(paddle);
    paddle.renderIntoBoard(this.canvas);
  }

  renderBall(ball) {
    if (!this.ball) this.ball = ball;
    ball.renderIntoBoard(this.canvas);
  }

  clear() {
    this.canvas.fillStyle = "black";
    this.canvas.fillRect(0, 0, this.width, this.height);
    this.canvas.fillStyle = "white";

    this.canvas.fillRect(this.width / 2, 0, 1, this.height);
  }

  update() {
    this.clear();
    this.paddles.forEach((paddle) => this.renderPaddle(paddle));
    this.renderBall(this.ball);
  }

  init() {
    setInterval(() => {
      this.ball.move(this.paddles);
      this.paddles.forEach((paddle) => {
        if (paddle.constructor.name === "AiPaddle")
          paddle.moveToBall(this.ball, this);
      });
      this.update();
    }, 10);
  }
}