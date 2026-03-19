const allQuestions = [
    { cat: "Geography", q: "Which is the highest mountain in Ethiopia?", options: ["Batu", "Ras Dashen", "Guge", "Chilalo"], a: "Ras Dashen" },
    { cat: "Geography", q: "Which lake is the source of the Blue Nile?", options: ["Ziway", "Abaya", "Tana", "Chamo"], a: "Tana" },
 
    { cat : "On a topographic map, V-shaped contour lines pointing uphill indicate a:", options: ["Valley", "Ridge", "Cliff", "Plain"], a: "Valley" },
    { cat : "Which map scale is the largest?", options: ["1:500,000", "1:250,000", "1:50,000", "1:1,000,000"], a: "1:50,000" },
    { cat : "The ratio between map distance and ground distance is called:", options: ["Legend", "Scale", "Grid", "Projection"], a: "Scale" },
    { cat : "Which tool is used to measure irregular lines on a map?", options: ["Ruler", "Opisometer", "Protractor", "Compass"], a: "Opisometer" },
    { cat : "The largest physiographic region of Ethiopia is:", options: ["The Rift Valley", "The Southeastern Highlands", "The Western Highlands", "The Lowlands"], a: "The Western Highlands" },
    { cat : "Which geological era is known as the 'Age of Reptiles'?", options: ["Cenozoic", "Mesozoic", "Paleozoic", "Precambrian"], a: "Mesozoic" },
    { cat : "The highest peak in the Semien Mountains is:", options: ["Mount Batu", "Mount Gughe", "Ras Dashen", "Mount Abune Yosef"], a: "Ras Dashen" },
    { cat  : "Which lake is the largest in Ethiopia by surface area?", options: ["Lake Chamo", "Lake Abaya", "Lake Tana", "Lake Ziway"], a: "Lake Tana" },
    {  cat : "The traditional climate zone between 1500m and 2300m is:", options: ["Kolla", "Dega", "Woina Dega", "Bereha"], a: "Woina Dega" },
    { cat: "Which river is the only one that flows eastward into the Afar depression?", options: ["Abbay", "Awash", "Omo", "Genale"], a: "Awash" },
    { cat: "The 'Inland Drainage System' of Ethiopia includes which river?", options: ["Tekeze", "Baro", "Omo-Gibe", "Blue Nile"], a: "Omo-Gibe" },
    { cat: "Which factor most influences the climate of Ethiopia?", options: ["Latitude", "Altitude", "Cloud cover", "Ocean currents"], a: "Altitude" },

    // Population & Economy
    { cat: "The most densely populated part of Ethiopia is the:", options: ["North", "South-Central", "East", "West"], a: "South-Central" },
    { cat: "Which crop is Ethiopia's primary export item?", options: ["Teff", "Coffee", "Wheat", "Maize"], a: "Coffee" },
    { cat: "A 'Pyramid' with a wide base and narrow top indicates:", options: ["Low birth rate", "High birth rate", "Aging population", "Slow growth"], a: "High birth rate" },
    { cat: "The most common type of farming in the Ethiopian highlands is:", options: ["Shift cultivation", "Mixed farming", "Plantation", "State farming"], a: "Mixed farming" },

    // Environment & Natural Resources
    { cat: "The clearing of forests for agriculture is called:", options: ["Afforestation", "Deforestation", "Reforestation", "Terracing"], a: "Deforestation" },
    { cat: "Which soil type is also known as 'Black Cotton Soil'?", options: ["Nitosols", "Vertisols", "Fluvisols", "Lithosols"], a: "Vertisols" },
    { cat: "The 'Great Rift Valley' was formed by which process?", options: ["Volcanic eruption", "Faulting", "Folding", "Erosion"], a: "Faulting" },
    { cat: "Which of the following is a renewable energy source in Ethiopia?", options: ["Coal", "Natural Gas", "Hydroelectric power", "Oil"], a: "Hydroelectric power" }
];
    { cat: "Geography", q: "On a map, close contour lines indicate:", options: ["Flat plain", "Steep slope", "Deep lake", "Desert"], a: "Steep slope" },
    { cat: "History", q: "Who led Ethiopia at the Battle of Adwa?", options: ["Tewodros II", "Yohannes IV", "Menelik II", "Haile Selassie"], a: "Menelik II" },
    { cat: "History", q: "In which year was 'Land to the Tiller' proclaimed?", options: ["1960", "1974", "1975", "1991"], a: "1975" },
    { cat: "Aptitude", q: "Complete the series: 5, 10, 20, 40, ...?", options: ["50", "60", "80", "100"], a: "80" },
    { cat: "Aptitude", q: "WATER is to ICE as STEAM is to: ?", options: ["Fire", "Gas", "Water", "Cloud"], a: "Water" }
    // Add more from our previous chat here...
];

let currentQuestions = [];
let currentIdx = 0;
let score = 0;
let timeLeft = 30;
let timer;

function startQuiz(category) {
    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("quiz-box").style.display = "block";
    currentQuestions = allQuestions.filter(q => q.cat === category);
    currentIdx = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    if (currentIdx >= currentQuestions.length) {
        showResult();
        return;
    }
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById("timer").innerText = "Time Left: " + timeLeft + "s";
    
    let q = currentQuestions[currentIdx];
    document.getElementById("question-text").innerText = q.q;
    let container = document.getElementById("btns-container");
    container.innerHTML = "";

    q.options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        container.appendChild(btn);
    });

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = "Time Left: " + timeLeft + "s";
        if (timeLeft <= 0) { clearInterval(timer); checkAnswer(null); }
    }, 1000);
}

function checkAnswer(ans) {
    clearInterval(timer);
    if (ans === currentQuestions[currentIdx].a) { score++; alert("Correct! 🎉"); }
    else { alert("Wrong! Correct was: " + currentQuestions[currentIdx].a); }
    currentIdx++;
    loadQuestion();
}

function showResult() {
    let msg = `Finished! Score: ${score}/${currentQuestions.length}`;
    document.getElementById("quiz-box").innerHTML = `<h2>${msg}</h2>
    <button onclick="location.reload()">Back to Home</button>
    <button onclick="window.open('https://t.me/share/url?text=${msg}')">Share Score</button>`;
}
