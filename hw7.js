// Задача 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

// Задача 2
function filtrArr(arr2, str2) {
    let lowerStr2 = str2.toLowerCase();
    return arr2.filter(el => el.toLowerCase().startsWith(lowerStr2));
}

console.log(filtrArr(['spring has come', 'March is the first month of spring', 'spring brings warmth'], 'spring'));

// Задача 3
let num = 32.58884;

console.log(`Округление до меньшего целого: ${Math.floor(num)}`);
console.log(`Округление до большего целого: ${Math.ceil(num)}`);
console.log(`Округление до ближайшего целого: ${Math.round(num)}`);

// Задача 4
console.log(`Минимальное значение из 52, 53, 49, 77, 21, 32 равно ${Math.min(52, 53, 49, 77, 21, 32)}`);
console.log(`Максимальное значение из 52, 53, 49, 77, 21, 32 равно ${Math.max(52, 53, 49, 77, 21, 32)}`);

// Задача 5
function getRnd() {
    console.log(`Случайное число от 1 до 10: ${Math.floor(Math.random() * 10) + 1}`);
}

getRnd();

// Задача 6
function getArrRnd(num6) {
    arrRnd = [];

    for (let i = 0; i < Math.floor(num6 / 2); i++) {
        arrRnd.push(Math.floor(Math.random() * num6));
    }

    return arrRnd;  
}

console.log(getArrRnd(15));

// Задача 7
function getRandomNumber(num1, num2) {
    if (num2 < num1) {
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

console.log(getRandomNumber(13, 5));

// Задача 8
console.log(`Текущая дата: ${new Date().toLocaleDateString()}`);

// Задача 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(`Дата через 73 дня: ${currentDate.toLocaleDateString()}`);

// Задача 10
function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayWeek = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const rusDay = ['Воскресенье', 'Понедельник', "Вторник", 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const rusMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    

    return `Дата: ${day} ${rusMonth[month]} ${year} - это ${rusDay[dayWeek]}.
Время: ${hours}:${minutes}:${seconds}`;

}

console.log(formatDate(new Date()));