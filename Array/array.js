// push:

// Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).
console.log("===push===");
let firstArr = new Array(5);
firstArr.push(1, 2, "hello");
console.log(firstArr);

// Завдання 2. Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

function buyList(value, item) {
	value.push(item);
	console.log(value);
}
buyList(["orange", "pineapple"], "apple");

// pop:

// Завдання 1. Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.
console.log("===pop===");

let popArr = [1, 2, 3];
popArr.pop();
console.log(popArr);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

function checkNumbers(numbers) {
	numbers.pop();
	console.log(numbers);
}
checkNumbers([1, 2, 4, 8, 6]);

// unshift:

// Завдання 1. Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

console.log("===unshift===");

let unshiftArr = new Array(3);
unshiftArr.unshift("hello", 1);
console.log(unshiftArr);

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

function checkUsers(name) {
	name.unshift("Katya");
	console.log(name);
}
checkUsers(["Anya", "Olya"]);

// shift:

console.log("===shift===");
// Завдання 1. Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

let shiftArr = [1, 2, 3, "hello", true];
console.log(shiftArr);
shiftArr.shift();
console.log(shiftArr);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.
// let Username = ["Tom", "Bob"];
// console.log(Username);
function userData(Username) {
	Username.shift();
	console.log(Username);
}
userData(["Tom", "Bob"]);

console.log("===fill===");
// fill:

// Завдання 1. Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.

let fillArr = new Array(5);

fillArr.fill("*");
console.log(fillArr);

// Завдання 2. Напишіть функцію, яка приймає масив, значення та індекси,
// і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.

function fillArray(arr, value, index) {
	arr.fill(value, index);
	console.log(arr);
}
fillArray(new Array(10), "--", 7);

console.log("===splice===");
// splice:

// Завдання 1. Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.

let spliceArr = [3, 7, 3, 5, "hello", false];
console.log(spliceArr);
let newSplice = spliceArr.splice(2, 3);
console.log(newSplice);

// Завдання 2. Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.
let spliceAray = [1, 2, 3, 4, 56];
console.log(spliceAray);
function deleteElement(arr, index) {
	let newArrsplice = arr.splice(index);
	console.log(newArrsplice);
}
deleteElement(spliceAray, 2);

console.log("===reverse===");
// reverse:

// Завдання 1. Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.

let reverseArr = [1, 2, 3, 4, 5];
console.log(reverseArr);
reverseArr.reverse();
console.log(reverseArr);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

function reverseNumbers(arr) {
	console.log(arr);
	arr.reverse();
	console.log(arr);
}
reverseNumbers([5, 4, 3, 2, 1]);

console.log("===concat===");
// concat:

// Завдання 1. Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.

let firstConcatAr = [1, 5, 7];
let secondConcatArr = ["apple", "orange", 4];

let finalConcatAr = firstConcatAr.concat(secondConcatArr);
console.log(finalConcatAr);
// Завдання 2. Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.

function concatArrays(a, b) {
	c = a.concat(b);
	console.log(c);
}
concatArrays(["a", "b"], ["c", "d"]);

console.log("===includes===");
// includes:

// Завдання 1. Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.

let includesArr = [1, 2, "hello", true, null];
console.log(includesArr.includes(null));

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.

function checkElement(arr, el) {
	console.log(arr.includes(el));
}
checkElement([1, 2, 3, null, true, "Sasha"], "sasha");

// filter:
console.log("===filter===");
// Завдання 1. Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.

let numbersArr = [1, 3, 7, 6, 4];
function checkNumbers(arr) {
	return arr % 2 == 0;
}
let newArr = numbersArr.filter(checkNumbers);
console.log(newArr);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву,
// що містить елементи, які задовольняють умову.

function ifElse(arr) {
	if (arr > 5) {
		console.log(arr);
	} else console.log(`this number is<5 ${arr}`);
}

function filterArr(arr, ifFn) {
	arr.filter(ifElse);
}

filterArr([1, 4, 3, 45, 214, 15], ifElse);

console.log("===map===");
// map:

// Завдання 1. Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

let MapnumbersArr = [1, 2, 3, 4];

let newMapArr = MapnumbersArr.map((value, i, arr) => {
	return value ** 2;
});
console.log(newMapArr);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву,
//  в якому кожен елемент отримує стрінг до значення.

let mapArray = [1, 2, 3, 4, 5];

function modifyArr(arr) {}

function mapArrayFn(arr, modifyFn) {
	let mewMapArray = arr.map((value, index, arr) => {
		return modifyArr(mapArray);
		console.log(value);
	});
}
mapArrayFn(mapArray, modifyArr);
