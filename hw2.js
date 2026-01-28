// Задание 1
let a = 10;
alert (a);
a = 20;
alert (a);

// Задание 2
let firstIPhone = 2007;
alert (`Год выпуска первого iPhone ${firstIPhone}`);

//  Задание 3
let creatorJS = 'Брендан Эйх';
alert (`Создатель языка JavaScript ${creatorJS}`);

// Задание 4
a = 10;
let b = 2;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
alert (`Сумма 10 и 2 равна ${sum}. Разность 10 и 2 равна ${difference}. Произведение 10 на 2 равно ${product}. Частное от деления 10 на 2 равно ${quotient}`);

// Задание 5
let result = 2 ** 5;
alert (`2 в степени 5 равно ${result}`);

// Задание 6
a = 9;
b = 2;
alert (`Остаток от деления 9 на 2 равен ${a % b}`);

// Задание 7 
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//  Задание 8
let age = Number(prompt('Сколько вам лет?'));
alert (`Вам ${age} лет`);

// задание 9
let user = {
    name: `Евгения`,
    age: 42,
    isAdmin: true
}
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);

// Задание 10
let yourName = prompt('Введите ваше имя.');
alert(`Ваше имя ${yourName}`);

// Дополнительное задание
let number = Number(prompt('Загадайте любое число.'));
let an = number * 2;
alert (`Умножим его на 2: ${an}`);
let bn = an + 10;
alert (`Прибавим 10: ${bn}`);
let cn = bn / 2;
alert (`Разделим на 2: ${cn}`);
let dn = cn - number;
alert (`Вычтем загаданное число: ${dn}`);
alert (`Результат равен 5`);