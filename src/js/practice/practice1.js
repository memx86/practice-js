// Check number: 200    <---user
// Tip: 15%             <---user
// Tip amount: 30
// Total sum to pay:  230

const check = Number.parseFloat(prompt('Please enter check number'));
const tip = Number.parseFloat(prompt('Please enter tip amount in %'));
const tipAmount = (check * tip) / 100;
const totalPrice = check + tipAmount;
alert(`Check number: ${check.toFixed(2)}
Tip: ${tip.toFixed(2)}%
Tip amount: ${tipAmount.toFixed(2)}
Total sum to pay:  ${totalPrice.toFixed(2)}
`);
