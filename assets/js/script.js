

const buttonEl = document.querySelector(".button");
const timer = document.querySelector(".timer");
const frontPage = document.querySelector(".front");
const questions = document.querySelector(".questions");


var quizQuestions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: {
            a: '1. strings',
            b: '2. booleans',
            c: '3. alerts',
            d: '4. numbers'
        },
        correct: 'c'
    },
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        answers: {
            a: '1. quotes',
            b: '2. curly brackets',
            c: '3. parenthesis',
            d: '4. square brackets'
        },
        correct: 'c'
    },
    {
        question: "Arrays in JavaScript can be used to store ________:",
        answers: {
            a: '1. numbers and strings',
            b: '2. other arrays',
            c: '3. booleans',
            d: '4. all of the above'
        },
        correct: 'd'
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: {
            a: '1. commas',
            b: '2. curly brackets',
            c: '3. quotes',
            d: '4. parenthesis'
        },
        correct: 'c'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: '1. JavaScript',
            b: '2. terminal/bash',
            c: '3. for loops',
            d: '4. console.log'
        },
        correct: 'd'
    },
];







var timerCount = 75;

buttonEl.addEventListener("click", function(){
    buttonEl.style.display = "none";
    frontPage.style.display = "none";

    timer.innerHTML = "Time: <span>" + timerCount + "</span> s"

    var countdown = setInterval(function(count){
        timerCount--;
        timer.innerHTML = "Time: <span>" + timerCount + "</span> s"

        if(timerCount <= 0){
            clearInterval(countdown);
        }
    }, 1000);

    var question = document.querySelector(".question");
    var myArray = [{   q: "Commonly used data types DO Not Include:",
    a:'1. strings',  b: '2. booleans', c: '3. alerts',  d: '4. numbers'
    }];
    for (var myItem of myArray) {

      var myNewP = document.createElement("h2");
      myNewP.textContent = myItem.q;
      question.appendChild(myNewP);

      var choice1 = document.createElement("p");
      choice1.textContent = myItem.a;
      question.appendChild(choice1);

      var choice2 = document.createElement("p");
      choice2.textContent = myItem.b;
      question.appendChild(choice2);

      var choice3 = document.createElement("p");
      choice3.textContent = myItem.c;
      question.appendChild(choice3);
      
      var choice4 = document.createElement("p");
      choice4.textContent = myItem.d;
      question.appendChild(choice4);

    // document.querySelector("p").style.border = "1px solid #330066";
    // document.querySelector("p").style.backgroundColor = "#330066";
    }
});
