//Register keylistener
document.addEventListener('keydown', handleKey);

//Register transition event handlers
var buttons = document.getElementsByClassName("button");
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("transitionend", function () {
        this.classList.remove("playing");
    })
}

function handleKey(event){
        startTransition(event.keyCode);
        switch (event.keyCode){
            case 65: playAudio(sound_clap); break;      //A
            case 83: playAudio(sound_hihat); break;     //S
            case 68: playAudio(sound_kick); break;      //D
            case 70: playAudio(sound_openhat); break;   //F
            case 71: playAudio(sound_boom); break;      //G
            case 72: playAudio(sound_ride); break;      //H
            case 74: playAudio(sound_snare); break;     //J
            case 75: playAudio(sound_tom); break;       //K
            case 76: playAudio(sound_tink); break;      //L
        }
}

function playAudio(audioFile) {
    audioFile.currentTime = 0;
    audioFile.play();
}

function startTransition(keyCode){
    var button = document.getElementById(keyCode);
    if (button != null) {
        button.classList.add("playing");
    }
}

//Sounds Files
var sound_boom = new Audio('sounds/boom.wav');
var sound_clap = new Audio('sounds/clap.wav');
var sound_hihat = new Audio('sounds/hihat.wav');
var sound_kick = new Audio('sounds/kick.wav');
var sound_openhat = new Audio('sounds/openhat.wav');
var sound_ride = new Audio('sounds/ride.wav');
var sound_snare = new Audio('sounds/snare.wav');
var sound_tink = new Audio('sounds/tink.wav');
var sound_tom = new Audio('sounds/tom.wav');
