const blockElements = document.querySelectorAll(".block");
const blockElementsArray = Array.from(blockElements);
const arrayContents = function(array) {
  array.forEach(element => console.log(array.indexOf(element)));
};

arrayContents(blockElementsArray);

const clickListeners = blockElementsArray.forEach(element => {
  element.addEventListener("click", event => {
    elementIndex = blockElementsArray.indexOf(element);
    blockElementsArray.splice(elementIndex, 1);
    blockElementsArray.shift(element);
    arrayContents(blockElementsArray);
    // for (i = 0; i < elementIndex; i++) {
    //   blockElementsArray[i].style.order += 1;
    // }
    // element.style.order = 0;
  });
});
