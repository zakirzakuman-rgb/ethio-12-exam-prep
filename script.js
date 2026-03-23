// 1. ALL DATA (Social + Natural + Aptitude + Others)
const allQuestions = [
    // --- GEOGRAPHY (50 Questions) ---
    { cat: "Geography", q: "Which is the highest mountain in Ethiopia?", options: ["Batu", "Ras Dashen", "Guge", "Chilalo"], a: "Ras Dashen" },
    { cat: "Geography", q: "Which lake is the source of the Blue Nile?", options: ["Ziway", "Abaya", "Tana", "Chamo"], a: "Tana" },
    { cat: "Geography", q: "V-shaped contour lines pointing uphill indicate a:", options: ["Valley", "Ridge", "Cliff", "Plain"], a: "Valley" },
    
  // --- APTITUDE (30 Questions) ---
    { cat: "Aptitude", q: "Complete the series: 5, 10, 20, 40, ...?", options: ["50", "60", "80", "100"], a: "80" },
    { cat: "Aptitude", q: "What is 15% of 200?", options: ["20", "25", "30", "35"], a: "30" },

    // --- ECONOMICS, HISTORY, ENGLISH, MATH ---
    { cat: "Economics", q: "The basic economic problem is:", options: ["Inflation", "Scarcity", "Unemployment", "Poverty"], a: "Scarcity" },
    { cat: "History", q: "Who led Ethiopia at the Battle of Adwa?", options: ["Tewodros", "Yohannes", "Menelik II", "Haile Selassie"], a: "Menelik II" },
    { cat: "English", q: "I ___ my work before he came.", options: ["finish", "have finished", "had finished", "finished"], a: "had finished" },
    { cat: "Mathematics", q: "What is the 10th term of the sequence: 2, 5, 8, 11...?", options: ["29", "30", "32", "27"], a: "29" },
    

    // --- NATURAL SCIENCE (New Additions) ---
    { cat: "Biology", q: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"], a: "Mitochondria" },
    { cat: "Biology", q: "Which blood type is the universal donor?", options: ["A", "B", "AB", "O"], a: "O" },
    
    { cat: "Physics", q: "What is the unit of electric current?", options: ["Volt", "Ohm", "Ampere", "Watt"], a: "Ampere" },
    { cat: "Physics", q: "Force is equal to mass times:", options: ["Velocity", "Acceleration", "Time", "Distance"], a: "Acceleration" },
    
    { cat: "Chemistry", q: "What is the atomic symbol for Iron?", options: ["Ir", "Fe", "In", "I"], a: "Fe" },
    { cat: "Chemistry", q: "The chemical formula for Table Salt is:", options: ["H2O", "CO2", "NaCl", "HCl"], a: "NaCl" }

  
];

let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

// VOICE ASSISTANT (መልሱን እንዲናገር)
function speak(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}

// HOME & SHARE FUNCTIONS
function goHome() {
    location.reload();
}

function shareSite() {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({ title: 'Zakir Prep Hub', url: url });
    } else {
        alert("Copy this link to share: " + url);
    }
}

// START APP
function startApp() {
    let name = document.getElementById('userNameInput').value;
    let stream = document.getElementById('streamChoice').value;
    if (!name || !stream) return alert("Please fill all fields!");
    
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('main-title').innerText = name + "'s Hub";
    switchStream(stream);
}

function switchStream(stream) {
    document.getElementById('social-subjects').style.display = (stream === 'social' ? 'flex' : 'none');
    document.getElementById('natural-subjects').style.display = (stream === 'natural' ? 'flex' : 'none');
}

function startQuiz(subject) {
    quizQuestions = allQuestions.filter(q => q.cat === subject);
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector('.subject-container:not([style*="display: none"])').style.display = 'none';
    document.querySelector('.tabs').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    let q = quizQuestions[currentQuestionIndex];
    
    let quizBox = document.getElementById('quiz-box') || document.createElement('div');
    quizBox.id = 'quiz-box';
    document.getElementById('main-content').appendChild(quizBox);
    quizBox.style.display = 'block';
    
    quizBox.innerHTML = `
        <div id="timer-display" style="font-size:24px; color:red; font-weight:bold;">Time: 30s</div>
        <h2>${q.cat}</h2>
        <p style="font-size:1.3rem;">${currentQuestionIndex + 1}. ${q.q}</p>
        <div id="options-container"></div>
    `;

    q.options.forEach(opt => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = "quiz-answer-btn";
        btn.onclick = () => checkAnswer(opt, q.a);
        document.getElementById('options-container').appendChild(btn);
    });
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').innerText = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(null, quizQuestions[currentQuestionIndex].a);
        }
    }, 1000);
}

function checkAnswer(selected, correct) {
    clearInterval(timer);
    const buttons = document.querySelectorAll('.quiz-answer-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correct) {
            btn.style.background = "#28a745"; // Green for Correct
            btn.style.color = "white";
        }
        if (btn.innerText === selected && selected !== correct) {
            btn.style.background = "#dc3545"; // Red for Wrong
            btn.style.color = "white";
        }
    });

    if (selected === correct) {
        score++;
        speak("Correct!");
    } else {
        speak("Incorrect. The correct answer is " + correct);
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showFinalResult();
        }
    }, 2500); // 2.5 seconds to hear the voice
}


// 1. ወደ መጀመሪያው የካርድ ምርጫ የሚመልስ (ገጹን ሳያድስ)
function goHome() {
    // የኩዊዝ ሳጥኑን ደብቅ
    const quizBox = document.getElementById('quiz-box');
    if (quizBox) quizBox.style.display = 'none';

    // የትምህርት ካርዶቹን እና ታቦቹን መልሰህ አሳይ
    const stream = document.getElementById('streamChoice').value;
    switchStream(stream); // የትኛው ስትሪም እንደነበረ አይቶ ያሳያል
    document.querySelector('.tabs').style.display = 'flex';
    
    // ውጤት ካለ እንዲጠፋ
    currentQuestionIndex = 0;
    score = 0;
}

function showFinalResult() {
    let quizBox = document.getElementById('quiz-box');
    let percent = (score / quizQuestions.length) * 100;
    let message = percent >= 85 ? "Excellent job, Zakir! 🏆" : "Good effort! Keep practicing. 💪";

    quizBox.innerHTML = `
        <h2 style="color: #007bff;">QUIZ COMPLETED</h2>
        <div style="font-size: 60px; font-weight: bold; margin: 20px 0;">${score} / ${quizQuestions.length}</div>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">${message}</p>
        
        <button onclick="goHome()" style="padding: 15px 30px; background: #28a745; color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: bold;">
            SELECT ANOTHER SUBJECT
        </button>
    `;
}
q.options.forEach(opt => {
    let btn = document.createElement('button');
    btn.innerText = opt;
    
    // ይህ መስመር ከላይ ካለው CSS ጋር ያገናኘዋል (በጣም ወሳኝ ነው!)
    btn.className = "quiz-answer-btn"; 
    
    btn.onclick = () => checkAnswer(opt, q.a);
    optionsDiv.appendChild(btn);
});
