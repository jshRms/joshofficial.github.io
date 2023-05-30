let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;
let scrollTriggered = false;

function isScrolledIntoView(elem) {
  let docViewTop = window.pageYOffset;
  let docViewBottom = docViewTop + window.innerHeight;
  let elemTop = elem.offsetTop;
  let elemBottom = elemTop + elem.offsetHeight;
  return elemTop <= docViewBottom && elemBottom >= docViewTop;
}

function startCounting(valueDisplay, endValue, duration) {
  let startValue = 0;
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}

window.addEventListener("scroll", function () {
  if (!scrollTriggered && isScrolledIntoView(valueDisplays[0])) {
    // Start counting for each value display
    valueDisplays.forEach((valueDisplay) => {
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      startCounting(valueDisplay, endValue, duration);
    });
    scrollTriggered = true;
  }
});
