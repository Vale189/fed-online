// 1. Калькулятор
// Створіть функції для кожної математичної операції (функція суми створена на уроці).
// Використовуючи switch напишіть програму яка отримує знак математичної операції (+, -, /, *) та 2 значення і запускає функцію для цієї
// математичної операції з 2 цифровими значеннями

function summNumber(a, b) {
	return a + b;
}

function minusNumber(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function division(a, b) {
	if (b === 0) {
		return `not possible`;
	} else {
		return a / b;
	}
}

let sign = "+";
let result = null;
function calculate(a, b) {
	switch (sign) {
		case "+":
			result = summNumber(a, b);

			break;
		case "-":
			result = minusNumber(a, b);

			break;
		case "*":
			result = multiply(a, b);

			break;
		case "/":
			result = division(a, b);
			break;
	}
	console.log(result);
}
calculate(5, 0);

// 2. Параметри та колбеки:

// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'),
// і викликає цю функцію для кожного елемента масиву.

let user = ["Sasha", "Vasya", "Andriy"];

function hiUser(userName) {
	console.log(`hi ${userName}`);
}

function welcomeUser(callbackFn) {
	for (i = 0; i < user.length; i++) {
		console.log(callbackFn(user[i]));
	}
}
welcomeUser(hiUser);

// 3. Стрілкові функції:

// Перепишіть попередню функцію в стрілкову

let userArr = (userName) => {
	for (i = 0; i < user.length; i++) {
		console.log(`hi ${userName[i]}`);
	}
};

console.log(userArr(user));

// 4. Параметри за замовчуванням:

// Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.

function checkAge(userAge = 18) {
	return console.log(userAge);
}
checkAge();

// 5. Задача з колбеком:

// Створіть функцію, яка приймає стрінг значення і функцію-колбек, і викликає цю функцію-колбек, передаючи їй стрінг значення

function accept(value) {
	console.log(`welcome, ${value}`);
}

function call(callBack) {
	console.log(callBack("Admin"));
}
call(accept);

// 6. Перепишіть стрілкову функцію в звичайну

// const multiplyValues = (a, b, c) => a * b * c

function multiplyNumbers(a, b, c) {
	return console.log(a * b * c);
}
multiplyNumbers(2, 3, 4);
