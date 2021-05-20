// elements
const frontPage = document.querySelector("#front");
const choicesEl = document.querySelector("#choices");
const buttonEl = document.querySelector("#btn");
const scoresEl = document.querySelector("#scores");
const timerEl = document.querySelector("#timer");
const challengeEl = document.querySelector("#challenge");
const questionEl = document.querySelector("#question");

const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");

// questions
let quizQuestions = [
    {
        question: "Commonly used data types DO Not Include:",
        a: "1. strings",
        b: "2. booleans",
        c: "3. alerts",
        d: "4. numbers",
        ans: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        a: "1. quotes",
        b: "2. curly brackets",
        c: "3. parenthesis",
        d: "4. square brackets",
        ans: "3. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ________:",
        a: "1. numbers and strings",
        b: "2. other arrays",
        c: "3. booleans",
        d: "4. all of the above",
        ans: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        a: "1. commas",
        b: "2. curly brackets",
        c: "3. quotes",
        d: "4. parenthesis",
        ans: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "1. JavaScript",
        b: "2. terminal/bash",
        c: "3. for loops",
        d: "4. console.log",
        ans: "4. console.log"
    },
];

// variables
const lastQ = quizQuestions.length - 1;
let firstQ = 0;
let score = 0;

let optionEl = document.querySelectorAll(".option");

function showQuestions() {
    let quiz = quizQuestions[firstQ];

    question.innerHTML = "<p>" + quiz.question + "</p>";
    a.innerHTML = quiz.a;
    b.innerHTML = quiz.b;
    c.innerHTML = quiz.c;
    d.innerHTML = quiz.d;

}

optionEl.forEach(optionButton => {
    optionButton.addEventListener("click",function(){
        let userAnswer = optionButton.textContent
            checkAnswer(userAnswer);
    });
});


var timerCount = 75;

function time() {

    timer.innerHTML = "Time: <span>" + timerCount + "</span> s"

    var countdown = setInterval(function(){
        timerCount--;
        timer.innerHTML = "Time: <span>" + timerCount + "</span> s"

        if(timerCount === 0){
            clearInterval(countdown);
        }
    }, 1000);
}

buttonEl.addEventListener("click", startQuiz());

function startQuiz(){
    buttonEl.style.display = "none";
    frontPage.style.display = "none";
    showQuestions();
    challengeEl.style.display = "block";
    choicesEl.removeAttribute("class");
    time();
};

// function showProgress() {
//     for (var quizInd = 0; quizInd <= lastQ; quizInd++){
//         progress.innerHTML += "<div class='prog' id="+ quizInd + "></div>";
//     }
// }

function checkAnswer(ans){
    console.log(firstQ);
    if (quizQuestions[firstQ].ans === ans){
        scores++;
        correctAnswer();
    } else {
        wrongAnswer();
    }

    count = 0;
    if (firstQ < lastQ) {
        firstQ++;
        showQuestions();
    } else {
        clearInterval(countdown);
        showScore();
    }
}


function correctAnswer() {``
    // correct.innerHTML = "<div class='right'" + 'Correct!' + "></div>";
    console.log("correct");
}

function wrongAnswer() {
    checkAnswer.innerHTML = "<div class='wrong'" + 'Wrong!' + "></div>";
}


// scores
function showScore(){
    scoresEl.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePercentage = Math.round(100 * score/quizQuestions.length);
   
    scoresEl.innerHTML += "<p>"+ scorePercentage +"%</p>";
}

// var choice1 = document.createElement("p");
//       choice1.textContent = myItem.a;
//       question.appendChild(choice1);

//     var question = document.querySelector(".question");
//     var myArray = [{   q: "Commonly used data types DO Not Include:",s

//     for (var myItem of myArray) {

//       var myNewP = document.createElement("h2");
//       myNewP.textContent = myItem.q;
//       question.appendChild(myNewP);

//       var choice1 = document.createElement("p");
//       choice1.textContent = myItem.a;
//       question.appendChild(choice1);

//       var choice2 = document.createElement("p");
//       choice2.textContent = myItem.b;
//       question.appendChild(choice2);

//       var choice3 = document.createElement("p");
//       choice3.textContent = myItem.c;
//       question.appendChild(choice3);



//       var choice4 = document.createElement("p");
//       choice4.textContent = myItem.d;
//       question.appendChild(choice4);
    
//       function checkAnswer() {
//         if (cc){
//             var correctAnswer = document.createElement("div")
//             correctAnswer.textContent = "Correct!";
//         } else {
//             var wrongAnswer = document.createElement("div")
//             wrongAnswer.textContent = "Wrong!";
//         }
//       }
//     console.log(checkAnswer);
//     }
// });