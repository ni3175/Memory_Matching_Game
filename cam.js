static var canClick : boolean;		// Can we click on objects
var object2 : GameObject;			// Object reference for compare
var selection : AudioClip;			// Sound clip
//var timeLeft: float;
static var startTime : float;		// Start time
static var timerON : boolean;		// Is timer set to ON
static var finish : boolean;		// Is game end

function Update () {
	if(canClick == true && game.menu == 0){		// If can click and we are in the game menu
		if(Input.GetButtonUp("Fire1")){			// Left mouse button
			var ray = camera.ScreenPointToRay(Input.mousePosition);		// Cast a ray
			var hit : RaycastHit;										// Ray hit
			
			if (Physics.Raycast(ray, hit, 200)) {				// Cast ray at distance of 200
				if(game.object1 == null){						// If picture 1 not selected
					game.object1 = hit.collider.gameObject;		// Picture 1 is set to object hit by ray
					audio.PlayOneShot(selection);				//
					if(timerON == false){						// If time is not counting
						timerON = true;							// Count time
						startTime = Time.timeSinceLevelLoad;	// Set start time
						//timeLeft=60.0-startTime;
					}
				}else if(game.object2 == null){					// If picture 2 not selected
					object2 = hit.collider.gameObject;			// Object2 is used to compare it with game.object1
					if(object2 != game.object1){				// Compare them so we can't select one object twice
						game.object2 = object2;					// Set picture 2
						canClick = false;						// We can't click any more
						audio.PlayOneShot(selection);			//
					}
				}
			}
		}
	}
	
	/*
	if(startTime > 0 && game.pictureNumber == 0 && finish == false){	// If time is counting and there are no more pictures and game end
		timerON = false;				// Timer is OFF
		finish = true;					// Set game end
		winsound.playWinSound = true;	// Now we can play win sound
		game.menu = 4;					// Set menu
	}*/
	
	if( startTime>0 && float.Parse(game.timeLeft)<=0 && finish == false|| startTime>0 && finish == false && game.pictureNumber == 0){
		//Debug.Log(float.Parse(game.timeLeft));
		//print("cam"+float.Parse(game.timeLeft));
		timerON = false;				// Timer is OFF
		finish = true;					// Set game end
		winsound.playWinSound = true;	// Now we can play win sound
		game.menu = 4;					// Set menu
     }
    }