// If you want to use sound for won game event
static var playWinSound : boolean;		// Play sound
var winClip : AudioClip;				// Sound clip

function Update () {
	if(playWinSound == true){			// If we can play sound
		SoundPlay();					// Call function for sound play
	}
}

function SoundPlay(){
	audio.PlayOneShot(winClip);			// Play sound once
	playWinSound = false;				// We can't play sound any more
}