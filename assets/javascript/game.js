$(document).ready(function(){
    
    $("#playBtnDiv").html(contentHtml);

    $("#play").on("click", run);

    
});

var contentHtml = "<button id='play'>Play!</button>";
var timeRem = 31;
var quizzStr;
var que1 = 'Who is the director of Pulp Fiction?';
var questions = [que1];
var ans1 = 'Quentin Tarantino';
var answers = [ans1];

function run(){
    //$("#playBtnDiv").hide();
    quizzTimer = setInterval(decrement,1000);
    $("#quizz").html(quizzStr);
}

function decrement(){
    timeRem--;
    $("#timer").html(`<h1>${timeRem}</h1>`);
    if(timeRem === 0){
        stop();
    }
}

function stop(){
    clearInterval(quizzTimer);
    $("#timer").html("<h1>Time's up!</h1>");
}

function generateQuestions(){
    for(var i = 0; i < questions.length ;i++){
        var que = document.createElement("h1");
        que.append(questions[i]);
        var ans = document.createElement("INPUT");
        ans.setAttribute("type", "radio");
        ans.append(answers[i]);
        document.body.appendChild(que);
        document.body.appendChild(ans);
    }
}

quizzStr = generateQuestions();