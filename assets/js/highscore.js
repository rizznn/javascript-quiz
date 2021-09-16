var btnEl = document.querySelector("#clearHighScores");
var highScoreElement = document.querySelector("#highScoresList");
var savedScores = JSON.parse(localStorage.getItem("highScores")) || [];

savedScores = savedScores.sort((a,b) => {
    return b.score-a.score;
});

savedScores.forEach((person) => {
    var name = person.name;
    var score = person.score;
    console.log(name, score);

    var person = document.createElement("li");
    person.textContent = name + "-" + score;
    highScoreElement.appendChild(person);
});

btnEl.addEventListener("click", function(){
    localStorage.clear();
    highScoreElement.innerHTML='';
})
