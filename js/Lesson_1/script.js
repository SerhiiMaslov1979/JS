// let value;
// console.log(value);
// value = 1;
// console.log(value);

// console.log(3 === "3");
// console.log(3 == "3");

// 1 undefined => false;
// 2 null      => false;
// 3 0         => false;
// 4 NaN       => false;
// 5 ' '       => false;
// 6 false     => false;

// console.log(Boolean("false")); =>
// console.log(!!"false");

// const a = 20;
// console.log(a);

// let b;
// b = 15;

// console.log(b);

// Примштивні типи даних - імутабельні типи даних
// 1 Number
// 2 String
// 3 Boolean
// 4 Undefined
// 5 Null

// let a = 10;
// a = a + 2;
// a = 12;
// a += 2;

// console.log(a);


// Example 1 - Матиматичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);

// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);

// Example 3 - Пріоритет операторів
// Розбери приоритети операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Example 4 - Клас Math
// Напиши скрипт, який виводить у консолі заокруглені вгору/вниз і т.д. значення змінної
// value. Використовуй метолди Math.floor(), Math.ceil(), та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;
// const value = 27.3;

// console.log(Math.ceil(value)); //округлення більшого значення
// console.log(Math.floor(value)); // округлить в меншу сторону
// console.log(Math.round(value)); // округлить по матиматичному принципу


// Example 5 - шаблонні рядки


// const value = 10;
// const value_2 = '15';
// const result = value + Number(value_2);

// console.log(result);



// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// // const message = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock';
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"



// Example 6 - Метод рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити  вагу
// в кілограмах на квадрат висоти людини у метрах

// Вага та висота зберігається у змінних weight та height, але не як числа, а в вигляді рядків
// (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як
// роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(',', '.'));

// height = Number(height); // або

// // height = +height;

// // weight = Number(weight);

// console.log(typeof height);
// // console.log(weight);

// // const bmi = weight / Math.pow(height, 2); // або

// const bmi = Number((weight / height ** 2).toFixed(1));
// console.log(bmi);   // 28.8



// Example 7 
