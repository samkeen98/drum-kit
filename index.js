var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener('keypress', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      var sam1212 = new Audio('./sounds/crash1.mp3');
      sam1212.play();
      break;

    case 'a':
      var sam113 = new Audio('./sounds/kick-bass.mp3');
      sam113.play();
      break;

    case 's':
      var sam112 = new Audio('./sounds/snare.mp3');
      sam112.play();
      break;

    case 'd':
      var sam111 = new Audio('./sounds/tom-1.mp3');
      sam111.play();
      break;

    case 'j':
      var sam11 = new Audio('./sounds/tom-2.mp3');
      sam11.play();
      break;

    case 'k':
      var sam6 = new Audio('./sounds/tom-3.mp3');
      sam6.play();
      break;

    case 'l':
      var sam7 = new Audio('./sounds/tom-4.mp3');
      sam7.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}
