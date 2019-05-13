var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/liverpool.jpg') {
      myImage.setAttribute ('src','images/liverpool-team.jpg');
    } else {
      myImage.setAttribute ('src','images/liverpool.jpg');
    }
}