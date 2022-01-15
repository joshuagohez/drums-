let numberOfButtons = document.querySelectorAll(".drum").length;

// adding eventListener to buttons 
for (let i=0; i<numberOfButtons; i++) {

// detect button press
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    let buttonHTML = this.innerHTML;

    makeSound(buttonHTML);
    buttonAnimation(buttonHTML);

  });

}

// detect keyboard press
document.addEventListener("keydown", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

});

// creation of sound based on key pressed
function makeSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "s":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(keyPressed) {

  let activeButton = document.querySelector("." + keyPressed);
  activeButton.classList.add("pressed");

  // set css to original after delay
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
