// Your code goes here

// listener type 1: mouseover
// listerer type 2: mouseout
// "Nest two similar events...prevent the event propagation"
const navElement = document.querySelector("nav");
navElement.addEventListener("mouseover", event => {
  navElement.style.backgroundColor = "darkgrey";
  event.stopPropagation(); // The mouseover event on the nav element will not trigger the mouseover event on the .nav-container div, below.
});
navElement.addEventListener("mouseout", event => {
  navElement.style.backgroundColor = "white";
  event.stopPropagation();
});

const navContainer = document.querySelector(".nav-container");
navContainer.addEventListener("mouseover", event => {
  navContainer.style.backgroundColor = "DarkTurquoise";
});
navContainer.addEventListener("mouseout", event => {
  navContainer.style.backgroundColor = "white";
});
