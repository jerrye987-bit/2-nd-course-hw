// Задание 1
let min = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(min(8, 4));
console.log(min(6, 6));
console.log(min(8, 10));

// Задание 2
let evenOddNumber = n => {
    if (n % 2 === 0) {
        console.log(`Число ${n} - четное`);
    } else {
        console.log(`Число ${n} - нечетное`);
    }
}

evenOddNumber(4);
evenOddNumber(15);

// Задание 3
let sqrNumber = n => n ** 2;

console.log(sqrNumber(8));

let sqrNumberConsol = n => {
    let result = n ** 2;
    return console.log(`Квадрат числа ${n} равен ${result}`);
}
sqrNumberConsol(6);

// Задание 4
let helloAgeDeterm = () => {
    age = prompt('Сколько Вам лет?');

    if (age < 0) { 
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

helloAgeDeterm();

// Задание 5
let mult = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return console.log('Одно или оба значения не являются числом');
} else {
        return  console.log(`Произведение ${a} на ${b} равно ${a * b}`);
    }
}

mult(3, 5);
mult('s', 5);
mult(3, 'd5f');
mult('df', 'bf');

// Задание 6
let cubeNumber = () => {
    let n = prompt('Введите любое число');
    if (isNaN(n)) {
        return console.log('Переданный параметр не является числом')
    } else {
        let result = n ** 3;
        return console.log(`${n} в кубе равняется ${result}`);
    }
}

cubeNumber();

// Задание 7
function getArea() {
        return Math.PI * this.radius ** 2;
    }

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter
}
const circle2 = {
    radius: 3,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter   
}

console.log(`Площадь круга с радиусом ${circle1.radius} равна ${circle1.methodGetArea()}`);
console.log(`Периметр круга с радиусом ${circle1.radius} равен ${circle1.methodGetPerimeter()}`);
console.log(`Площадь круга с радиусом ${circle2.radius} равна ${circle2.methodGetArea()}`);
console.log(`Периметр круга с радиусом ${circle2.radius} равен ${circle2.methodGetPerimeter()}`);
