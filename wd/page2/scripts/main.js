var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/arsenal.jpg') {
      myImage.setAttribute ('src','images/arsenal-team.jpg');
    } else {
      myImage.setAttribute ('src','images/arsenal.jpg');
    }
}