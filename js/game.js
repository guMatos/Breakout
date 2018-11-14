

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

function range(min, max)
{
    return parseInt(Math.random() * max + min);
}

function create()
{
    player = this.physics.add.image(400, 580, 'player');
    player.body.setCollideWorldBounds(true);
    
    ball = this.physics.add.image(400, 300, 'ball');
    this.physics.world.enable(ball);
    ball.body.setVelocity(range(-250, 250), range(50, 250)).setBounce(1, 1).setCollideWorldBounds(true);

    this.physics.add.collider(ball, player);
}

function update()
{
    
}