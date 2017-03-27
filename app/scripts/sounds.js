window.Sounds = (function() {
    'use strict';

    /**
     * @constructor
     */
    var Sounds = function() {
        this.sounds = [];

        this.s_song = new Audio('../sounds/Song.wav');
        this.sounds.push(this.s_song);
        this.s_jump = new Audio('../sounds/JumpSound.wav');
        this.sounds.push(this.s_jump);
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

        //this.s_crash.volume = 0.2;
        this.div = document.getElementsByClassName('Mute');
        this.soundOn = document.getElementById('soundOn');
        this.soundOff = document.getElementById('soundOff');

        //this.s_jump.volume = 0.2;

        this.mutebtn = document.getElementsByClassName('Mute')[0];//Frá tóta
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

    Sounds.prototype.muteAll = function() {
        if(!this.s_song.muted){
            for(var i = 0; i < this.sounds.length; i++){
                this.sounds[i].muted = true;
            }
            this.soundOff.style.display = 'block';
            this.soundOn.style.display = 'none';
            //this.mutebtn.innerHTML = "Unmute"; Frá Tóta
        }
        else{
            for(var i = 0; i < this.sounds.length; i++){
                this.sounds[i].muted = false;
            }
            //this.mutebtn.innerHTML = "Mute"; Frá Tóta
            this.soundOff.style.display = 'none';
            this.soundOn.style.display = 'block';
        }
    }
    Sounds.prototype.goodSounds = function() {// Completed sounds
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
       song.volume = 0.5;
       song.play();
    } 

    Sounds.prototype.damnCrashSound = function() { // Crash sounds
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
       song.volume = 0.5;
       song.play();
    } 
    // Export singleton.
    return new Sounds();
})();
