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
    window.location = 'file:///C:/Users/Alex/Desktop/Project/quizzes/friendsQuiz.html';   
}

function GoToHomePage(){
    window.location = 'file:///C:/Users/Alex/Desktop/Project/index.html';   
}
// create questions here
var questions = [
    new Question("Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?", ["France", "Italy", "Greece", "England"], "Italy"),
    new Question("Rachel was popular in high school. Her prom date Chip ditched her for which girl at school?", ["Sally Roberts", "Amy Welsh", "Valerie Thompson", "Monica"], "Amy Welsh"),
    new Question("Janice gets married twice. What’s was her first husband’s name?", ["Gary Litman", "Chandler", "Sid Goralnik", "Rob Bailystock"], "Gary Litman"),
    new Question("Ursula was always mean! Which cartoon character was on Phoebe’s thermos that Ursula threw under a bus?", ["Pebbles Flintstone", "Yogi Bear", "Judy Jetson", "Bullwinkle"], "Judy Jetson"),
    new Question("What’s Joey’s penguin’s name?", ["Snowflake", "Waddle", "Huggsy", "Fluffy"], "Huggsy"),
    new Question("Ross slept with Chloe. Where does she work?", ["Xerox", "Microsoft", "Domino’s", "Central Perk"], "Xerox"),
    new Question("Chandler’s mom had an interesting career and even more interesting love life. What’s her name?", ["Priscilla Mae Galway", "Nora Tyler Bing", "Mary Jane Bing", "Mary Bing"], "Nora Tyler Bing"),
    new Question("What fake name does Phoebe use when she wants to remain anonymous?", ["Regina Phalange", "Bonnie Riddle", "Phyllis Halpert", "Phalange Bonnie"], "Regina Phalange"),
    new Question("Before being called Friends,the show was actually named this:", ["Insomnia Cafe", "Sleepless Cafe", "Amigo’s Cafe", "Cafeteria"], "Insomnia Cafe"),
    new Question("Here's a tough one, what was Monica's apartment number?", ["18", "20", "5", "3"], "20")

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();