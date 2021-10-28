const colors = require('colors');

let number = process.argv[2];
const primeArray = [];

if (isNaN(number)) {
	console.log(colors.red('Enter number, not string'));
}

nextPrime: for (let i = 2; i <= number; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j == 0) continue nextPrime;
	}
	primeArray.push(i);
}
// console.log(primeArray);
if (primeArray.length === 0) {
	console.log(colors.red('Array is empty'));
} else {
	for (let i = 0; i < primeArray.length; i++) {
		if (i % 3 === 0) {
			console.log(colors.green(primeArray[i]));
		} else if (i % 3 === 1) {
			console.log(colors.yellow(primeArray[i]));
		} else if (i % 3 === 2) {
			console.log(colors.red(primeArray[i]));
		}
	}
}
