// I understood the instructions for Travelers to mean that when a block goes to the top of the stack, the other blocks do not change their order (they each stay in place or are shifted downward, depending on where the top-bound block was sitting). I think the code I wrote is a bit inelegant, but I'm happy that after some testing, I'm sure that when clicked, the blocks behave as I described above.

// I used this a lot to troubleshoot the click event handler below
// const arrayContents = function(array) {
//   array.forEach(element =>
//     console.log(
//       `${element.className} index:${array.indexOf(element)} order:${
//         window.getComputedStyle(element).order
//       }`
//     )
//   );
// };

// Element grabbers (What is the technical term for these variables?)
const blockEls = document.querySelectorAll(".block");
const blockElsArray = Array.from(blockEls);
// returns the margin-left property of an element (with the 'px' removed)
let marLeft = element => {
  let withUnits = window.getComputedStyle(element).marginLeft;
  return withUnits.substring(0, withUnits.length - 2);
};

// Sets the flexbox order property of each array element equal to that element's index
const orderToIndex = array => {
  array.forEach(element => (element.style.order = array.indexOf(element)));
};

orderToIndex(blockElsArray);

// Upon clicking a block, moves that block to the top of the stack without otherwise changing the order of the blocks
const clickListeners = blockElsArray.forEach(element => {
  element.addEventListener("click", event => {
    elementIndex = blockElsArray.indexOf(element);
    blockElsArray.splice(elementIndex, 1);
    blockElsArray.unshift(element);
    orderToIndex(blockElsArray);
  });
});

let steps = 0;
let embark = "";
let returnHome = ""; // Variable declarations for the setInterval functions. Placed in the global scope so any clearInterval()s can see them.

const mouseDownListeners = blockElsArray.forEach(element => {
  element.addEventListener("mousedown", event => {
    steps = marLeft(element);
    const travelRight = () => {
      steps++;
      element.style.marginLeft = `${steps}px`;
    };
    embark = setInterval(travelRight, 10);
  });
});

const mouseUpListeners = blockElsArray.forEach(element => {
  element.addEventListener("mouseup", event => {
    clearInterval(embark);
    element.style.marginLeft = "10px";
    // clearInterval(embark);
    // steps = marLeft(element);
    // const travelLeft = () => {
    //   if (steps === 10) {
    //     clearInterval(returnHome);
    //   }
    //   steps--;
    //   element.style.marginLeft = `${steps}px`;
    // };
    // returnHome = setInterval(travelLeft, 10);
  });
});

const mouseLeaveListeners = blockElsArray.forEach(element => {
  element.addEventListener("mouseleave", event => {
    clearInterval(embark);
    element.style.marginLeft = "10px";
  });
});
