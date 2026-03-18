let currentUser = "";

// 1. የሎጊን መቆጣጠሪያ
function checkLogin() {
    let nameBox = document.getElementById("username");
    let passBox = document.getElementById("password");

    if (!nameBox || !passBox) return;

    let name = nameBox.value.trim();
    let pass = passBox.value.trim();

    if (name !== "" && pass === "zakir123") {
        currentUser = name;
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-quiz-page").style.display = "block";
        document.getElementById("welcome-text").innerText = "Welcome, " + currentUser + "!";
    } else {
        alert("Incorrect Password! (Hint: zakir123)");
    }
}

// 2. የጥያቄዎች ማከማቻ
function startQuiz(subject) {
    let questions = [];

    if (subject === 'English') {
        questions = [
            { q: "She ___ to school every day.\nA) go\nB) goes\nC) going\nD) gone", a: "B" },
            { q: "If I ___ you, I would study hard.\nA) am\nB) was\nC) were\nD) be", a: "C" },
            { q: "I have been living here ___ 2010.\nA) for\nB) since\nC) at\nD) in", a: "B" },
            { q: "Choose the synonym of 'Huge':\nA) Small\nB) Enormous\nC) Tiny\nD) Soft", a: "B" },
            { q: "The man ___ stole the car was caught.\nA) which\nB) who\nC) whose\nD) whom", a: "B" },
            { q: "Which one is correctly spelled?\nA) Recieve\nB) Receive\nC) Riceive\nD) Recive", a: "B" },
            { q: "He is ___ honest man.\nA) a\nB) an\nC) the\nD) no article", a: "B" },
            { q: "They ___ the exam last week.\nA) take\nB) takes\nC) took\nD) taken", a: "C" },
            { q: "I don't have ___ money in my pocket.\nA) many\nB) much\nC) few\nD) a", a: "B" },
            { q: "Look! The bus ___.\nA) come\nB) is coming\nC) comes\nD) came", a: "B" },
            { q: "Choose the correct passive form: 'The boy broke the window.'\nA) The window is broken.\nB) The window was broken by the boy.\nC) The window breaks.\nD) The window had broken.", a: "B" },
{ q: "I would have passed the exam if I ___ harder.\nA) study\nB) had studied\nC) will study\nD) am studying", a: "B" },
{ q: "Identify the antonym of 'Advance':\nA) Progress\nB) Move\nC) Retreat\nD) Forward", a: "C" },
{ q: "She is the woman ___ daughter won the prize.\nA) who\nB) whom\nC) whose\nD) which", a: "C" },
{ q: "Which one is a correctly punctuated sentence?\nA) He said 'I am coming.'\nB) He said, 'I am coming.'\nC) He said 'I am coming'.\nD) He said, I am coming.", a: "B" }
        ];
    } else if (subject === 'History') {
        questions = [
            { q: "The Battle of Adwa was fought in:\nA) 1896\nB) 1889\nC) 1935\nD) 1872", a: "A" },
            { q: "The main cause of WWI was:\nA) Scramble\nB) Assassination of Franz Ferdinand\nC) Cold War\nD) Industrialization", a: "B" },
            { q: "Aksum reached its peak during:\nA) Ezana\nB) Kaleb\nC) Zoskales\nD) Armah", a: "A" },
            { q: "The Berlin Conference was about:\nA) Slavery\nB) Partition of Africa\nC) Peace\nD) Trade", a: "B" },
            { q: "Mussolini was the leader of:\nA) Germany\nB) Italy\nC) France\nD) Britain", a: "B" },
            { q: "Which country was never colonized?\nA) Kenya\nB) Ethiopia\nC) Nigeria\nD) Ghana", a: "B" },
            { q: "Solomonic Dynasty restored in 1270 by:\nA) Yekuno Amlak\nB) Amda Seyon\nC) Zara Yaqob\nD) Lalibela", a: "A" },
            { q: "The UN was established in:\nA) 1918\nB) 1945\nC) 1963\nD) 1991", a: "B" },
            { q: "Industrial revolution started in:\nA) USA\nB) France\nC) Britain\nD) Germany", a: "C" },
            { q: "Treaty that ended 1st Italio-Ethiopian war:\nA) Wuchale\nB) Addis Ababa\nC) Versailles\nD) Berlin", a: "B" },
            { q: "The 'League of Nations' was replaced by the UN in:\nA) 1918\nB) 1939\nC) 1945\nD) 1991", a: "C" },
{ q: "Who was the leader of the Fascist party in Italy?\nA) Hitler\nB) Mussolini\nC) Stalin\nD) Franco", a: "B" },
{ q: "The 1941 'Gideon Force' was led by:\nA) Orde Wingate\nB) Graziani\nC) Cunningham\nD) Badoglio", a: "A" },
{ q: "Which conference led to the 'Scramble for Africa'?\nA) London\nB) Paris\nC) Berlin\nD) Rome", a: "C" },
{ q: "The first president of the OAU (AU) was:\nA) Haile Selassie\nB) Kwame Nkrumah\nC) Jomo Kenyatta\nD) Julius Nyerere", a: "A" }
        ];
    } else if (subject === 'Math') {
        questions = [
            { q: "What is 2 to the power of 5 (2^5)?\nA) 10\nB) 16\nC) 32\nD) 64", a: "C" },
            { q: "Solve for x: 2x + 5 = 15\nA) 5\nB) 10\nC) 7.5\nD) 20", a: "A" },
            { q: "What is the square root of 144?\nA) 11\nB) 12\nC) 14\nD) 16", a: "B" },
            { q: "What is the area of a circle with radius 7? (π = 22/7)\nA) 44\nB) 154\nC) 49\nD) 98", a: "B" },
            { q: "A triangle has 60° and 90°, what is the 3rd angle?\nA) 30°\nB) 45°\nC) 60°\nD) 90°", a: "A" },
            { q: "What is 15% of 200?\nA) 20\nB) 25\nC) 30\nD) 40", a: "C" },
            { q: "Simplify: (3x^2) * (2x^3)\nA) 5x^5\nB) 6x^5\nC) 6x^6\nD) 5x^6", a: "B" },
            { q: "What is the slope of the line y = 3x + 4?\nA) 4\nB) 3\nC) -3\nD) 7", a: "B" },
            { q: "Sum of angles in a quadrilateral is:\nA) 180°\nB) 270°\nC) 360°\nD) 540°", a: "C" },
            { q: "Solve: 10 - (2 * 3) + 4\nA) 28\nB) 8\nC) 10\nD) 12", a: "B" },
            { q: "What is the derivative of x^2?\nA) x\nB) 2x\nC) 2\nD) x^3", a: "B" },
{ q: "Solve for x: log10(100) = x\nA) 1\nB) 2\nC) 10\nD) 100", a: "B" },
{ q: "What is the value of Sin(90°)?\nA) 0\nB) 0.5\nC) 1\nD) -1", a: "C" },
{ q: "Find the mean of: 2, 4, 6, 8, 10\nA) 4\nB) 5\nC) 6\nD) 8", a: "C" },
{ q: "If A = {1, 2} and B = {2, 3}, what is A ∩ B?\nA) {1, 2, 3}\nB) {2}\nC) {1, 3}\nD) { }", a: "B" }
        ];
    } else if (subject === 'Geography') {
        questions = [
            { q: "Renewable energy source:\nA) Coal\nB) Solar\nC) Oil\nD) Natural Gas", a: "B" },
            { q: "Earth's innermost layer:\nA) Crust\nB) Mantle\nC) Core\nD) Lithosphere", a: "C" },
            { q: "Highest point in Ethiopia:\nA) Mount Batu\nB) Ras Dashen\nC) Mount Chilalo\nD) Mount Guna", a: "B" },
            { q: "Soil being carried away by wind/water:\nA) Deforestation\nB) Erosion\nC) Irrigation\nD) Fertilization", a: "B" },
            { q: "Scale for Earthquake intensity:\nA) Richter Scale\nB) Barometer\nC) Thermometer\nD) Hygrometer", a: "A" },
            { q: "Largest ocean:\nA) Atlantic\nB) Indian\nC) Pacific\nD) Arctic", a: "C" },
            { q: "Most abundant gas in atmosphere:\nA) Oxygen\nB) Carbon Dioxide\nC) Nitrogen\nD) Hydrogen", a: "C" },
            { q: "Movement from rural to urban areas:\nA) Migration\nB) Urbanization\nC) Resettlement\nD) Immigration", a: "B" },
            { q: "Blue Nile is also known as:\nA) Awash\nB) Abbay\nC) Wabe Shebelle\nD) Omo", a: "B" },
            { q: "Shows physical features of land:\nA) Political map\nB) Topographic map\nC) Road map\nD) Climate map", a: "B" },
            { q: "Which of the following is a non-renewable resource?\nA) Wind\nB) Water\nC) Natural Gas\nD) Solar", a: "C" },
{ q: "The Earth's rotation on its axis causes:\nA) Seasons\nB) Day and Night\nC) Tides\nD) Eclipses", a: "B" },
{ q: "What is the capital city of the African Union (AU)?\nA) Nairobi\nB) Cairo\nC) Addis Ababa\nD) Lagos", a: "C" },
{ q: "The study of human populations is called:\nA) Cartography\nB) Demography\nC) Geology\nD) Meteorology", a: "B" },
{ q: "The layer of the atmosphere where weather occurs is:\nA) Stratosphere\nB) Mesosphere\nC) Troposphere\nD) Exosphere", a: "C" }
        ];
    } else if (subject === 'Economics') {
        questions = [
            { q: "Human wants are ___ but resources are ___.\nA) Limited, Unlimited\nB) Unlimited, Limited\nC) Small, Large\nD) Fixed, Growing", a: "B" },
            { q: "Primary goal of a firm:\nA) Pay taxes\nB) Profit maximization\nC) Social service\nD) Increasing costs", a: "B" },
            { q: "GDP stands for:\nA) Great Domestic Product\nB) Gross Domestic Product\nC) General Daily Profit\nD) Gross Deposit Price", a: "B" },
            { q: "Continuous rise in prices:\nA) Deflation\nB) Inflation\nC) Stagnation\nD) Recession", a: "B" },
            { q: "Market equilibrium occurs when:\nA) Supply > Demand\nB) Demand > Supply\nC) Demand = Supply\nD) Price is zero", a: "C" },
            { q: "Direct tax example:\nA) VAT\nB) Income Tax\nC) Sales Tax\nD) Excise Tax", a: "B" },
            { q: "The 'Invisible Hand' theory was by:\nA) Adam Smith\nB) Karl Marx\nC) Keynes\nD) Malthus", a: "A" },
            { q: "Money serves as a:\nA) Medium of exchange\nB) Store of value\nC) Unit of account\nD) All of the above", a: "D" },
            { q: "If coffee price rises, tea demand will:\nA) Fall\nB) Stay same\nC) Rise\nD) Become zero", a: "C" },
            { q: "Normal demand curve slope is:\nA) Positive\nB) Negative\nC) Zero\nD) Undefined", a: "B" },
            { q: "The law of supply states that as price rises, quantity supplied:\nA) Falls\nB) Stays the same\nC) Rises\nD) Becomes zero", a: "C" },
{ q: "What is 'Opportunity Cost'?\nA) Total money spent\nB) The value of the next best alternative given up\nC) Monthly salary\nD) Business tax", a: "B" },
{ q: "A market with only ONE seller is called:\nA) Perfect competition\nB) Oligopoly\nC) Monopoly\nD) Monopolistic competition", a: "C" },
{ q: "Inflation is measured by the:\nA) GDP\nB) CPI (Consumer Price Index)\nC) Interest rate\nD) Export value", a: "B" },
{ q: "Which of the following is a factor of production?\nA) Capital\nB) Demand\nC) Price\nD) Utility", a: "A" }
        ];
    } else if (subject === 'Aptitude') {
        questions = [
            { q: "Complete: 2, 4, 8, 16, ___?\nA) 20\nB) 24\nC) 32\nD) 64", a: "C" },
            { q: "If BOY is 2-15-25, what is CAT?\nA) 3-1-20\nB) 3-5-20\nC) 1-3-20\nD) 3-1-19", a: "A" },
            { q: "Which word is odd?\nA) Apple\nB) Banana\nC) Carrot\nD) Orange", a: "C" },
            { q: "Brother is to Sister as Uncle is to ___?\nA) Mother\nB) Aunt\nC) Niece\nD) Father", a: "B" },
            { q: "If all A are B, and all B are C, then all A are C.\nA) True\nB) False", a: "A" },
            { q: "Clock is to Time as Thermometer is to ___?\nA) Rain\nB) Heat\nC) Temperature\nD) Wind", a: "C" },
            { q: "Find the missing: 100, 90, 80, 70, ___?\nA) 50\nB) 60\nC) 65\nD) 55", a: "B" },
            { q: "Which number is prime?\nA) 4\nB) 9\nC) 13\nD) 15", a: "C" },
            { q: "Water is to Ice as Milk is to ___?\nA) Cow\nB) Cheese\nC) Drink\nD) White", a: "B" },
            { q: "A car travels 60km in 1 hour. How far in 30 minutes?\nA) 20km\nB) 30km\nC) 40km\nD) 15km", a: "B" },
            { q: "Find the odd one out:\nA) Square\nB) Circle\nC) Rectangle\nD) Triangle", a: "B" },
{ q: "If 5 workers can build a wall in 10 days, how many days for 10 workers?\nA) 20\nB) 10\nC) 5\nD) 2", a: "C" },
{ q: "Complete: J, F, M, A, M, J, ___?\nA) A\nB) S\nC) J\nD) O", a: "C" },
{ q: "A is the father of B, but B is not the son of A. What is B?\nA) Daughter\nB) Brother\nC) Sister\nD) Mother", a: "A" },
{ q: "Which number comes next: 1, 4, 9, 16, 25, ___?\nA) 30\nB) 36\nC) 40\nD) 49", a: "B" }
        ];
    }

    runQuiz(questions);
}

// 3. የጥያቄ ማሽኑ
function runQuiz(questions) {
    if (questions.length === 0) {
        alert("No questions found!");
        return;
    }

    let score = 0;
    let total = questions.length;

    for (let i = 0; i < total; i++) {
        let userAns = prompt("Question " + (i + 1) + " of " + total + "\n\n" + questions[i].q + "\n\n(Cancel to Stop)");
        
        if (userAns === null) {
            alert("Quiz Stopped.");
            return;
        }

        if (userAns.trim().toUpperCase() === questions[i].a) {
            score++;
        }
    }

    let percentage = (score / total) * 100;
    alert(currentUser + ", your Score: " + score + "/" + total + " (" + percentage + "%)");
}
// ውጤትን ለማስቀመጥ የሚረዳ ፈንክሽን
function saveScore(userName, userScore) {
    // ቀድሞ የተቀመጡ ውጤቶችን ማምጣት (ከሌለ ባዶ ድርድር መፍጠር)
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    
    // አዲሱን ውጤት መጨመር
    leaderboard.push({ name: userName, score: userScore });
    
    // ውጤቱን ከከፍተኛ ወደ ዝቅተኛ መደርደር (Sorting)
    leaderboard.sort((a, b) => b.score - a.score);
    
    // ዋናዎቹን 5 ብቻ ማስቀረት (Top 5)
    leaderboard = leaderboard.slice(0, 5);
    
    // ተመልሶ በስልኩ ሜሞሪ እንዲቀመጥ ማድረግ
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    
    displayLeaderboard();
}

// ውጤቱን በዌብሳይቱ ላይ የሚያሳይ ፈንክሽን
function displayLeaderboard() {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    let listHTML = "<h3>🏆 Top 5 Leaders</h3><ol>";
    
    leaderboard.forEach(entry => {
        listHTML += `<li>${entry.name}: ${entry.score} ነጥብ</li>`;
    });
    
    listHTML += "</ol>";
    document.getElementById('leaderboard-container').innerHTML = listHTML;
}
