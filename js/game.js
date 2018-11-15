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
var blocks = new Array();
var pos = 0;

function preload()
{
    this.load.image("player", "img/player.png");
    this.load.image("ball", "img/ball.png");
    this.load.image("block", "img/block.png");
}

function create()
{
    var criar = this;
    
    block = this.add.group();  

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 4; j++) {
            var block = criar.add.image(50 + i * 75, 40 + j * 50, 'block');
            
            criar.physics.world.enable( block );
            block.body.setImmovable( true );
            blocks[ pos++ ] = block;
        }
    }
    
    player = this.physics.add.image(400, 580, 'player');
    player.body.setCollideWorldBounds(true);
    
    ball = this.physics.add.image(400, 300, 'ball');
    ball.body.velocity.x = 200;
    ball.body.velocity.y = 200;
    ball.body.bounce.setTo(1); 
    ball.body.collideWorldBounds = true;
    
    cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta)
{
    this.physics.world.collide(ball, player,        function () {} );
    this.physics.world.collide(ball, blocks,    function () {} );
    
    if (cursors.left.isDown) {
        player.body.setVelocityX(-p_speed);
    } else if (cursors.right.isDown) {
        player.setVelocityX(p_speed);
    } else {
        player.setVelocityX(0);
    }
    
}