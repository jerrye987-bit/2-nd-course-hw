// Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if (arr[i] === 10) break;   
}


// Задание 2
const arrInd4 = [1, 5, 4, 10, 0, 3];

for (let j = 0; j < arrInd4.length; j++) {
    if (arr[j] === 4) {
        console.log(`Индекс элемента 4 данного массива - ${j}`);
        break;
    }  
}


// Задание 3
const arrLine = [1, 3, 5, 10, 20];
let joinedArrLine = arrLine.join(" "); 

console.log(joinedArrLine);


// Задание 4
const multArr = [];

for (let j = 0; j <=2; j++) {
    const multArr2 = [];

    for (let i = 0; i <= 2; i++) {
        multArr2.push(1);
    }

    multArr.push(multArr2);
}

console.log(multArr);


// Задание 5
const arrPush = [1, 1, 1];

arrPush.push(2, 2, 2);

console.log(arrPush);


// Задание 6
const arrA = [9, 8, 7, 'a', 6, 5];

arrA.sort();

const arrAFilter = arrA.filter(num => num != 'a');

console.log(arrAFilter);


// Задание 7
const guessArray =[9, 8, 7, 6, 5];
const num = Number(prompt('Угадай число'));

if (guessArray.includes(num)) {
    alert('Угадал!');
} else {
    alert('Не угадал!');
}


// Задание 8
let text = 'abcdef';
const splitText = text.split("");

splitText.reverse();
text = splitText.join("");

console.log(text);


// Задание 9
const array = [[1, 2, 3],[4, 5, 6]];
const spreadArr = [].concat(...array);

console.log(spreadArr);


// Задание 10
function rndNum() {
    return Math.floor(Math.random() * 10);
}

const rndArr =[];

for (let i = 0; i < 10; i++) {
    rndArr.push(rndNum()); 
}

for (let j = 0; j < rndArr.length; j++) {
    if (rndArr[j + 1]) {
        console.log(rndArr[j] + rndArr[j + 1]);
    }  
}


// Задание 11
function sqr(intArr) {
    return intArr.map(el => el ** 2);
}

const intArr = [2, 3, 4];
const sqrArr = sqr(intArr);

console.log(sqrArr);


// Задание 12
function lengthStr(strArr) {
    return strArr.map(item => item.length);
}

const strArr = ['jhg', 'dfvsd', 'dfagafg'];

console.log(lengthStr(strArr));


// Задание 13
function negativNum(arr) {
    return arr.filter(el => el < 0)
}

console.log(negativNum([1, -2, 3, 4, -5, -6, 7]));


// Задание 14
function randomNum() {
    return Math.floor(Math.random() * 10);
}

const randomArr =[];

for (let i = 0; i < 10; i++) {
    randomArr.push(randomNum()); 
}

const evenArr = randomArr.filter(el => el % 2 === 0);

console.log(randomArr);
console.log(evenArr);


// Задание 15
function randomNum15() {
    return Math.floor(Math.random() * 10 + 1);
}

const randomArr15 =[];

for (let i = 0; i < 6; i++) {
    randomArr15.push(randomNum15()); 
}

let sum = randomArr15.reduce((acc, curr) => acc + curr);
let arithmeticMean = sum / randomArr15.length;

console.log(arithmeticMean);