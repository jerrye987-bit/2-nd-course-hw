// Игра 1. Угадай число
function game1() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
   
    while (true) {
        let guessNumber = prompt('Угадай число от 1 до 100');

        if (guessNumber) {
            guessNumber = Number(guessNumber);
                if (guessNumber === secretNumber) {
                alert('Поздравляю, число угадано!');
                break;
            } else if (guessNumber > secretNumber) {
            alert('Твое число больше загаданного. Давай попробуем еще!');
            } else {
                alert('Твое число меньше загаданного. Давай попробуем еще!');       
            }
        } else {
            alert('Игра окончена.');
            break;
        }
    }
}


// Игра 2. Простая арифметика
function game2() {
    function rndNum() {
        return Math.floor(Math.random() * 10 + 1);
    }
    
    const operations = ['+', '-', '*', '/'];
    let rndOperationIndex = Math.floor(Math.random() * operations.length);
    let rndOperation = operations[rndOperationIndex];
    let num1 = rndNum();
    let num2 = rndNum();

    function rndTask() {
        switch (rndOperation) {
            case '+':
                return num1 + num2;
                break;
            case '-':
                if (num1 >= num2) {
                    return num1 - num2;
                } else {
                    let num = num2;
                    num2 = num1;
                    num1 = num;
                    return num1 - num2;
                }
                break;
            case '*':
                return num1 * num2;
                break;
            case '/':
                let dividend = num1 * num2;
                num1 = dividend;
                return num1 / num2;
                break;
            default:
                break;
        }
    }
    
    let answer = rndTask();
    let userAnswer = prompt(`Реши задачу: ${num1} ${rndOperation} ${num2} = ?`);
    if (userAnswer) {
        let userAnswerNum = Number(userAnswer);

        if (answer === userAnswerNum) {
            alert(`Отлично! Ты верно решил задачу.`);
        } else {
            alert(`Задача решена не верно. Верный ответ ${answer}.`);
        }
    } else {
        alert('Игра окончена.');
    }
}


// Игра 3. Переверни текст
function game3() {
    let text = prompt('Введите текст');
    if (text) {
        const splitText = text.split("");
        const reverseText = splitText.reverse();
        let joinText = reverseText.join("");

        alert(`Перевернутый текст: ${joinText}`);
    } else {
        alert('Игра окончена.'); 
    }    
}



// Игра 4. Камень, ножницы, бумага
function computerMove() {
    const arrMoves = ['камень', 'ножницы', 'бумага'];
    let randomIndex = Math.floor(Math.random() * 3);

    return arrMoves[randomIndex];
}

function game4() {
    let playerChois = prompt('Сделайте ход.\nВведите: камень, ножницы или бумага.');
    let computerChois = computerMove();

    if (playerChois) {
        let playerChoisStr = playerChois.toLowerCase();
        if ((playerChoisStr !== 'камень') && (playerChoisStr !== 'ножницы') && (playerChoisStr !== 'бумага')) {
            alert('Ты ввел некорректное значение.');
    } else {
        if (playerChoisStr === computerChois) {
            alert(`Ничья.\nОба выбрали ${playerChoisStr}`);
        } else {
            if ((computerChois === 'камень' && playerChoisStr === 'ножницы') ||
                (computerChois === 'ножницы' && playerChoisStr === 'бумага') ||
                (computerChois === 'бумага' && playerChoisStr === 'камень')
        ) {
            alert(`Твой ход - ${playerChois},\nход компьютера - ${computerChois}.\nТы проиграл.`);
                
            } else {
                alert(`Твой ход - ${playerChoisStr},\nход компьютера - ${computerChois}.\nТы выиграл.`);
            }
        }
    }
    } else {
        alert('Игра окончена.')
    }
}

// Игра 5. Простая викторина
const quiz = [
           {
               question: "Какой цвет неба?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];

function game5(quiz) {
    let points = 0;
     
    for (let i = 0; i < quiz.length; i++) {
        let userAnswer = prompt(`${quiz[i].question}\n${quiz[i].options.join('\n')}\nВведите номер правильного ответа.`);
        
        if (userAnswer === null) {
            alert(`Ты прервал игру.`);
            break;
        }

        if (parseInt(userAnswer) === quiz[i].correctAnswer) {
            alert('Верно!');
            points++;
        } else {
            alert(`Ответ не верный. Правильный ответ ${quiz[i].correctAnswer}`);
        } 
    }

    alert(`Игра окончена. Правильных ответов ${points} из ${quiz.length}`);
}


// Игра 6. Генератор случайных цветов