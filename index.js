// УГАДАЙ ЧИСЛО
// Компьютер должен на каждый ход сгенерировать случайное число от 1 до 5
// Пользователь должен написать в prompt число которое пытается угадать
// На выходе мы должны пользователю показать результат выйграл он или нет
// Так же нужно вести учет побед компьютера и пользователя.

let userWins = 0;
let computerWins = 0;
let maxNumber = 50; // Выносим максимальное число в переменную

while (true) {
    const userInput = prompt(`Угадай число от 1 до ${maxNumber}. \nВведите "изменить", чтобы поменять диапазон`);

    if (userInput === null) break;
    
    if (userInput === "изменить") {
        let userChange = +prompt("Введите число до скольки загадывать:");
        while (isNaN(userChange) || userChange < 1) {
            userChange = +prompt("Введите корректное число (больше 0):");
        }
        maxNumber = userChange; // Обновляем максимальное число
        alert(`Диапазон изменен! Теперь играем от 1 до ${maxNumber}`);
        continue; // Пропускаем остальной код и начинаем цикл заново
    }
  
    const userNumber = parseInt(userInput, 10);

    // Проверяем на maxNumber, а не на 50
    if (isNaN(userNumber) || userNumber < 1 || userNumber > maxNumber) {
        alert(`Введите корректное число от 1 до ${maxNumber}`);
        continue; 
    }

    // Генерируем число
    const computerNumber = Math.floor(Math.random() * maxNumber) + 1;

    // Проверяем результаты 
    if (userNumber === computerNumber) {
        userWins++;
        alert(`Вы легенда! Счет ${userWins}:${computerWins}.`);
    } else {
        computerWins++;
        alert(`Вы туту! Счет ${userWins}:${computerWins}.`);
    }
}

//2 задание добавить чтобы я вписывала в окно слово  (изменить)  и могла изменить максимальное число потом предлагалось изменит на число которое я выберу 

// 3 добавить 10 жизней закоторые нужно угадать число



