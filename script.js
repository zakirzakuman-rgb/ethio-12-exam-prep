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

// APP START
function startApp() {
    let name = document.getElementById('userNameInput').value;
    let stream = document.getElementById('streamChoice').value;
    
    if (name.trim() === '' || stream === '') {
        alert('Please enter your name and select a stream!');
        return;
    }
    
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    
    // Correct Name Header
    document.getElementById('main-title').innerText = name + "'s Hub";
    
    switchStream(stream);
}

// STREAM SWITCHER (Handles Cards Visibility)
function switchStream(stream) {
    const socialDiv = document.getElementById('social-subjects');
    const naturalDiv = document.getElementById('natural-subjects');
    
    if (stream === 'social') {
        socialDiv.style.display = 'flex';
        naturalDiv.style.display = 'none';
    } else {
        socialDiv.style.display = 'none';
        naturalDiv.style.display = 'flex';
    }
}

// QUIZ LOGIC
function startQuiz(subject) {
    quizQuestions = allQuestions.filter(q => q.cat === subject);
    
    if (quizQuestions.length === 0) {
        alert("No questions found for " + subject);
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;

    // Hide everything else
    document.getElementById('social-subjects').style.display = 'none';
    document.getElementById('natural-subjects').style.display = 'none';
    document.querySelector('.tabs').style.display = 'none';

    let quizBox = document.getElementById('quiz-box');
    if (!quizBox) {
        quizBox = document.createElement('div');
        quizBox.id = 'quiz-box';
        quizBox.style.cssText = "background:white; padding:30px; border-radius:15px; margin:20px auto; text-align:center; max-width:600px; box-shadow: 0 10px 20px rgba(0,0,0,0.2);";
        document.getElementById('main-content').appendChild(quizBox);
    }
    quizBox.style.display = 'block';
    
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    
    let q = quizQuestions[currentQuestionIndex];
    let quizBox = document.getElementById('quiz-box');
    
    quizBox.innerHTML = `
        <div id="timer-display" style="font-size: 24px; color: #ff4444; font-weight: bold; margin-bottom: 15px;">Time Left: 30s</div>
        <h2 style="color: #007bff; text-transform: uppercase; letter-spacing: 1px;">${q.cat}</h2>
        <p style="font-size: 1.4rem; margin: 25px 0; line-height: 1.4;">${currentQuestionIndex + 1}. ${q.q}</p>
        <div id="options-container"></div>
        <p style="margin-top:25px; color:#777; font-style: italic;">Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</p>
    `;

    let optionsDiv = document.getElementById('options-container');
    q.options.forEach(opt => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.style.cssText = "display:block; width:100%; padding:15px; margin:12px 0; cursor:pointer; border-radius:12px; border:1px solid #ddd; background:#fff; font-size:1.1rem; transition: all 0.2s ease;";
        
        btn.onmouseover = () => { btn.style.background = "#eef4ff"; btn.style.borderColor = "#007bff"; };
        btn.onmouseout = () => { btn.style.background = "#fff"; btn.style.borderColor = "#ddd"; };
        
        btn.onclick = () => checkAnswer(opt, q.a);
        optionsDiv.appendChild(btn);
    });

    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').innerText = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up! ⏰ Let's see the next one.");
            checkAnswer(null, quizQuestions[currentQuestionIndex].a);
        }
    }, 1000);
}

function checkAnswer(selected, correct) {
    clearInterval(timer);
    if (selected === correct) {
        score++;
    } 

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    let quizBox = document.getElementById('quiz-box');
    let percent = (score / quizQuestions.length) * 100;
    let message = "";
    let color = "";

    if (percent >= 85) {
        message = "Excellent job, nice! 🏆 You're on your way to becoming a great Software Engineer!";
        color = "#28a745";
    } else if (percent >= 50) {
        message = "Good effort! A bit more practice and you'll be perfect. 💪";
        color = "#fd7e14";
    } else {
        message = "Keep your head up! Review the topics and try again. 📚";
        color = "#dc3545";
    }

    quizBox.innerHTML = `
        <h2 style="color: ${color}; letter-spacing: 2px;">QUIZ COMPLETED</h2>
        <div style="font-size: 70px; font-weight: bold; margin: 30px 0; color: #333;">${score} / ${quizQuestions.length}</div>
        <p style="font-size: 1.5rem; padding: 0 30px; line-height: 1.6; color: #444;">${message}</p>
        <button onclick="location.reload()" style="margin-top:40px; padding:18px 50px; background:#007bff; color:white; border:none; border-radius:15px; cursor:pointer; font-size:1.2rem; font-weight:bold; box-shadow: 0 4px 15px rgba(0,123,255,0.3);">BACK TO HUB</button>
    `;
}
