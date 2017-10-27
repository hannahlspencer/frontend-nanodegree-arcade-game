// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    
    if (this.x >= 500) {
        this.x = 0;
    }
    
    checkCollision(this);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.update = function() {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
	
    if (keyPress == 'left') {
        player.x -= player.speed;
    } else if (keyPress == 'up') {
        player.y -= player.speed - 20;
    } else if (keyPress == 'right') {
        player.x += player.speed;
    } else if (keyPress == 'down') {
        player.y += player.speed - 20;
    } else {
		alert("Press only the arrow buttons!");
	}
};

var checkCollision = function(anEnemy) {
    if (
        player.y + 131 >= anEnemy.y + 90
        && player.x + 25 <= anEnemy.x + 88
        && player.y + 73 <= anEnemy.y + 135
        && player.x + 76 >= anEnemy.x + 11) {
        player.x = startX;
        player.y = startY;
    }

    if (player.y + 50 <= 0) {        
        player.x = startX;
        player.y = startY;
    }

    if (player.y > startY ) {
        player.y = startY;
    }
    if (player.x > 400) {
        player.x = 400;
    }
    if (player.x < 2) {
        player.x = 2;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var startX = 200;
var startY = 380;
var allEnemies = [];
var player = new Player(startX, startY, 50);
var enemyOne = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
var enemyTwo = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
var enemyThree = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);

allEnemies.push(enemyOne);
allEnemies.push(enemyTwo);
allEnemies.push(enemyThree);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
