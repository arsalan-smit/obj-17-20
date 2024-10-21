var multiArray = [[], []];

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];

for (var i = 1; i <= 10; i++) {
    document.write(`${i}<br>`);
}

var tableNumber = +prompt("Enter the table number:");
var tableLength = +prompt("Enter the length of the table:");
document.write(`Multiplication of table ${tableNumber} lenght ${tableLength}<br>`);
for (var i = 1; i <= tableLength; i++) {
  document.write(`${tableNumber} x ${i} = ${tableNumber * i}<br>`);
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  document.write(`${fruits[i]}<br>`);
}
for (var i = 0; i < fruits.length; i++){
  document.write(`Element at index ${i} is ${fruits[i]}<br>`)
}

// a. Counting
var counting = "";
for (var i = 1; i <= 15; i++) {
  counting += i + ", ";
}
document.write(`Counting: ${counting}`);
// b. Reverse counting
var reverseCounting = "";
for (var i = 10; i >= 1; i--) {
  reverseCounting += i + ", ";
}
document.write(`Reverse Counting: ${reverseCounting}`);

// c. Even numbers
var evenNumbers = "";
for (var i = 0; i <= 20; i += 2) {
  evenNumbers += i + ", ";
}
document.write(`Even: ${evenNumbers}`);
// d. Odd numbers
var oddNumbers = "";
for (var i = 1; i <= 19; i += 2) {
  oddNumbers += i + ", ";
}
document.write(`Odd: ${oddNumbers}`);
// e. Series (like 2k, 4k)
var series = "";
for (var i = 2; i <= 20; i += 2) {
  series += i + "k, ";
}
document.write(`Series: ${series}`);

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:").toLowerCase();
if (A.indexOf(userInput) !== -1) {
  console.log(`${userInput} is available at index ${A.indexOf(userInput)} our bakery.`);
} else {
  console.log(`we are sorry. ${userInput} is not available in our bakery.`);
}

var A = [24, 53, 78, 91, 12];
var largest = Math.max(...A);
document.write(`The largest number is: ${largest}`);

let A = [24, 53, 78, 91, 12];
let smallest = Math.min(...A);
document.write(`The smallest number in the array is: ${smallest}`);

for (var i = 5; i <= 100; i += 5) {
    console.log(i);
  }
  