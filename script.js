const allQuestions = [
    // Geography
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

    // History
    { cat: "History", q: "Who led Ethiopia at the Battle of Adwa?", options: ["Tewodros II", "Yohannes IV", "Menelik II", "Haile Selassie"], a: "Menelik II" },
    { cat: "History", q: "In which year was 'Land to the Tiller' proclaimed?", options: ["1960", "1974", "1975", "1991"], a: "1975" },
    { cat: "History", q: "The process of modern Ethiopian unification began during the reign of:", options: ["Menelik II", "Tewodros II", "Yohannes IV", "Haile Selassie I"], a: "Tewodros II" },
    { cat: "History", q: "Which battle in 1896 ensured Ethiopia's independence from Italian colonialism?", options: ["Dogali", "Adwa", "Metemma", "Gura"], a: "Adwa" },
    { cat: "History", q: "The 'Scramble for Africa' was formalized at the:", options: ["London Conference", "Berlin Conference", "Paris Conference", "Vienna Conference"], a: "Berlin Conference" },
    { cat: "History", q: "Which Ethiopian ruler is famous for the construction of 11 rock-hewn churches?", options: ["King Ezana", "King Kaleb", "King Lalibela", "King Armah"], a: "King Lalibela" },
    { cat: "History", q: "The restoration of the Solomonic Dynasty in 1270 was led by:", options: ["Yekuno Amlak", "Amda Seyon", "Zara Yaqob", "Lalibela"], a: "Yekuno Amlak" },
    { cat: "History", q: "The 'Zemene Mesafint' (Era of Princes) ended with the rise of:", options: ["Kassa Hailu", "Ras Ali II", "Dejazmach Wube", "Sahle Selassie"], a: "Kassa Hailu" },
    { cat: "History", q: "Which article of the Wuchale Treaty led to the Battle of Adwa?", options: ["Article 3", "Article 5", "Article 17", "Article 10"], a: "Article 17" },
    { cat: "History", q: "The capital city of the Aksumite Empire was:", options: ["Gondar", "Aksum", "Lalibela", "Yeha"], a: "Aksum" },
    { cat: "History", q: "Which Ethiopian Emperor died at the Battle of Metemma fighting the Mahdists?", options: ["Tewodros II", "Yohannes IV", "Menelik II", "Iyasu V"], a: "Yohannes IV" },
    { cat: "History", q: "The Organization of African Unity (OAU) was founded in 1963 in:", options: ["Nairobi", "Accra", "Addis Ababa", "Cairo"], a: "Addis Ababa" },
    { cat: "History", q: "Who was the leader of the Adal Sultanate in the 16th century Jihad?", options: ["Ahmad ibn Ibrahim", "Sabr ad-Din", "Sa'ad ad-Din", "Mansur Musa"], a: "Ahmad ibn Ibrahim" },
    { cat: "History", q: "The 'Derg' regime officially came to power in the year:", options: ["1960", "1974", "1991", "1984"], a: "1974" },
    { cat: "History", q: "The first railway in Ethiopia connected Addis Ababa with:", options: ["Massawa", "Djibouti", "Assab", "Khartoum"], a: "Djibouti" },
    { cat: "History", q: "Which African country remained independent along with Ethiopia during colonialism?", options: ["Kenya", "Liberia", "Ghana", "Nigeria"], a: "Liberia" },
    { cat: "History", q: "The main cause of the 1974 Ethiopian Revolution was:", options: ["Famine and corruption", "External invasion", "Religious conflict", "Trade issues"], a: "Famine and corruption" },
    { cat: "History", q: "Who was the first chairperson of the OAU?", options: ["Kwame Nkrumah", "Haile Selassie I", "Jomo Kenyatta", "Julius Nyerere"], a: "Haile Selassie I" },
    { cat: "History", q: "The ancient civilization of 'Kush' was located in modern-day:", options: ["Ethiopia", "Sudan", "Egypt", "Somalia"], a: "Sudan" },
    { cat: "History", q: "The policy of 'Apartheid' was practiced in which country?", options: ["Zimbabwe", "South Africa", "Kenya", "Namibia"], a: "South Africa" },
    { cat: "History", q: "The first capital of the Solomonic Dynasty after 1270 was:", options: ["Gondar", "Lasta", "Hayq", "Shewa"], a: "Hayq" },
    { cat: "History", q: "Emperor Fasilides established his capital in 1636 at:", options: ["Debre Berhan", "Gondar", "Ankober", "Magdala"], a: "Gondar" },
    { cat: "History", q: "The 'Tripartite Treaty' of 1906 was signed between:", options: ["Italy, UK, France", "Ethiopia, Italy, UK", "Egypt, Sudan, UK", "Germany, Italy, UK"], a: "Italy, UK, France" },
    { cat: "History", q: "Which battle marked the end of the Second Italo-Ethiopian War in 1936?", options: ["Maichew", "Amba Alagi", "Temben", "Shire"], a: "Maichew" },
    { cat: "History", q: "The South African leader who ended Apartheid was:", options: ["Nelson Mandela", "Desmond Tutu", "Steve Biko", "Thabo Mbeki"], a: "Nelson Mandela" },
    { cat: "History", q: "Which ruler moved the center of the Christian kingdom to Shewa in the 19th century?", options: ["Menelik II", "Tewodros II", "Yohannes IV", "Haile Selassie I"], a: "Menelik II" },
    { cat: "History", q: "The 'Great Trek' in South African history was carried out by:", options: ["The British", "The Boers", "The Zulu", "The Xhosa"], a: "The Boers" },
    

    // Aptitude
    { cat: "Aptitude", q: "Complete the series: 5, 10, 20, 40, ...?", options: ["50", "60", "80", "100"], a: "80" },
    { cat: "Aptitude", q: "WATER is to ICE as STEAM is to: ?", options: ["Fire", "Gas", "Water", "Cloud"], a: "Water" },

    // English
    { cat: "English", q: "I _______ my homework before my father arrived last night.", options: ["finish", "have finished", "had finished", "finishing"], a: "had finished" },
    { cat: "English", q: "If I _______ enough money, I would buy a new laptop.", options: ["have", "had", "will have", "has"], a: "had" },
    { cat: "English", q: "The house _______ by my father twenty years ago.", options: ["built", "was built", "is built", "was building"], a: "was built" },
    { cat: "English", q: "She is looking forward to _______ her exam results.", options: ["see", "seen", "seeing", "saw"], a: "seeing" },
    { cat: "English", q: "I haven't seen him _______ last Monday.", options: ["for", "since", "during", "at"], a: "since" },
    { cat: "English", q: "You _______ smoke in the hospital; it's strictly forbidden.", options: ["mustn't", "don't have to", "shouldn't", "might not"], a: "mustn't" },
    { cat: "English", q: "Which word is a synonym of 'Enormous'?", options: ["Tiny", "Huge", "Soft", "Weak"], a: "Huge" },
    { cat: "English", q: "He is the boy _______ father is a famous doctor.", options: ["who", "whom", "whose", "which"], a: "whose" },
    { cat: "English", q: "Unless you _______ hard, you will fail the test.", options: ["work", "worked", "will work", "working"], a: "work" },
    { cat: "English", q: "I am used to _______ up early in the morning.", options: ["get", "getting", "got", "gets"], a: "getting" },
    { cat: "English", q: "Choose the correctly spelled word:", options: ["Occassion", "Occasion", "Ocasion", "Ocasssion"], a: "Occasion" },
    { cat: "English", q: "He speaks English _______ than his brother.", options: ["good", "well", "better", "best"], a: "better" },
    { cat: "English", q: "The meeting was _______ because of the rain.", options: ["put off", "put on", "put in", "put out"], a: "put off" },
    { cat: "English", q: "By next year, I _______ my Grade 12 studies.", options: ["finish", "will have finished", "finished", "am finishing"], a: "will have finished" },
    { cat: "English", q: "Identify the antonym of 'Generous':", options: ["Kind", "Selfish", "Happy", "Rich"], a: "Selfish" },
    { cat: "English", q: "I wish I _______ more time to study last week.", options: ["have", "had", "had had", "will have"], a: "had had" },
    { cat: "English", q: "Neither the teacher nor the students _______ present today.", options: ["is", "are", "was", "am"], a: "are" },
    { cat: "English", q: "The exam was _______ difficult that many students failed.", options: ["such", "so", "very", "too"], a: "so" },
    { cat: "English", q: "Would you mind _______ the window?", options: ["open", "to open", "opening", "opened"], a: "opening" },
    { cat: "English", q: "He asked me where I _______.", options: ["live", "lived", "living", "will live"], a: "lived" },

    // Mathematics
    { cat: "Mathematics", q: "What is the 10th term of the sequence: 2, 5, 8, 11...?", options: ["29", "30", "32", "27"], a: "29" },
    { cat: "Mathematics", q: "If the mean of 4, 8, and x is 10, find x.", options: ["18", "12", "14", "10"], a: "18" },
    { cat: "Mathematics", q: "What is the slope of the line y = 3x + 5?", options: ["5", "3", "-3", "1/3"], a: "3" },
    { cat: "Mathematics", q: "In logic, 'P and Q' is true only if:", options: ["P is true", "Q is true", "Both are true", "One is true"], a: "Both are true" },
    { cat: "Mathematics", q: "What is the value of 5! (5 factorial)?", options: ["20", "60", "120", "100"], a: "120" },
    { cat: "Mathematics", q: "The set of all possible outcomes of an experiment is called:", options: ["Event", "Sample Space", "Probability", "Subset"], a: "Sample Space" },
    { cat: "Mathematics", q: "What is the median of: 3, 7, 9, 10, 15?", options: ["7", "9", "10", "8.8"], a: "9" },
    { cat: "Mathematics", q: "Solve for x: 2x - 10 = 30.", options: ["10", "15", "20", "25"], a: "20" },
    { cat: "Mathematics", q: "A triangle with all sides equal is called:", options: ["Isosceles", "Scalene", "Equilateral", "Right"], a: "Equilateral" },
    { cat: "Mathematics", q: "What is the derivative of a constant (e.g., f(x) = 5)?", options: ["5", "1", "0", "x"], a: "0" },
    { cat: "Mathematics", q: "Convert 0.5 to a percentage:", options: ["5%", "0.5%", "50%", "500%"], a: "50%" },
    { cat: "Mathematics", q: "What is the square root of 144?", options: ["10", "11", "12", "14"], a: "12" },
    { cat: "Mathematics", q: "The sum of the angles in a triangle is:", options: ["90°", "180°", "360°", "270°"], a: "180°" },
    { cat: "Mathematics", q: "What is the value of log10(100)?", options: ["1", "2", "3", "10"], a: "2" },
    { cat: "Mathematics", q: "Which of these is a prime number?", options: ["4", "9", "13", "15"], a: "13" },
    { cat: "Mathematics", q: "If a set A = {1, 2} and B = {2, 3}, what is A ∩ B?", options: ["{1, 2, 3}", "{2}", "{1, 3}", "{ }"], a: "{2}" },
    { cat: "Mathematics", q: "What is the formula for the area of a circle?", options: ["2πr", "πr²", "bh/2", "lw"], a: "πr²" },
    { cat: "Mathematics", q: "The number of subsets of a set with 3 elements is:", options: ["3", "6", "8", "9"], a: "8" },
    { cat: "Mathematics", q: "Which quadrant has both x and y negative?", options: ["I", "II", "III", "IV"], a: "III" },
    { cat: "Mathematics", q: "What is 2 to the power of 5?", options: ["10", "25", "32", "64"], a: "32" },

    // Economics
    { cat: "Economics", q: "The basic economic problem facing all societies is:", options: ["Inflation", "Scarcity", "Unemployment", "Poverty"], a: "Scarcity" },
    { cat: "Economics", q: "Which market has only one seller?", options: ["Oligopoly", "Perfect Competition", "Monopoly", "Monopolistic"], a: "Monopoly" },
    { cat: "Economics", q: "The Law of Demand states that as price increases, demand:", options: ["Increases", "Decreases", "Stays same", "Fluctuates"], a: "Decreases" },
    { cat: "Economics", q: "Gross Domestic Product (GDP) measures:", options: ["Total population", "Total debt", "Total output", "Total tax"], a: "Total output" },
    { cat: "Economics", q: "Which of these is a factor of production?", options: ["Money", "Capital", "Stock", "Bond"], a: "Capital" },
    { cat: "Economics", q: "Inflation is defined as a general increase in:", options: ["Wages", "Prices", "Production", "Interest rates"], a: "Prices" },
    { cat: "Economics", q: "Opportunity cost is defined as:", options: ["Total cost", "Hidden cost", "Next best alternative", "Fixed cost"], a: "Next best alternative" },
    { cat: "Economics", q: "Fiscal policy is managed by the:", options: ["Central Bank", "Government", "Commercial Banks", "World Bank"], a: "Government" },
    { cat: "Economics", q: "The 'Father of Modern Economics' is:", options: ["Karl Marx", "Adam Smith", "John Keynes", "David Ricardo"], a: "Adam Smith" },
    { cat: "Economics", q: "Microeconomics focuses on:", options: ["National income", "Individual behavior", "Global trade", "Total inflation"], a: "Individual behavior" },
    { cat: "Economics", q: "A budget surplus occurs when:", options: ["Tax > Spending", "Spending > Tax", "Tax = Spending", "Debt = 0"], a: "Tax > Spending" },
    { cat: "Economics", q: "The point where supply equals demand is called:", options: ["Shortage", "Surplus", "Equilibrium", "Elasticity"], a: "Equilibrium" },
    { cat: "Economics", q: "Which type of bank is known as the 'Banker's Bank'?", options: ["Commercial Bank", "Central Bank", "Development Bank", "Saving Bank"], a: "Central Bank" },
    { cat: "Economics", q: "The reward for Labor is:", options: ["Profit", "Interest", "Rent", "Wages"], a: "Wages" },
    { cat: "Economics", q: "A tax that takes a higher percentage from the rich is:", options: ["Proportional", "Regressive", "Progressive", "Fixed"], a: "Progressive" },
    { cat: "Economics", q: "What does 'Laissez-faire' mean?", options: ["Government control", "Free market", "Mixed economy", "Socialism"], a: "Free market" },
    { cat: "Economics", q: "The Human Development Index (HDI) includes:", options: ["Life expectancy", "Education", "Income per capita", "All of the above"], a: "All of the above" },
    { cat: "Economics", q: "Elasticity of demand measures responsiveness to:", options: ["Price change", "Weather change", "Supply change", "Legal change"], a: "Price change" },
    { cat: "Economics", q: "What is the main objective of a private firm?", options: ["Social service", "Tax evasion", "Profit maximization", "Job creation"], a: "Profit maximization" },
    { cat: "Economics", q: "Trade between two countries is called:", options: ["Internal trade", "Local trade", "International trade", "Regional trade"], a: "International trade" }
];

let currentQuestions = [];
let currentIdx = 0;
let score = 0;
let timeLeft = 15;
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
    timeLeft = 30;
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
        if (timeLeft <= 0) { 
            clearInterval(timer); 
            checkAnswer(null); 
        }
    }, 1000);
}

function checkAnswer(ans) {
    clearInterval(timer);
    if (ans === currentQuestions[currentIdx].a) { 
        score++; 
        alert("Correct! 🎉"); 
    }
    else { 
        alert("Wrong! Correct was: " + currentQuestions[currentIdx].a); 
    }
    currentIdx++;
    loadQuestion();
}

function showResult() {
    let msg = `Finished! Score: ${score}/${currentQuestions.length}`;
    document.getElementById("quiz-box").innerHTML = `
        <h2>${msg}</h2>
        <button onclick="location.reload()">Back to Home</button>
        <button onclick="window.open('https://t.me/share/url?text=${encodeURIComponent(msg)}')">Share Score</button>
    `;
}

function cancelQuiz() {
    if (confirm("Are you sure you want to quit?")) {
        clearInterval(timer); 
        document.getElementById("quiz-box").style.display = "none"; 
        document.getElementById("subject-selection").style.display = "flex"; 
    }
}
