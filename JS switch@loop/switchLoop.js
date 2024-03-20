// 1. Визначення типу геометричної фігури за допомогою switch:
// Створіть код, який приймає назву геометричної фігури ("коло", "квадрат", "трикутник")
// і використовуючи switch оператор, виводить повідомлення про кількість сторін цієї фігури
// (наприклад, "Коло має 0 сторін", "Квадрат має 4 сторони").

let figure = prompt("Введіть фігуру", "коло, квадрат, трикутник");

switch (figure) {
	case "коло":
		console.log("No sides");
		break;
	case "квадрат":
		console.log("4 sides");
		break;
	case "трикутник":
		console.log("3 sides");
		break;
	default:
		console.log("введіть коло, квадрат чи трикутник");
		break;
}

console.log("2. Підрахунок суми парних чисел:");

// Створіть код, який використовує цикл while
// для знаходження суми всіх парних чисел в заданому діапазоні
// (наприклад, від 1 до 20).

let whileCounter = 1;
let sum = 0;

while (whileCounter < 21) {
	// if (whileCounter % 2 !== 0) {
	// 	continue;
	// }
	whileCounter++;
	sum = sum + whileCounter;
}
console.log(sum);
//
console.log("3. Таблиця множення:");

// Використовуючи цикл for, напишіть програму, яка генерує "таблицю множення"
// виводимо в console.log операції  для конкретного числа (наприклад, для числа 5).

let number = 5;
let result = 0;

for (i = 0; i <= 10; i++) {
	result = number * i;
	console.log(result);
}
//
console.log("4. Зворотний лічильник:");

// Використовуючи цикл for, напишіть програму, яка виводить числа від 10 до 1 в зворотньому порядку.

for (i = 10; i >= 1; i--) {
	console.log(i);
}

console.log("5. Визначення чи є число парним чи непарним:");

// Напишіть програму, яка приймає число і використовуючи if та for,
// виводить повідомлення про те, чи є число парним чи непарним.

for (i = 2; i <= 10; i++) {
	if (i % 2 == 0) {
		console.log(`це парне число ${i}`);
	} else {
		console.log(`непарне ${i}`);
	}
}
//
console.log("6. Знаходження першого парного числа:");

// Напишіть програму, яка використовує цикл for для перебору чисел від 1 до 10
// і виводить перше знайдене парне число. Використайте оператор break, щоб припинити виконання циклу,
// якщо парне число знайдено.

for (i = 1; i <= 10; i++) {
	if (i % 2 == 0) {
		break;
	}
}
console.log(i);
//
console.log("7. Виведення парних чисел:");

// Створіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить тільки парні числа.
// Використайте оператор continue, щоб пропустити ітерації для непарних чисел.

for (i = 1; i <= 10; i++) {
	if (i % 2 !== 0) {
		continue;
	}
	console.log(i);
}