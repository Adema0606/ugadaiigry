// УГАДАЙ ЧИСЛО
// Компьютер должен на каждый ход сгенерировать случайное число от 1 до 5
// Пользователь должен написать в prompt число которое пытается угадать
// На выходе мы должны пользователю показать результат выйграл он или нет
// Так же нужно вести учет побед компьютера и пользователя.

//2 задание добавить чтобы я вписывала в окно слово  (изменить)  и могла изменить максимальное число потом предлагалось изменит на число которое я выберу 

// 3 добавить 10 жизней закоторые нужно угадать число


let userWins = 0;
let computerWins = 0;
let maxNumber = 50; 
let lives = 10; 

let computerNumber = Math.floor(Math.random() * maxNumber) + 1;

while (true) {
    const userInput = prompt(`Угадай число от 1 до ${maxNumber}. 
        \nУ вас ${lives} жизней.
        \nВведите "изменить", чтобы поменять диапазон.`);

    if (userInput === null) break;
    
    if (userInput === "изменить") {
        let userChange = +prompt("Введите число до скольки загадывать:");
        while (isNaN(userChange) || userChange < 1) {
            userChange = +prompt("Введите корректное число:");
        }
        maxNumber = userChange; 
        
        lives = 10;
        computerNumber = Math.floor(Math.random() * maxNumber) + 1;
        
        alert(`Диапазон изменен! Теперь играем от 1 до ${maxNumber}.`);
        continue; 
    }
    
    const userNumber = parseInt(userInput, 10);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > maxNumber) {
        alert(`Введите корректное число от 1 до ${maxNumber}`);
        continue; 
    }

    if (userNumber === computerNumber) {
        userWins++;
        alert(`Вы легенда! Счет побед ${userWins}:${computerWins}.`);
        
        lives = 10;
        computerNumber = Math.floor(Math.random() * maxNumber) + 1;
        
    } else {
        lives--; 
        
        if (lives === 0) {
            computerWins++;
            alert(`Вы проиграли! Компьютер загадал ${computerNumber}. Счет побед ${userWins}:${computerWins}.`);
            
            lives = 10;
            computerNumber = Math.floor(Math.random() * maxNumber) + 1;
        } else {
            alert(`Вы туту. Компьютер загадал: ${computerNumber} \nОсталось жизней: ${lives}.`);
        }
    }
}