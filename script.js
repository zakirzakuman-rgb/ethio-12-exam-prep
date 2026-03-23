// 1. ALL DATA (Social + Natural + Aptitude + Others)
const allQuestions = [
    // --- GEOGRAPHY (50 Questions) ---
    { cat: "Geography", q: "Which is the highest mountain in Ethiopia?", options: ["Batu", "Ras Dashen", "Guge", "Chilalo"], a: "Ras Dashen" },
    { cat: "Geography", q: "Which lake is the source of the Blue Nile?", options: ["Ziway", "Abaya", "Tana", "Chamo"], a: "Tana" },
    { cat: "Geography", q: "V-shaped contour lines pointing uphill indicate a:", options: ["Valley", "Ridge", "Cliff", "Plain"], a: "Valley" },
    { cat: "Geography", q: "Which is the highest mountain in Ethiopia?", options: ["Batu", "Ras Dashen", "Guge", "Chilalo"], a: "Ras Dashen" },
    { cat: "Geography", q: "Which lake is the source of the Blue Nile?", options: ["Ziway", "Abaya", "Tana", "Chamo"], a: "Tana" },
    { cat: "Geography", q: "The ratio between map distance and ground distance is:", options: ["Legend", "Scale", "Grid", "Projection"], a: "Scale" },
    { cat: "Geography", q: "Geological era known as 'Age of Reptiles' is:", options: ["Cenozoic", "Mesozoic", "Paleozoic", "Precambrian"], a: "Mesozoic" },
    { cat: "Geography", q: "Traditional climate zone between 1500m and 2300m is:", options: ["Kolla", "Dega", "Woina Dega", "Bereha"], a: "Woina Dega" },
    { cat: "Geography", q: "Which river flows eastward into the Afar depression?", options: ["Abbay", "Awash", "Omo", "Genale"], a: "Awash" },
    { cat: "Geography", q: "V-shaped contour lines pointing uphill indicate a:", options: ["Valley", "Ridge", "Cliff", "Plain"], a: "Valley" },
    { cat: "Geography", q: "Which map scale is the largest?", options: ["1:500,000", "1:250,000", "1:50,000", "1:1,000,000"], a: "1:50,000" },
    { cat: "Geography", q: "The largest physiographic region of Ethiopia is:", options: ["Rift Valley", "Southeastern Highlands", "Western Highlands", "Lowlands"], a: "Western Highlands" },
    { cat: "Geography", q: "Which soil is known as 'Black Cotton Soil'?", options: ["Nitosols", "Vertisols", "Fluvisols", "Lithosols"], a: "Vertisols" },
    { cat: "Geography", q: "The Great Rift Valley was formed by:", options: ["Volcanic eruption", "Faulting", "Folding", "Erosion"], a: "Faulting" },
    { cat: "Geography", q: "The primary export crop of Ethiopia is:", options: ["Teff", "Coffee", "Wheat", "Maize"], a: "Coffee" },
    { cat: "Geography", q: "A wide base population pyramid indicates:", options: ["Low birth rate", "High birth rate", "Aging population", "Slow growth"], a: "High birth rate" },
    { cat: "Geography", q: "The most densely populated part of Ethiopia is:", options: ["North", "South-Central", "East", "West"], a: "South-Central" },
    { cat: "Geography", q: "Tool used to measure irregular lines on a map:", options: ["Ruler", "Opisometer", "Protractor", "Compass"], a: "Opisometer" },
    { cat: "Geography", q: "Most common rainfall in Ethiopian highlands is:", options: ["Cyclonic", "Relief", "Convectional", "Frontal"], a: "Relief" },
    { cat: "Geography", q: "Red and acidic soil found in Western Ethiopia:", options: ["Nitosols", "Vertisols", "Fluvisols", "Cambisols"], a: "Nitosols" },
    { cat: "Geography", q: "The main influence on Ethiopia's climate is:", options: ["Latitude", "Altitude", "Cloud cover", "Ocean currents"], a: "Altitude" },
    { cat: "Geography", q: "The sun is overhead at the Equator during:", options: ["Solstice", "Equinox", "Aphelion", "Perihelion"], a: "Equinox" },
    { cat: "Geography", q: "The inland drainage system includes which river?", options: ["Tekeze", "Baro", "Omo-Gibe", "Blue Nile"], a: "Omo-Gibe" },
    { cat: "Geography", q: "Ethiopia's standard time zone is:", options: ["GMT+1", "GMT+2", "GMT+3", "GMT+4"], a: "GMT+3" },
    { cat: "Geography", q: "Process of moving soil/rocks by wind or water:", options: ["Weathering", "Erosion", "Sedimentation", "Solidification"], a: "Erosion" },
    { cat: "Geography", q: "Which era saw the formation of the Rift Valley?", options: ["Pre-Cambrian", "Paleozoic", "Mesozoic", "Cenozoic"], a: "Cenozoic" },
    { cat: "Geography", q: "Altitude for the 'Kolla' climate zone is:", options: ["Below 500m", "500m-1500m", "1500m-2300m", "Above 3300m"], a: "500m-1500m" },
    { cat: "Geography", q: "Which river has the largest water discharge?", options: ["Abbay", "Baro-Akobo", "Omo-Gibe", "Wabe Shebelle"], a: "Abbay" },
    { cat: "Geography", q: "Number of people per arable land is:", options: ["Crude density", "Agricultural density", "Physiological density", "Economic density"], a: "Physiological density" },
    { cat: "Geography", q: "Lines connecting equal temperature points:", options: ["Isobar", "Isotherm", "Isohyet", "Isoneph"], a: "Isotherm" },
    { cat: "Geography", q: "The main moisture source for Kiremt rain is:", options: ["Indian Ocean", "Atlantic Ocean", "Red Sea", "Mediterranean"], a: "Atlantic Ocean" },
    { cat: "Geography", q: "Scale of 1:25,000 is considered:", options: ["Small", "Medium", "Large", "Wall"], a: "Large" },
    { cat: "Geography", q: "Objective of 'Terracing' is to:", options: ["Increase acidity", "Prevent erosion", "Stop wind", "Cut trees"], a: "Prevent erosion" },
    { cat: "Geography", q: "River shared with Somalia is:", options: ["Awash", "Wabe Shebelle", "Tekeze", "Baro"], a: "Wabe Shebelle" },
    { cat: "Geography", q: "Major cause of global warming is:", options: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"], a: "CO2" },
    { cat: "Geography", q: "Dominant vegetation in the Lowlands:", options: ["Rainforest", "Savanna", "Desert Scrub", "Coniferous"], a: "Savanna" },
    { cat: "Geography", q: "The 'Dega' zone is most suitable for:", options: ["Coffee", "Barley", "Sugarcane", "Cotton"], a: "Barley" },
    { cat: "Geography", q: "Which point is directly above the earthquake focus?", options: ["Epicenter", "Focus", "Fault", "Core"], a: "Epicenter" },
    { cat: "Geography", q: "The 'Age of Mammals' is the:", options: ["Pre-Cambrian", "Paleozoic", "Mesozoic", "Cenozoic"], a: "Cenozoic" },
    { cat: "Geography", q: "Close contour lines indicate:", options: ["Flat plain", "Steep slope", "Deep lake", "Desert"], a: "Steep slope" },
    { cat: "Geography", q: "Most common rural settlement in highlands:", options: ["Nucleated", "Dispersed", "Linear", "Urban"], a: "Dispersed" },
    { cat: "Geography", q: "A perennial river is one that:", options: ["Dries up", "Flows year-round", "Is very short", "Is underground"], a: "Flows year-round" },
    { cat: "Geography", q: "Instrument used for wind direction:", options: ["Anemometer", "Barometer", "Wind Vane", "Hygrometer"], a: "Wind Vane" },
    { cat: "Geography", q: "The 'Roof of Northeast Africa' refers to:", options: ["Kenya", "Sudan", "Ethiopia", "Somalia"], a: "Ethiopia" },
    { cat: "Geography", q: "Solar radiation reaching Earth is:", options: ["Insulation", "Insolation", "Conduction", "Convection"], a: "Insolation" },
    { cat: "Geography", q: "Which lake is found in the Rift Valley?", options: ["Tana", "Langano", "Hayq", "Ashenge"], a: "Langano" },
    { cat: "Geography", q: "3D Earth shown on 2D paper is a:", options: ["Projection", "Scale", "Legend", "Orientation"], a: "Projection" },
    { cat: "Geography", q: "Main coffee export destination for Ethiopia:", options: ["China", "Germany", "Japan", "USA"], a: "Germany" },
    { cat: "Geography", q: "A map with scale 1:1,000,000 is a:", options: ["Large scale", "Small scale", "Medium scale", "Cadastral"], a: "Small scale" },
    { cat: "Geography", q: "Highest water-level month for Abbay river:", options: ["January", "April", "August", "October"], a: "August" },
    { cat: "Geography", q: "The study of population is called:", options: ["Demography", "Cartography", "Geology", "Ecology"], a: "Demography" },
    { cat: "Geography", q: "Western lowlands are characterized by:", options: ["Cold climate", "High rainfall", "Hot and dry", "Snow"], a: "Hot and dry" },
    { cat: "Geography", q: "Process where one plate slides under another:", options: ["Folding", "Faulting", "Subduction", "Uplifting"], a: "Subduction" },
    
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
