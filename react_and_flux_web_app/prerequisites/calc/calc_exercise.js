var readline = require('readline-sync');

var num = readline.question('Please enter a number: ');

var num2 = readline.question('Please enter another number: ');

var operator = readline.question('Please enter an operator (+, - , / , * ): ');

var result = 0;
var inum = parseInt(num);
var inum2 = parseInt(num2);

if (operator == '+') {
	result = inum + inum2;
} else if(operator == '-') {
	result = inum - inum2;
} else if(operator == '/') {
	result = inum / inum2;
} else if(operator == '*') {
	result = inum * inum2;
} 

console.log(num + ' ' + operator + ' ' + num2 + ' = ' + result);