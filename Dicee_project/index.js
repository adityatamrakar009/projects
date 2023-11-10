// Generate random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Assigning the image source
var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

// Applying the image source
document.querySelector(".img1").setAttribute("src", randomImageSource1);

document.querySelector(".img2").setAttribute("src", randomImageSource2);

// Else if statement to determine winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
