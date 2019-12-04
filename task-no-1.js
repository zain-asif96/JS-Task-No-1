function randomNum(user) {
    var a = Math.round(Math.random() * 10);
    var user = prompt("Enter A Number");
    if (a == user) {
        console.log("Good Work");
    } else {
        console.log("Not matched");
    }
}

randomNum(3);