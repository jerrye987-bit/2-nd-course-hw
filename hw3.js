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

// Дополнительные задания
// Задание 1
let parity = (prompt('Пожалуйста, введите любое число'));
let numberPar = Number(parity);
if (isNaN(numberPar)) {
    alert('Вы ввели не число!');
} else {
    let remainder = parity % 2;
    alert(remainder === 0 ? `Число ${parity} четное.` : `Число ${parity} нечетное.`);
}


// Задание 2
let os = prompt('Введите 0, если ваша операционная система iOS, введите 1, если ваша операционная система Android');
switch (os) {
    case '0':
        console.log('Установите версию приложения для iOS по ссылке');
        break;
    case '1':
        console.log('Установите версию приложения для Android по ссылке');
        break;
    default:
        console.log('Вы ввели некорректное значение');
        break;
}

// Задание 3
let oSystem = prompt('Введите 0, если ваша операционная система iOS, введите 1, если ваша операционная система Android');
let clientDeviceYear = prompt('Введите год производства вашего устройства');
let numcDY = Number(clientDeviceYear)
if (isNaN(numcDY)) {
    console.log('Год производства устройства введен некорректно!')
} else {
    if (clientDeviceYear < 2015) {
        switch (oSystem) {
            case '0':
                console.log('Установите облегченную версию приложения для iOS по ссылке');
                break;
            case '1':
                console.log('Установите облегченную версию приложения для Android по ссылке');
                break;
            default:
                console.log('Вы ввели некорректное значение операционной системы');
                break;
        }
    } else {
        switch (oSystem) {
            case '0':
                console.log('Установите версию приложения для iOS по ссылке');
                break;
            case '1':
                console.log('Установите версию приложения для Android по ссылке');
                break;
            default:
                console.log('Вы ввели некорректное значение операционной системы');
                break;
        }
    }
}
