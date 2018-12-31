//selects element by id.
const myHeading = document.getElementById('myHeading');

// adds event when element is clicked to change color. 
myHeading.addEventListener('click', () => {
    myHeading.style.color = 'red';
});