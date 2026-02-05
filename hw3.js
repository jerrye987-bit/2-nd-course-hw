// Задание 1
let password = 'пароль';
let userPassword = prompt('Введите пароль.');
alert(password === userPassword ? "Пароль введен верно." : "Пароль введен неправильно.");

// Задание 2
let c = Number(prompt('Введите любое число'));
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 3
let d = Number(prompt('Введите превое число'));
let e = Number(prompt('Введите второе число'));
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));