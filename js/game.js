var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
var p_speed = 200;
var ball;
var block;

function preload()
{
    this.load.image("player", "img/player.png");
    this.load.image("ball", "img/ball.png");
    this.load.image("block", "img/block.png");
}

function create()
{
    player = this.physics.add.image(400, 580, 'player');
    player.body.setCollideWorldBounds(true);
    
    ball = this.physics.add.image(400, 300, 'ball');

    this.physics.add.collider(ball, player);
    
    cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta)
{   
    if (cursors.left.isDown) {
        player.body.setVelocityX(-p_speed);
    } else if (cursors.right.isDown) {
        player.setVelocityX(p_speed);
    } else {
        player.setVelocityX(0);
    }
    
}