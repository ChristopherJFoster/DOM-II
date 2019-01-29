// Your code goes here

// listener type 1: mouseover
// listerer type 2: mouseout
// "Nest two similar events somewhere in the site and prevent the event propagation properly"
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

// listener type 3: keydown
const bodyElement = document.querySelector("body");
bodyElement.addEventListener("keydown", event =>
  alert("Why are you pressing a key?")
);

// listener type 4: click
// "Stop the navigation items from refreshing the page by using preventDefault()"
navElement.addEventListener("click", event => {
  event.preventDefault();
});

// listener type 5: dblclick
const headerImage = document.querySelector("header img");
headerImage.addEventListener("dblclick", event => {
  headerImage.style.borderRadius === "50px"
    ? (headerImage.style.borderRadius = "0")
    : (headerImage.style.borderRadius = "50px");
});

// listener type 6: resize
window.addEventListener("resize", event => {
  bodyElement.style.backgroundColor = "lemonchiffon";
});
