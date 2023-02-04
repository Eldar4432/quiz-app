const quizData = [
  {
    question: "How old is Eldar?",
    a: "19",
    b: "22",
    c: "20",
    d: "21",
    correct: "c",
  },
  {
    question: "What is the most used programming languages in 2022?",
    a: "JavaScript",
    b: "Python",
    c: "Java",
    d: "C#",
    correct: "a",
  },
  {
    question: "Who is president of Kyrgyzstan?",
    a: "Almazbek Atambaev",
    b: "Adahan Madumarov",
    c: "Sadyr Japarov",
    d: "Eldar Aibekov",
    correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    b: "Aplication Interface",
    correct: "a",
  },
  {
    questions: "What year was JavaScript launched?",
    a: "1995",
    b: "1997",
    c: "2000",
    d: "none of the above",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
// let answer = undefined;
let score = 0;

loadQuiz();
function loadQuiz() {
  decelectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  // const answerEls = document.querySelectorAll(".answer");

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function decelectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
      <button onclick='location.reload()'>Reload</button>`
    }
  }
});
