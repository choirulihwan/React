var readline = require('readline-sync');

var name = readline.question('What is your name?');

console.log("My name is: " + name);

var num = readline.question('Enter a number to be multiplied by 3?');

console.log("your number: " + num + ", multiplied by 3 equals: " + (parseInt(num) * 3));