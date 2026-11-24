const questions = [
    {
        prompt: "Jak se projeví algoritmus, ve kterém byla porušena věcná správnost?",
        answers: [
            "Program se nikdy nespustí a překladač nahlásí syntaktickou chybu.",
            "Program se zacyklí a bude nutné ho násilně ukončit.",
            "Program zdánlivě pracuje bez problému, ale poskytuje chybné výsledky.",
            "Program skončí ihned po načtení prvního vstupního údaje."
        ],
        correct: 2,
        explanation: "Věcně nesprávný postup může doběhnout, ale vypočítá špatný výsledek."
    },
    {
        prompt: "Který zápis správně odpovídá zlomku (A + B) / (C + D)?",
        answers: [
            "X := A+B / C+D",
            "X := (A+B) / (C+D)",
            "X := A+B / (C+D)",
            "X := (A+B) / C+D"
        ],
        correct: 1,
        explanation: "Závorky zachovají celý čitatel i celý jmenovatel zlomku."
    },
    {
        prompt: "Jak se ve vývojovém diagramu značí blok pro načtení vstupních dat?",
        answers: [
            "Obdélníkem s textem Načti:",
            "Kosočtvercem s textem Vstup:",
            "Kosodélníkem s textem Čti:",
            "Oválem s textem Začátek:"
        ],
        correct: 2,
        explanation: "Vstup i výstup značí kosodélník. Pro načtení se používá Čti:."
    },
    {
        prompt: "Která vlastnost zaručuje stejný výsledek při stejných vstupech?",
        answers: [
            "Obecnost",
            "Srozumitelnost",
            "Jednoznačnost",
            "Opakovatelnost"
        ],
        correct: 3,
        explanation: "Opakovatelnost (determinismus) znamená stejné výsledky za stejných podmínek."
    },
    {
        prompt: "Jaký je hlavní účel překladače?",
        answers: [
            "Převádí vývojový diagram na slovní popis pro zákazníka.",
            "Překládá program do strojového kódu.",
            "Automaticky opravuje logické chyby algoritmu.",
            "Převádí cizojazyčné komentáře v kódu do češtiny."
        ],
        correct: 1,
        explanation: "Překladač převede program z programovacího jazyka do strojového kódu."
    }
];

const form = document.querySelector("#quiz-form");
const fieldset = document.querySelector("#question-fieldset");
const questionTitle = document.querySelector("#question-title");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#answer-feedback");
const quizButton = document.querySelector("#quiz-button");
const questionCount = document.querySelector("#question-count");
const scoreCount = document.querySelector("#score-count");
const progressBar = document.querySelector(".progress-track");
const progressFill = document.querySelector("#progress-fill");
const result = document.querySelector("#quiz-result");
const restartButton = document.querySelector("#restart-button");

let currentQuestion = 0;
let score = 0;
let answered = false;

function renderQuestion() {
    const question = questions[currentQuestion];
    answered = false;
    fieldset.disabled = false;
    questionCount.textContent = `OTÁZKA ${String(currentQuestion + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
    scoreCount.textContent = `SKÓRE ${score}`;
    questionTitle.textContent = question.prompt;
    feedback.textContent = "";
    quizButton.disabled = true;
    quizButton.innerHTML = 'Vyber odpověď <span aria-hidden="true">→</span>';
    answerList.replaceChildren();

    question.answers.forEach((answer, index) => {
        const label = document.createElement("label");
        label.className = "answer-choice";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = String(index);
        input.addEventListener("change", () => {
            quizButton.disabled = false;
            quizButton.innerHTML = 'Potvrdit odpověď <span aria-hidden="true">→</span>';
        });
        const option = document.createElement("span");
        option.className = "answer-option";
        const letter = document.createElement("span");
        letter.className = "answer-letter";
        letter.textContent = String.fromCharCode(65 + index);
        const text = document.createElement("span");
        text.textContent = answer;
        option.append(letter, text);
        label.append(input, option);
        answerList.append(label);
    });

    progressBar.setAttribute("aria-valuenow", String(currentQuestion));
    progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (answered) {
        currentQuestion += 1;
        if (currentQuestion === questions.length) {
            showResult();
        } else {
            renderQuestion();
        }
        return;
    }

    const selected = form.querySelector('input[name="answer"]:checked');
    if (!selected) return;

    answered = true;
    const isCorrect = Number(selected.value) === questions[currentQuestion].correct;
    if (isCorrect) score += 1;
    scoreCount.textContent = `SKÓRE ${score}`;
    feedback.textContent = `${isCorrect ? "Správně!" : "To není ono."} ${questions[currentQuestion].explanation}`;
    fieldset.disabled = true;
    quizButton.innerHTML = currentQuestion === questions.length - 1
        ? 'Zobrazit výsledek <span aria-hidden="true">→</span>'
        : 'Další otázka <span aria-hidden="true">→</span>';
});

function showResult() {
    form.hidden = true;
    result.hidden = false;
    progressBar.setAttribute("aria-valuenow", String(questions.length));
    progressFill.style.width = "100%";
    document.querySelector("#result-mark").textContent = score >= 3 ? "✓" : "↻";
    document.querySelector("#result-title").textContent = `${score} z ${questions.length} správně`;
    document.querySelector("#result-description").textContent = score === questions.length
        ? "Paráda! Algoritmy máš v malíku."
        : score >= 3
            ? "Dobrá práce. Základy algoritmizace už máš pevně v ruce."
            : "Zkus si znovu projít vlastnosti a značky diagramů. Při dalším pokusu to půjde lépe.";
}

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    result.hidden = true;
    form.hidden = false;
    fieldset.disabled = false;
    renderQuestion();
    questionTitle.focus();
});

renderQuestion();
