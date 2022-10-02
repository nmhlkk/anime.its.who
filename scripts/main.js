
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}
function multiply(num1,num2) {
    var result = num1 * num2;
    var num1=3; var num2=4
    return result;
  }
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/prizr.jpg') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/prizr.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Введите имя пж.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'здрасте, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'здрасте, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }