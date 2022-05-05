//Создаем массив со словами
var words = ["компьютер", "монитор", "клавиатура", "мышь", "колонки", "процессор", "программа", "видеокарта", "микрофон", "браузер", "стол"];

//Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];

//Создаем итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_"
}
var remainingLetters = word.length;
var tries = 6;
var target = false;

//Игровой цикл
while(remainingLetters > 0 && tries > 0){

    //Показываем состояние игры
    alert(answerArray.join(" "));


    //Запрашиваем вариант ответа
    var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры").toLowerCase();
    if (guess === null){

        //Выходим из игрового цикла
        //break;
    } else if (guess.length !== 1){
        alert("Пожалуйста, введите одиночную букву");
    } else {

        //Обновляем состояние игры
        for(var j = 0; j < word.length; j++){
            if(word[j] === guess && answerArray[j] === "_"){
                answerArray[j] = guess;
                remainingLetters--;
                target = true;
            } else if (word[j] === guess && answerArray[j] === guess){
                alert("Вы уже угадали эту букву");
            }
        }
    }
    console.log(tries);
    console.log(remainingLetters);
    //Конец игрового цикла
};

//Отображаем ответ
alert(answerArray.join(""));
alert("Отлично! Было загадано слово: " + word);