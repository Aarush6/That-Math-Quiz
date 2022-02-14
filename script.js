function login() {
    var name_1 = document.getElementById("Player1").value;
    localStorage.setItem("name_1", name_1);
    var name_2 = document.getElementById("Player2").value;
    localStorage.setItem("name_2", name_2);
    window.location = "game.html";
}
var player_1name = localStorage.getItem("name_1");
var player_2name = localStorage.getItem("name_2");

var score1 = 0;
var score2 = 0;

document.getElementById("names").innerHTML = player_1name + " : ";
document.getElementById("namess").innerHTML = player_2name + " : ";

document.getElementById("scores").innerHTML = score1;
document.getElementById("scoress").innerHTML = score2;

document.getElementById("question").innerHTML = "Question turn - " + player_1name;
document.getElementById("answer").innerHTML = "Answer turn - " + player_2name;

function send() {
    number1 = document.getElementById("number1").value;
    console.log(number1);
    number2 = document.getElementById("number2").value;
    console.log(number2);
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "*" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info'onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
answer_turn = "player1"
question_turn = "player2"

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            score1 = score1 + 1;
            document.getElementById("scores").innerHTML = score1;
        } else {
            score2 = score2 + 1;
            document.getElementById("scoress").innerHTML = score2;
        }

    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question").innerHTML = "Question turn - " + player_2name;
    } else {
        question_turn = "player1";
        document.getElementById("question").innerHTML = "Question turn - " + player_1name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("answer").innerHTML = "Answer turn - " + player_2name;
    } else {
        answer_turn = "player1";
        document.getElementById("answer").innerHTML = "Answer turn - " + player_1name;
    }
    document.getElementById("output").innerHTML = "";
}