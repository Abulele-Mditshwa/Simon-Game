

var gamePattern = []; //empty array.

var buttonColours = ["red","green","blue","yellow"];

function nextSequence(){

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber]; // randomly selects colours in the index.
  gamePattern.push(randomChosenColour); // adds new items to the empty array.


  //jQuery for the animation
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


  var sound = new Audio("sounds/" + randomChosenColour + ".mp3");
  sound.play();
}//end nextSequence() function.
