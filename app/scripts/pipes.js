window.Pipes = (function(el, game) {
	'use strict';

	var Sounds = window.Sounds;

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 25; // * 10 pixels per second
	var WIDTH = 10;
	var HEIGHT = 5;
	var INITIAL_POSITION_X = 30;
	var INITIAL_POSITION_Y = 25;

	var Pipes = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: this.game.WORLD_WIDTH, y: this.game.WORLD_HEIGHT };
		this.div = document.getElementsByClassName('Pipes')[0];
		this.scoreboard = document.getElementsByClassName('Score')[0];
		this.currentscore = document.getElementsByClassName('CurrentScore')[0];
		this._pipes = [];

		this.score = 0;
	};

	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	Pipes.prototype.spawnPipes = function() {
		var upperPipe = document.createElement('div');
		var lowerPipe = document.createElement('div');
		var rand = getRandomInt(5, 10);

		upperPipe.className = 'uPipe';
		lowerPipe.className = 'lPipe';
		
		upperPipe.style.height = this.pos.y / 2 + 'em';
		upperPipe.style.width = WIDTH + 'em';
		lowerPipe.style.height = this.pos.y / 2 + 'em';
		lowerPipe.style.width = WIDTH + 'em';

		this.div.appendChild(upperPipe);
		this.div.appendChild(lowerPipe);

		upperPipe.style.transform = 'translate('+ this.game.WORLD_WIDTH + 'em'+', 0)';
		lowerPipe.style.transform = 'translate('+ this.game.WORLD_WIDTH + 'em' +', '+ this.pos.y / 2 +'em)';

		var uPip = {
			el: upperPipe,
			x: this.pos.x,
			y: -rand,
			passed: false
		};
		var lPip = {
			el: lowerPipe,
			x: this.pos.x,
			y: this.pos.y / 2 + rand
		};

		this._pipes.push(uPip);
		this._pipes.push(lPip);
		
	};

	Pipes.prototype.reset = function() {
		this._pipes = [];
		this.div.innerHTML = "";
		this.scoreboard.innerHTML = "";
		this.pos.x = this.game.WORLD_WIDTH;
		this.score = 0;
		this.currentscore.innerHTML = 0;
	};
 
	Pipes.prototype.onFrame = function(delta, frames) {
		this.checkCollisionWithBounds();
		
		// spawn pipes every 150 frames
		if (frames % 150 === 0) {
			this.spawnPipes();
			
		}

		// move pipes
		for (var i = 0; i < this._pipes.length; i++) {
			var p = this._pipes[i];
			p.x -= SPEED * delta;
			p.el.style.transform = 'translateZ(0) translate('+ p.x + 'em' +', '+ p.y +'em)';

			// calculate score
			if(this.game.player.pos.x > p.x + WIDTH && p.el.className == 'uPipe' &&!p.passed){
				p.passed = true;
				this.score += 1;
				this.currentscore.innerHTML = this.score;
				Sounds.goodSounds();
			}

			// remove pipe if its outside the world.
			if (p.x < -WIDTH) {
				this._pipes.splice(i, 1);
				this.div.removeChild(p.el);
				i--;
			}
		}
	};

	Pipes.prototype.checkCollisionWithBounds = function() {
		for(var i = 0; i < this._pipes.length; i++){
			var p = this._pipes[i];
			var cx  = Math.min(Math.max(this.game.player.pos.x, p.x), p.x+WIDTH);
			var cy1 = Math.min(Math.max(this.game.player.pos.y, p.y), p.y+(this.pos.y / 2));  
			var cy2 = Math.min(Math.max(this.game.player.pos.y, p.y+(this.pos.y / 2)+50), p.y+2*(this.pos.y / 2)+50);
			// closest difference 
			var dx  = this.game.player.pos.x - cx;
			var dy1 = this.game.player.pos.y - cy1;
			var dy2 = this.game.player.pos.y - cy2;
			// vector length
			var d1 = dx*dx + dy1*dy1;
			var d2 = dx*dx + dy2*dy2;
			var rad = Math.sqrt(this.game.player.HEIGHT^2 + this.game.player.WIDTH^2) / 2;
			var r = rad*rad;
			// determine intersection
			if (r > d1 || r > d2) {
				this.scoreboard.innerHTML = "Score: " + this.score;
				//Sounds.crashSound();
				Sounds.damnCrashSound();
				return this.game.gameover();
			}
			
		}
	};

	return Pipes;

})();