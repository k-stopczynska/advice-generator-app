const index = document.querySelector(".index");
const quote = document.querySelector(".quote");
const cube = document.querySelector(".cube");
const container = document.querySelector(".container");

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      quote.innerText = data.slip.advice;
      index.innerText = data.slip.id;
    })
    .catch((error) => console.log("error"));
};
getAdvice();

const adviceHandler = () => {
  getAdvice();
};

cube.addEventListener("click", adviceHandler);
