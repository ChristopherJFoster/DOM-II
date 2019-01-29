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
  // According to mdn documentation, only the window can handle resize events (makes sense I guess). Also the window is already an object in the DOM - I didn't need to (and couldn't) grab it with document methods.
  bodyElement.style.backgroundColor = "lemonchiffon"; // It clicked that even though the event is handled by the window, callback function can target anything.
});

// listener type 7: scroll
const textContentFirstP = document.querySelector(".text-content p");
console.log(textContentFirstP);
window.addEventListener("scroll", event => {
  textContentFirstP.style.fontSize = "4rem";
});

// listener type 8: load
window.addEventListener("load", event => alert("Welcome to my site!"));

// listener type 9: copy
// Because of the keydown event (above), you'll have to right-click and select "Copy..." to test this.
const introP = document.querySelector(".intro p");
introP.addEventListener("copy", event => (introP.style.color = "red"));

// listener type 10: beforeprint
// Because of the keydown event (above), you'll have to right-click and select "Print..." to test this.
// audio code borrowed from: http://marcgg.com/blog/2016/11/01/javascript-audio/
window.addEventListener("beforeprint", event => {
  const context = new AudioContext();
  const o = context.createOscillator();
  const g = context.createGain();
  o.connect(g);
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 4);
});
