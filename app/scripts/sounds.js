window.Sounds = (function() {
    'use strict';

    /**
     * @constructor
     */
    var Sounds = function() {
        this.sounds = [];

        this.s_song = new Audio('../sounds/Song.wav');
        this.sounds.push(this.s_song);
        this.s_grunt1 = new Audio('../sounds/grunts/Grunt1.wav');
        this.sounds.push(this.s_grunt1);
        this.s_grunt2 = new Audio('../sounds/grunts/Grunt2.wav');
        this.sounds.push(this.s_grunt2);
        this.s_grunt3 = new Audio('../sounds/grunts/Grunt3.wav');
        this.sounds.push(this.s_grunt3);
        this.b_annoying = new Audio('../sounds/dukNukem/annoying.wav');
        this.sounds.push(this.b_annoying);
        this.g_bitchin = new Audio('../sounds/dukNukem/bitchin.wav');
        this.sounds.push(this.g_bitchin);
        this.b_gameOver = new Audio('../sounds/dukNukem/game_over.wav');
        this.sounds.push(this.b_gameOver);
        this.g_comeGetSome = new Audio('../sounds/dukNukem/come_get_some_x.wav');
        this.sounds.push(this.g_comeGetSome);
        this.b_damn = new Audio('../sounds/dukNukem/damn.wav');
        this.sounds.push(this.b_damn);
        this.b_damnIt = new Audio('../sounds/dukNukem/damn_it.wav');
        this.sounds.push(this.b_damnIt);
        this.g_good = new Audio('../sounds/dukNukem/good2.wav');
        this.sounds.push(this.g_good);
        this.b_gottaHurt = new Audio('../sounds/dukNukem/gotta_hurt.wav');
        this.sounds.push(this.b_gottaHurt);
        this.g_hail = new Audio('../sounds/dukNukem/hail.wav');
        this.sounds.push(this.g_hail);
        this.name = new Audio('../sounds/dukNukem/name.wav');
        this.sounds.push(this.name);
        this.b_pissess = new Audio('../sounds/dukNukem/pisses_me.wav');
        this.sounds.push(this.b_pissess);
        this.b_wasted = new Audio('../sounds/dukNukem/wasted.wav');
        this.sounds.push(this.b_wasted);

        this.s_song.volume = 0.2;
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
        var number = Math.floor(Math.random() * 3) + 1;
        var sound;
        switch(number){
            case 1: 
                sound = this.s_grunt1
            break;
            case 2:
                sound = this.s_grunt2;
            break;
            case 3:
                sound = this.s_grunt3;
            break;
            default:
                sound = this.s_grunt1;
        }  
        sound.volume = 0.5;
        sound.play();
    };

    Sounds.prototype.muteAll = function() {
        if(!this.s_song.muted){
            for(var i = 0; i < this.sounds.length; i++){
                this.sounds[i].muted = true;
            }
            this.mutebtn.innerHTML = "Unmute"; 
        }
        else{
            for(var i = 0; i < this.sounds.length; i++){
                this.sounds[i].muted = false;
            }
            this.mutebtn.innerHTML = "Mute"; 
        }
    }
    Sounds.prototype.goodSounds = function() {// Completed sounds
       var number = Math.floor(Math.random() * 5) + 1;
       var sound;
       switch(number){
           case 1: 
            sound = this.g_bitchin
           break;
           case 2:
            sound = this.g_comeGetSome;
           break;
           case 3:
            sound = this.g_good;
           break;
           case 4:
            sound = this.g_hail;
           break;
           case 5:
            sound = this.name;
           break;
           default:
           sound = this.g_hail;
       }  
       sound.volume = 0.3;
       sound.play();
    } 

    Sounds.prototype.damnCrashSound = function() { // Crash sounds
       var number = Math.floor(Math.random() * 6) + 1;
       var sound;
       switch(number){
           case 1: 
            sound = this.b_annoying;
           break;
           case 2:
            sound = this.b_damn;
           break;
           case 3:
            sound = this.b_damnIt;
           break;
           case 4:
            sound = this.b_gottaHurt;
           break;
           case 5:
            sound = this.b_pissess;
           break;
           case 6:
            sound = this.b_wasted;
           default:
           sound = this.b_wasted;
       }  
       sound.volume = 0.3;
       sound.play();
    } 
    // Export singleton.
    return new Sounds();
})();
