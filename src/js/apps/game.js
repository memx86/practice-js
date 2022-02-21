// Step 1:
// 	Create a prompt window (use confirm()). Show the message inside the window ‘Do you want to play a game?’.
// 	In case the user clicks the 'Cancel' button, the message 'You did not become a billionaire, but can.'
// should be shown(use alert).

// Step 2:
// 	If user clicked ‘Ok’ – start a game: randomly (use Math.random()) choose an integer number in range [0; 5]
// (including 0 and 5)  and ask user to enter a number of pocket on which the ball could land(use prompt()).
// 	User has 3 attempts to guess a number.
// 	If user guessed the number on which ball landed, on 1-st attempt prize is 100$ (maximum prize for
// current numbers range), 2 - nd attempt – 50$, 3 - rd attempt – 25$.
// 	If user did not guess a number show the message ‘Thank you for your participation.
// Your prize is: … $’ (Use alert) and ask if he wants to play again(use confirm).

// Step 3:
// 	If user did guess - Show the message ‘Congratulation, you won!   Your prize is: … $. Do you want to continue?’.
// 	If user does not want to continue – show the message ‘Thank you for your participation. Your prize is: … $’
// (Use alert) and ask if he wants to play again(use confirm).
// 	If user does want to continue, make number range bigger at 5 as the previous one
// (for example[0; 5]-> [0; 10]), and two times bigger maximum prize(for example on 1 - st attempt
//prize will be 200$, 2 - nd attempt – 100$, 3 - rd attempt – 50$).
//Prize must be added to the previous one and number of attempts should be set to 3
//(user should have 3 attempts to guess a number for each numbers range)
// 	Each time you ask user to enter a number you should show him a range of cells, how much attempts he has left,
//his total prize and possible prize on current attempt.

const refs = {
  game: document.querySelector('.game'),
  btnWrap: document.querySelector('.wrapper'),
  btnYes: document.querySelector('.yes'),
  btnNo: document.querySelector('.no'),
  form: document.querySelector('.choice'),
  input: document.querySelector('.choice input'),
  msg: document.querySelector('.message'),
  range: document.querySelector('.range'),
  attempts: document.querySelector('.attempts'),
  prize: document.querySelector('.prize'),
  maxPrize: document.querySelector('.maxPrize'),
};
let gameNumber = 1;
let prize = 0;
let roulette = -1;
let tryNumber = 1;
let range = 5;
let attempts = 3;
let maxPrize = (100 * gameNumber) / Math.pow(2, tryNumber - 1);

refs.btnYes.addEventListener('click', onYes);
refs.btnNo.addEventListener('click', onNo);
function onYes() {
  refs.msg.textContent = "Let's play!";
  showGame();
  if (gameNumber === 1) refs.form.addEventListener('submit', onTry);
  updateGameUI({ range, attempts, prize, maxPrize });
}
function onNo() {
  if (gameNumber === 1) {
    refs.msg.textContent = 'You did not become a billionaire, but can.';
  } else refs.msg.textContent = `Thank you for your participation. Your prize is: ${prize}$`;
  hideGame();
}
function hideGame() {
  refs.game.classList.add('is-hidden');
  refs.btnWrap.classList.remove('is-hidden');
}
function showGame() {
  refs.game.classList.remove('is-hidden');
  refs.btnWrap.classList.add('is-hidden');
}
function onTry(e) {
  e.preventDefault();
  if (tryNumber > 3) {
    return;
  }
  const choice = Number(e.target.elements.num.value);
  attempts = 3 - tryNumber;
  if (roulette < 0) roulette = Math.round(Math.random() * range);
  console.log(roulette);
  maxPrize = (100 * gameNumber) / Math.pow(2, tryNumber - 1);

  if (choice === roulette) {
    prize += maxPrize;
    endCurrentGame(`Congratulation, you won! Your prize is: ${prize}$`);
    return;
  }
  if (tryNumber === 3) {
    endCurrentGame(`Thank you for your participation. Your prize is: ${prize}$`);
    return;
  }
  const nextMaxPrize = (100 * gameNumber) / Math.pow(2, tryNumber);
  tryNumber += 1;
  updateGameUI({ range, attempts, prize, maxPrize: nextMaxPrize });
}
function updateGameUI({ range, attempts, prize, maxPrize }) {
  refs.range.textContent = range;
  refs.attempts.textContent = attempts;
  refs.prize.textContent = prize;
  refs.maxPrize.textContent = maxPrize;
}
function endCurrentGame(message) {
  hideGame();
  gameNumber += 1;
  tryNumber = 1;
  refs.msg.textContent = message;
  refs.input.max = 5 * gameNumber;
  attempts = 3;
  range = 5 * gameNumber;
  maxPrize = 100 * gameNumber;
  if (gameNumber > 1) roulette = Math.round(Math.random() * range);
}
