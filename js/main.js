
/*
The code below will change
my navigation bar from vertical to horizontal.  It is mobile first/responsive designed. :
*/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/*
The code below will show the pyrolyzer conversion from Fahrenheit to Celsius 
and the name your enter:
*/



function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML=(valNum-32)/1.8;
}


/*
The code below will  greet you with Hello 
and the name your enter:
*/

function ShowHelloMessage() {
    var name = document.getElementById("myname");
    document.getElementById("hellomessage").innerHTML = "Hello, " + name.value;
}
document.getElementById("mybutton").onclick = ShowHelloMessage;
