let questionContainer = document.getElementById('question-container');
let questionText = document.getElementById('question');
let choicesList = document.getElementById('choices');
let scoreText = document.getElementById('score');
let nextButton = document.getElementById('next-button');
let endButton = document.getElementById('end-game')
let winSound = new Audio('winSound.mp3')
let loseSound = new Audio('loseSound.mp3')

let questions = [
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
let index = 0;
let score = 0;
let questionTally = 0;

function displayQuestion() {
    const currentQuestion = questions[index];
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
    const currentQuestion = questions[index];
    if (selectedChoice === currentQuestion.correctAnswer) {
        score++;
        questionTally++;
        document.getElementById('score').innerHTML = 'Score:' + score;
    }
    index++;
    if (index < questions.length) {
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
    if (index < questions.length) {
        index++;
        displayQuestion();
    } else {
        endGame();
    }
});

endButton.addEventListener('click', () => {
    if (index === questions.length) {
        index = 0;
        score = 0;
        displayQuestion();
        questionContainer.style.display = 'block';
        nextButton.style.display = 'block';
        scoreText.textContent = '';
    } else {
        endGame();
    }
});

endButton.addEventListener('click', () => {
    if (score >= 3) {
        winSound.play();
    } else {
        loseSound.play();
    }
})

console.log(score);
displayQuestion();
