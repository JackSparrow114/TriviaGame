$(document).ready(function(){
    
    $("#playBtnDiv").html(contentHtml);

    $("#play").on("click", run);

});

var contentHtml = "<button id='play'>Play!</button>";
var timeRem = 31;
var quizzStr;
var que1 = 'Who is the director of Pulp Fiction?';
var que2 = 'In which year titanic got released?';
var que3 = 'How many Oscars did Forrest Gump won?';
var questions = [que1,que2,que3];
var ans1 = ['Quentin Tarantino','Martin Scorsese','Steve Spielberg','James Cameroon'];
var ans2 = ['1996','1997','1998','1999'];
var ans3 = [3,4,5,6];
var answers = [ans1,ans2,ans3];
var quizzTimer;
var correctAns = 0, incorrectAns = 0, unanswered = 0;
var quizzStr1 = `<h1>${que1}</h1>` + 
    `<input type="radio" name="que1" value=${ans1[0]}>${ans1[0]}` +
    `<input type="radio" name="que1" value=${ans1[1]}>${ans1[1]}` +
    `<input type="radio" name="que1" value=${ans1[2]}>${ans1[2]}` +
    `<input type="radio" name="que1" value=${ans1[3]}>${ans1[3]}<br>`;

var quizzStr2 = `<h1>${que2}</h1>` + 
    `<input type="radio" name="que2" value=${ans2[0]}>${ans2[0]}` +
    `<input type="radio" name="que2" value=${ans2[1]}>${ans2[1]}` +
    `<input type="radio" name="que2" value=${ans2[2]}>${ans2[2]}` +
    `<input type="radio" name="que2" value=${ans2[3]}>${ans2[3]}<br>`;

var quizzStr3 = `<h1>${que3}</h1>` + 
    `<input type="radio" name="que3" value=${ans3[0]}>${ans3[0]}` +
    `<input type="radio" name="que3" value=${ans3[1]}>${ans3[1]}` +
    `<input type="radio" name="que3" value=${ans3[2]}>${ans3[2]}` +
    `<input type="radio" name="que3" value=${ans3[3]}>${ans3[3]}<br>`;

var doneBtn = '<button id="done">Done!</button>';

quizzStr = quizzStr1 + quizzStr2 + quizzStr3 + doneBtn;


function run(){
    $("#playBtnDiv").hide();
    quizzTimer = setInterval(decrement,1000);
    $("#quizz").html(quizzStr);

    $("#done").on("click", function(event){
        doneQuizz();
    });
}

function decrement(){
    timeRem--;
    $("#timer").html(`<h1> Time Remaining  :  ${timeRem}</h1>`);
    if(timeRem === 0){
        stop("Time's Up!!");
    }
}

function stop(message){
    clearInterval(quizzTimer);
    $("#timer").html(`<h1>${message}</h1>`);
}

function doneQuizz(){
    stop(`You finished the quizz pretty quick!!!`);
    
    for(var i=0;i<questions.length;i++){
        var sel = $(`input[name=que${i+1}]:checked`).val();
        if(sel === "Quentin" || sel === "1997" || sel === "6"){
            correctAns++;
        } else if(sel === undefined){
            unanswered++;
        } else {
            incorrectAns++;
        }
    }
    $("#quizz").html(`quizz finished!!<br>Correct Answers : ${correctAns}<br>Unanswered : ${unanswered}<br>Incorrect Answers : ${incorrectAns}`);
}