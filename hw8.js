// Задача 1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];


console.log(people.sort((a, b) => a.age - b.age));


// Задача 2
function filter(arr, rulleFunction) {
const result = [];

	for (let i = 0; i < arr.length; i++) {
	
		if (rulleFunction(arr[i])) {
			result.push(arr[i])
		}
	}
	return result;
}

function isPositive(num) {
	return num > 0;
}

function isMale(human) {
	return human.gender === 'male'
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));


// Задача 3
const intervalID = setInterval(() => {
	console.log(new Date);
}, 3000);

setTimeout(() => {
	clearInterval(intervalID);
	console.log('30 секунд прошло');
}, 30000);


// Задача 4
function delayForSecond(callback) {
    setTimeout(callback, 2000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})


// Задача 5
function delayForSecond5(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond5(() => sayHi('Глеб'));