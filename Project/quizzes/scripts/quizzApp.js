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
    window.location = 'file:///C:/Users/Alex/Desktop/Project/quizzes/quiz.html';   
}

function GoToHomePage(){
    window.location = 'file:///C:/Users/Alex/Desktop/Project/index.html';   
}
// create questions here
var questions = [
    new Question("Which film started off the Marvel Cinematic Universe?", ["Spider-Man", "The Incredible Hulk", "Avengers Assemble", "Iron Man"], "Iron Man"),
    new Question("How many actors have played the role of Peter Parker/Spider-Man?", ["3", "4", "5", "2"], "3"),
    new Question("What is Black Panther's real name?", ["Okoye", "T`chaka", "T`chala", "M`baku"], "T`chala"),
    new Question("Who played Bruce Banner in The Incredible Hulk?", ["Lou Ferrigno", "Hulk Hogan", "Mark Ruffalo", "Edward Norton"], "Edward Norton"),
    new Question("Who directed the Avengers films?", ["Tyka Whitit", "Jon Watts", "The Russo Brothers", "Stanley Kubrick"], "The Russo Brothers"),
    new Question("What type of radiation caused Bruce Banner to become the Hulk?", ["Beta Rays", "Alpha Rays", "Gamma Rays", "Micro Rays"], "Gamma Rays"),
    new Question("What is Deadpool's real name?", ["Wade Wilson", "Piort Rasputin", "Sam Wilson", "James Barnes"], "Wade Wilson"),
    new Question("What is the name of Thor's hammer?", ["Stormbraker", "John", "Lightning", "Mjolnir"], "Mjolnir"),
    new Question("What is Cap's shield made out of?", ["Titanium", "Vibranium", "Iron", "Adamantium"], "Vibranium"),
    new Question("What is Loki the god of?", ["Insects", "The Sea", "Mischief", "Thunder"], "Mischief")

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();