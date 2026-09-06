const legacyQuestionBank = [
  {
    id: 1,
    prompt: '“I am a student.”',
    answer: "Soy",
    explanation: "Use soy for identity: Soy estudiante."
  },
  {
    id: 2,
    prompt: '“I am tired.”',
    answer: "Estoy",
    explanation: "Use estoy for a temporary condition: Estoy cansado/a."
  },
  {
    id: 3,
    prompt: '“I am from California.”',
    answer: "Soy",
    explanation: "Use soy for origin: Soy de California."
  },
  {
    id: 4,
    prompt: '“I am at home.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en casa."
  },
  {
    id: 5,
    prompt: '“I am happy right now.”',
    answer: "Estoy",
    explanation: "Use estoy for a current feeling: Estoy feliz ahora."
  },
  {
    id: 6,
    prompt: '“I am tall.”',
    answer: "Soy",
    explanation: "Use soy for a characteristic: Soy alto/a."
  },
  {
    id: 7,
    prompt: '“I am in the library.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en la biblioteca."
  },
  {
    id: 8,
    prompt: '“I am nervous today.”',
    answer: "Estoy",
    explanation: "Use estoy for a current feeling: Estoy nervioso/a hoy."
  },
  {
    id: 9,
    prompt: '“I am an artist.”',
    answer: "Soy",
    explanation: "Use soy for identity or occupation: Soy artista."
  },
  {
    id: 10,
    prompt: '“I am sick.”',
    answer: "Estoy",
    explanation: "Use estoy for a temporary condition: Estoy enfermo/a."
  },
  {
    id: 11,
    prompt: '“I am American.”',
    answer: "Soy",
    explanation: "Use soy for nationality: Soy estadounidense."
  },
  {
    id: 12,
    prompt: '“I am busy right now.”',
    answer: "Estoy",
    explanation: "Use estoy for a current condition: Estoy ocupado/a ahora."
  },
  {
    id: 13,
    prompt: '“I am a good friend.”',
    answer: "Soy",
    explanation: "Use soy for identity or a characteristic: Soy un/a buen/a amigo/a."
  },
  {
    id: 14,
    prompt: '“I am at school.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en la escuela."
  },
  {
    id: 15,
    prompt: '“I am very creative.”',
    answer: "Soy",
    explanation: "Use soy for a characteristic: Soy muy creativo/a."
  },
  {
    id: 16,
    prompt: '“I am a teacher.”',
    answer: "Soy",
    explanation: "Use soy for an occupation: Soy profesor/a."
  },
  {
    id: 17,
    prompt: '“I am in the kitchen.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en la cocina."
  },
  {
    id: 18,
    prompt: '“I am excited today.”',
    answer: "Estoy",
    explanation: "Use estoy for a current feeling: Estoy emocionado/a hoy."
  },
  {
    id: 19,
    prompt: '“I am a kind person.”',
    answer: "Soy",
    explanation: "Use soy for a characteristic: Soy una persona amable."
  },
  {
    id: 20,
    prompt: '“I am cold right now.”',
    answer: "Estoy",
    explanation: "Use estoy for a current condition: Estoy helado/a ahora."
  },
  {
    id: 21,
    prompt: '“I am Mexican.”',
    answer: "Soy",
    explanation: "Use soy for nationality: Soy mexicano/a."
  },
  {
    id: 22,
    prompt: '“I am at the park.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en el parque."
  },
  {
    id: 23,
    prompt: '“I am young.”',
    answer: "Soy",
    explanation: "Use soy for a characteristic: Soy joven."
  },
  {
    id: 24,
    prompt: '“I am worried about the test.”',
    answer: "Estoy",
    explanation: "Use estoy for a current feeling: Estoy preocupado/a por el examen."
  },
  {
    id: 25,
    prompt: '“I am a musician.”',
    answer: "Soy",
    explanation: "Use soy for identity or occupation: Soy músico/a."
  },
  {
    id: 26,
    prompt: '“I am in my bedroom.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en mi dormitorio."
  },
  {
    id: 27,
    prompt: '“I am very patient.”',
    answer: "Soy",
    explanation: "Use soy for a characteristic: Soy muy paciente."
  },
  {
    id: 28,
    prompt: '“I am ready to leave.”',
    answer: "Estoy",
    explanation: "Use estoy for a current state: Estoy listo/a para salir."
  },
  {
    id: 29,
    prompt: '“I am your cousin.”',
    answer: "Soy",
    explanation: "Use soy for identity or relationships: Soy tu primo/a."
  },
  {
    id: 30,
    prompt: '“I am sad today.”',
    answer: "Estoy",
    explanation: "Use estoy for a current feeling: Estoy triste hoy."
  },
  {
    id: 31,
    prompt: '“I am from Spain.”',
    answer: "Soy",
    explanation: "Use soy for origin: Soy de España."
  },
  {
    id: 32,
    prompt: '“I am at the supermarket.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en el supermercado."
  },
  {
    id: 33,
    prompt: '“I am an honest person.”',
    answer: "Soy",
    explanation: "Use soy for a characteristic: Soy una persona honesta."
  },
  {
    id: 34,
    prompt: '“I am angry right now.”',
    answer: "Estoy",
    explanation: "Use estoy for a current feeling: Estoy enojado/a ahora."
  },
  {
    id: 35,
    prompt: '“I am a doctor.”',
    answer: "Soy",
    explanation: "Use soy for an occupation: Soy doctor/a."
  },
  {
    id: 36,
    prompt: '“I am on the bus.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en el autobús."
  },
  {
    id: 37,
    prompt: '“I am funny.”',
    answer: "Soy",
    explanation: "Use soy for a characteristic: Soy gracioso/a."
  },
  {
    id: 38,
    prompt: '“I am sleepy.”',
    answer: "Estoy",
    explanation: "Use estoy for a temporary condition: Estoy somnoliento/a."
  },
  {
    id: 39,
    prompt: '“I am the team captain.”',
    answer: "Soy",
    explanation: "Use soy for identity or a role: Soy el capitán / la capitana del equipo."
  },
  {
    id: 40,
    prompt: '“I am in the garden.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en el jardín."
  },
  {
    id: 41,
    prompt: '“I am very organized.”',
    answer: "Soy",
    explanation: "Use soy for a characteristic: Soy muy organizado/a."
  },
  {
    id: 42,
    prompt: '“I am surprised.”',
    answer: "Estoy",
    explanation: "Use estoy for a current feeling: Estoy sorprendido/a."
  },
  {
    id: 43,
    prompt: '“I am a soccer player.”',
    answer: "Soy",
    explanation: "Use soy for identity: Soy jugador/a de fútbol."
  },
  {
    id: 44,
    prompt: '“I am at the beach.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en la playa."
  },
  {
    id: 45,
    prompt: '“I am a responsible student.”',
    answer: "Soy",
    explanation: "Use soy for identity and characteristics: Soy un/a estudiante responsable."
  },
  {
    id: 46,
    prompt: '“I am calm now.”',
    answer: "Estoy",
    explanation: "Use estoy for a current state: Estoy tranquilo/a ahora."
  },
  {
    id: 47,
    prompt: '“I am your neighbor.”',
    answer: "Soy",
    explanation: "Use soy for identity or relationships: Soy tu vecino/a."
  },
  {
    id: 48,
    prompt: '“I am in the classroom.”',
    answer: "Estoy",
    explanation: "Use estoy for location: Estoy en el salón de clases."
  },
  {
    id: 49,
    prompt: '“I am a very curious person.”',
    answer: "Soy",
    explanation: "Use soy for a characteristic: Soy una persona muy curiosa."
  },
  {
    id: 50,
    prompt: '“I am bored right now.”',
    answer: "Estoy",
    explanation: "Use estoy for a current feeling: Estoy aburrido/a ahora."
  }
];

const questionBank = [
  ["I am a student.", "Soy", "Estoy", "identity", "Soy estudiante."],
  ["I am from California.", "Soy", "Estoy", "origin", "Soy de California."],
  ["I am creative.", "Soy", "Estoy", "a characteristic", "Soy creativo/a."],
  ["I am a teacher.", "Soy", "Estoy", "an occupation", "Soy profesor/a."],
  ["I am tired.", "Estoy", "Soy", "a temporary condition", "Estoy cansado/a."],
  ["I am at home.", "Estoy", "Soy", "location", "Estoy en casa."],
  ["I am happy today.", "Estoy", "Soy", "a current feeling", "Estoy feliz hoy."],
  ["I am ready.", "Estoy", "Soy", "a current state", "Estoy listo/a."],

  ["You are my friend.", "Eres", "Estás", "identity or a relationship", "Eres mi amigo/a."],
  ["You are Mexican.", "Eres", "Estás", "nationality", "Eres mexicano/a."],
  ["You are very patient.", "Eres", "Estás", "a characteristic", "Eres muy paciente."],
  ["You are an artist.", "Eres", "Estás", "an occupation", "Eres artista."],
  ["You are at school.", "Estás", "Eres", "location", "Estás en la escuela."],
  ["You are nervous today.", "Estás", "Eres", "a current feeling", "Estás nervioso/a hoy."],
  ["You are sick.", "Estás", "Eres", "a temporary condition", "Estás enfermo/a."],
  ["You are busy right now.", "Estás", "Eres", "a current condition", "Estás ocupado/a ahora."],

  ["He is a doctor.", "Es", "Está", "an occupation", "Él es doctor."],
  ["She is very kind.", "Es", "Está", "a characteristic", "Ella es muy amable."],
  ["You are the captain. (formal)", "Es", "Está", "identity or a role", "Usted es el capitán / la capitana."],
  ["He is from Spain.", "Es", "Está", "origin", "Él es de España."],
  ["She is in the library.", "Está", "Es", "location", "Ella está en la biblioteca."],
  ["He is angry right now.", "Está", "Es", "a current feeling", "Él está enojado ahora."],
  ["You are at the office. (formal)", "Está", "Es", "location", "Usted está en la oficina."],
  ["She is surprised.", "Está", "Es", "a current feeling", "Ella está sorprendida."],

  ["We are students.", "Somos", "Estamos", "identity", "Somos estudiantes."],
  ["We are from the United States.", "Somos", "Estamos", "origin", "Somos de los Estados Unidos."],
  ["We are good friends.", "Somos", "Estamos", "identity or a relationship", "Somos buenos amigos."],
  ["We are responsible.", "Somos", "Estamos", "a characteristic", "Somos responsables."],
  ["We are in the classroom.", "Estamos", "Somos", "location", "Estamos en el salón de clases."],
  ["We are excited today.", "Estamos", "Somos", "a current feeling", "Estamos emocionados/as hoy."],
  ["We are tired.", "Estamos", "Somos", "a temporary condition", "Estamos cansados/as."],
  ["We are ready to leave.", "Estamos", "Somos", "a current state", "Estamos listos/as para salir."],

  ["You all are musicians. (Spain)", "Sois", "Estáis", "identity or an occupation", "Sois músicos/as."],
  ["You all are Spanish. (Spain)", "Sois", "Estáis", "nationality", "Sois españoles/as."],
  ["You all are very funny. (Spain)", "Sois", "Estáis", "a characteristic", "Sois muy graciosos/as."],
  ["You all are my neighbors. (Spain)", "Sois", "Estáis", "identity or a relationship", "Sois mis vecinos/as."],
  ["You all are at the beach. (Spain)", "Estáis", "Sois", "location", "Estáis en la playa."],
  ["You all are worried. (Spain)", "Estáis", "Sois", "a current feeling", "Estáis preocupados/as."],
  ["You all are busy now. (Spain)", "Estáis", "Sois", "a current condition", "Estáis ocupados/as ahora."],
  ["You all are in the kitchen. (Spain)", "Estáis", "Sois", "location", "Estáis en la cocina."],

  ["They are soccer players.", "Son", "Están", "identity", "Ellos son jugadores de fútbol."],
  ["They are very organized.", "Son", "Están", "a characteristic", "Ellas son muy organizadas."],
  ["You all are teachers.", "Son", "Están", "an occupation", "Ustedes son profesores/as."],
  ["They are from Argentina.", "Son", "Están", "origin", "Ellos son de Argentina."],
  ["They are our cousins.", "Son", "Están", "identity or a relationship", "Ellas son nuestras primas."],
  ["They are at the park.", "Están", "Son", "location", "Ellos están en el parque."],
  ["They are calm now.", "Están", "Son", "a current state", "Ellas están tranquilas ahora."],
  ["You all are at the supermarket.", "Están", "Son", "location", "Ustedes están en el supermercado."],
  ["They are bored right now.", "Están", "Son", "a current feeling", "Ellos están aburridos ahora."],
  ["They are sick today.", "Están", "Son", "a temporary condition", "Ellas están enfermas hoy."]
].map(([prompt, answer, alternative, use, spanish], index) => ({
  id: index + 1,
  prompt: `“${prompt}”`,
  answer,
  choices: [answer, alternative],
  explanation: `Use ${answer.toLowerCase()} for ${use}: ${spanish}`
}));

const QUESTIONS_PER_ROUND = 5;

const questionText = document.querySelector("#question-text");
const questionCount = document.querySelector("#question-count");
const progressPercent = document.querySelector("#progress-percent");
const progressBar = document.querySelector("#progress-bar");
const progressTrack = document.querySelector(".progress-track");
const scoreDisplay = document.querySelector("#score");
const answerButtons = [...document.querySelectorAll(".answer-button")];
const feedback = document.querySelector("#feedback");
const feedbackTitle = document.querySelector("#feedback-title");
const feedbackText = document.querySelector("#feedback-text");
const nextButton = document.querySelector("#next-button");
const quizScreen = document.querySelector("#quiz-screen");
const resultsScreen = document.querySelector("#results-screen");
const finalScore = document.querySelector("#final-score-number");
const resultMessage = document.querySelector("#result-message");
const restartButton = document.querySelector("#restart-button");
const rememberToggle = document.querySelector("#remember-toggle");
const rememberPanel = document.querySelector("#remember-panel");

let currentQuestion = 0;
let score = 0;
let questions = [];
let previousQuestionIds = [];

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function createQuestionSet() {
  const freshQuestions = questionBank.filter(
    (question) => !previousQuestionIds.includes(question.id)
  );
  questions = shuffle(freshQuestions).slice(0, QUESTIONS_PER_ROUND);
  previousQuestionIds = questions.map((question) => question.id);
}

function randomizeAnswerButtons() {
  const answers = shuffle(questions[currentQuestion].choices);
  answerButtons.forEach((button, index) => {
    button.dataset.answer = answers[index];
    button.lastElementChild.textContent = answers[index];
  });
}

function showQuestion() {
  const number = currentQuestion + 1;
  const percent = Math.round((number / questions.length) * 100);

  questionText.textContent = questions[currentQuestion].prompt;
  questionCount.textContent = `Question ${number} of ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  progressTrack.setAttribute("aria-valuenow", number);
  randomizeAnswerButtons();

  feedback.hidden = true;
  feedback.className = "feedback";
  nextButton.hidden = true;

  answerButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });
}

function chooseAnswer(event) {
  const selectedButton = event.currentTarget;
  const selectedAnswer = selectedButton.dataset.answer;
  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.answer;

  answerButtons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === question.answer) button.classList.add("correct");
  });

  if (isCorrect) {
    score += 1;
    scoreDisplay.textContent = score;
    feedback.classList.add("success");
    feedbackTitle.textContent = "¡Correcto!";
  } else {
    selectedButton.classList.add("incorrect");
    feedback.classList.add("error");
    feedbackTitle.textContent = `Not quite — the answer is ${question.answer}.`;
  }

  const englishSentence = question.prompt.replace(/[“”"]/g, "");
  feedbackText.textContent = `${question.explanation} — ${englishSentence}`;
  feedback.hidden = false;
  nextButton.textContent = currentQuestion === questions.length - 1 ? "See my score →" : "Next question →";
  nextButton.hidden = false;
  nextButton.focus();
}

function showResults() {
  quizScreen.hidden = true;
  resultsScreen.hidden = false;
  finalScore.textContent = `${score}/${questions.length}`;

  if (score === questions.length) {
    resultMessage.textContent = "Perfect score! You know when to use ser and estar.";
  } else if (score >= 3) {
    resultMessage.textContent = "Nice work! You are getting the hang of ser and estar.";
  } else {
    resultMessage.textContent = "Good practice! Review the tip below, then keep going.";
  }

  restartButton.focus();
}

function goToNextQuestion() {
  currentQuestion += 1;
  if (currentQuestion < questions.length) {
    showQuestion();
    answerButtons[0].focus();
  } else {
    showResults();
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  createQuestionSet();
  scoreDisplay.textContent = "0";
  resultsScreen.hidden = true;
  quizScreen.hidden = false;
  showQuestion();
  answerButtons[0].focus();
}

answerButtons.forEach((button) => button.addEventListener("click", chooseAnswer));
nextButton.addEventListener("click", goToNextQuestion);
restartButton.addEventListener("click", restartQuiz);
rememberToggle.addEventListener("change", () => {
  const isHidden = !rememberToggle.checked;
  rememberPanel.classList.toggle("is-hidden", isHidden);
  rememberPanel.setAttribute("aria-hidden", String(isHidden));
});

createQuestionSet();
showQuestion();
