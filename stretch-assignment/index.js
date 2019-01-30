// I understood the instructions for Travelers to mean that when a block goes to the top of the stack, the other blocks do not change their order (they each stay in place or are shifted downward, depending on where the top-bound block was sitting). I think the code I wrote is a bit inelegant, but I'm happy that after some testing, I'm sure that when clicked, the blocks behave as I described above.

// Elements grabbers
const blockEls = document.querySelectorAll(".block");
const blockElsArray = Array.from(blockEls);

// Sets the flexbox order property of each array element equal to that element's index
const orderToIndex = array => {
  array.forEach(element => (element.style.order = array.indexOf(element)));
};

orderToIndex(blockElsArray);

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

// Upon clicking a block, moves that block to the top of the stack without otherwise changing the order of the blocks
const clickListeners = blockElsArray.forEach(element => {
  element.addEventListener("click", event => {
    elementIndex = blockElsArray.indexOf(element);
    blockElsArray.splice(elementIndex, 1);
    blockElsArray.unshift(element);
    orderToIndex(blockElsArray);
  });
});
