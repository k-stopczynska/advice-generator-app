const index = document.querySelector(".index");
const quote = document.querySelector(".quote");
const cube = document.querySelector(".cube");
const container = document.querySelector(".container");

const getAdvice = async () => {
  try {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (!response.ok) {
    throw new Error('something went wrong...')
  }
  const data = await response.json();
  }
  catch (error) {
    console.log(error)
  }
  quote.innerText = data.slip.advice;
  index.innerText = data.slip.id;
};
getAdvice();

const adviceHandler = () => {
  getAdvice();
};

cube.addEventListener("click", adviceHandler);
