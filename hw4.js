// Задание 1
for (let i = 1; i <= 2; i++) {
    console.log('Привет');
}

// Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i); 
}

// Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);   
}

// Задание 5
let a = 1000;
let res = a;
let i = 0;
do {
    res = res / 2;
    i++;
} while (res >= 50);
console.log(`Количество делений ${i}. Результат деления ${res}`)

// Задание 6
let friday = 2;
for (let i = friday; i <= 31; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);  
}

// Дополнительное задание 1
let k = 100;
let res1 = k;
let ind = 0;
do {
    res1 -= 7;
    ind++;
} while (res1 >= 0);
console.log(`Количество вычитаний ${ind}. Результат деления ${res1}`);

// Дополнительное задание 2
const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
for (let index = 0; index < months.length; index++) {
    console.log(`${index + 1}. ${months[index]}`);
    }

// Дополнительное задание 3
const book = {
    "Название" : 'Понедельник начинается в субботу',
    "Автор" : 'Аркадий и Борис Стругацкие',
    "Год издания" : '1965',
    "Жанр" : 'Научная фантастика'
}
for (const key in book) {
    console.log(`${key}: ${book[key]}`);   
}

// Дополнительное задание 4
const arrayOfNumbers = [];
for (let j = 0; j < 10; j++) {
    arrayOfNumbers.push(Math.random() * 100);
}
let min = arrayOfNumbers[0];
for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (min > arrayOfNumbers[i]) {
        min = arrayOfNumbers[i];
    }
}
console.log(`Минимальное число ${min}`);
