// УГАДАЙ ЧИСЛО
// Компьютер должен на каждый ход сгенерировать случайное число от 1 до 5
// Пользователь должен написать в prompt число которое пытается угадать
// На выходе мы должны пользователю показать результат выйграл он или нет
// Так же нужно вести учет побед компьютера и пользователя.

let userWins = 0;
let computerWins = 0;

while (true) {
    const userInput = prompt(`Угадай число от 1 до 50`);

    if (userInput === null) break
    const userNumber = parseInt(userInput, 10);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 50) {
        alert("Введите корректное число");
        continue; 
    }

    const computerNumber = Math.floor(Math.random() * 50) + 1;

    // Проверяем результаты 
    if (userNumber === computerNumber) {
        userWins++;
        alert(`Вы легенда! Счет ${userNumber}:${computerNumber}.`);
    } else {
        computerWins++;
        alert(`Вы туту. Счет ${userNumber}:${computerNumber}.`);
    }
}

//2 задание добавить чтобы я вписывала в окно слово  (изменить)  и могла изменить максимальное число потом предлагалось изменит на число которое я выберу 

// добавить 10 жизней закоторые нужно угадать число



