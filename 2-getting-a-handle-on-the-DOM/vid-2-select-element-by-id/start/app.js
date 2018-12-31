const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

//myButton changes myHeadding to whatever value typed into myTextInput with click event.
myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});