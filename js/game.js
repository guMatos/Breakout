

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    maxSafeDistance: 200,
    parent: 'colisao',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var player;
var ball;
var block;

function preload()
{
    this.load.image("player", "imagens/player.png");
    this.load.image("ball", "imagens/ball.png");
    this.load.image("block", "imagens/block.png");
}

function create()
{
    console.log("Hello world!"); 
    this.backgroundColor = blue;
    player = this.physics.add.image(50, 80, 'player');
    ball = this.physics.add.image(300, 150, 'ball');

    this.physics.add.collider(ball, player);
}

function update()
{

}