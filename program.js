// get all the elements with the fruit class
var fruits = document.getElementsByClassName('fruit');
var veg = document.getElementsByClassName('veggie');
console.log(fruits);
console.log(fruits.length);
console.log(veg)
console.log(veg.length);
// create a for loop
for(i = 0; i < fruits.length; i++) {
  fruits[i].classList.add('button_style');
}

for(i = 0; i < veg.length; i++) {
  veg[i].classList.add('button_style');
}
var buttons =
document.getElementsByClassName('button_style');
console.log(buttons);
for(i=0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(){
    this.style.backgroundColor = '#68960c';
  })
}
for(i=0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseenter', function(){
    this.style.backgroundColor = 'black';
  })
}
function addApples(){
  var newApple = document.createElement('img');
  newApple.src = 'pics/apple.png';
  console.log(newApple);
  newApple.style.left = 1500 * Math.random() + "px";
  newApple.style.top = 1500 * Math.random() + "px";
  newApple.classList.add('idle');
  var screenSaver = document.getElementById('screenSaver');
  screenSaver.appendChild(newApple);
}

setInterval(addApples, 1000);
addApples();
