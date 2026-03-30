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
{ cat: "Aptitude", q: "Complete the series: 2, 6, 12, 20, 30, ...?", options: ["36", "40", "42", "50"], a: "42" },
{ cat: "Aptitude", q: "If 5 workers can build a wall in 10 days, how many days will it take 10 workers?", options: ["20", "5", "15", "8"], a: "5" },
{ cat: "Aptitude", q: "Find the odd one out:", options: ["Square", "Triangle", "Rectangle", "Circle"], a: "Circle" },
{ cat: "Aptitude", q: "Which number comes next: 1, 4, 9, 16, 25, ...?", options: ["30", "35", "36", "49"], a: "36" },
{ cat: "Aptitude", q: "If 'BOOK' is coded as 26611, how is 'PEN' coded?", options: ["16514", "15413", "17615", "16614"], a: "16514" },
{ cat: "Aptitude", q: "A father is 3 times as old as his son. If the sum of their ages is 48, how old is the son?", options: ["10", "12", "14", "16"], a: "12" },
{ cat: "Aptitude", q: "Find the missing number: 100, 90, 70, 40, ...?", options: ["0", "10", "20", "30"], a: "0" },
{ cat: "Aptitude", q: "Which word does NOT belong with the others?", options: ["Leopard", "Cougar", "Lion", "Wolf"], a: "Wolf" },
{ cat: "Aptitude", q: "What is 20% of 25% of 400?", options: ["20", "40", "10", "25"], a: "20" },
{ cat: "Aptitude", q: "If today is Monday, what day will it be after 61 days?", options: ["Wednesday", "Saturday", "Tuesday", "Thursday"], a: "Saturday" },
{ cat: "Aptitude", q: "Point A is 10m North of B. C is 10m East of B. What is the direction of A from C?", options: ["North-East", "South-West", "North-West", "South-East"], a: "North-West" },
{ cat: "Aptitude", q: "Complete the series: J, L, N, P, ...?", options: ["Q", "R", "S", "T"], a: "R" },
{ cat: "Aptitude", q: "How many months have 28 days?", options: ["1", "6", "12", "None"], a: "12" },
{ cat: "Aptitude", q: "A car travels 120km in 2 hours. What is its speed in m/s?", options: ["60", "30", "16.6", "20"], a: "16.6" },
{ cat: "Aptitude", q: "If A is taller than B, and B is taller than C, who is the shortest?", options: ["A", "B", "C", "Cannot tell"], a: "C" },
{ cat: "Aptitude", q: "What is the next prime number after 19?", options: ["21", "23", "25", "27"], a: "23" },
{ cat: "Aptitude", q: "A clock shows 3:00. What is the angle between the hands?", options: ["45°", "60°", "90°", "120°"], a: "90°" },
{ cat: "Aptitude", q: "Find the next number: 3, 6, 11, 18, 27, ...?", options: ["34", "36", "38", "40"], a: "38" },
{ cat: "Aptitude", q: "If 1=5, 2=25, 3=125, then 5=?", options: ["625", "3125", "1", "5"], a: "1" },
{ cat: "Aptitude", q: "Which number is divisible by 3?", options: ["124", "256", "312", "401"], a: "312" },
{ cat: "Aptitude", q: "The average of 10, 20, and 30 is:", options: ["15", "20", "25", "30"], a: "20" },
{ cat: "Aptitude", q: "If Water is called Food, and Food is called Tree, what do we drink?", options: ["Water", "Food", "Tree", "Drink"], a: "Food" },
{ cat: "Aptitude", q: "What comes next: 81, 64, 49, 36, ...?", options: ["20", "25", "30", "16"], a: "25" },
{ cat: "Aptitude", q: "A shop gives 10% discount on 500 ETB. What is the final price?", options: ["400", "450", "490", "510"], a: "450" },
{ cat: "Aptitude", q: "Complete: Hand is to Glove as Head is to ...?", options: ["Hat", "Hair", "Neck", "Ear"], a: "Hat" },
{ cat: "Aptitude", q: "How many triangles are in a square with both diagonals drawn?", options: ["4", "6", "8", "10"], a: "8" },
{ cat: "Aptitude", q: "If 3x + 5 = 20, what is x?", options: ["3", "5", "7", "15"], a: "5" },
{ cat: "Aptitude", q: "Which fraction is the largest?", options: ["1/2", "3/4", "2/3", "5/8"], a: "3/4" },
{ cat: "Aptitude", q: "If 'NORTH' becomes 'SOUTH', what does 'WEST' become?", options: ["EAST", "NORTH", "SOUTH", "LEFT"], a: "EAST" },
{ cat: "Aptitude", q: "Find the missing: 2, 3, 5, 7, 11, ...?", options: ["12", "13", "14", "15"], a: "13" },

// --- ECONOMICS (50 Questions) ---
{ cat: "Economics", q: "The basic economic problem common to all societies is:", options: ["Inflation", "Unemployment", "Scarcity", "Poverty"], a: "Scarcity" },
{ cat: "Economics", q: "What is the primary goal of a firm in a capitalist economy?", options: ["Social welfare", "Profit maximization", "Price stability", "Full employment"], a: "Profit maximization" },
{ cat: "Economics", q: "A shift in the demand curve to the right indicates:", options: ["Decrease in demand", "Increase in demand", "Decrease in price", "Increase in price"], a: "Increase in demand" },
{ cat: "Economics", q: "The 'Father of Modern Economics' is:", options: ["Karl Marx", "Adam Smith", "John Maynard Keynes", "David Ricardo"], a: "Adam Smith" },
{ cat: "Economics", q: "Which of the following is a factor of production?", options: ["Money", "Labor", "Stocks", "Bonds"], a: "Labor" },
{ cat: "Economics", q: "Microeconomics deals with:", options: ["National income", "Individual markets", "General price level", "Total employment"], a: "Individual markets" },
{ cat: "Economics", q: "What happens to demand when the price of a substitute good increases?", options: ["Demand decreases", "Demand increases", "No change", "Supply decreases"], a: "Demand increases" },
{ cat: "Economics", q: "The law of demand states that price and quantity demanded have:", options: ["Direct relationship", "Inverse relationship", "No relationship", "Positive relationship"], a: "Inverse relationship" },
{ cat: "Economics", q: "GDP stands for:", options: ["General Domestic Product", "Gross Domestic Product", "Gross Deposit Profit", "Government Domestic Product"], a: "Gross Domestic Product" },
{ cat: "Economics", q: "Market structure with only one seller is called:", options: ["Oligopoly", "Monopoly", "Perfect Competition", "Monopolistic Competition"], a: "Monopoly" },
{ cat: "Economics", q: "The cost of the next best alternative foregone is:", options: ["Marginal cost", "Opportunity cost", "Fixed cost", "Variable cost"], a: "Opportunity cost" },
{ cat: "Economics", q: "Which type of economy is based on customs and beliefs?", options: ["Command economy", "Market economy", "Traditional economy", "Mixed economy"], a: "Traditional economy" },
{ cat: "Economics", q: "Inflation is defined as:", options: ["Decrease in prices", "Increase in unemployment", "Persistent rise in general price level", "Increase in GDP"], a: "Persistent rise in general price level" },
{ cat: "Economics", q: "A budget deficit occurs when:", options: ["Revenue > Expenditure", "Expenditure > Revenue", "Exports > Imports", "Imports > Exports"], a: "Expenditure > Revenue" },
{ cat: "Economics", q: "Money serves as a:", options: ["Medium of exchange", "Store of value", "Unit of account", "All of the above"], a: "All of the above" },
{ cat: "Economics", q: "The curve that shows the combinations of two goods an economy can produce is:", options: ["Demand curve", "Supply curve", "Production Possibilities Frontier (PPF)", "Lorenz curve"], a: "Production Possibilities Frontier (PPF)" },
{ cat: "Economics", q: "Equilibrium price is the price where:", options: ["Demand > Supply", "Supply > Demand", "Demand = Supply", "Price is highest"], a: "Demand = Supply" },
{ cat: "Economics", q: "Fiscal policy is controlled by the:", options: ["Central Bank", "Government", "Commercial Banks", "Consumers"], a: "Government" },
{ cat: "Economics", q: "Monetary policy is managed by the:", options: ["Ministry of Finance", "Central Bank", "Parliament", "Stock Market"], a: "Central Bank" },
{ cat: "Economics", q: "When the price of bread increases, the demand for butter (a complement) will:", options: ["Increase", "Decrease", "Stay the same", "None"], a: "Decrease" },
{ cat: "Economics", q: "Human-made goods used to produce other goods are called:", options: ["Land", "Labor", "Capital", "Entrepreneurship"], a: "Capital" },
{ cat: "Economics", q: "The study of the economy as a whole is:", options: ["Microeconomics", "Macroeconomics", "Positive Economics", "Normative Economics"], a: "Macroeconomics" },
{ cat: "Economics", q: "A tax that takes a higher percentage from higher incomes is:", options: ["Regressive tax", "Proportional tax", "Progressive tax", "Indirect tax"], a: "Progressive tax" },
{ cat: "Economics", q: "The main cause of inflation is often:", options: ["Excess supply of goods", "Excess money supply", "High savings", "Low consumption"], a: "Excess money supply" },
{ cat: "Economics", q: "Which market has many sellers selling identical products?", options: ["Monopoly", "Perfect Competition", "Oligopoly", "Monopolistic Competition"], a: "Perfect Competition" },
{ cat: "Economics", q: "The circular flow model shows the flow of:", options: ["Goods and services", "Income and expenditure", "Resources", "All of the above"], a: "All of the above" },
{ cat: "Economics", q: "Value of exports minus value of imports is:", options: ["Net Exports", "Gross Exports", "Trade Deficit", "GDP"], a: "Net Exports" },
{ cat: "Economics", q: "In a command economy, economic decisions are made by:", options: ["Consumers", "Producers", "The Government", "Market forces"], a: "The Government" },
{ cat: "Economics", q: "The responsiveness of quantity demanded to a change in price is:", options: ["Price Elasticity of Demand", "Law of Supply", "Marginal Utility", "Equilibrium"], a: "Price Elasticity of Demand" },
{ cat: "Economics", q: "Utility refers to:", options: ["Price of a good", "Satisfaction from consumption", "Cost of production", "Supply of a good"], a: "Satisfaction from consumption" },
{ cat: "Economics", q: "Law of diminishing marginal utility states that satisfaction:", options: ["Increases", "Decreases with each extra unit", "Remains constant", "Is always zero"], a: "Decreases with each extra unit" },
{ cat: "Economics", q: "The unemployment caused by a mismatch of skills is:", options: ["Frictional", "Structural", "Cyclical", "Seasonal"], a: "Structural" },
{ cat: "Economics", q: "Which of the following is an indirect tax?", options: ["Income tax", "VAT", "Property tax", "Corporate tax"], a: "VAT" },
{ cat: "Economics", q: "The branch of economics based on facts and data is:", options: ["Normative", "Positive", "Subjective", "Political"], a: "Positive" },
{ cat: "Economics", q: "If the price of a good is below equilibrium, there will be a:", options: ["Surplus", "Shortage", "Glut", "Steady state"], a: "Shortage" },
{ cat: "Economics", q: "Expansionary fiscal policy involves:", options: ["Increasing taxes", "Decreasing government spending", "Decreasing taxes", "Reducing money supply"], a: "Decreasing taxes" },
{ cat: "Economics", q: "The central bank of Ethiopia is:", options: ["Commercial Bank of Ethiopia", "National Bank of Ethiopia", "Dashen Bank", "Awash Bank"], a: "National Bank of Ethiopia" },
{ cat: "Economics", q: "A characteristic of an Oligopoly market is:", options: ["Single seller", "Many small sellers", "Interdependence between few large firms", "Easy entry"], a: "Interdependence between few large firms" },
{ cat: "Economics", q: "Real GDP is adjusted for:", options: ["Population", "Inflation", "Taxation", "Exports"], a: "Inflation" },
{ cat: "Economics", q: "Total Fixed Cost + Total Variable Cost = ", options: ["Average Cost", "Marginal Cost", "Total Cost", "Unit Cost"], a: "Total Cost" },
{ cat: "Economics", q: "Which era in Ethiopia followed a Command Economy?", options: ["Imperial", "Derg", "EPRDF", "Current"], a: "Derg" },
{ cat: "Economics", q: "The main objective of the World Bank is:", options: ["Short term loans", "Price stability", "Long term development/poverty reduction", "Printing money"], a: "Long term development/poverty reduction" },
{ cat: "Economics", q: "Short-run is a period where at least one factor is:", options: ["Variable", "Fixed", "Infinite", "Zero"], a: "Fixed" },
{ cat: "Economics", q: "Which curve is U-shaped?", options: ["Demand curve", "Average Cost curve", "Production Frontier", "Supply curve"], a: "Average Cost curve" },
{ cat: "Economics", q: "International trade is based on the principle of:", options: ["Absolute advantage", "Comparative advantage", "Self-sufficiency", "Protectionism"], a: "Comparative advantage" },
{ cat: "Economics", q: "The 'Invisible Hand' theory was proposed by:", options: ["Keynes", "Adam Smith", "Malthus", "Say"], a: "Adam Smith" },
{ cat: "Economics", q: "If Income increases and demand for a good decreases, the good is:", options: ["Normal good", "Inferior good", "Luxury good", "Necessity"], a: "Inferior good" },
{ cat: "Economics", q: "The slope of the demand curve is usually:", options: ["Positive", "Negative", "Zero", "Vertical"], a: "Negative" },
{ cat: "Economics", q: "Devaluation of a currency makes exports:", options: ["Cheaper", "More expensive", "Unchanged", "Zero"], a: "Cheaper" },
{ cat: "Economics", q: "Who manages the budget in Ethiopia?", options: ["National Bank", "Ministry of Finance", "Central Statistics Agency", "Trade Bureau"], a: "Ministry of Finance" },


// --- HISTORY (50 Questions) ---
{ cat: "History", q: "The process of 'Hominization' refers to:", options: ["Development of tools", "Evolution of humans", "Discovery of fire", "Beginning of farming"], a: "Evolution of humans" },
{ cat: "History", q: "The earliest known stone tool technology is:", options: ["Acheulean", "Oldowan", "Sangoan", "Neolithic"], a: "Oldowan" },
{ cat: "History", q: "Which Aksumite king converted to Christianity in the 4th century?", options: ["Kaleb", "Ezana", "Armah", "Zoskales"], a: "Ezana" },
{ cat: "History", q: "The Zagwe Dynasty reached its peak during the reign of:", options: ["Yekuno Amlak", "Lalibela", "Harbe", "Imrahane Kristos"], a: "Lalibela" },
{ cat: "History", q: "The battle of Adwa took place in:", options: ["1889", "1896", "1935", "1872"], a: "1896" },
{ cat: "History", q: "The first Prophet of Islam was:", options: ["Ibrahim", "Muhammad", "Musa", "Issa"], a: "Muhammad" },
{ cat: "History", q: "The Solomonic Dynasty was 'restored' by:", options: ["Amde Tsion", "Yekuno Amlak", "Zara Yaqob", "Tewodros II"], a: "Yekuno Amlak" },
{ cat: "History", q: "The 'Zemene Mesafint' began after the death of:", options: ["Iyoas", "Bakaffa", "Iyasu I", "Tewoflos"], a: "Iyoas" },
{ cat: "History", q: "Which European power colonized Libya?", options: ["France", "Britain", "Italy", "Germany"], a: "Italy" },
{ cat: "History", q: "The leader of the 1789 French Revolution was:", options: ["Napoleon", "Robespierre", "Louis XVI", "Voltaire"], a: "Robespierre" },
{ cat: "History", q: "The industrial revolution started in:", options: ["USA", "Germany", "Great Britain", "France"], a: "Great Britain" },
{ cat: "History", q: "The first World War (WWI) started in:", options: ["1912", "1914", "1939", "1918"], a: "1914" },
{ cat: "History", q: "The Council of Berlin (1884-85) was held to:", options: ["End slavery", "Partition Africa", "Stop WWI", "Promote trade"], a: "Partition Africa" },
{ cat: "History", q: "The last Emperor of Ethiopia was:", options: ["Menelik II", "Iyasu", "Haile Selassie I", "Tewodros II"], a: "Haile Selassie I" },
{ cat: "History", q: "The main cause of the Cold War was the rivalry between:", options: ["UK and France", "USA and USSR", "Germany and Italy", "China and Japan"], a: "USA and USSR" },
{ cat: "History", q: "The ancient civilization known for Pyramids is:", options: ["Mesopotamia", "Greece", "Egypt", "Rome"], a: "Egypt" },
{ cat: "History", q: "Which Ethiopian leader committed suicide at Meqdela?", options: ["Yohannes IV", "Tewodros II", "Menelik II", "Tekle Giyorgis"], a: "Tewodros II" },
{ cat: "History", q: "The 'Glorious Revolution' took place in:", options: ["France", "England", "Russia", "USA"], a: "England" },
{ cat: "History", q: "The first president of the USA was:", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], a: "George Washington" },
{ cat: "History", q: "The 'Derg' regime came to power in:", options: ["1960", "1974", "1991", "1984"], a: "1974" },
{ cat: "History", q: "Who was the leader of the Nazi Party in Germany?", options: ["Mussolini", "Hitler", "Stalin", "Churchill"], a: "Hitler" },
{ cat: "History", q: "The Great Depression started in:", options: ["1914", "1929", "1939", "1945"], a: "1929" },
{ cat: "History", q: "The Oromo population movement took place in the:", options: ["14th Century", "16th Century", "18th Century", "12th Century"], a: "16th Century" },
{ cat: "History", q: "The founder of the Kingdom of Kaffa was:", options: ["Minjo", "Tato", "Gaki Sherocho", "Dil Nead"], a: "Minjo" },
{ cat: "History", q: "Apartheid was a system of racial segregation in:", options: ["Kenya", "South Africa", "Zimbabwe", "Angola"], a: "South Africa" },
{ cat: "History", q: "The League of Nations was replaced by:", options: ["AU", "UN", "NATO", "EU"], a: "UN" },
{ cat: "History", q: "The Gragn Ahmed-Lebne Dengel war was fought in the:", options: ["15th Century", "16th Century", "17th Century", "18th Century"], a: "16th Century" },
{ cat: "History", q: "Which country was NOT colonized by Europeans in Africa?", options: ["Nigeria", "Ethiopia", "Ghana", "Algeria"], a: "Ethiopia" },
{ cat: "History", q: "The writing system of Ancient Egypt was:", options: ["Cuneiform", "Hieroglyphics", "Ge'ez", "Latin"], a: "Hieroglyphics" },
{ cat: "History", q: "The Renaissance began in:", options: ["Germany", "Italy", "Spain", "Greece"], a: "Italy" },
{ cat: "History", q: "The 'Wuchale Treaty' was signed between Ethiopia and:", options: ["France", "Italy", "Britain", "Egypt"], a: "Italy" },
{ cat: "History", q: "The capital of the Gondarine period was:", options: ["Aksum", "Gondar", "Lalibela", "Debre Berhan"], a: "Gondar" },
{ cat: "History", q: "The Bolshevik Revolution (1917) happened in:", options: ["Germany", "Russia", "China", "France"], a: "Russia" },
{ cat: "History", q: "The architect of the 'Unification of Germany' was:", options: ["Napoleon", "Bismarck", "Hitler", "Kaiser Wilhelm"], a: "Bismarck" },
{ cat: "History", q: "The 'Wayane Rebellion' of 1943 happened in:", options: ["Gojjam", "Tigray", "Bale", "Wollo"], a: "Tigray" },
{ cat: "History", q: "The Atlantic Slave Trade is also known as:", options: ["The Long Walk", "The Middle Passage", "The Great Trek", "The Silk Road"], a: "The Middle Passage" },
{ cat: "History", q: "The religion founded by Siddhartha Gautama is:", options: ["Hinduism", "Buddhism", "Jainism", "Sikhism"], a: "Buddhism" },
{ cat: "History", q: "Which treaty ended WWI?", options: ["Treaty of Westphalia", "Treaty of Versailles", "Treaty of Wuchale", "Treaty of Paris"], a: "Treaty of Versailles" },
{ cat: "History", q: "The first African country to gain independence (after 1945) was:", options: ["Nigeria", "Ghana", "Kenya", "Sudan"], a: "Ghana" },
{ cat: "History", q: "The 'White Man's Burden' was a justification for:", options: ["Democracy", "Imperialism", "Equality", "Trade"], a: "Imperialism" },
{ cat: "History", q: "The Gadaa system is a traditional social-political system of:", options: ["Amhara", "Oromo", "Somali", "Tigray"], a: "Oromo" },
{ cat: "History", q: "The main source of the Blue Nile (Abbay) is:", options: ["Lake Victoria", "Lake Tana", "Lake Abaya", "Lake Ziway"], a: "Lake Tana" },
{ cat: "History", q: "The 'Iron Curtain' speech was given by:", options: ["Stalin", "Churchill", "Roosevelt", "Kennedy"], a: "Churchill" },
{ cat: "History", q: "The primary cause of WWII was:", options: ["Assassination of Archduke", "German invasion of Poland", "Pearl Harbor", "The Cold War"], a: "German invasion of Poland" },
{ cat: "History", q: "The 'Great Walls' were built by which civilization?", options: ["Roman", "Chinese", "Persian", "Inca"], a: "Chinese" },
{ cat: "History", q: "Which king unified the southern and northern parts of Egypt?", options: ["Khufu", "Menes", "Tutankhamun", "Ramses"], a: "Menes" },
{ cat: "History", q: "The Battle of Gundet (1875) was fought against:", options: ["Italy", "Egypt", "Mahdists", "Britain"], a: "Egypt" },
{ cat: "History", q: "The first human to travel to space was:", options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"], a: "Yuri Gagarin" },
{ cat: "History", q: "The 'Black Death' in Europe was a:", options: ["War", "Plague/Disease", "Famine", "Volcano"], a: "Plague/Disease" },
{ cat: "History", q: "The African Union (AU) headquarters is in:", options: ["Nairobi", "Cairo", "Addis Ababa", "Lagos"], a: "Addis Ababa" },

// --- ENGLISH (50 Questions) ---
{ cat: "English", q: "If I _______ enough money, I would buy a new laptop.", options: ["have", "had", "will have", "has"], a: "had" },
{ cat: "English", q: "She has been studying English _______ three hours.", options: ["since", "for", "at", "by"], a: "for" },
{ cat: "English", q: "Which one is a synonym of 'Enormous'?", options: ["Small", "Huge", "Weak", "Tiny"], a: "Huge" },
{ cat: "English", q: "Neither the students nor the teacher _______ present yesterday.", options: ["is", "were", "was", "are"], a: "was" },
{ cat: "English", q: "I _______ my homework before my father came home.", options: ["finish", "had finished", "finishing", "have finished"], a: "had finished" },
{ cat: "English", q: "Look! The bus _______.", options: ["is coming", "comes", "came", "has come"], a: "is coming" },
{ cat: "English", q: "He is _______ honest man.", options: ["a", "an", "the", "no article"], a: "an" },
{ cat: "English", q: "If you heat ice, it _______.", options: ["melt", "melts", "melted", "would melt"], a: "melts" },
{ cat: "English", q: "The man _______ stole the bag was caught.", options: ["which", "whom", "who", "whose"], a: "who" },
{ cat: "English", q: "I am looking forward to _______ you.", options: ["see", "seen", "seeing", "saw"], a: "seeing" },
{ cat: "English", q: "Choose the correctly spelled word:", options: ["Recieve", "Receive", "Ricieve", "Receve"], a: "Receive" },
{ cat: "English", q: "This is the _______ book I have ever read.", options: ["good", "better", "best", "most good"], a: "best" },
{ cat: "English", q: "We _______ play football when we were children.", options: ["used to", "use to", "are used to", "using to"], a: "used to" },
{ cat: "English", q: "I don't have _______ money in my pocket.", options: ["many", "few", "any", "some"], a: "any" },
{ cat: "English", q: "She is interested _______ learning new languages.", options: ["on", "at", "in", "with"], a: "in" },
{ cat: "English", q: "The room _______ every day.", options: ["cleans", "is cleaned", "cleaned", "is cleaning"], a: "is cleaned" },
{ cat: "English", q: "He ran fast, _______ he missed the train.", options: ["and", "but", "so", "because"], a: "but" },
{ cat: "English", q: "You _______ smoke in the hospital. It is forbidden.", options: ["must", "mustn't", "should", "don't have to"], a: "mustn't" },
{ cat: "English", q: "By next year, I _______ my degree.", options: ["will finish", "will have finished", "finish", "am finishing"], a: "will have finished" },
{ cat: "English", q: "A: 'Would you like some coffee?' B: '_______'", options: ["Yes, please", "No, I don't", "Yes, I like", "I am fine"], a: "Yes, please" },
{ cat: "English", q: "The sun _______ in the East.", options: ["rise", "rose", "rising", "rises"], a: "rises" },
{ cat: "English", q: "If I _______ you, I wouldn't do that.", options: ["am", "was", "were", "be"], a: "were" },
{ cat: "English", q: "Which word is an antonym of 'Borrow'?", options: ["Take", "Lend", "Keep", "Get"], a: "Lend" },
{ cat: "English", q: "I _______ him for ages.", options: ["didn't see", "haven't seen", "not saw", "don't see"], a: "haven't seen" },
{ cat: "English", q: "How _______ milk do you want?", options: ["many", "much", "few", "any"], a: "much" },
{ cat: "English", q: "The car was _______ expensive for me to buy.", options: ["too", "enough", "very", "much"], a: "too" },
{ cat: "English", q: "Unless it _______, we will go for a walk.", options: ["rains", "doesn't rain", "will rain", "rained"], a: "rains" },
{ cat: "English", q: "He died _______ cancer.", options: ["by", "with", "of", "from"], a: "of" },
{ cat: "English", q: "You are coming with us, _______?", options: ["aren't you", "are you", "don't you", "won't you"], a: "aren't you" },
{ cat: "English", q: "I prefer tea _______ coffee.", options: ["than", "to", "more", "from"], a: "to" },
{ cat: "English", q: "The students _______ the exam right now.", options: ["take", "are taking", "takes", "took"], a: "are taking" },
{ cat: "English", q: "It's the first time I _______ this movie.", options: ["see", "saw", "have seen", "am seeing"], a: "have seen" },
{ cat: "English", q: "My sister is _______ than me.", options: ["tall", "taller", "tallest", "more tall"], a: "taller" },
{ cat: "English", q: "She _______ her keys. She can't find them.", options: ["lost", "has lost", "lose", "is losing"], a: "has lost" },
{ cat: "English", q: "Would you mind _______ the window?", options: ["open", "to open", "opening", "opened"], a: "opening" },
{ cat: "English", q: "You _______ study hard if you want to pass.", options: ["has to", "should", "could", "may"], a: "should" },
{ cat: "English", q: "Wait _______ I come back.", options: ["until", "while", "since", "during"], a: "until" },
{ cat: "English", q: "The film _______ before we arrived.", options: ["starts", "had started", "has started", "starting"], a: "had started" },
{ cat: "English", q: "This is the house _______ I was born.", options: ["which", "who", "where", "that"], a: "where" },
{ cat: "English", q: "He is very rich; _______, he is unhappy.", options: ["therefore", "however", "moreover", "so"], a: "however" },
{ cat: "English", q: "Can you tell me _______?", options: ["where is the bank", "where the bank is", "is where the bank", "the bank is where"], a: "where the bank is" },
{ cat: "English", q: "I'm tired. I _______ to bed now.", options: ["go", "am going", "went", "have gone"], a: "am going" },
{ cat: "English", q: "Each of the players _______ a trophy.", options: ["get", "gets", "getting", "have got"], a: "gets" },
{ cat: "English", q: "I wish I _______ more time to study.", options: ["have", "had", "am having", "will have"], a: "had" },
{ cat: "English", q: "She _______ her hair every morning.", options: ["wash", "washes", "washing", "is washing"], a: "washes" },
{ cat: "English", q: "The bridge _______ built in 1990.", options: ["is", "was", "were", "has been"], a: "was" },
{ cat: "English", q: "He is the _______ intelligent boy in the class.", options: ["more", "most", "very", "much"], a: "most" },
{ cat: "English", q: "Success depends _______ hard work.", options: ["in", "at", "on", "with"], a: "on" },
{ cat: "English", q: "A: 'How do you do?' B: '_______'", options: ["I am fine", "How do you do?", "Fine, thanks", "I am a student"], a: "How do you do?" },
{ cat: "English", q: "It has been raining _______ morning.", options: ["for", "since", "at", "in"], a: "since" },


    // --- MATHS (50 Questions) ---
{ cat: "Maths", q: "If f(x) = 2x + 3, find f(5):", options: ["10", "13", "15", "8"], a: "13" },
{ cat: "Maths", q: "The square root of 144 is:", options: ["10", "11", "12", "14"], a: "12" },
{ cat: "Maths", q: "In a right-angled triangle, a² + b² = ?", options: ["c", "2c", "c²", "√c"], a: "c²" },
{ cat: "Maths", q: "What is the slope of the line y = 3x - 5?", options: ["-5", "5", "3", "1/3"], a: "3" },
{ cat: "Maths", q: "Solve for x: 3x - 9 = 0", options: ["2", "3", "6", "9"], a: "3" },
{ cat: "Maths", q: "The sum of interior angles of a triangle is:", options: ["90°", "180°", "270°", "360°"], a: "180°" },
{ cat: "Maths", q: "Find the area of a circle with radius 7 (Use π=22/7):", options: ["44", "49", "154", "196"], a: "154" },
{ cat: "Maths", q: "What is the value of log₁₀(100)?", options: ["1", "2", "3", "10"], a: "2" },
{ cat: "Maths", q: "The derivative of x² is:", options: ["x", "2", "2x", "x³"], a: "2x" },
{ cat: "Maths", q: "If A = {1, 2} and B = {2, 3}, A ∩ B is:", options: ["{1, 2, 3}", "{2}", "{1, 3}", "{ }"], a: "{2}" },
{ cat: "Maths", q: "What is sin(90°)?", options: ["0", "0.5", "1", "√2/2"], a: "1" },
{ cat: "Maths", q: "The mode of {2, 3, 3, 4, 5} is:", options: ["2", "3", "4", "5"], a: "3" },
{ cat: "Maths", q: "What is the value of 5! (5 factorial)?", options: ["15", "25", "100", "120"], a: "120" },
{ cat: "Maths", q: "The volume of a cube with side 3cm is:", options: ["9cm³", "12cm³", "18cm³", "27cm³"], a: "27cm³" },
{ cat: "Maths", q: "Solve: 2⁴ = ?", options: ["8", "12", "16", "32"], a: "16" },
{ cat: "Maths", q: "What is the median of 1, 3, 5, 7, 9?", options: ["3", "5", "7", "9"], a: "5" },
{ cat: "Maths", q: "The y-intercept of y = 4x + 7 is:", options: ["4", "x", "7", "-7"], a: "7" },
{ cat: "Maths", q: "A set with no elements is called:", options: ["Finite", "Infinite", "Null/Empty", "Subset"], a: "Null/Empty" },
{ cat: "Maths", q: "The probability of a certain event is:", options: ["0", "0.5", "1", "10"], a: "1" },
{ cat: "Maths", q: "What is cos(0°)?", options: ["0", "0.5", "1", "Unddefined"], a: "1" },
{ cat: "Maths", q: "The formula for the circumference of a circle is:", options: ["πr²", "2πr", "πd²", "2πd"], a: "2πr" },
{ cat: "Maths", q: "Simplify: (x³)(x²)", options: ["x⁵", "x⁶", "2x³", "x"], a: "x⁵" },
{ cat: "Maths", q: "What is the square of 25?", options: ["50", "125", "625", "500"], a: "625" },
{ cat: "Maths", q: "Find x if 2x + 4 = 10:", options: ["2", "3", "4", "7"], a: "3" },
{ cat: "Maths", q: "The sum of angles in a quadrilateral is:", options: ["180°", "270°", "360°", "540°"], a: "360°" },
{ cat: "Maths", q: "What is the value of i² in complex numbers?", options: ["1", "-1", "√-1", "0"], a: "-1" },
{ cat: "Maths", q: "The mean of 10, 20, 30 is:", options: ["15", "20", "25", "30"], a: "20" },
{ cat: "Maths", q: "Which is a prime number?", options: ["4", "9", "13", "15"], a: "13" },
{ cat: "Maths", q: "What is 15% of 200?", options: ["15", "20", "30", "45"], a: "30" },
{ cat: "Maths", q: "The integral of 1 dx is:", options: ["0", "x + C", "1", "x²"], a: "x + C" },
{ cat: "Maths", q: "If x² = 49, x could be:", options: ["7", "4.9", "24.5", "9"], a: "7" },
{ cat: "Maths", q: "The number of subsets of a set with 3 elements is:", options: ["3", "6", "8", "9"], a: "8" },
{ cat: "Maths", q: "tan(45°) is equal to:", options: ["0", "0.5", "1", "√3"], a: "1" },
{ cat: "Maths", q: "The distance between (0,0) and (3,4) is:", options: ["5", "7", "12", "25"], a: "5" },
{ cat: "Maths", q: "What is log₂(8)?", options: ["2", "3", "4", "8"], a: "3" },
{ cat: "Maths", q: "The perimeter of a square with side 5 is:", options: ["10", "20", "25", "15"], a: "20" },
{ cat: "Maths", q: "What is 2/5 as a percentage?", options: ["20%", "25%", "40%", "50%"], a: "40%" },
{ cat: "Maths", q: "The value of π (pi) is approximately:", options: ["2.14", "3.14", "3.41", "4.13"], a: "3.14" },
{ cat: "Maths", q: "A triangle with all sides equal is:", options: ["Isosceles", "Scalene", "Equilateral", "Right"], a: "Equilateral" },
{ cat: "Maths", q: "Solve for x: x/2 = 10", options: ["5", "10", "15", "20"], a: "20" },
{ cat: "Maths", q: "The inverse of the function y = x + 2 is:", options: ["y = x - 2", "y = 2x", "y = x/2", "y = -x"], a: "y = x - 2" },
{ cat: "Maths", q: "How many degrees are in a circle?", options: ["180°", "360°", "90°", "100°"], a: "360°" },
{ cat: "Maths", q: "The product of 0.5 and 10 is:", options: ["0.5", "1", "5", "50"], a: "5" },
{ cat: "Maths", q: "If 3x = 12, then x + 5 = ?", options: ["4", "9", "12", "17"], a: "9" },
{ cat: "Maths", q: "What is (1/2) + (1/4)?", options: ["1/6", "2/6", "3/4", "1/2"], a: "3/4" },
{ cat: "Maths", q: "Which is the smallest prime number?", options: ["0", "1", "2", "3"], a: "2" },
{ cat: "Maths", q: "The volume of a sphere formula is:", options: ["πr²h", "4/3 πr³", "1/2 bh", "2πr"], a: "4/3 πr³" },
{ cat: "Maths", q: "What is 10 to the power of 0?", options: ["0", "1", "10", "Undefined"], a: "1" },
{ cat: "Maths", q: "Find the range of {1, 5, 10, 15}:", options: ["10", "14", "15", "5"], a: "14" },
{ cat: "Maths", q: "If a line is horizontal, its slope is:", options: ["1", "0", "Undefined", "-1"], a: "0" },
    

    // --- NATURAL SCIENCE (New Additions) ---

// --- BIOLOGY (50 Questions) ---
{ cat: "Biology", q: "The 'Master Gland' of the human body is:", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], a: "Pituitary" },
{ cat: "Biology", q: "Which cell organelle is known as the 'Powerhouse of the cell'?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], a: "Mitochondria" },
{ cat: "Biology", q: "The process by which plants make their own food is:", options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"], a: "Photosynthesis" },
{ cat: "Biology", q: "How many chromosomes are in a normal human somatic cell?", options: ["23", "44", "46", "48"], a: "46" },
{ cat: "Biology", q: "The hereditary material in most organisms is:", options: ["RNA", "Protein", "DNA", "Glucose"], a: "DNA" },
{ cat: "Biology", q: "Which blood group is known as the 'Universal Donor'?", options: ["A", "B", "AB", "O"], a: "O" },
{ cat: "Biology", q: "The study of fungi is called:", options: ["Phycology", "Mycology", "Virology", "Bacteriology"], a: "Mycology" },
{ cat: "Biology", q: "Which vitamin is synthesized by the help of sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], a: "Vitamin D" },
{ cat: "Biology", q: "The structural and functional unit of the kidney is:", options: ["Neuron", "Nephron", "Alveoli", "Villi"], a: "Nephron" },
{ cat: "Biology", q: "Who is known as the 'Father of Genetics'?", options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"], a: "Gregor Mendel" },
{ cat: "Biology", q: "The main site of gas exchange in humans is:", options: ["Trachea", "Bronchi", "Alveoli", "Diaphragm"], a: "Alveoli" },
{ cat: "Biology", q: "Which hormone regulates blood sugar levels?", options: ["Adrenaline", "Insulin", "Estrogen", "Thyroxine"], a: "Insulin" },
{ cat: "Biology", q: "A disease caused by Vitamin C deficiency is:", options: ["Rickets", "Beriberi", "Scurvy", "Anemia"], a: "Scurvy" },
{ cat: "Biology", q: "The small finger-like projections in the small intestine are:", options: ["Cilia", "Flagella", "Villi", "Pseudopodia"], a: "Villi" },
{ cat: "Biology", q: "Which part of the brain controls balance and coordination?", options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"], a: "Cerebellum" },
{ cat: "Biology", q: "Bacteria that cause diseases are called:", options: ["Saprophytes", "Pathogens", "Parasites", "Symbionts"], a: "Pathogens" },
{ cat: "Biology", q: "The 'Universal Recipient' blood group is:", options: ["A", "B", "AB", "O"], a: "AB" },
{ cat: "Biology", q: "In binary fission, a cell divides into _______ cells.", options: ["Two", "Three", "Four", "Many"], a: "Two" },
{ cat: "Biology", q: "The green pigment in plants is:", options: ["Hemoglobin", "Chlorophyll", "Melanin", "Xanthophyll"], a: "Chlorophyll" },
{ cat: "Biology", q: "Which base is found in RNA but NOT in DNA?", options: ["Adenine", "Guanine", "Cytosine", "Uracil"], a: "Uracil" },
{ cat: "Biology", q: "The hardest substance in the human body is:", options: ["Bone", "Dentin", "Enamel", "Cartilage"], a: "Enamel" },
{ cat: "Biology", q: "Mitosis results in _______ daughter cells.", options: ["Two", "Four", "Eight", "One"], a: "Two" },
{ cat: "Biology", q: "Meiosis occurs in _______ cells.", options: ["Somatic", "Reproductive (Sex)", "Nerve", "Muscle"], a: "Reproductive (Sex)" },
{ cat: "Biology", q: "The main component of plant cell walls is:", options: ["Starch", "Glycogen", "Cellulose", "Chitin"], a: "Cellulose" },
{ cat: "Biology", q: "Which organ secretes bile?", options: ["Pancreas", "Gallbladder", "Liver", "Stomach"], a: "Liver" },
{ cat: "Biology", q: "The movement of water across a semi-permeable membrane is:", options: ["Diffusion", "Osmosis", "Active transport", "Endocytosis"], a: "Osmosis" },
{ cat: "Biology", q: "A person with myopia can see _______ objects clearly.", options: ["Distant", "Near", "All", "None"], a: "Near" },
{ cat: "Biology", q: "Which enzyme digests protein in the stomach?", options: ["Amylase", "Lipase", "Pepsin", "Trypsin"], a: "Pepsin"},
    
    // --- PHYSICS (50 Questions) ---
{ cat: "Physics", q: "The rate of change of displacement is:", options: ["Speed", "Acceleration", "Velocity", "Force"], a: "Velocity" },
{ cat: "Physics", q: "What is the SI unit of Force?", options: ["Joule", "Watt", "Newton", "Pascal"], a: "Newton" },
{ cat: "Physics", q: "Newton's First Law is also known as the Law of:", options: ["Motion", "Inertia", "Gravity", "Conservation"], a: "Inertia" },
{ cat: "Physics", q: "Energy possessed by a body due to its position is:", options: ["Kinetic", "Potential", "Thermal", "Chemical"], a: "Potential" },
{ cat: "Physics", q: "The unit of electric current is:", options: ["Volt", "Ohm", "Ampere", "Coulomb"], a: "Ampere" },
{ cat: "Physics", q: "Resistance is measured in:", options: ["Watts", "Ohms", "Volts", "Amps"], a: "Ohms" },
{ cat: "Physics", q: "The speed of light in a vacuum is approximately:", options: ["3x10^6 m/s", "3x10^8 m/s", "3x10^10 m/s", "150,000 m/s"], a: "3x10^8 m/s" },
{ cat: "Physics", q: "Sound waves are examples of _______ waves.", options: ["Transverse", "Longitudinal", "Electromagnetic", "Radio"], a: "Longitudinal" },
{ cat: "Physics", q: "The process of heat transfer in fluids is:", options: ["Conduction", "Convection", "Radiation", "Insulation"], a: "Convection" },
{ cat: "Physics", q: "Which mirror is used as a rear-view mirror in cars?", options: ["Plane", "Concave", "Convex", "Cylindrical"], a: "Convex" },
{ cat: "Physics", q: "Power is defined as:", options: ["Work x Time", "Work / Time", "Force x Distance", "Mass x Acceleration"], a: "Work / Time" },
{ cat: "Physics", q: "The bending of light as it passes between media is:", options: ["Reflection", "Refraction", "Diffraction", "Interference"], a: "Refraction" },
{ cat: "Physics", q: "What is the acceleration due to gravity (g) on Earth?", options: ["8.9 m/s²", "9.8 m/s²", "10.5 m/s²", "7.5 m/s²"], a: "9.8 m/s²" },
{ cat: "Physics", q: "Which instrument measures atmospheric pressure?", options: ["Thermometer", "Barometer", "Hydrometer", "Anemometer"], a: "Barometer" },
{ cat: "Physics", q: "An object's resistance to change in its state of motion is:", options: ["Friction", "Inertia", "Mass", "Velocity"], a: "Inertia" },
{ cat: "Physics", q: "The product of mass and velocity is:", options: ["Force", "Work", "Momentum", "Impulse"], a: "Momentum" },
{ cat: "Physics", q: "The frequency of a wave is measured in:", options: ["Seconds", "Meters", "Hertz", "Joules"], a: "Hertz" },
{ cat: "Physics", q: "Which color has the longest wavelength?", options: ["Blue", "Green", "Yellow", "Red"], a: "Red" },
{ cat: "Physics", q: "Ohm's Law states that:", options: ["V = IR", "P = IV", "F = ma", "E = mc²"], a: "V = IR" },
{ cat: "Physics", q: "The unit of work or energy is:", options: ["Watt", "Joule", "Newton", "Pascal"], a: "Joule" },
{ cat: "Physics", q: "Heat from the sun reaches Earth by:", options: ["Conduction", "Convection", "Radiation", "Friction"], a: "Radiation" },
{ cat: "Physics", q: "A person with hyperopia (farsightedness) needs _______ lens.", options: ["Concave", "Convex", "Plane", "Bifocal"], a: "Convex" },
{ cat: "Physics", q: "Pressure is equal to:", options: ["Force / Area", "Force x Area", "Mass / Volume", "Work / Distance"], a: "Force / Area" },
{ cat: "Physics", q: "The density of water is:", options: ["100 kg/m³", "500 kg/m³", "1000 kg/m³", "10 kg/m³"], a: "1000 kg/m³" },
{ cat: "Physics", q: "Which law states that for every action there is an equal reaction?", options: ["Newton's 1st", "Newton's 2nd", "Newton's 3rd", "Law of Gravity"], a: "Newton's 3rd" },
{ cat: "Physics", q: "A device that converts mechanical energy into electrical energy is:", options: ["Motor", "Generator", "Transformer", "Battery"], a: "Generator" },
{ cat: "Physics", q: "The boiling point of water in Fahrenheit is:", options: ["100°F", "212°F", "32°F", "180°F"], a: "212°F" },
{ cat: "Physics", q: "What type of energy is stored in a battery?", options: ["Nuclear", "Chemical", "Kinetic", "Thermal"], a: "Chemical" },
{ cat: "Physics", q: "Pascal is the unit for:", options: ["Force", "Pressure", "Viscosity", "Energy"], a: "Pressure" },
{ cat: "Physics", q: "The study of light is called:", options: ["Acoustics", "Optics", "Thermodynamics", "Mechanics"], a: "Optics" },
{ cat: "Physics", q: "The center of an atom is called:", options: ["Electron", "Proton", "Nucleus", "Shell"], a: "Nucleus" },
{ cat: "Physics", q: "Which material is a good insulator?", options: ["Copper", "Aluminum", "Rubber", "Silver"], a: "Rubber" },
{ cat: "Physics", q: "Archimedes' principle deals with:", options: ["Gravity", "Buoyancy", "Electricity", "Magnetism"], a: "Buoyancy" },
{ cat: "Physics", q: "The distance between two consecutive crests is:", options: ["Amplitude", "Frequency", "Wavelength", "Period"], a: "Wavelength" },
{ cat: "Physics", q: "A vector quantity has both:", options: ["Mass and Volume", "Magnitude and Direction", "Speed and Time", "Area and Length"], a: "Magnitude and Direction" },
{ cat: "Physics", q: "Which subatomic particle orbits the nucleus?", options: ["Proton", "Neutron", "Electron", "Quark"], a: "Electron" },
{ cat: "Physics", q: "The property of a material to return to its original shape is:", options: ["Plasticity", "Elasticity", "Ductility", "Brittleness"], a: "Elasticity" },
{ cat: "Physics", q: "The unit of Power is:", options: ["Joule", "Newton", "Watt", "Volt"], a: "Watt" },
{ cat: "Physics", q: "If you move to the Moon, your _______ remains the same.", options: ["Weight", "Mass", "Both", "None"], a: "Mass" },
{ cat: "Physics", q: "Capacitance is measured in:", options: ["Henry", "Farad", "Tesla", "Weber"], a: "Farad" },
{ cat: "Physics", q: "A transformer works on the principle of:", options: ["Self induction", "Mutual induction", "Conduction", "Radiation"], a: "Mutual induction" },
{ cat: "Physics", q: "The primary colors of light are:", options: ["Red, Blue, Yellow", "Red, Green, Blue", "Yellow, Cyan, Magenta", "White, Black, Gray"], a: "Red, Green, Blue" },
{ cat: "Physics", q: "Kinetic energy formula is:", options: ["mgh", "1/2 mv²", "F x d", "P / t"], a: "1/2 mv²" },
{ cat: "Physics", q: "Heat flows from _______ to _______ temperature.", options: ["High to Low", "Low to High", "Cold to Warm", "None"], a: "High to Low" },
{ cat: "Physics", q: "An ideal machine has _______ efficiency.", options: ["50%", "100%", "90%", "0%"], a: "100%" },
{ cat: "Physics", q: "Which part of the electromagnetic spectrum has the highest energy?", options: ["Radio waves", "Infrared", "Visible light", "Gamma rays"], a: "Gamma rays" },
{ cat: "Physics", q: "Magnetic field strength is measured in:", options: ["Tesla", "Henry", "Volt", "Ampere"], a: "Tesla" },
{ cat: "Physics", q: "The slope of a Distance-Time graph gives:", options: ["Acceleration", "Speed", "Force", "Work"], a: "Speed" },
{ cat: "Physics", q: "Friction always acts in the _______ direction of motion.", options: ["Same", "Perpendicular", "Opposite", "Circular"], a: "Opposite" },
{ cat: "Physics", q: "Absolute zero is:", options: ["0°C", "-273.15°C", "273.15°C", "100°C"], a: "-273.15°C" },
    
 // --- CHEMISTRY (50 Questions) ---
{ cat: "Chemistry", q: "The simplest form of matter that cannot be broken down is:", options: ["Compound", "Mixture", "Element", "Molecule"], a: "Element" },
{ cat: "Chemistry", q: "Which particle in an atom has a positive charge?", options: ["Electron", "Neutron", "Proton", "Positron"], a: "Proton" },
{ cat: "Chemistry", q: "The pH of a neutral solution is:", options: ["0", "1", "7", "14"], a: "7" },
{ cat: "Chemistry", q: "What is the chemical symbol for Gold?", options: ["Gd", "Ag", "Fe", "Au"], a: "Au" },
{ cat: "Chemistry", q: "The horizontal rows in the periodic table are called:", options: ["Groups", "Families", "Periods", "Columns"], a: "Periods" },
{ cat: "Chemistry", q: "Which gas is known as the 'Laughing Gas'?", options: ["CO2", "N2O", "SO2", "NO2"], a: "N2O" },
{ cat: "Chemistry", q: "The most abundant gas in the Earth's atmosphere is:", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], a: "Nitrogen" },
{ cat: "Chemistry", q: "A bond formed by sharing electrons is called:", options: ["Ionic", "Covalent", "Metallic", "Hydrogen bond"], a: "Covalent" },
{ cat: "Chemistry", q: "What is the main component of Natural Gas?", options: ["Ethane", "Methane", "Propane", "Butane"], a: "Methane" },
{ cat: "Chemistry", q: "The process of a solid changing directly into a gas is:", options: ["Melting", "Evaporation", "Sublimation", "Freezing"], a: "Sublimation" },
{ cat: "Chemistry", q: "Which acid is present in a car battery?", options: ["HCl", "HNO3", "H2SO4", "CH3COOH"], a: "H2SO4" },
{ cat: "Chemistry", q: "The number of protons in an atom is its:", options: ["Mass number", "Atomic number", "Isotope number", "Valency"], a: "Atomic number" },
{ cat: "Chemistry", q: "Which element is common to all organic compounds?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"], a: "Carbon" },
{ cat: "Chemistry", q: "Hard water contains high levels of:", options: ["Sodium", "Calcium and Magnesium", "Iron", "Potassium"], a: "Calcium and Magnesium" },
{ cat: "Chemistry", q: "What is the formula for Table Salt?", options: ["KCl", "NaCl", "MgCl2", "CaCl2"], a: "NaCl" },
{ cat: "Chemistry", q: "An oxidation reaction involves the:", options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"], a: "Loss of electrons" },
{ cat: "Chemistry", q: "The universal solvent is:", options: ["Alcohol", "Water", "Benzene", "Ether"], a: "Water" },
{ cat: "Chemistry", q: "Who proposed the first modern atomic theory?", options: ["Rutherford", "Bohr", "Dalton", "Thomson"], a: "Dalton" },
{ cat: "Chemistry", q: "Isotopes are atoms with the same atomic number but different:", options: ["Protons", "Electrons", "Mass number", "Valency"], a: "Mass number" },
{ cat: "Chemistry", q: "Which metal is liquid at room temperature?", options: ["Iron", "Mercury", "Copper", "Aluminum"], a: "Mercury" },
{ cat: "Chemistry", q: "The escape of gas through a tiny hole is:", options: ["Diffusion", "Effusion", "Evaporation", "Condensation"], a: "Effusion" },
{ cat: "Chemistry", q: "What is the pH of an acidic solution?", options: ["Less than 7", "Equal to 7", "Greater than 7", "None"], a: "Less than 7" },
{ cat: "Chemistry", q: "The mass of one mole of a substance is its:", options: ["Atomic mass", "Molecular mass", "Molar mass", "Formula mass"], a: "Molar mass" },
{ cat: "Chemistry", q: "Which gas is used in fire extinguishers?", options: ["O2", "N2", "CO2", "H2"], a: "CO2" },
{ cat: "Chemistry", q: "A catalyst is a substance that:", options: ["Slows down a reaction", "Speeds up a reaction", "Stops a reaction", "Becomes part of the product"], a: "Speeds up a reaction" },
{ cat: "Chemistry", q: "What is the chemical formula of Ozone?", options: ["O2", "O3", "O4", "O"], a: "O3" },
{ cat: "Chemistry", q: "The law of conservation of mass was given by:", options: ["Lavoisier", "Proust", "Dalton", "Avogadro"], a: "Lavoisier" },
{ cat: "Chemistry", q: "Hydrocarbons containing only single bonds are:", options: ["Alkenes", "Alkynes", "Alkanes", "Arenes"], a: "Alkanes" },
{ cat: "Chemistry", q: "Which subatomic particle has no charge?", options: ["Proton", "Electron", "Neutron", "Alpha particle"], a: "Neutron" },
{ cat: "Chemistry", q: "The functional group -OH belongs to:", options: ["Ketones", "Aldehydes", "Alcohols", "Ethers"], a: "Alcohols" },
{ cat: "Chemistry", q: "What is the Avogadro's number?", options: ["6.022 x 10^22", "6.022 x 10^23", "3.14 x 10^23", "1.6 x 10^-19"], a: "6.022 x 10^23" },
{ cat: "Chemistry", q: "Bronze is an alloy of Copper and:", options: ["Zinc", "Tin", "Iron", "Nickel"], a: "Tin" },
{ cat: "Chemistry", q: "The valence electrons are found in the:", options: ["Inner shell", "Nucleus", "Outermost shell", "Middle shell"], a: "Outermost shell" },
{ cat: "Chemistry", q: "Which gas is used for ripening fruits?", options: ["Ethane", "Ethylene", "Methane", "Acetylene"], a: "Ethylene" },
{ cat: "Chemistry", q: "The energy required to remove an electron is:", options: ["Electron affinity", "Electronegativity", "Ionization energy", "Bond energy"], a: "Ionization energy" },
{ cat: "Chemistry", q: "Dry ice is the solid form of:", options: ["Water", "Oxygen", "Carbon dioxide", "Nitrogen"], a: "Carbon dioxide" },
{ cat: "Chemistry", q: "The repeating units in polymers are called:", options: ["Isomers", "Monomers", "Isotopes", "Allotropes"], a: "Monomers" },
{ cat: "Chemistry", q: "Which indicator turns red in acid?", options: ["Phenolphthalein", "Blue Litmus", "Red Litmus", "Methyl orange"], a: "Blue Litmus" },
{ cat: "Chemistry", q: "The father of the Periodic Table is:", options: ["Moseley", "Mendeleev", "Newlands", "Dobereiner"], a: "Mendeleev" },
{ cat: "Chemistry", q: "Sea water can be purified by:", options: ["Filtration", "Distillation", "Evaporation", "Decantation"], a: "Distillation" },
{ cat: "Chemistry", q: "What is the main acid in Vinegar?", options: ["Citric acid", "Formic acid", "Acetic acid", "Lactic acid"], a: "Acetic acid" },
{ cat: "Chemistry", q: "The bond in NaCl is:", options: ["Covalent", "Ionic", "Metallic", "Polar"], a: "Ionic" },
{ cat: "Chemistry", q: "Which isotope is used in carbon dating?", options: ["C-12", "C-13", "C-14", "C-16"], a: "C-14" },
{ cat: "Chemistry", q: "The rate of a reaction increases with:", options: ["Decrease in temperature", "Increase in concentration", "Increase in particle size", "Decrease in pressure"], a: "Increase in concentration" },
{ cat: "Chemistry", q: "Which non-metal is a good conductor of electricity?", options: ["Sulfur", "Iodine", "Graphite", "Phosphorus"], a: "Graphite" },
{ cat: "Chemistry", q: "The study of rates of chemical reactions is:", options: ["Thermodynamics", "Kinetics", "Equilibrium", "Electrochemistry"], a: "Kinetics" },
{ cat: "Chemistry", q: "What is the formula for Ammonia?", options: ["NH4", "NH3", "NO2", "N2H4"], a: "NH3" },
{ cat: "Chemistry", q: "A reaction that releases heat is:", options: ["Endothermic", "Exothermic", "Isothermic", "Adiabatic"], a: "Exothermic" },
{ cat: "Chemistry", q: "The lightest element is:", options: ["Helium", "Hydrogen", "Lithium", "Oxygen"], a: "Hydrogen" },
{ cat: "Chemistry", q: "Functional group of Carboxylic acids is:", options: ["-CHO", "-CO-", "-COOH", "-OH"], a: "-COOH" }
];

// 1. ጥያቄዎቹን የሚዘበራርቅ ፈንክሽን
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 2. ተለዋዋጮች
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

// VOICE ASSISTANT
function speak(text) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}

// HOME BUTTON
function goHome() {
    clearInterval(timer);
    
    // ጥያቄው ያለበትን ሙሉ ቦታ ደብቅ
    const quizWrapper = document.getElementById('quiz-area-wrapper');
    if (quizWrapper) quizWrapper.style.display = 'none';

    // ዋናውን ገጽ አሳይ
    document.getElementById('main-content').style.display = 'block';
    
    // ሰብጀክቶቹ በትክክል እንዲታዩ
    let stream = document.getElementById('streamChoice').value || 'social';
    switchStream(stream);
    
    window.scrollTo(0, 0);
}

// START APP
function startApp() {
    let nameInput = document.getElementById('userNameInput');
    let streamInput = document.getElementById('streamChoice');

    if (!nameInput.value || !streamInput.value) {
        return alert("እባክህ ስምህንና ዘርፍህን ምረጥ!");
    }
    
    let name = nameInput.value;
    let stream = streamInput.value;

    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('main-title').innerText = name + "'s Hub";
    switchStream(stream);
}

function switchStream(stream) {
    document.getElementById('social-subjects').style.display = (stream === 'social' ? 'flex' : 'none');
    document.getElementById('natural-subjects').style.display = (stream === 'natural' ? 'flex' : 'none');
}

// --- GLOBAL VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];
let timer;
let timeLeft = 30;

// --- 1. START QUIZ (ክፍሎችን የመደበቅ ስራ) ---
function startQuiz(subject) {
    if (typeof allQuestions === 'undefined') {
        alert("ጥያቄዎቹ አልተጫኑም! እባክህ allQuestions ዝርዝር መኖሩን አረጋግጥ።");
        return;
    }

    let filtered = allQuestions.filter(q => q.cat === subject);
    
    if (filtered.length === 0) {
        alert(subject + " በሚለው ሰብጀክት ጥያቄ አልተገኘም!");
        return;
    }

    quizQuestions = shuffleArray([...filtered]);
    currentQuestionIndex = 0;
    score = 0;

    // ገጾችን የመደበቅ ስራ
    // በ ምስልህ (Screenshot) ላይ እንዳየሁት ካርዶቹ ያሉት '.container' ውስጥ ነው
    const mainContent = document.querySelector('.container');
    if(mainContent) mainContent.style.display = 'none';

    // Footer እና Resources ደብቅ
    const footer = document.querySelector('.footer');
    const resources = document.querySelector('.resources-section');
    if(footer) footer.style.display = 'none';
    if(resources) resources.style.display = 'none';

    // የጥያቄ ማሳያውን አሳይ
    const quizArea = document.getElementById('quiz-area-wrapper');
    if(quizArea) quizArea.style.display = 'block';

    showQuestion();
}

// --- 2. GO HOME (ክፍሎችን የመመለስ ስራ) ---
function goHome() {
    // የጥያቄ ማሳያውን ደብቅ
    const quizArea = document.getElementById('quiz-area-wrapper');
    if(quizArea) quizArea.style.display = 'none';

    // ዋናውን ይዘት፣ Footer እና Resources መልሰህ አሳይ
    const mainContent = document.querySelector('.container');
    const footer = document.querySelector('.footer');
    const resources = document.querySelector('.resources-section');

    if(mainContent) mainContent.style.display = 'block';
    if(footer) footer.style.display = 'block';
    if(resources) resources.style.display = 'block';
}

// --- 3. SHOW QUESTION ---
function showQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    let q = quizQuestions[currentQuestionIndex];
    let quizBox = document.getElementById('quiz-box');
    let shuffledOptions = shuffleArray([...q.options]);

    quizBox.innerHTML = `
        <div id="timer-display" style="font-size:24px; color:red; font-weight:bold; text-align:center; margin-bottom:10px;">Time: 30s</div>
        <h2 style="text-align:center; color:#007bff;">${q.cat}</h2>
        <p style="font-size:1.3rem; font-weight:bold; margin:20px 0;">${currentQuestionIndex + 1}. ${q.q}</p>
        <div id="options-container"></div>
    `;

    shuffledOptions.forEach(opt => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = "quiz-answer-btn";
        btn.onclick = () => checkAnswer(opt, q.a);
        document.getElementById('options-container').appendChild(btn);
    });
    startTimer();
}

// --- 4. TIMER ---
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const timerDisp = document.getElementById('timer-display');
        if(timerDisp) timerDisp.innerText = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(null, quizQuestions[currentQuestionIndex].a);
        }
    }, 1000);
}

// --- 5. CHECK ANSWER & SPEECH ---
function checkAnswer(selected, correct) {
    clearInterval(timer);
    const buttons = document.querySelectorAll('.quiz-answer-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correct) {
            btn.style.background = "#28a745"; 
            btn.style.color = "white";
        }
        if (btn.innerText === selected && selected !== correct) {
            btn.style.background = "#dc3545"; 
            btn.style.color = "white";
        }
    });

    if (selected === correct) {
        score++;
        speak("Correct!");
    } else {
        speak("Incorrect. The answer is " + correct);
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showFinalResult();
        }
    }, 2500);
}

// --- 6. SPEECH FUNCTION ---
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }
}

// --- 7. FINAL RESULT ---
function showFinalResult() {
    let quizBox = document.getElementById('quiz-box');
    let percent = Math.round((score / quizQuestions.length) * 100);
    let savedName = localStorage.getItem('studentName') || "Student";
    let message = percent >= 80 ? `Excellent job, ${savedName}! 🏆` : "Good effort! Keep practicing. 💪";

    quizBox.innerHTML = `
        <h2 style="color: #007bff; text-align:center;">QUIZ COMPLETED</h2>
        <div style="font-size: 50px; font-weight: bold; text-align:center; margin: 20px 0;">${score} / ${quizQuestions.length}</div>
        <p style="font-size: 1.3rem; text-align:center; margin-bottom: 25px;">${message} (${percent}%)</p>
        <button onclick="goHome()" style="width:100%; padding: 18px; background: #28a745; color: white; border: none; border-radius: 12px; cursor: pointer; font-size:18px; font-weight: bold;">
            FINISH & GO HOME
        </button>
    `;
    
    saveScore(savedName, quizQuestions[0].cat, percent);
}

// --- 8. USER MANAGEMENT (LocalStorage) ---
function saveUserName() {
    const nameInput = document.getElementById('userNameInput').value;
    const streamInput = document.getElementById('streamChoice').value;

    if (nameInput && streamInput) {
        localStorage.setItem('studentName', nameInput);
        localStorage.setItem('studentStream', streamInput);
        document.getElementById('login-overlay').style.display = 'none';
    } else {
        alert("Please enter your name and select a stream!");
    }
}

function logout() {
    localStorage.removeItem('studentName');
    localStorage.removeItem('studentStream');
    location.reload();
}

// --- 9. UTILITIES (Shuffle & Dark Mode) ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.onclick = function() {
            document.body.classList.toggle('dark-theme');
            const modeIcon = document.getElementById('mode-icon');
            if(modeIcon) modeIcon.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
        };
    }
}

function saveScore(name, subject, scorePercent) {
    let leaderboard = JSON.parse(localStorage.getItem('studyHubLeaderboard')) || [];
    leaderboard.push({ name: name, subject: subject, score: scorePercent });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);
    localStorage.setItem('studyHubLeaderboard', JSON.stringify(leaderboard));
}

// --- 10. PAGE LOAD ---
window.onload = function() {
    initDarkMode();
    const savedName = localStorage.getItem('studentName');
    const savedStream = localStorage.getItem('studentStream');

    if (savedName && savedStream) {
        document.getElementById('login-overlay').style.display = 'none';
    } else {
        document.getElementById('login-overlay').style.display = 'flex';
    }
};
