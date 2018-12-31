//select element by tag 
const myList = document.getElementsByTagName('li');

//loops through each li tag changing it to purple.
for(let i = 0; i < myList.length; i++){
  myList[i].style.color = "purple";
}