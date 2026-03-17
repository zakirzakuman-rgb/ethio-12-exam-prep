let currentUser = "";

// ሎጊን መቆጣጠሪያ
function checkLogin() {
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (name.trim() !== "" && pass === "zakir123") {
        currentUser = name;
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-quiz-page").style.display = "block";
        document.getElementById("welcome-text").innerText = "Welcome, " + currentUser + "! Good luck on your practice.";
    } else {
        alert("Invalid Login! Try Username: (Your Name) and Password: zakir123");
    }
}

// የጥያቄዎች ዝርዝር
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
            { q: "Look! The bus ___.\nA) come\nB) is coming\nC) comes\nD) came", a: "B" }
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
            { q: "Treaty that ended 1st Italio-Ethiopian war:\nA) Wuchale\nB) Addis Ababa\nC) Versailles\nD) Berlin", a: "B" }
        ];
    } else if (subject === 'Geography') {
        questions = [
            { q: "Renewable energy source:\nA) Coal\nB) Solar\nC) Oil\nD) Gas", a: "B" },
            { q: "Earth's innermost layer:\nA) Crust\nB) Mantle\nC) Core\nD) Lithosphere", a: "C" },
            { q: "Highest point in Ethiopia:\nA) Batu\nB) Ras Dashen\nC) Chilalo\nD) Guna", a: "B" },
            { q: "Soil being carried away by wind/water:\nA) Deforestation\nB) Erosion\nC) Irrigation\nD) Fertilization", a: "B" },
            { q: "Scale for Earthquake intensity:\nA) Richter\nB) Barometer\nC) Thermometer\nD) Hygrometer", a: "A" },
            { q: "Largest ocean:\nA) Atlantic\nB) Indian\nC) Pacific\nD) Arctic", a: "C" },
            { q: "Most abundant gas in atmosphere:\nA) Oxygen\nB) CO2\nC) Nitrogen\nD) Hydrogen", a: "C" },
            { q: "Rural to urban movement:\nA) Migration\nB) Urbanization\nC) Resettlement\nD) Immigration", a: "B" },
            { q: "Blue Nile is also known as:\nA) Awash\nB) Abbay\nC) Wabe Shebelle\nD) Omo", a: "B" },
            { q: "Physical features map:\nA) Political\nB) Topographic\nC) Road\nD) Climate", a: "B" }
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
            { q: "Normal demand curve slope is:\nA) Positive\nB) Negative\nC) Zero\nD) Undefined", a: "B" }
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
            { q: "A car travels 60km in 1 hour. How far in 30 minutes?\nA) 20km\nB) 30km\nC) 40km\nD) 15km", a: "B" }
        ];
    }

   function runQuiz(questions) {
    let score = 0;
    let total = questions.length;

    for (let i = 0; i < total; i++) {
        // ጥያቄውን መጠየቅ
        let userAns = prompt("Question " + (i + 1) + " of " + total + "\n\n" + questions[i].q + "\n\n(Click Cancel to Stop)");

        // ተጠቃሚው 'Cancel' ከነካ userAns "null" ይሆናል
        if (userAns === null) {
            alert("Quiz Cancelled.");
            return; // እዚህ ጋር ፋንክሽኑ ይቆማል፣ ወደ ቀጣዩ ጥያቄ አይሄድም
        }

        // መልሱ ትክክል መሆኑን መፈተሽ
        if (userAns.trim().toUpperCase() === questions[i].a) {
            score++;
        }
    }

    let percentage = (score / total) * 100;
    alert(currentUser + ", your Result:\nScore: " + score + "/" + total + "\nPercentage: " + percentage + "%");
}
    alert(currentUser + ", your Results:\nScore: " + score + "/" + total + "\nPercentage: " + percentage + "%");
}
