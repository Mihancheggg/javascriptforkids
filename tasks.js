// p. 47

function go(age, acc){
    if (age>=11 || acc == true)
        console.log("Go");
    else console.log("Stop");
    };

// p. 82
// Нужно выдернуть 123
var myCrazyObject = {
    "name": "Нелепый объект",
    "Some array": [7, 9, {
        purpose: "Путаница",
        number: 123
    },
    3,3],
    "random animal": "Банановая акула"
};

alert(myCrazyObject["Some array"][2].number);