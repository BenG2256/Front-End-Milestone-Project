let questionContainer = document.getElementById('question-container');
let questionText = document.getElementById('question');
let choicesList = document.getElementById('choices');
let scoreText = document.getElementById('score');
let nextButton = document.getElementById('next-button');
let endButton = document.getElementById('end-game')
let winSound = new Audio('winSound.mp3')
let loseSound = new Audio('loseSound.mp3')

function audioWarn() {
    alert("The following page will play a sound depending on the outcome of the game (win/lose). Caution is advised to those easily startled.");
}

audioWarn();

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
    {
        question: 'Who was the first woman to fly solo across the Atlantic Ocean?',
        choices: ['Dale Earnhardt', 'Cleopatra', 'Amelia Earhart', 'Queen Elizabeth'],
        correctAnswer: 'Amelia Earhart' 
    },
    {
        question: '"Let them eat Cake" is a famous quote tied to which historical figure?',
        choices: ['Napoleon', 'Marie Antoinette', 'Julius Ceasar', 'Lady Jane Grey'],
        correctAnswer: 'Marie Antoinette'
    },
    {
        question: 'Who painted the Mona Lisa?',
        choices: ['Michelangelo', 'Mozart', 'Leonardo DeCaprio', 'Leonardo da Vinci'],
        correctAnswer: 'Leonardo da Vinci'
    },
    {
        question: 'How many bones do sharks have?',
        choices: ['123', '0', '200', '34'],
        correctAnswer: '0' 
    },
    {
        question: 'Where is the Leaning Tower of Pisa located?',
        choices: ['France', 'Italy', 'Greece', 'Napal'],
        correctAnswer: 'Italy'
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
        console.log(score);
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
    let correctPercent = (score / questions.length) * 100;
    if (correctPercent >= 50) {
        winSound.play();
    } else {
        loseSound.play();
    }

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

displayQuestion();
