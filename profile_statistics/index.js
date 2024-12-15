const countersE1 = document.querySelectorAll(".counter");

countersE1.forEach((curElem) => {
  curElem.innerText = "0";
  incrementCounter();

  function incrementCounter() {
    let currentNum = +curElem.innerText;
    const dataCeil = curElem.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      curElem.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      curElem.innerText = dataCeil;
    }
  }
  
});
