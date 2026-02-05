// Задание 1
// let password = 'пароль';
// let userPassword = prompt('Введите пароль.');
// alert(password === userPassword ? "Пароль введен верно." : "Пароль введен неправильно.");

// Задание 2
// let c = Number(prompt('Введите любое число'));
// if (c > 0 && c < 10) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// Задание 3
// let d = Number(prompt('Введите превое число'));
// let e = Number(prompt('Введите второе число'));
// if (d > 100 || e > 100) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// Задание 4
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));

// Задание 5
let monthNumber = Number(prompt('Введите номер месяца')); 
let season;
if (monthNumber > 12 || monthNumber < 1) {
    console.log("Ошибка: В году только 12 месяцев.");
} else {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            season = "Зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "Весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "Лето";
            break;
        case 9:
        case 10:
        case 11:
            season = "Осень";
            break;
    }
    console.log(`Месяц ${monthNumber} — это ${season}.`);
}