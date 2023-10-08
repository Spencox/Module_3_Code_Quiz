// DOM selector variables
const starButtonEl = document.getElementById('start');
const nextButtonEl = document.getElementById('next')
const startPageEl = document.getElementById('start-screen');
const questionPageEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answersChoicesEl = document.getElementById('answer-choices');

// general variables
let randomQuestions; 
let questionIndex;

// functions
function startQuiz() {
    
    startPageEl.classList.add('not-visible');
    starButtonEl.classList.add('not-visible');
    questionPageEl.classList.remove('not-visible');
    nextButtonEl.classList.remove('not-visible');
    randomQuestions = questions.sort(() => Math.random() -0.5 ); // investigate changing random method
    questionIndex = 0;
    setNextQuestion();
}

function viewQuestion(question) {
    questionEl.innerText = question.question;
    
}

// Event listener for clicking start button
starButtonEl.addEventListener('click', startQuiz);

function setNextQuestion(){
    viewQuestion(randomQuestions[questionIndex]);
}

function selectAnswer() {

}

const questions = [
    {
        question: "What does 'HTML' stand for?",
        answers: [
            { answer: 'Hyper Text Markup Language', correct: true },
            { answer: 'Hyperlink and Text Markup Language', correct: false },
            { answer: 'Highly Typed Markup Language', correct: false },
            { answer: 'Home Tool Markup Language', correct: false },
        ],
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { answer: 'var', correct: true },
            { answer: 'let', correct: false },
            { answer: 'const', correct: false },
            { answer: 'variable', correct: false },
        ],
    },
    {
        question: "What is the result of '5 + '5' in JavaScript?",
        answers: [
            { answer: '10', correct: false },
            { answer: '55', correct: true },
            { answer: '5 + 5', correct: false },
            { answer: 'Error', correct: false },
        ],
    },
    {
        question: "Which function is used to print something to the console in JavaScript?",
        answers: [
            { answer: 'print()', correct: false },
            { answer: 'log()', correct: false },
            { answer: 'console.log()', correct: true },
            { answer: 'display()', correct: false },
        ],
    },
    {
        question: "What is the value of 'null' in JavaScript?",
        answers: [
            { answer: '0', correct: false },
            { answer: 'undefined', correct: false },
            { answer: 'false', correct: false },
            { answer: 'null', correct: true },
        ],
    },
    {
        question: "What does 'NaN' stand for in JavaScript?",
        answers: [
            { answer: 'Not a Number', correct: true },
            { answer: 'No Available Number', correct: false },
            { answer: 'Notation of Number', correct: false },
            { answer: 'No Action Needed', correct: false },
        ],
    },
    {
        question: "Which loop is used for iterating over the properties of an object?",
        answers: [
            { answer: 'for loop', correct: false },
            { answer: 'while loop', correct: false },
            { answer: 'for...in loop', correct: true },
            { answer: 'do...while loop', correct: false },
        ],
    },
    {
        question: "What is the result of '3 === '3' in JavaScript?",
        answers: [
            { answer: 'true', correct: false },
            { answer: 'false', correct: true },
            { answer: 'undefined', correct: false },
            { answer: 'null', correct: false },
        ],
    },
    {
        question: "Which operator is used to combine two or more strings in JavaScript?",
        answers: [
            { answer: '+', correct: true },
            { answer: '-', correct: false },
            { answer: '*', correct: false },
            { answer: '/', correct: false },
        ],
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        answers: [
            { answer: '// This is a comment', correct: true },
            { answer: '<!-- This is a comment -->', correct: false },
            { answer: '/* This is a comment */', correct: false },
            { answer: '# This is a comment', correct: false },
        ],
    },
];
