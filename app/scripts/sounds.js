window.Sounds = (function() {
    'use strict';

    /**
     * @constructor
     */
    var Sounds = function() {
        this.s_song = new Audio('../sounds/Song.wav');
        this.s_jump = new Audio('../sounds/JumpSound.wav');
        this.s_crash = new Audio('../sounds/Crash.wav');

        this.s_jump.volume = 0.2;
        this.s_crash.volume = 0.2;
    };

    Sounds.prototype.song = function() {
        this.s_song.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        this.s_song.play();
    };

    Sounds.prototype.stopSong = function() {
        this.s_song.pause();
        this.s_song.currentTime = 0;
    }

    Sounds.prototype.jumpSound = function() {
        this.s_jump.play();
    };

    Sounds.prototype.crashSound = function() {
        this.s_crash.play();
    }
    
    // Export singleton.
    return new Sounds();
})();
