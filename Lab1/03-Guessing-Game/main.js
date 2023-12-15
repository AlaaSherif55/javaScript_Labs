var number = prompt("Guess a number!");
var output;
if(number <7 ){
    output="Too low. Try again";
}
else if(number>7){
    output= "Too high. Try again";
}
else{
    output= "You guessed it!!!";
}
alert(output);
