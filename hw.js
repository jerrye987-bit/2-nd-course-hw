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