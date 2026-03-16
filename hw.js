function game1() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
   
    while (true) {
    let guessNumber = prompt('Угадай число от 1 до 100');
    guessNumber = Number(guessNumber);
        if (guessNumber === secretNumber) {
        alert('Поздравляю, число угадано!');
        break;
    } else if (guessNumber > secretNumber) {
        alert('Твое число больше загаданного. Давай попробуем еще!');
    } else {
        alert('Твое число меньше загаданного. Давай попробуем еще!');       
    }
    }
}