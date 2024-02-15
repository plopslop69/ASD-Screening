function generateRandomNumber() {
  return Math.floor(Math.random() * 7) + 1;
}

const randomNumber = generateRandomNumber();
document.getElementById("score").innerText = randomNumber;
