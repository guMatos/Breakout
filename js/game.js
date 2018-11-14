var player;
var ball;
var block;

class game extends Phaser.Scene 
{
    constructor()
    {super ({key: 'game'});}
    
    preload()
    {
        this.load.image("player", "imagens/player.png");
        this.load.image("ball", "imagens/ball.png");
        this.load.image("block", "imagens/block.png");
    }
    
    create()
    {
        console.log("Hello world!"); 
        this.backgroundColor = blue;
        player = this.physics.add.sprite(50, 80, 'player');
        ball = this.physics.add.sprite(300, 150, 'ball');
        
        this.physics.add.collider(ball, player);
    }

    update()
    {
        
    }
}