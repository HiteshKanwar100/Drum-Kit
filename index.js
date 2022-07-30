//Detecting Button Press
for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
  buttonInnerHTML=this.innerHTML;
  sound(buttonInnerHTML);
  animation(buttonInnerHTML);
});


//Detecting key press
document.addEventListener("keydown",function(event){
    sound(event.key);
    animation(event.key);
  });
}

//function to make sound
function sound(k){
  switch (k) {
    case "a":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
       break;
    case "s":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
        break;
    case "d":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
        break;
    case "j":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
        break;
    case "l":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
        break;
    case "k":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
        break;
    case "w":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
        break;
    default:
        console.log(k);

  }
}
function animation(key){
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
