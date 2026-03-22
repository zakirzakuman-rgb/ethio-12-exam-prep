// 1. ALL QUESTIONS DATA (SOCIAL + NATURAL + APTITUDE)
const allQuestions = [
    // --- GEOGRAPHY (50 Questions) ---
    { cat: "Geography", q: "Which is the highest mountain in Ethiopia?", options: ["Batu", "Ras Dashen", "Guge", "Chilalo"], a: "Ras Dashen" },
    { cat: "Geography", q: "Which lake is the source of the Blue Nile?", options: ["Ziway", "Abaya", "Tana", "Chamo"], a: "Tana" },
    { cat: "Geography", q: "On a topographic map, V-shaped contour lines pointing uphill indicate a:", options: ["Valley", "Ridge", "Cliff", "Plain"], a: "Valley" },
    { cat: "Geography", q: "Which map scale is the largest?", options: ["1:500,000", "1:250,000", "1:50,000", "1:1,000,000"], a: "1:50,000" },
    { cat: "Geography", q: "The ratio between map distance and ground distance is called:", options: ["Legend", "Scale", "Grid", "Projection"], a: "Scale" },
    { cat: "Geography", q: "Which tool is used to measure irregular lines on a map?", options: ["Ruler", "Opisometer", "Protractor", "Compass"], a: "Opisometer" },
    { cat: "Geography", q: "The largest physiographic region of Ethiopia is:", options: ["The Rift Valley", "The Southeastern Highlands", "The Western Highlands", "The Lowlands"], a: "The Western Highlands" },
    { cat: "Geography", q: "Which geological era is known as the 'Age of Reptiles'?", options: ["Cenozoic", "Mesozoic", "Paleozoic", "Precambrian"], a: "Mesozoic" },
    { cat: "Geography", q: "The traditional climate zone between 1500m and 2300m is:", options: ["Kolla", "Dega", "Woina Dega", "Bereha"], a: "Woina Dega" },
    { cat: "Geography", q: "Which river is the only one that flows eastward into the Afar depression?", options: ["Abbay", "Awash", "Omo", "Genale"], a: "Awash" },
    { cat: "Geography", q: "The 'Inland Drainage System' of Ethiopia includes which river?", options: ["Tekeze", "Baro", "Omo-Gibe", "Blue Nile"], a: "Omo-Gibe" },
    { cat: "Geography", q: "Which factor most influences the climate of Ethiopia?", options: ["Latitude", "Altitude", "Cloud cover", "Ocean currents"], a: "Altitude" },
    { cat: "Geography", q: "The most densely populated part of Ethiopia is the:", options: ["North", "South-Central", "East", "West"], a: "South-Central" },
    { cat: "Geography", q: "Which crop is Ethiopia's primary export item?", options: ["Teff", "Coffee", "Wheat", "Maize"], a: "Coffee" },
    { cat: "Geography", q: "A 'Pyramid' with a wide base and narrow top indicates:", options: ["Low birth rate", "High birth rate", "Aging population", "Slow growth"], a: "High birth rate" },
    { cat: "Geography", q: "The most common type of farming in the Ethiopian highlands is:", options: ["Shift cultivation", "Mixed farming", "Plantation", "State farming"], a: "Mixed farming" },
    { cat: "Geography", q: "The clearing of forests for agriculture is called:", options: ["Afforestation", "Deforestation", "Reforestation", "Terracing"], a: "Deforestation" },
    { cat: "Geography", q: "Which soil type is also known as 'Black Cotton Soil'?", options: ["Nitosols", "Vertisols", "Fluvisols", "Lithosols"], a: "Vertisols" },
    { cat: "Geography", q: "The 'Great Rift Valley' was formed by which process?", options: ["Volcanic eruption", "Faulting", "Folding", "Erosion"], a: "Faulting" },
    { cat: "Geography", q: "Which of the following is a renewable energy source in Ethiopia?", options: ["Coal", "Natural Gas", "Hydroelectric power", "Oil"], a: "Hydroelectric power" },
    { cat: "Geography", q: "On a map, close contour lines indicate:", options: ["Flat plain", "Steep slope", "Deep lake", "Desert"], a: "Steep slope" },
    { cat: "Geography", q: "Which type of rainfall is most common in the Ethiopian highlands?", options: ["Cyclonic", "Relief", "Convectional", "Frontal"], a: "Relief" },
    { cat: "Geography", q: "The instrument used to measure the direction of wind is:", options: ["Anemometer", "Barometer", "Wind Vane", "Hygrometer"], a: "Wind Vane" },
    { cat: "Geography", q: "Which soil type is red and acidic, common in Western Ethiopia?", options: ["Nitosols", "Vertisols", "Fluvisols", "Cambisols"], a: "Nitosols" },
    { cat: "Geography", q: "The major cause of global warming is the increase of:", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], a: "Carbon dioxide" },
    { cat: "Geography", q: "Which sub-sector contributes most to Ethiopia's GDP?", options: ["Livestock", "Crop production", "Forestry", "Fishery"], a: "Crop production" },
    { cat: "Geography", q: "The point where the sun is overhead at the Equator is:", options: ["Solstice", "Equinox", "Aphelion", "Perihelion"], a: "Equinox" },
    { cat: "Geography", q: "Which natural vegetation is dominant in the Ethiopian Lowlands?", options: ["Tropical Rainforest", "Savanna", "Desert Scrub", "Coniferous"], a: "Savanna" },
    { cat: "Geography", q: "The 'Dega' climate zone is suitable for growing:", options: ["Coffee", "Barley", "Sugarcane", "Cotton"], a: "Barley" },
    { cat: "Geography", q: "What is the standard time zone of Ethiopia?", options: ["GMT+1", "GMT+2", "GMT+3", "GMT+4"], a: "GMT+3" },
    { cat: "Geography", q: "Moving soil and rocks by wind or water is:", options: ["Weathering", "Erosion", "Sedimentation", "Solidification"], a: "Erosion" },
    { cat: "Geography", q: "A major characteristic of the Cenozoic era in Ethiopia is:", options: ["Basement rocks", "Rift Valley formation", "Marine transgression", "Folding"], a: "Rift Valley formation" },
    { cat: "Geography", q: "The 'Kolla' climate zone is generally found at:", options: ["Below 500m", "500m-1500m", "1500m-2300m", "Above 3300m"], a: "500m-1500m" },
    { cat: "Geography", q: "Which river basin has the largest annual water discharge?", options: ["Abbay", "Baro-Akobo", "Omo-Gibe", "Wabe Shebelle"], a: "Abbay" },
    { cat: "Geography", q: "Number of people per total arable land is:", options: ["Crude density", "Agricultural", "Physiological", "Economic"], a: "Physiological" },
    { cat: "Geography", q: "A line connecting points of equal temperature is:", options: ["Isobar", "Isotherm", "Isohyet", "Isoneph"], a: "Isotherm" },
    { cat: "Geography", q: "Geological process that formed the Highlands is:", options: ["Faulting", "Folding", "Uplifting", "Sedimentation"], a: "Uplifting" },
    { cat: "Geography", q: "The moisture source for Kiremt rain is:", options: ["Indian Ocean", "Atlantic Ocean", "Red Sea", "Mediterranean"], a: "Atlantic Ocean" },
    { cat: "Geography", q: "Which is a 'Highland Lake' in Ethiopia?", options: ["Shala", "Tana", "Abijatta", "Langano"], a: "Tana" },
    { cat: "Geography", q: "The main objective of 'Terracing' is to:", options: ["Increase acidity", "Prevent erosion", "Increase wind", "Clear forests"], a: "Prevent erosion" },
    { cat: "Geography", q: "A map scale of 1:25,000 is:", options: ["Small", "Medium", "Large", "Wall map"], a: "Large" },
    { cat: "Geography", q: "River shared with Somalia flowing to Indian Ocean:", options: ["Awash", "Wabe Shebelle", "Tekeze", "Baro"], a: "Wabe Shebelle" },
    { cat: "Geography", q: "Solar Radiation reaching Earth's surface is:", options: ["Insulation", "Insolation", "Conduction", "Convection"], a: "Insolation" },
    { cat: "Geography", q: "Which region is most affected by frequent droughts?", options: ["Western High", "Lowlands", "Central High", "Southern High"], a: "Lowlands" },
    { cat: "Geography", q: "The 'Age of Mammals' refers to:", options: ["Pre-Cambrian", "Paleozoic", "Mesozoic", "Cenozoic"], a: "Cenozoic" },
    { cat: "Geography", q: "Point where the Earth's crust breaks in an earthquake:", options: ["Epicenter", "Focus", "Fault line", "Core"], a: "Focus" },
    { cat: "Geography", q: "Most common rural settlement in Highlands:", options: ["Nucleated", "Dispersed", "Linear", "Urban"], a: "Dispersed" },
    { cat: "Geography", q: "Representing 3D Earth on 2D paper is:", options: ["Projection", "Scale", "Generalization", "Orientation"], a: "Projection" },
    { cat: "Geography", q: "Which is a perennial river in Ethiopia?", options: ["Abbay", "Mile", "Borkena", "Angereb"], a: "Abbay" },
    { cat: "Geography", q: "Primary export destination for Ethiopian coffee:", options: ["China", "Germany", "Japan", "USA"], a: "Germany" },

    // --- HISTORY ---
    { cat: "History", q: "Who led Ethiopia at the Battle of Adwa?", options: ["Tewodros II", "Yohannes IV", "Menelik II", "Haile Selassie"], a: "Menelik II" },
    { cat: "History", q: "In which year was 'Land to the Tiller' proclaimed?", options: ["1960", "1974", "1975", "1991"], a: "1975" },

    // --- APTITUDE ---
    { cat: "Aptitude", q: "Complete the series: 5, 10, 20, 40, ...?", options: ["50", "60", "80", "100"], a: "80" },
    { cat: "Aptitude", q: "What is 15% of 200?", options: ["20", "25", "30", "35"], a: "30" },

    // --- ENGLISH ---
    { cat: "English", q: "I _______ my homework before my father arrived.", options: ["finish", "have finished", "had finished", "finishing"], a: "had finished" },

    // --- NATURAL SCIENCE ---
    { cat: "Biology", q: "The powerhouse of the cell is:", options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"], a: "Mitochondria" },
    { cat: "Physics", q: "What is the unit of electric current?", options: ["Volt", "Ohm", "Ampere", "Watt"], a: "Ampere" },
    { cat: "Chemistry", q: "Atomic symbol for Iron is:", options: ["Ir", "Fe", "In", "I"], a: "Fe" }
];

// 2. LOGIC VARIABLES
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// 3. START APP
function startApp() {
    let name = document.getElementById('userNameInput').value;
    let stream = document.getElementById('streamChoice').value;
    
    if (name.trim() === '' || stream === '') {
        alert('Please enter name and stream!');
        return;
    }
    
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('main-title').innerText = name + "'s Hub";
    
    switchStream(stream);
}

// 4. STREAM TABS
function switchStream(stream) {
    document.getElementById('social-subjects').style.display = (stream === 'social' ? 'flex' : 'none');
    document.getElementById('natural-subjects').style.display = (stream === 'natural' ? 'flex' : 'none');
    
    // UI Feedback for Tabs
    document.getElementById('social-tab').style.background = (stream === 'social' ? '#0056b3' : '#007bff');
    document.getElementById('natural-tab').style.background = (stream === 'natural' ? '#0056b3' : '#007bff');
}

// 5. QUIZ CORE
function startQuiz(subject) {
    quizQuestions = allQuestions.filter(q => q.cat === subject);
    
    if (quizQuestions.length === 0) {
        alert("No questions for " + subject + " yet!");
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;

    // Hide cards and tabs
    document.getElementById('social-subjects').style.display = 'none';
    document.getElementById('natural-subjects').style.display = 'none';
    document.querySelector('.tabs').style.display = 'none';

    // Create Quiz Box if it doesn't exist
    let quizBox = document.getElementById('quiz-box');
    if (!quizBox) {
        quizBox = document.createElement('div');
        quizBox.id = 'quiz-box';
        quizBox.style.cssText = "background:white; padding:20px; border-radius:15px; margin-top:20px; text-align:center;";
        document.getElementById('main-content').appendChild(quizBox);
    }
    quizBox.style.display = 'block';
    
    showQuestion();
}

function showQuestion() {
    let q = quizQuestions[currentQuestionIndex];
    let quizBox = document.getElementById('quiz-box');
    
    quizBox.innerHTML = `
        <h2 style="color:#007bff;">${q.cat} Quiz</h2>
        <p style="font-size:1.1rem; font-weight:bold;">${currentQuestionIndex + 1}. ${q.q}</p>
        <div id="options-container"></div>
        <p style="margin-top:20px;">Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</p>
    `;

    let optionsDiv = document.getElementById('options-container');
    q.options.forEach(opt => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.style.cssText = "display:block; width:100%; padding:12px; margin:8px 0; cursor:pointer; border-radius:8px; border:1px solid #ddd; background:#f9f9f9;";
        btn.onmouseover = () => btn.style.background = "#eef";
        btn.onmouseout = () => btn.style.background = "#f9f9f9";
        btn.onclick = () => checkAnswer(opt, q.a);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        alert("Correct! ✅");
    } else {
        alert("Wrong! ❌ The correct answer is: " + correct);
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        alert(`Finished! 🎓 Your score: ${score} / ${quizQuestions.length}`);
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quiz-box').style.display = 'none';
    document.querySelector('.tabs').style.display = 'flex';
    
    // Return to the original stream view
    let currentStream = document.getElementById('social-subjects').style.display === 'none' ? 'natural' : 'social';
    // Small logic fix to ensure it shows the right one
    if (document.getElementById('social-subjects').style.display === 'none' && document.getElementById('natural-subjects').style.display === 'none') {
        // Default to the choice in the dropdown
        switchStream(document.getElementById('streamChoice').value);
    }
}
