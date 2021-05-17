

const buttonEl = document.querySelector(".button");
const timer = document.querySelector(".timer");
const frontPage = document.querySelector(".front");
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
});


// function startQuiz () 



// quiz questions
// quiz
// results
// total

// function startQuiz(question, quiz, results, total) {

    // function startQuestions(question, quiz, results, total)
        // var javascriptQuestions = [
            // {
    //          question: "Commonly used data types DO Not Include:",
    //          answers: {
    //              a: '1. strings',
    //              b: '2. booleans',
    //              c: '3. alerts',
    //              d: '4. numbers'
    //          },
    //          correct: 'c'
    //         },
    //         {
    //          question: "The condition in an if/else statement is enclosed with ________.",
    //          answers: {
    //              a: '1. quotes',
    //              b: '2. curly brackets',
    //              c: '3. parenthesis',
    //              d: '4. square brackets'
    //          },
    //          correct: 'c'
    //         },
    //         {
    //          question: "Arrays in JavaScript can be used to store ________:",
    //          answers: {
    //              a: '1. numbers and strings',
    //              b: '2. other arrays',
    //              c: '3. booleans',
    //              d: '4. all of the above'
    //          },
    //          correct: 'd'
    //         },
    //         {
    //          question: "String values must be enclosed within ________ when being assigned to variables.",
    //          answers: {
    //              a: '1. commas',
    //              b: '2. curly brackets',
    //              c: '3. quotes',
    //              d: '4. parenthesis'
    //          },
    //          correct: 'c'
    //         },
    //         {
    //          question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    //          answers: {
    //              a: '1. JavaScript',
    //              b: '2. terminal/bash',
    //              c: '3. for loops',
    //              d: '4. console.log'
    //             },
    //          correct: 'd'
    //         },
    //     // ];
    // // function endResults(question, quiz, results, total)

    // // show the questions
    // // startQuestions(question, quiz);

    // // btn.onclick function() {
    // //     endResults(question, quiz, results, total);
    // // }
    // }
    // buttonEl.addEventListener("click", function() {
    //     alert("button clicked");
    //   });
