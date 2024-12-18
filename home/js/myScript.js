function myFunction() {
  document.getElementById("demo").innerHTML = "Favorite Motorcycle";
}

function myFunction2() {
  const element = document.getElementsByTagName("span"); 

  document.getElementById("demo").innerHTML = 'Its a ' + element[0].innerHTML; 
}