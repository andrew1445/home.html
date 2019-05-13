var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/chelsea.png') {
      myImage.setAttribute ('src','images/chelsea-team.jpg');
    } else {
      myImage.setAttribute ('src','images/chelsea.png');
    }
}