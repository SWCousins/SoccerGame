enchant();

window.onload = function() {
    var game = new Core(620, 320);
    game.fps = 12;
    game.preload('chara0.png', 'map0.png', 'icon0.png', 'chara4.png', 'icon1.png');
    
    game.onload = function() { //Create Map
        var map = new Map(16, 16);
        map.image = game.assets['map0.png'];
        
        //15 rows tall, 26 col wide
        map.loadData(
            
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ]
        );
        
        var ball = new Sprite(16, 16);
        ball.x = 6 * 16;
        ball.y = 10 * 16;
        ball.image = game.assets['icon1.png'];
        ball.frame = 0;
        ball.goingRight = true;
        ball.addEventListener('enterframe', function(e){
            if (ball.x < 128 && ball.goingRight == true) {
                ball.x++;
            } else if (ball.x >= 128 && ball.goingRight == true){
                ball.goingRight = false;
                ball.x--;
            } 
            
            if (ball.x > 96 && ball.goingRight == false){
                ball.x--;
            } else if (ball.x <= 96 && ball.goingRight == false){
                ball.goingRight = true;
                ball.x++;
            }
        });
        
        var player1 = new Sprite(32, 32);
        player1.x = 5 * 16;
        player1.y = 9 * 16;
        player1.walkingRight = [18, 19, 19, 19, 20, 19, 19, 19];
        player1.image = game.assets['chara0.png'];
        player1.frame = player1.walkingRight;
        player1.goingUp = false;
        
        player1.addEventListener('enterframe', function(e){
            
            if (player1.y > 128 && player1.goingUp == true){
                player1.y--;
            } else if (player1.y <= 128 && player1.goingUp == true){
                player1.goingUp = false;
                player1.y++;
            }
            
            if (player1.y < 160 && player1.goingUp == false) {
                player1.y++;
            } else if (player1.y >= 160 && player1.goingUp == false){
                player1.goingUp = true;
                player1.y--;
            } 
            });
            
        
        var player2 = new Sprite(32, 32);
        player2.x = 8 * 16;
        player2.y = 9 * 16;
        player2.image = game.assets['chara0.png'];
        player2.frame = [16, 15, 16, 16, 16, 17, 16, 16];
        player2.goingUp = true;
        
        player2.addEventListener('enterframe', function(e){
            
            if (player2.y > 128 && player2.goingUp == true){
                player2.y--;
            } else if (player2.y <= 128 && player2.goingUp == true){
                player2.goingUp = false;
                player2.y++;
            }
            
            if (player2.y < 160 && player2.goingUp == false) {
                player2.y++;
            } else if (player2.y >= 160 && player2.goingUp == false){
                player2.goingUp = true;
                player2.y--;
            } 
            });
        
        var car = new Sprite(32, 32);
        car.x = 12 * 16;
        car.y = 11 * 16;
        car.image = game.assets['chara4.png'];
        car.frame = 1;
        
        var car1 = new Sprite(32, 32);
        car1.x = 14 * 16;
        car1.y = 11 * 16;
        car1.image = game.assets['chara4.png'];
        car1.frame = 2;
        
        var car2 = new Sprite(32, 32);
        car2.x = 16 * 16;
        car2.y = 11 * 16;
        car2.image = game.assets['chara4.png'];
        car2.frame = 3;
        
        var stage = new Group();
        stage.addChild(map);
        stage.addChild(ball);
        stage.addChild(player1);
        stage.addChild(player2);
        stage.addChild(car);
        stage.addChild(car1);
        stage.addChild(car2);
        game.rootScene.addChild(stage);
    };
    game.start();
};