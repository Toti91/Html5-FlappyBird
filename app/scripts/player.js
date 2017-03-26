window.Player = (function() {
	'use strict';

	var Controls = window.Controls;
	

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 30; // * 10 pixels per second
	var GRAVITY = 0.25;
	var JUMP = 0.5; //For testing.
	//var JUMP = 1.6;
	var WIDTH = 5;
	var HEIGHT = 5;
	var INITIAL_POSITION_X = 30;
	var INITIAL_POSITION_Y = 25;

	var Player = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
		this.div = document.getElementsByClassName('Player')[0];
	};

	/**
	 * Resets the state of the player for a new game.
	 */
	Player.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;
		GRAVITY = 0.25;
	};

	Player.prototype.onFrame = function(delta, frames) {
		if (Controls.keys.up  || Controls.keys.space) {
			this.pos.y -= JUMP;
			GRAVITY = 0.25;
		}

		GRAVITY -= ((Math.random() * -10) - 5) / 500;
		this.pos.y += GRAVITY; 
		this.checkCollisionWithBounds();

		// Update UI
		this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	Player.prototype.checkCollisionWithBounds = function() {
		if (this.pos.y + HEIGHT > this.game.WORLD_HEIGHT) {
			return this.game.gameover();
		}
		else if (this.pos.y < 0){
			this.pos.y = 0;
		}
	};

	return Player;

})();
