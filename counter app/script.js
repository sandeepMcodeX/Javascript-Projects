
const outputValue = document.querySelector('.output-value')

const decreaseButton = document.querySelector('.decreaseButton')

const increaseButton = document.querySelector('.increaseButton')

const userInput = document.querySelector('.userInput')

const resetButton = document.querySelector('.resetButton')

decreaseButton.addEventListener('click', () => {
  const countValue = parseInt(outputValue.innerText);
  const userInputValue = parseInt(userInput.value);
  outputValue.innerText = countValue - userInputValue;
})

increaseButton.addEventListener('click', () => {
  const countValue = parseInt(outputValue.innerText);
  const userInputValue = parseInt(userInput.value);
  outputValue.innerText = countValue + userInputValue;
})

resetButton.addEventListener('click', () => {
  outputValue.innerText = 0
  userInput.value=1
  
})
