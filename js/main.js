
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
The code below will add greet you with Hello 
and the name your enter:
*/

function ShowHelloMessage() {
    var name = document.getElementById("myname");
    document.getElementById("hellomessage").innerHTML = "Hello, " + name.value;
}
document.getElementById("mybutton").onclick = ShowHelloMessage;
