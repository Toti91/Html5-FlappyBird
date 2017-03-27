window.Sounds = (function() {
    'use strict';

    /**
     * @constructor
     */
    var Sounds = function() {
        this.s_song = new Audio('../sounds/Song.wav');
        this.s_jump = new Audio('../sounds/JumpSound.wav');
        this.s_crash = new Audio('../sounds/Crash.wav');

        this.b_annoying = new Audio('../sounds/dukNukem/annoying.wav');
        this.g_bitchin = new Audio('../sounds/dukNukem/bitchin.wav');
        this.b_gameOver = new Audio('../sounds/dukNukem/game_over.wav');
        this.g_comeGetSome = new Audio('../sounds/dukNukem/come_get_some_x.wav');
        this.b_damn = new Audio('../sounds/dukNukem/damn.wav');
        this.b_damnIt = new Audio('../sounds/dukNukem/damn_it.wav');
        this.g_good = new Audio('../sounds/dukNukem/good2.wav');
        this.b_gottaHurt = new Audio('../sounds/dukNukem/gotta_hurt.wav');
        this.g_hail = new Audio('../sounds/dukNukem/hail.wav');
        this.name = new Audio('../sounds/dukNukem/name.wav');
        this.b_pissess = new Audio('../sounds/dukNukem/pisses_me.wav');
        this.b_wasted = new Audio('../sounds/dukNukem/wasted.wav');

        this.s_jump.volume = 0.2;
        this.s_crash.volume = 0.2;

        this.mutebtn = document.getElementsByClassName('Mute')[0];
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

    Sounds.prototype.muteAll = function() {
        if(!this.s_song.muted){
            this.s_song.muted = true;
            this.s_jump.muted = true;
            this.s_crash.muted = true;
            this.mutebtn.innerHTML = "Unmute";
        }
        else{
            this.s_song.muted = false;
            this.s_jump.muted = false;
            this.s_crash.muted = false;
            this.mutebtn.innerHTML = "Mute";
        }
    }
    Sounds.prototype.goodSounds = function() {//chrasing sounds
       var number = Math.floor(Math.random() * 5) + 1;
       var song;
       console.log(number);
       switch(number){
           case 1: 
            song = this.g_bitchin
           break;
           case 2:
            song= this.g_comeGetSome;
           break;
           case 3:
            song = this.g_good;
           break;
           case 4:
            song = this.g_hail;
           break;
           case 5:
            song = this.name;
           break;
           default:
           song = this.g_hail;
       }  
       song.volume = 0.2;
       song.play();
    } 

    Sounds.prototype.damnCrashSound = function() { //Completed sounds
       var number = Math.floor(Math.random() * 6) + 1;
       var song;
       console.log(number);
       switch(number){
           case 1: 
            song = this.b_annoying;
           break;
           case 2:
            song= this.b_damn;
           break;
           case 3:
            song = this.b_damnIt;
           break;
           case 4:
            song = this.b_gottaHurt;
           break;
           case 5:
            song = this.b_pissess;
           break;
           case 6:
            song = this.b_wasted;
           default:
           song = this.b_wasted;
       }  
       song.volume = 0.2;
       song.play();
    } 
    // Export singleton.
    return new Sounds();
})();
