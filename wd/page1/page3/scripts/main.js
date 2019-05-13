var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mancity.png') {
      myImage.setAttribute ('src','images/mancity-team.jpeg');
    } else {
      myImage.setAttribute ('src','images/mancity.png');
    }
}