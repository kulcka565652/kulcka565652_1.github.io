var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myImage.onclick = function () {
var mySrc = myImage.getAttribute('src');
if(mySrc==='images/firefox1.jpg') {
	myImage.setAttribute('src','images/firefox2.jpg');

} else {
	myImage.setAttribute('src','images/firefox1.jpg');
}}

function setUserName() {
	var myName=prompt('Name : ');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Greeting, '+ myName;
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {

	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Greeting, '+ storedName;
}
myButton.onclick = function() {
	setUserName();
}