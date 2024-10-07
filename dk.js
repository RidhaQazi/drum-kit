
function playSound(e) {

        //a console.log(e.keyCode);
    
         const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
         //console.log(audio);
    
         const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
         if(!audio) return; //stop function from running all together
    
         audio.currentTime = 0; //rewind it to start
         audio.play();
    
         //console.log(key);
    
        key.classList.add('playing');
    
}

function removeTransition(e) {
    //console.log(e);
    if(e.propertyName !== 'transform') return; //skip it if it's not a transform
    //console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);
