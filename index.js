var input = document.getElementById("input");
var clear = document.getElementById("clear");
var result = document.getElementById("result");
var number = document.querySelectorAll(".numbers div");
var operator = document.querySelectorAll(".operators div");
var resultDisplayed = false;

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      var newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.addEventListener.innerHTML;
      input.innerHTML = newString;
    } else if (currentString == 0) {
      alert("Enter a number first!");
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}
