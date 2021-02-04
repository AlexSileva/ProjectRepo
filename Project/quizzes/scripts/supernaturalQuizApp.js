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
    window.location = 'file:///C:/Users/Alex/Desktop/Project/quizzes/supernaturalQuiz.html';   
}

function GoToHomePage(){
    window.location = 'file:///C:/Users/Alex/Desktop/Project/index.html';   
}
// create questions here
var questions = [
    new Question("What car does Dean drive?", ["Mustang", "Chevy Impala", "Shelby GT", "Firebird"], "Chevy Impala"),
    new Question("What is Dean and Sam's Mother's name?", ["Jody", "Erin", "Ruby", "Mary"], "Mary"),
    new Question("Who Created Supernatural?", ["Stan Lee", "Bobby Singer", "Chuck Lee", "Eric Kripke"], "Eric Kripke"),
    new Question("Werewolves!", ["Human livers", "Human Brains", "Human Hearts", "A human"], "Human Hearts"),
    new Question("Who controls the Hell Hounds?", ["Lucifer", "Crowley", "Dean", "Cain"], "Crowley"),
    new Question("How is Rowena related to Crowley?", ["Sister", "Mother", "Cousin", "Wife"], "Mother"),
    new Question("What is Dean's nickname for his car?", ["Cherry", "Baby", "Sweet Pea", "Black Beauty"], "Baby"),
    new Question("What is Gabriel also know as?", ["Dr Gabriel", "The Divine One", "The Trickster", "The Jester"], "The Trickster"),
    new Question("What makes Jack so unique?", ["Angel", "Demon", "Archangel", "Nephilim"], "Nephilim"),
    new Question("Who is Chuck?", ["The creator", "God", "Lucifer's vassel", "John resurreced"], "God")

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();