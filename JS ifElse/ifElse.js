// 1. Порівняння трьох чисел:
// Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

let userNumber1 = Number(prompt("Enter first number"));
let userNumber2 = Number(prompt("Enter second number"));
let userNumber3 = Number(prompt("Enter third number"));

if (userNumber1 > userNumber2 && userNumber1 > userNumber3) {
	console.log("first number is the biggest number");
} else if (userNumber2 > userNumber1 && userNumber2 > userNumber3) {
	console.log("second number is the biggest");
} else if (userNumber3 > userNumber1 && userNumber3 > userNumber2) {
	console.log("third number is the biggest");
} else {
	console.log("enter different numbers");
}

// 2. Визначення сезону:
// Запитайте у користувача ввести номер місяця (від 1 до 12).
// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

let userMonth = Number(prompt("Enter your month of birth"));

if (userMonth == 3 || userMonth == 4 || userMonth == 5) {
	console.log("Spring");
} else if (userMonth == 6 || userMonth == 7 || userMonth == 8) {
	console.log("Summer");
} else if (userMonth == 9 || userMonth == 10 || userMonth == 11) {
	console.log("autumn");
} else {
	console.log("winter");
}

// 3. Визначення розміру числа:
// Запитайте у користувача ввести число.
// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем

let yourNumber = Number(prompt("Enter number"));

if (yourNumber > 0) {
	console.log("this number is more than 0");
} else if (yourNumber < 0) {
	console.log("this number is less than 0");
} else if (yourNumber === 0) {
	console.log("it is 0");
}

// 4. Перевірка величини кута:
// Запитайте у користувача ввести величину кута в градусах.
// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою
//( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

let userAngle = Number(prompt("Enter the value of angle"));

let result = 0;

result = userAngle > 90 ? "angle is obtuse" : "angle is acute";

console.log(result);

// 5. Оцінка студента:
// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).
// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// менше 60: F
// Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.
// Виведіть у консоль повідомлення про оцінку до і після інкремента
// та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).

let userMark = Number(prompt("Введіть Ваш бал", "0-100"));
let finalMark = 0;
if (userMark >= 90) {
	alert("A");
} else if (userMark >= 80) {
	alert("B");
} else if (userMark >= 70) {
	alert("C");
} else if (userMark >= 60) {
	alert("C");
} else {
	alert("F");
}

console.log(`початкова оцінка ${userMark}`);
++userMark;
console.log(`Оцінка після підвишення ${userMark}`);

finalMark =
	userMark >= 60
		? "Вітаю, ви зараховані на курс"
		: "На жаль, ви не пройшли, спробуйте ще";

console.log(finalMark);
