var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wolf.jpg') {
      myImage.setAttribute ('src','images/2ndWolf.jpg');
    } else {
      myImage.setAttribute ('src','images/wolf.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'WELCOME ' + myName + ', TO THE WAY OF THE WOLF! ' ;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'WELCOME' + storedName + ', TO THE WAY OF THE WOLF! ' ;
}

myButton.onclick = function() {
  setUserName();
}
