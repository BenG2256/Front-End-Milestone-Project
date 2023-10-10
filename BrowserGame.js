// setting variables for HTML elements
let questionContainer = document.getElementById("question-container");
let questionText = document.getElementById("question");
let choicesList = document.getElementById("choices");
let scoreText = document.getElementById("score");
let nextButton = document.getElementById("next-button");
let endButton = document.getElementById("end-game");
//Audio elements for win / lose scenario
let winSound = new Audio("winSound.mp3");
let loseSound = new Audio("loseSound.mp3");

// function audioWarn, displays a pop-up letting the user know a sound will play
function audioWarn() {
  alert(
    "The following page will play a sound depending on the outcome of the game (win/lose). Caution is advised to those easily startled."
  );
}

// audioWarn function call
audioWarn();

// questions array, holds all triva questions, choices, hints, and correct answers
let questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris", "Madrid"],
    hint: ["Commonly noted as the 'City of Love'"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    hint: ["This is the 4th planet from the sun"],
    correctAnswer: "Mars",
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    choices: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "George Orwell",
    ],
    hint: ["This writer also wrote, Hamlet"],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the Capital of North Carolina?",
    choices: ["Raleigh", "Charlotte", "Duke", "Tallahassee"],
    hint: ["This city is home to Shaw Univeristy"],
    correctAnswer: "Raleigh",
  },
  {
    question: "Who is the best game show host of all time?",
    choices: ["Alex Trebek", "Donald Glover", "Oprah", "Ellen"],
    hint: ["He was the host of Jeopardy! for 37 seasons"],
    correctAnswer: "Alex Trebek",
  },
  {
    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
    choices: [
      "Dale Earnhardt",
      "Cleopatra",
      "Amelia Earhart",
      "Queen Elizabeth",
    ],
    hint: [
      "This pilot mysteriously disapeared on their voyage and has never been found",
    ],
    correctAnswer: "Amelia Earhart",
  },
  {
    question:
      '"Let them eat Cake" is a famous quote tied to which historical figure?',
    choices: [
      "Napoleon",
      "Marie Antoinette",
      "Julius Ceasar",
      "Lady Jane Grey",
    ],
    hint: ["This figure was french royalty"],
    correctAnswer: "Marie Antoinette",
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      "Michelangelo",
      "Mozart",
      "Leonardo DiCaprio",
      "Leonardo da Vinci",
    ],
    hint: ["This painter also painted The Last Supper"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "How many bones do sharks have?",
    choices: ["123", "0", "200", "34"],
    hint: ["The correct option is based on a technicality, like human noses."],
    correctAnswer: "0",
  },
  {
    question: "Where is the Leaning Tower of Pisa located?",
    choices: ["France", "Italy", "Greece", "Napal"],
    hint: ["This country is also home to The Colosseum"],
    correctAnswer: "Italy",
  },
];
//index variable
let index = 0;
//score variable
let score = 0;
//questionsTally variable, keeps track of correct responses. used in place of score variable later.
let questionTally = 0;

function showHint(hintText) {
  alert(hintText);
}
// displayQuestion function, lets us work through the array and display the questions
function displayQuestion() {
  const currentQuestion = questions[index];
  questionText.textContent = currentQuestion.question;

  choicesList.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = choice;
    listItem.addEventListener("click", () => checkAnswer(choice));
    choicesList.appendChild(listItem);
  });

  // get the hint button and hint text elements
  const hintButton = document.getElementById("hint");
  const hintText = document.getElementById("hint-text");

  // clear the hint text when displaying a new question
  hintText.textContent = "";
  // add an event listener to show the hint for the current question
  hintButton.addEventListener("click", () => {
    hintText.textContent = "Hint: " + currentQuestion.hint;
  });
}

// checkAnswer function, checks input vs. correct answer and increments score & questionTally variables and displays score on screen.
function checkAnswer(selectedChoice) {
  const currentQuestion = questions[index];
  if (selectedChoice === currentQuestion.correctAnswer) {
    score++;
    questionTally++;
    document.getElementById("score").innerHTML = "Score:" + score;
    index++;
    console.log("score =" + score); //console log to ensure score is being properly kept
  }
  //if / else statement, determines if there are any questions left, if so next question is displayed.
  if (index < questions.length) {
    displayQuestion();
  } else {
    endGame();
  }
}
// endGame function, removes next button and question container, then displays final score.
function endGame() {
  questionContainer.style.display = "none";
  nextButton.style.display = "none";
  scoreText.textContent = `Final Score: ${score} out of ${questions.length}`;
}

// next-button event lisenter. if/else statment, allows the nextButton to be functional.
nextButton.addEventListener("click", () => {
  if (index < questions.length) {
    index++;
    displayQuestion();
  } else {
    endGame();
  }
});

//end-button event listener
endButton.addEventListener("click", () => {
  // score percentage if/else statement, determines which audio element to play.
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
    questionContainer.style.display = "block";
    nextButton.style.display = "block";
    scoreText.textContent = "";
  } else {
    endGame();
  }
});
//function call to displayQuestion function
displayQuestion();
