// elements
const frontPage = document.querySelector("#front");
const choicesEl = document.querySelector("#choices");
const buttonEl = document.querySelector("#btn");
const scoresEl = document.querySelector("#scores");
const timerEl = document.querySelector("#timer");
const challengeEl = document.querySelector("#challenge");
const questionEl = document.querySelector("#question");
const checkEl = document.querySelector("#check");
const resultsEl = document.querySelector("#results");
const userInitEl = document.querySelector("#userInitial");
const submitBtnEl = document.querySelector("#submitBtn");

const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");

// set of questions
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
        question: "Arrays in JavaScript can be used to store ________.",
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

    question.innerHTML = "<h2>" + quiz.question + "</h2>";
    question.className = "question";
    a.innerHTML = quiz.a;
    b.innerHTML = quiz.b;
    c.innerHTML = quiz.c;
    d.innerHTML = quiz.d;

}
// when the user click on the options
optionEl.forEach(optionButton => {
    optionButton.addEventListener("click",function(){
        let userAnswer = optionButton.textContent
            checkAnswer(userAnswer);
    });
});

// when the start quiz was clicked
buttonEl.addEventListener("click", function() {
    frontPage.style.display = "none";
    showQuestions();
    challengeEl.style.display = "block";
    choicesEl.removeAttribute("class");
    time();
});

var timerCount = 75;
var countdown;
function time() {
    timer.innerHTML = "Time: <span>" + timerCount + "</span> s"

    var countdown = setInterval(function(){
        timerCount--;
        timer.innerHTML = "Time: <span>" + timerCount + "</span> s"

        if(timerCount === 0 || firstQ === lastQ){
            clearInterval(countdown);
        }
    }, 1000);
}

// function to display if the answer is correct
function correctAnswer() {
    choicesEl.className="addedStyle";
    checkEl.className="comment";
    checkEl.innerHTML = "<div>" + 'Correct!' + "</div>";
    console.log("correct");

    setTimeout(function(){
        clearCheck();
    }, 2000);
}

// function to display if the answer is wrong
function wrongAnswer() {
    timerCount -= 10;
    choicesEl.className="addedStyle";
    checkEl.className="comment";
    checkEl.innerHTML = "<div>" + 'Wrong!' + "</div>";

    setTimeout(function(){
        clearCheck();
    }, 2000);
}

// clear the check after the answer check was displayed
function clearCheck(){
    choicesEl.classList.remove("addedStyle");
    checkEl.classList.remove("comment");
    checkEl.innerHTML = "<div>" + '' + "</div>";
}

// function to check the answer
function checkAnswer(ans){
    console.log(ans);
    if (firstQ === lastQ){
        gameOver();
    }
    if (quizQuestions[firstQ].ans === ans){
        score++;
        firstQ++;
        correctAnswer();
        showQuestions();
    } else {
        wrongAnswer();
        firstQ++;
        showQuestions();
    }

    // count = 0;
    // if (firstQ < lastQ) {
    //     firstQ++;
    //     showQuestions();
    // } else {
    //     clearInterval(time);
    //     showScore();
    // }
}

function gameOver() {
    challengeEl.style.display = "none";
    resultsEl.style.display="block";

    submitBtnEl.addEventListener("click", function(event){
        event.preventDefault;
        // Gets input value
        userInput = userInitEl.value;
        console.log(userInput);
        // Saves data to storage
        localStorage.setItem("userInput", 
        // converts array to string
        JSON.stringify(userInput));
    });


    // checkEl.className="comment";
    // const para = document.createElement("p");
    // para.textContent = "Your final score is";
    // questionEl.appendChild(para);
}

// scores
function showScore(){
    scoresEl.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePercentage = Math.round(100 * score/quizQuestions.length);
    
    console.log(score);
    console.log(scorePercentage);

    scoresEl.innerHTML += "<p>"+ scorePercentage + "%" + "</p>";
}
