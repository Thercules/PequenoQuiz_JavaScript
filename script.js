const quizData = [
    // Questões
    {
        question: "Qual a linguagem favorita de thiago?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "a",
    },
    {
        question: "Qual foi o melhor anime de 2021?",
        a: "The god of highschool",
        b: "Jujutsu Kaisen",
        c: "Kimetsu no yaiba",
        d: "Boku no hero academia",
        correct: "b",
    },
    {
        question: "Qual o melhor estado do Brasil?",
        a: "Pernambuco",
        b: "São Paulo",
        c: "Ceará",
        d: "Alagoas",
        correct: "a",
    },
    {
        question: "Em que ano thiago nasceu?",
        a: "2001",
        b: "2002",
        c: "2003",
        d: "2004",
        correct: "b",
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
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    //Mostrar quantidade de questões certas.

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você respondeu corretamente ${score} de ${quizData.length} perguntas.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});