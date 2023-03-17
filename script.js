"use strict";

const output = document.querySelector(".output");

document.querySelector(".btn").addEventListener("click", function () {
  const input = document.querySelector("#number").value;
  // logic
  if (input == 0 || input == "") {
    const notFizzBuzz = document.createElement("p");
    notFizzBuzz.innerText = "input invalid!";
    notFizzBuzz.classList.add("notfizzbuzz");
    output.append(notFizzBuzz);
  } else if (input % 3 == 0 && input % 5 == 0) {
    const fizzBuzz = document.createElement("p");
    fizzBuzz.innerText = "FizzBuzz!";
    output.append(fizzBuzz);
  } else if (input % 3 == 0) {
    const fizz = document.createElement("p");
    fizz.innerText = "Fizz!";
    output.append(fizz);
  } else if (input % 5 == 0) {
    const buzz = document.createElement("p");
    buzz.innerText = "Buzz!";
    output.append(buzz);
  } else {
    const number = document.createElement("p");
    number.innerText = input;
    output.append(number);
  }
});
