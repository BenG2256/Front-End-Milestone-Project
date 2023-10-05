const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question');
const choicesList = document.getElementById('choices');
const scoreText = document.getElementById('score');
const nextButton = document.getElementById('next-button');

const questions = [
    {
        question: 'What is the capital of France?',
        choices: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        choices: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'George Orwell'],
        correctAnswer: 'William Shakespeare'
    },
    {
        question: 'What is the Capital of North Carolina?',
        choices: ['Raleigh', 'Charlotte', 'Duke', 'Tallahassee'],
        correctAnswer: 'Raleigh'
    }, 
    {
        question: 'Who is the best game show host of all time?',
        choices: ['Alex Trebek', 'Donald Glover', 'Oprah', 'Ellen'],
        correctAnswer: 'Alex Trebek'
    },
];
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    
    choicesList.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = choice;
        listItem.addEventListener('click', () => checkAnswer(choice));
        choicesList.appendChild(listItem);
    });
}

function checkAnswer(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('score').innerHTML = 'Score:' + score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    questionContainer.style.display = 'none';
    nextButton.style.display = 'none';
    scoreText.textContent = `Final Score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
});

displayQuestion();
