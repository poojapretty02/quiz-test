const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "Who is the CEO of Tesla?",
    answers: ["Bill Gates", "Elon Musk", "Jeff Bezos", "Mark Zuckerberg"],
    correct: "Elon Musk",
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: "Jupiter",
  },
  {
    question: "What is the square root of 64?",
    answers: ["6", "8", "10", "12"],
    correct: "8",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Oxygen", "Gold", "Osmium", "Oganesson"],
    correct: "Oxygen",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      "William Shakespeare",
      "Mark Twain",
      "Charles Dickens",
      "Jane Austen",
    ],
    correct: "William Shakespeare",
  },
  {
    question: "What year did World War II end?",
    answers: ["1940", "1945", "1950", "1939"],
    correct: "1945",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["China", "Japan", "Thailand", "South Korea"],
    correct: "Japan",
  },
  {
    question: "What is the chemical formula for water?",
    answers: ["H2O", "CO2", "O2", "HO"],
    correct: "H2O",
  },
  {
    question: "How many continents are there on Earth?",
    answers: ["5", "6", "7", "8"],
    correct: "7",
  },
];

let currentQuestion = 0;
let score = 0;
document.getElementById("quiz-card").style.display = "none";

function startQuiz() {
  document.getElementById("start-quiz").style.display = "none";
  document.getElementById("quiz-card").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const question = document.getElementById("question");
  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  const currentQuiz = quizData[currentQuestion];
  question.innerText = currentQuiz.question;

  currentQuiz.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.onclick = () => {
      document
        .querySelectorAll("#answers button")
        .forEach((btn) => (btn.disabled = true));

      if (answer === currentQuiz.correct) {
        button.style.backgroundColor = "green";
        score++;
      } else {
        button.style.backgroundColor = "red";
        document.querySelectorAll("#answers button").forEach((btn) => {
          if (btn.innerText === currentQuiz.correct) {
            btn.style.backgroundColor = "green";
          }
        });
      }
      document.getElementById("next-btn").style.display = "inline-block";
    };
    answers.appendChild(button);
  });

  document.getElementById("next-btn").style.display = "none";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-card").innerHTML = `
          <h2>Your score is: ${score} / ${quizData.length}</h2>
          <button id="restart-btn" onclick="restartQuiz()">Restart Quiz</button>
      `;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz-card").style.display = "none";
  document.getElementById("start-quiz").style.display = "block";
}
