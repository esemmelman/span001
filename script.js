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

const subjects = [
  { pronoun: "Yo", forms: { oir: "I hear", ir: "I go", tener: "I have", decir: "I say" } },
  { pronoun: "Tú", forms: { oir: "You hear", ir: "You go", tener: "You have", decir: "You say" } },
  { pronoun: "Él", forms: { oir: "He hears", ir: "He goes", tener: "He has", decir: "He says" } },
  { pronoun: "Nosotros", forms: { oir: "We hear", ir: "We go", tener: "We have", decir: "We say" } },
  { pronoun: "Vosotros", forms: { oir: "You all hear (Spain)", ir: "You all go (Spain)", tener: "You all have (Spain)", decir: "You all say (Spain)" } },
  { pronoun: "Ellos", forms: { oir: "They hear", ir: "They go", tener: "They have", decir: "They say" } }
];

const verbDefinitions = {
  oir: {
    title: "Oír",
    forms: ["Oigo", "Oyes", "Oye", "Oímos", "Oís", "Oyen"],
    notes: ["The yo form is irregular: oigo.", "Oímos and oís need accent marks."],
    contexts: [["music", "música"], ["the teacher", "al profesor"], ["a noise", "un ruido"]]
  },
  ir: {
    title: "Ir",
    forms: ["Voy", "Vas", "Va", "Vamos", "Vais", "Van"],
    notes: ["All present-tense forms of ir are irregular.", "Use a + place to say where someone is going."],
    contexts: [["to school", "a la escuela"], ["to the park", "al parque"], ["home", "a casa"]]
  },
  tener: {
    title: "Tener",
    forms: ["Tengo", "Tienes", "Tiene", "Tenemos", "Tenéis", "Tienen"],
    notes: ["The yo form is irregular: tengo.", "The stem changes e → ie except in nosotros and vosotros."],
    contexts: [["a book", "un libro"], ["a question", "una pregunta"], ["a dog", "un perro"]]
  },
  decir: {
    title: "Decir",
    forms: ["Digo", "Dices", "Dice", "Decimos", "Decís", "Dicen"],
    notes: ["The yo form is irregular: digo.", "The stem changes e → i except in nosotros and vosotros."],
    contexts: [["the truth", "la verdad"], ["hello", "hola"], ["the answer", "la respuesta"]]
  }
};

function buildVerbQuestions(key) {
  const verb = verbDefinitions[key];
  return subjects.flatMap((subject, subjectIndex) =>
    verb.contexts.map(([englishEnding, spanishEnding], contextIndex) => ({
      id: `${key}-${subjectIndex}-${contextIndex}`,
      verbKey: key,
      prompt: `“${subject.forms[key]} ${englishEnding}.”`,
      answer: verb.forms[subjectIndex],
      choices: verb.forms,
      explanation: `${subject.pronoun} ${verb.forms[subjectIndex].toLowerCase()} ${spanishEnding}.`
    }))
  );
}

const quizModes = {
  serEstar: { title: "Ser vs. Estar", questions: questionBank },
  oir: { title: "Oír", questions: buildVerbQuestions("oir") },
  ir: { title: "Ir", questions: buildVerbQuestions("ir") },
  tener: { title: "Tener", questions: buildVerbQuestions("tener") },
  decir: { title: "Decir", questions: buildVerbQuestions("decir") }
};

const QUESTIONS_PER_ROUND = 5;

const questionText = document.querySelector("#question-text");
const questionCount = document.querySelector("#question-count");
const progressPercent = document.querySelector("#progress-percent");
const progressBar = document.querySelector("#progress-bar");
const progressTrack = document.querySelector(".progress-track");
const scoreDisplay = document.querySelector("#score");
const answerOptions = document.querySelector("#answer-options");
let answerButtons = [];
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
const topicSelect = document.querySelector("#topic-select");
const quizTitle = document.querySelector("#quiz-title");

let currentQuestion = 0;
let score = 0;
let questions = [];
let activeModeKey = "serEstar";
const previousQuestionIds = {};

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function createQuestionSet() {
  const bank = quizModes[activeModeKey].questions;
  const previousIds = previousQuestionIds[activeModeKey] || [];
  let freshQuestions = bank.filter(
    (question) => !previousIds.includes(question.id)
  );
  if (freshQuestions.length < QUESTIONS_PER_ROUND) freshQuestions = bank;
  questions = shuffle(freshQuestions).slice(0, QUESTIONS_PER_ROUND);
  previousQuestionIds[activeModeKey] = questions.map((question) => question.id);
}

function randomizeAnswerButtons() {
  const question = questions[currentQuestion];
  let answers;

  if (activeModeKey === "serEstar") {
    answers = shuffle(question.choices);
  } else {
    const currentForms = verbDefinitions[activeModeKey].forms;
    const sameVerbChoice = shuffle(currentForms.filter((form) => form !== question.answer))[0];
    const otherVerbKeys = Object.keys(verbDefinitions).filter((key) => key !== activeModeKey);
    const otherVerbKey = shuffle(otherVerbKeys)[0];
    const otherVerbChoices = shuffle(verbDefinitions[otherVerbKey].forms).slice(0, 2);
    answers = shuffle([question.answer, sameVerbChoice, ...otherVerbChoices]);
  }
  answerOptions.innerHTML = "";
  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.dataset.answer = answer;
    const label = document.createElement("span");
    label.textContent = answer;
    button.append(label);
    button.addEventListener("click", chooseAnswer);
    answerOptions.append(button);
  });
  answerButtons = [...answerOptions.querySelectorAll(".answer-button")];
}

function updateRememberPanel() {
  if (activeModeKey === "serEstar") {
    rememberPanel.innerHTML = `
      <section class="rule-group soy-rule"><h3>Ser</h3><p class="conjugations">soy · eres · es<br>somos · sois · son</p><ul><li>Identity and names</li><li>Where I am from</li><li>Jobs and roles</li><li>Lasting traits</li></ul></section>
      <section class="rule-group estoy-rule"><h3>Estar</h3><p class="conjugations">estoy · estás · está<br>estamos · estáis · están</p><ul><li>How I feel</li><li>Where I am</li><li>Temporary conditions</li><li>How I am right now</li></ul></section>`;
    return;
  }

  const verb = verbDefinitions[activeModeKey];
  const noteItems = verb.notes.map((note) => `<li>${note}</li>`).join("");
  rememberPanel.innerHTML = `
    <section class="rule-group estoy-rule single-verb-rule">
      <h3>${verb.title}</h3>
      <p class="conjugations">${verb.forms.slice(0, 3).map((form) => form.toLowerCase()).join(" · ")}<br>${verb.forms.slice(3).map((form) => form.toLowerCase()).join(" · ")}</p>
      ${noteItems ? `<ul>${noteItems}</ul>` : ""}
    </section>`;
}

function selectQuiz() {
  activeModeKey = topicSelect.value;
  currentQuestion = 0;
  score = 0;
  scoreDisplay.textContent = "0";
  quizTitle.textContent = quizModes[activeModeKey].title;
  resultsScreen.hidden = true;
  quizScreen.hidden = false;
  updateRememberPanel();
  createQuestionSet();
  showQuestion();
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
    resultMessage.textContent = `Perfect score! You know ${quizModes[activeModeKey].title}.`;
  } else if (score >= 3) {
    resultMessage.textContent = `Nice work! You are getting the hang of ${quizModes[activeModeKey].title}.`;
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

nextButton.addEventListener("click", goToNextQuestion);
restartButton.addEventListener("click", restartQuiz);
topicSelect.addEventListener("change", selectQuiz);
rememberToggle.addEventListener("change", () => {
  const isHidden = !rememberToggle.checked;
  rememberPanel.classList.toggle("is-hidden", isHidden);
  rememberPanel.setAttribute("aria-hidden", String(isHidden));
});

createQuestionSet();
showQuestion();
