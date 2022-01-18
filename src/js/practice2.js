// 1st task

// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// ==============================================================Code:

// const word = prompt('Please enter a world to find the middle character')?.trim();
// let message = '';
// if (!word) {
//   alert('Invalid value');
// } else if (word.length === 1) {
//   message = word;
// } else {
//   message =
//     word.length % 2 === 0
//       ? word[word.length / 2 - 1] + word[word.length / 2]
//       : word[Math.floor(word.length / 2)];
// }
// if (message) alert(`the middle character: ${message}`);

// 2nd task

// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.

// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.

// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!

// ==============================================================Code:

// const login = prompt('Please enter your login')?.trim();
// let pwd = '';
// let isCorrectPwd = false;

// if (!login) {
//   alert('Canceled');
// } else if (login.length < 4) {
//   alert("I don't know any users having name length less than 4 symbols");
// } else {
//   switch (login) {
//     case 'Admin':
//     case 'User':
//       pwd = prompt('Enter password');
//       if (!pwd) {
//         alert('Canceled');
//       } else {
//         switch (login) {
//           case 'Admin':
//             if (pwd === 'RootPass') isCorrectPwd = true;
//             break;
//           case 'User':
//             if (pwd === 'UserPass') isCorrectPwd = true;
//             break;
//         }
//         if (!isCorrectPwd) {
//           alert('Wrong password');
//         } else {
//           const currentHour = new Date().getHours();
//           if (currentHour > 5 && currentHour < 20) {
//             alert(`Good day, dear ${login}!`);
//           } else {
//             alert(`Good evening, dear ${login}!`);
//           }
//         }
//       }
//       break;
//     default:
//       alert('I don’t know you');
//   }
// }

// task 3

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

// ==============================================================Code:

let doWant = confirm('Do you want to play a game ?');
if (!doWant) {
  alert('You did not become a billionaire, but can.');
} else {
  let gameNumber = 1;
  let prize = 0;
  do {
    let range = 5 * gameNumber;
    const number = Math.round(Math.random() * range);
    let win = false;
    // console.log(number);
    for (let i = 0; i < 3; i += 1) {
      const maxPrize = (100 * gameNumber) / Math.pow(2, i);
      const choice = Number(
        prompt(`
Choose a roulette pocket number from 0 to ${range}
Attempts left: ${3 - i}
Total prize: ${prize}$
Possible prize on current attempt: ${maxPrize}
`),
      );
      if (choice === number) {
        win = true;
        prize = +maxPrize;
        break;
      }
    }
    if (!win) {
      alert(`Thank you for your participation. Your prize is: ${prize}$`);
    } else alert(`Congratulation, you won! Your prize is: ${prize}$`);
    doWant = confirm('Do you want to play again ?');
    gameNumber = +1;
  } while (doWant);
  alert(`Thank you for your participation. Your prize is: ${prize}$`);
}
