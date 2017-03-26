window.Score = (function(el, game) {
	'use strict';
   
    var score;
    var el;
    var game;
    var player;
    var pipe;


    var Score = function(player, pipe, game) {
        this.score = 0;
        this.player = player;
        this.pipe = pipe;
        this.game = game;
    };

    Score.prototype.getDivLocation = function() {
        console.log("Score is: " + score + " Player is: " +player+ " Pipe is: " + pipe  );
        var x = {
            score: this.score,
            player: this.player,
            pipe: this.pipe
        }
        return x;
    };
    function test() {
        var x = "Sverrir";
        return x;
    }

    Score.prototype.onFrame = function(delta, frames) {
		console.log("Score is: " + score + " Player is: " +player+ " Pipe is: " + pipe  );
	};

    return Score;
})();






