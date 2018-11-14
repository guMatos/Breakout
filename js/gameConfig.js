var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 300,
    physics: {
    scene: [game]
};

var game = new Phaser.Game(config);
    game.global = {
        score: 0,
        highScore: 0
    }
var widthGameSize = this.game.config.width;
var heightGameSize = this.game.config.height;
