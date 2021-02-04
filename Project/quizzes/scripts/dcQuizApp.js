function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
    if (Question.answer[i] === Question.choice[i]) {
        // color the answers green
        Question.answer.style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else {
        // color the answers red
        Question.answer.style.color = 'red';
    }

}

function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerText = "Try Again";  
    btn.className =("endButton")
    btn.onclick=tryAgain
    var btnCancel = document.createElement("BUTTON");   // Create a <button> element
    btnCancel.innerText = "Cancel";  
    btnCancel.className =("endButton")
    btnCancel.onclick= GoToHomePage
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    element.appendChild(btn)
    element.appendChild(btnCancel)
};
function tryAgain(){
    window.location = 'file:///C:/Users/Alex/Desktop/Project/quizzes/dcQuiz.html';   
}

function GoToHomePage(){
    window.location = 'file:///C:/Users/Alex/Desktop/Project/index.html';   
}
// create questions here
var questions = [
    new Question("Who is Gotham’s Clown Prince of Crime?", ["Joker", "Harley Quinn", "Mad Hatter", "Crazy Quilt"], "Joker"),
    new Question("What is Superman’s weakness?", ["Speed Force", "Kryptonite", "Nth Metal", "Parallax"], "Kryptonite"),
    new Question("What is Batman’s secret identity?", ["Berry Allen", "Bruce Wayne", "Hal Jordan", "Victor Creed"], "Bruce Wayne"),
    new Question("What piece of jewelry does each Green Lantern wear?", ["Bracelet", "Crown", "Watch", "Ring"], "Ring"),
    new Question("Who is the Scarlet Speedster of Central City?", ["Flash", "Max Mercury", "Superman", "Red Tornado"], "Flash"),
    new Question("What is the main superhero team of the DC Universe?", ["Outsiders", "Justice League", "Guardians", "Teen Titans"], "Justice League"),
    new Question("Where does Wonder Woman come from?", ["Nanda Parbat", "Avalon", "Dino Island", "Themyscira"], "Themyscira"),
    new Question("Who is the half-human ruler of Atlantis?", ["Black Manta", "Mera", "Ocean Master", "Aquaman"], "Aquaman"),
    new Question("This member of the Justice League has cybernetic prostheses.", ["Green Lantern", "Cyborg", "Wonder Woman", "Batman"], "Cyborg"),
    new Question("Which city is protected by Batman?", ["Gotham", "Coast City", "Opal City", "Star City"], "Gotham")

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();