var timerElement = document.querySelector(".timer-count");
var testQuestions = document.querySelector(".questions");
var multipleChoice = document.querySelector(".answer-choices");
var startButton = document.querySelector(".start-button");

var chosenAnswer = "";
var score = 0;
var initials = textbox;
var isDone = false;
var timer;
var timerCount;

var textbox = document.createElement("INPUT");
textbox.setAttribute("type", "text");

var questions = ["Inside which HTML element do we put the JavaScript?", "What is the correct JavaScript syntax to change the content of the HTML element below? \n <p id=\"demo\">May the code be with you.</p>", "Where is the correct place to insert a JavaScript?", "What is the correct syntax for referring to an external script called “geek.js”?", "The external JavaScript file must contain the <script> tag.", "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?", "Predict the output of the following JavaScript code. \n a = 8 + \"8\"; \n document.write(a);", "Predict the output of the following JavaScript code. \n var a=\"GeeksforGeeks\"; var x=a.lastIndexOf(\"G\"); \n document.write(x);", "Which of the following is not a reserved word in JavaScript?", "Predict the output of the following JavaScript code. \n var a = \"GeeksforGeeks\"; \n var result = a.substring(4, 5) \n document.write(result);", "What does CSS stand for?", "Which of the following is the correct syntax for referring the external style sheet?", "The property in CSS used to change the background color of an element is?", "The property in CSS used to change the text color of an element is?", "The CSS property used to control the element's font-size is?", "The HTML attribute used to define the inline styles is?", "The HTML attribute used to define the internal stylesheet is?", "Which of the following CSS property is used to set the background image of an element?", "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?", "Which of the following is the correct syntax to display the hyperlinks without any underline?", "What does HTML stand for?", "Who is making the Web standards?", "Choose the correct HTML element for the largest heading:", "What is the correct HTML element for inserting a line break?", "What is the correct HTML for adding a background color?", "Choose the correct HTML element to define important text:", "Choose the correct HTML element to define emphasized text:", "Which character is used to indicate an end tag?", "Which of these elements are all <table> elements?", "Inline elements are normally displayed without starting a new line."];
var choices = ["<script> \n <scripting> \n <js> \n <javascript>", "document.getElementById(“demo”).innerHTML = “Hola!”; \n document.getElement(“p”).innerHTML = “Hola!”; \n #demo.innerHTML = “Hola!”; \n document.getElementByName(“p”).innerHTML = “Hola!”;", "The <body> section \n The <head> section \n The <footer> section \n Both the <head> and the <body> section are correct", "<script src=”geek.js”> \n <script href=”geek.js”> \n <script ref=”geek.js”> \n <script name=”geek.js”>", "True \n False", "alertbox(“GeeksforGeeks”); \n msg(“GeeksforGeeks”); \n msgbox(“GeeksforGeeks”); \n alert(“GeeksforGeeks”);", "16 \n Compilation Error \n 88 \n Run Time Error", "8 \n 0 \n 9 \n Error", "interface \n throws \n program \n short", "sf \n ks \n s \n k", "Cascade Style Sheets \n Color and Style Sheets \n Cascading Style Sheets \n None of the above", "<style src = example.css> \n <style src = \"example.css\"> \n <stylesheet> example.css </stylesheet> \n <link rel=\"stylesheet\" type=\"text/css\" href=\"example.css\">", "bgcolor \n color \n background-color \n all of the above", "bgcolor \n color \n background-color \n all of the above", "text-style \n text-size \n font-size \n none of the above", "style \n styles \n class \n none of the above", "<style> \n style \n <link> \n <script>", "background-attachment \n background-image \n background-color \n none of the above", "p {background-color : yellow;} \n p {background-color : #yellow;} \n all {background-color : yellow;} \n all p {background-color : #yellow;}", "a {text-decoration : underline;} \n a {decoration : no-underline; \n a {text-decoration : none;} \n none of the above", "Hyperlinks and Text Markup Language \n Home Tool Markup Language \n Hyper Text Markup Language \n Home Text Markup Language", "Google \n Microsoft \n Mozilla \n The World Wide Web Consortium", "<head> \n <h6> \n <h1> \n <heading>", "<br> \n <break> \n <lb> \n <line>", "<body style = “background-color : yellow”> \n <body background= “yellow”> \n <background >yellow< /background> \n none of the above", "<b> \n <important> \n <i> \n <strong>", "<italic> \n <em> \n <i> \n none of the above", "/ \n * \n < \n ^", "<table><head><tfoot> \n <table><tr><td> \n <thead><body><tr> \n <table><tr><td>", "True \n False"]
var correctAnswers = ["<script>", "document.getElementById(\"demo\").innerHTML = \"Hola!\";", "Both the <head> and the <body> section are correct", "<script src=\"geek.js\">", "False", "alert(“GeeksforGeeks”);", "88", "8", "program", "s", "Cascading Style Sheets", "<link rel=\"stylesheet\" type=\"text/css\" href=\"example.css\">", "background-color", "font-size", "style", "<style>", "background-image", "p {background-color : yellow;}", "a {text-decoration : none;}", "Hyper Text Markup Language", "The World Wide Web Consortium", "<h1>", "<br>", "<body style = “background-color : yellow”>", "<strong>", "<em>", "/", "<table><tr><td>", "True"];

function init() {
  getCorrectAnswers();  
  getWrongAnswers();
}

function startQuiz() {
  isDone = false;
  timerCount = 10;
  startButton.disabled = true;
  startTimer()
  renderQuestions()
  renderChoices()
}

function finishQuiz() {
  testQuestions.textContent = "All done!";
  multipleChoice.textContent = ('Your final score is ' + score + '.' + 'Enter initials: ' + initials);
  startButton.disabled = false;
  setScore()
}

function timerFinished() {
  testQuestions.textContent = "You ran out of time!";
  multipleChoice.textContent = ('Your final score is ' + score + '.' + 'Enter initials: ' + initials);
  startButton.disabled = false;
  setScore()
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if(isDone && timerCount > 0) {
        clearInterval(timer);
        finishQuiz();
      }
    }
 
    if (timerCount === 0) {
      clearInterval(timer);
      timerFinished();
    }
  }, 1000);
}

function renderQuestions() {
for (var i = 0; i < questions; i++) {
  questions.push();
} 

testQuestions.textContent = questions.join()
}

function renderChoices() {
  for (var i =  0; i < choices; i++) {
    choices.push()
  }

  multipleChoice.textContent = choices.join()
}

function setScore() {
  localStorage.setItem("correctAnswerCount", score);
}

function getCorrectAnswers() {
  var storedCorrectAnswers = localStorage.getItem("correctAnswerCount");

  if (storedCorrectAnswers === null) {
    score = 0;
  } else {
    score = storedCorrectAnswers;
  }
  window.textContent = score;
}

function getWrongAnswers() {
  var storedWrongAnswers = localStorage.getItem("wrongAnswerCount");
}

function checkAnswer() {
  if (chosenAnswer === correctAnswers.join("")) {
    isDone = true;
  }
}

document.addEventListener("click", function(event) {
  if (timerCount === 0) {
    return;
  }
});

startButton.addEventListener("click", startQuiz);

init();

setScore();
