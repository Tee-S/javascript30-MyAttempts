//Register keylistener
document.addEventListener('keydown', function(event){
    if (event.keyCode != undefined) handleKey((event.keyCode));
});

function handleKey(keyCode){
    document.getElementById("debug").innerHTML = keyCode;

    switch (keyCode){
        case 65: sound_clap.play(); break;      //A
        case 83: sound_hihat.play(); break;     //S
        case 68: sound_kick.play(); break;      //D
        case 70: sound_openhat.play(); break;   //F
        case 71: sound_boom.play(); break;      //G
        case 72: sound_ride.play(); break;      //H
        case 74: sound_snare.play(); break;     //J
        case 75: sound_tom.play(); break;       //K
        case 76: sound_tink.play(); break;      //L
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
