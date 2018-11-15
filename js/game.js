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
var p_speed = 250;
var ball;
var blocks = new Array();
var pos = 0;

var random;

var txt;

function preload()
{
    this.load.image("player", "img/player.png");
    this.load.image("ball", "img/ball.png");
    this.load.image("block", "img/block.png");
}

function create()
{
    // retorna um número inteiro entre 0 e 1
    random = Math.floor(Math.random() * 2);
    
    //definindo que não tem colisão em baixo
    this.physics.world.checkCollision.down = false;
    
    //cria os blocos
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 4; j++) {
            var block = this.add.image(50 + i * 75, 40 + j * 50, 'block');
            
            this.physics.world.enable(block);
            block.body.setImmovable(true);
            blocks[pos++] = block;
        }
    }
    
    //cria o player
    player = this.physics.add.image(400, 580, 'player');
    player.body.setCollideWorldBounds(true);
    player.body.setImmovable(true);
    
    //cria a bola
    ball = this.physics.add.image(400, 300, 'ball');
    if(random == 0){
        ball.body.velocity.x = 150;
        ball.body.velocity.y = 150;
    }else{
        ball.body.velocity.x = -150;
        ball.body.velocity.y = 150;
    }
    
    ball.body.bounce.setTo(1); 
    ball.body.collideWorldBounds = true;
    
    //ativa o teclado
    cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta)
{
    //dois primeiros parâmetros são o que se colidem, e depois é um metodo
    this.physics.world.collide(ball, player, collideplayer);
    this.physics.world.collide(ball, blocks, collideblock);
    
    //movimentação do player
    if (cursors.left.isDown) {
        player.body.setVelocityX(-p_speed);
    } else if (cursors.right.isDown) {
        player.setVelocityX(p_speed);
    } else {
        player.setVelocityX(0);
    }
}

function collideplayer(ball, player)
{
    //definir o que acontece se colidir na esquerda, direita e meio
    var dif;

    if(ball.x < player.x){
        dif = player.x - ball.x;
        ball.body.velocity.x = (-10 * dif);
        return;
    }
    if(ball.x > player.x){
        dif = ball.x - player.x;
        ball.body.velocity.x = (10 * dif);
        return;
    }
}

function collideblock(ball, blocks)
{
    //definir que o block some
    blocks.destroy();
}