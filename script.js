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
    { cat: "Geography", q: "Which type of rainfall is most common in the Ethiopian highlands?", options: ["Cyclonic", "Relief/Orograhic", "Convectional", "Frontal"], a: "Relief/Orograhic" },
    { cat: "Geography", q: "The instrument used to measure the direction of wind is:", options: ["Anemometer", "Barometer", "Wind Vane", "Hygrometer"], a: "Wind Vane" },
    { cat: "Geography", q: "Which soil type is known for being red and highly acidic, common in Western Ethiopia?", options: ["Nitosols", "Vertisols", "Fluvisols", "Cambisols"], a: "Nitosols" },
    { cat: "Geography", q: "The major cause of global warming is the increase of:", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], a: "Carbon dioxide" },
    { cat: "Geography", q: "Which sub-sector of agriculture contributes the most to Ethiopia's GDP?", options: ["Livestock", "Crop production", "Forestry", "Fishery"], a: "Crop production" },
    { cat: "Geography", q: "The point where the sun is directly overhead at the Equator is called:", options: ["Solstice", "Equinox", "Aphelion", "Perihelion"], a: "Equinox" },
    { cat: "Geography", q: "Which natural vegetation is dominant in the Ethiopian Lowlands?", options: ["Tropical Rainforest", "Savanna Grassland", "Desert Scrub", "Coniferous Forest"], a: "Savanna Grassland" },
    { cat: "Geography", q: "The 'Dega' climate zone is generally suitable for growing:", options: ["Coffee", "Barley and Wheat", "Sugarcane", "Cotton"], a: "Barley and Wheat" },
    { cat: "Geography", q: "What is the standard time zone of Ethiopia compared to GMT?", options: ["GMT+1", "GMT+2", "GMT+3", "GMT+4"], a: "GMT+3" },
    { cat: "Geography", q: "The process of moving soil and rocks by wind or water is:", options: ["Weathering", "Erosion", "Sedimentation", "Solidification"], a: "Erosion" },
    { cat: "Geography", q: "Which of the following is a major characteristic of the Cenozoic era in Ethiopia?", options: ["Formation of basement rocks", "Formation of the Rift Valley", "Denudation and peneplanation", "Marine transgression"], a: "Formation of the Rift Valley" },
    { cat: "Geography", q: "The 'Kolla' climate zone is generally found at an altitude of:", options: ["Below 500m", "500m to 1500m", "1500m to 2300m", "Above 3300m"], a: "500m to 1500m" },
    { cat: "Geography", q: "Which river basin is the largest in terms of annual water discharge in Ethiopia?", options: ["Abbay", "Baro-Akobo", "Omo-Gibe", "Wabe Shebelle"], a: "Abbay" },
    { cat: "Geography", q: "The ratio of the number of people to the total arable land is called:", options: ["Crude density", "Agricultural density", "Physiological density", "Economic density"], a: "Physiological density" },
    { cat: "Geography", q: "On a map, a line that connects points of equal temperature is known as:", options: ["Isobar", "Isotherm", "Isohyet", "Isoneph"], a: "Isotherm" },
    { cat: "Geography", q: "Which geological process is responsible for the formation of the Ethiopian Highlands?", options: ["Faulting", "Folding", "Uplifting", "Sedimentation"], a: "Uplifting" },
    { cat: "Geography", q: "The most significant source of moisture for the summer (Kiremt) rain in Ethiopia is:", options: ["Indian Ocean", "Atlantic Ocean", "Red Sea", "Mediterranean Sea"], a: "Atlantic Ocean" },
    { cat: "Geography", q: "Which of the following is a typical example of a 'Highland Lake' in Ethiopia?", options: ["Lake Shala", "Lake Tana", "Lake Abijatta", "Lake Langano"], a: "Lake Tana" },
    { cat: "Geography", q: "The main objective of 'Terracing' in the Ethiopian highlands is to:", options: ["Increase soil acidity", "Prevent soil erosion", "Increase wind speed", "Encourage deforestation"], a: "Prevent soil erosion" },
    { cat: "Geography", q: "A map with a scale of 1:25,000 is categorized as a:", options: ["Small scale map", "Medium scale map", "Large scale map", "Wall map"], a: "Large scale map" },
    { cat: "Geography", q: "Which Ethiopian river basin is shared with Somalia and flows into the Indian Ocean?", options: ["Awash", "Wabe Shebelle", "Tekeze", "Baro"], a: "Wabe Shebelle" },
    { cat: "Geography", q: "The process of 'Solar Radiation' reaching the Earth's surface is called:", options: ["Insulation", "Insolation", "Conduction", "Convection"], a: "Insolation" },
    { cat: "Geography", q: "Which region in Ethiopia is most affected by frequent droughts?", options: ["Western Highlands", "The Lowlands", "Central Highlands", "Southern Highlands"], a: "The Lowlands" },
    { cat: "Geography", q: "The 'Age of Mammals' refers to which geological era?", options: ["Pre-Cambrian", "Paleozoic", "Mesozoic", "Cenozoic"], a: "Cenozoic" },
    { cat: "Geography", q: "The point where the crust of the Earth breaks during an earthquake is the:", options: ["Epicenter", "Focus", "Fault line", "Core"], a: "Focus" },
    { cat: "Geography", q: "Which type of settlement is most common in the rural highlands of Ethiopia?", options: ["Nucleated", "Dispersed", "Linear", "Urban"], a: "Dispersed" },
    { cat: "Geography", q: "The method of representing the 3D Earth on a 2D flat paper is:", options: ["Map Projection", "Map Scale", "Generalization", "Orientation"], a: "Map Projection" },
    { cat: "Geography", q: "Which of the following is a perennial river (flows all year round) in Ethiopia?", options: ["Abbay", "Mile", "Borkena", "Angereb"], a: "Abbay" },
    { cat: "Geography", q: "The 'Greenhouse Effect' is primarily caused by which gas?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], a: "Carbon Dioxide" },
    { cat: "Geography", q: "What is the primary export destination for Ethiopian coffee?", options: ["China", "Germany", "Japan", "USA"], a: "Germany" },

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
    { cat: "History", q: "Emperor Fasilides established his capital in 1636 at:", options: ["Debre Berhan", "Gondar", "Ankober", "Magdala"], a: "Gondar" },
    { cat: "History", q: "The 'Tripartite Treaty' of 1906 was signed between:", options: ["Italy, UK, France", "Ethiopia, Italy, UK", "Egypt, Sudan, UK", "Germany, Italy, UK"], a: "Italy, UK, France" },
    { cat: "History", q: "Which battle marked the end of the Second Italo-Ethiopian War in 1936?", options: ["Maichew", "Amba Alagi", "Temben", "Shire"], a: "Maichew" },
    { cat: "History", q: "The South African leader who ended Apartheid was:", options: ["Nelson Mandela", "Desmond Tutu", "Steve Biko", "Thabo Mbeki"], a: "Nelson Mandela" },
    { cat: "History", q: "Which treaty officially ended World War I?", options: ["Treaty of Westphalia", "Treaty of Versailles", "Treaty of London", "Treaty of Paris"], a: "Treaty of Versailles" },
    { cat: "History", q: "The 'Industrial Revolution' first started in:", options: ["USA", "France", "Great Britain", "Germany"], a: "Great Britain" },
    { cat: "History", q: "Who was the leader of the Nazi party in Germany?", options: ["Stalin", "Mussolini", "Adolf Hitler", "Churchill"], a: "Adolf Hitler" },
    { cat: "History", q: "The 'Cold War' was a period of tension between:", options: ["USA and USSR", "UK and France", "Germany and Italy", "China and Japan"], a: "USA and USSR" },
    { cat: "History", q: "The French Revolution began in the year:", options: ["1776", "1789", "1815", "1848"], a: "1789" },
    { cat: "History", q: "Which organization replaced the League of Nations after WWII?", options: ["NATO", "OAU", "United Nations", "European Union"], a: "United Nations" },
    { cat: "History", q: "Who invented the printing press in Europe?", options: ["Gutenberg", "Newton", "Galileo", "Da Vinci"], a: "Gutenberg" },
    { cat: "History", q: "The 'Middle Passage' refers to the transport of:", options: ["Gold", "Slaves", "Spices", "Silk"], a: "Slaves" },
    { cat: "History", q: "The 'Marshall Plan' was designed to rebuild:", options: ["Asia", "Africa", "Western Europe", "South America"], a: "Western Europe" },
    { cat: "History", q: "The immediate cause of World War II was the invasion of:", options: ["France", "Russia", "Poland", "Austria"], a: "Poland" },
    { cat: "History", q: "Who is known as the 'Father of Communism'?", options: ["Adam Smith", "Karl Marx", "John Locke", "Voltaire"], a: "Karl Marx" },

    // Aptitude
    { cat: "Aptitude", q: "Complete the series: 5, 10, 20, 40, ...?", options: ["50", "60", "80", "100"], a: "80" },
    { cat: "Aptitude", q: "WATER is to ICE as STEAM is to: ?", options: ["Fire", "Gas", "Water", "Cloud"], a: "Water" },
    { cat: "Aptitude", q: "If 'PEN' is coded as 'QFO', how is 'CAT' coded?", options: ["DBU", "BZS", "DBS", "EAV"], a: "DBU" },
    { cat: "Aptitude", q: "Doctor is to Hospital as Teacher is to:", options: ["Student", "School", "Office", "Book"], a: "School" },
    { cat: "Aptitude", q: "A father is 30 years older than his son. In 5 years, the father will be 35. How old is the son now?", options: ["0", "5", "10", "15"], a: "0" },
    { cat: "Aptitude", q: "Which word does NOT belong with the others?", options: ["Leopard", "Lion", "Tiger", "Wolf"], a: "Wolf" },
    { cat: "Aptitude", q: "If all Roses are Flowers and some Flowers fade quickly, then:", options: ["All Roses fade quickly", "Some Roses fade quickly", "No Roses fade quickly", "None of the above"], a: "None of the above" },
    { cat: "Aptitude", q: "What is 15% of 200?", options: ["20", "25", "30", "35"], a: "30" },
    { cat: "Aptitude", q: "If the day after tomorrow is Sunday, what day was it yesterday?", options: ["Thursday", "Friday", "Saturday", "Wednesday"], a: "Thursday" },
    { cat: "Aptitude", q: "Hand is to Glove as Foot is to:", options: ["Sock", "Toe", "Leg", "Walk"], a: "Sock" },
    { cat: "Aptitude", q: "A shopkeeper buys an item for 80 Birr and sells it for 100 Birr. What is the profit percentage?", options: ["20%", "25%", "15%", "10%"], a: "25%" },
    { cat: "Aptitude", q: "If 5 workers can build a wall in 10 days, how many days will it take 10 workers?", options: ["20", "10", "5", "2"], a: "5" },

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
    { cat: "English", q: "I have been waiting for the bus _______ 8:30 AM.", options: ["for", "since", "at", "until"], a: "since" },
    { cat: "English", q: "The manager is responsible _______ hiring new employees.", options: ["to", "for", "with", "at"], a: "for" },
    { cat: "English", q: "I am looking _______ my lost keys. Have you seen them?", options: ["at", "after", "for", "on"], a: "for" },
    { cat: "English", q: "She was very tired, _______ she went to bed early.", options: ["but", "so", "because", "although"], a: "so" },
    { cat: "English", q: "I _______ go to the gym, but now I prefer running.", options: ["used to", "am used to", "use to", "was used to"], a: "used to" },
    { cat: "English", q: "The phone rang while I _______ dinner.", options: ["cook", "am cooking", "was cooking", "cooked"], a: "was cooking" },
    { cat: "English", q: "If I _______ his number, I would have called him yesterday.", options: ["know", "knew", "had known", "would know"], a: "had known" },
    { cat: "English", q: "This is the car _______ I bought last month.", options: ["who", "whom", "whose", "which"], a: "which" },
    { cat: "English", q: "The children are excited _______ going to the park.", options: ["about", "at", "with", "for"], a: "about" },
    { cat: "English", q: "I _______ him since we graduated from high school.", options: ["didn't see", "haven't seen", "don't see", "am not seeing"], a: "haven't seen" },
    { cat: "English", q: "The plane _______ off at 10:00 AM sharp tomorrow.", options: ["takes", "took", "is taking", "taken"], a: "takes" },
    { cat: "English", q: "He is good _______ playing football.", options: ["in", "at", "with", "on"], a: "at" },
    { cat: "English", q: "Choose the word with the correct prefix: 'Not legal' is _______.", options: ["unlegal", "illegal", "dislegal", "inlegal"], a: "illegal" },
    { cat: "English", q: "I am sorry, but I _______ agree with your opinion.", options: ["don't", "am not", "haven't", "doesn't"], a: "don't" },
    { cat: "English", q: "The price of bread has _______ significantly this year.", options: ["raised", "risen", "rose", "rising"], a: "risen" },
    { cat: "English", q: "My sister _______ her room every Saturday morning.", options: ["clean", "cleans", "is cleaning", "cleaned"], a: "cleans" },
    { cat: "English", q: "I haven't finished my project _______.", options: ["already", "just", "yet", "ever"], a: "yet" },
    { cat: "English", q: "She is the woman _______ daughter won the national prize.", options: ["who", "whose", "whom", "which"], a: "whose" },
    { cat: "English", q: "If you _______ water to 100°C, it boils.", options: ["heat", "heated", "will heat", "heating"], a: "heat" },
    { cat: "English", q: "They _______ in this city for ten years before they moved.", options: ["live", "have lived", "had lived", "are living"], a: "had lived" },
    { cat: "English", q: "The math test was _______ than the English one.", options: ["difficult", "more difficult", "most difficult", "as difficult"], a: "more difficult" },
    { cat: "English", q: "I _______ go to the cinema tonight; it depends on my work.", options: ["must", "might", "should", "will"], a: "might" },
    { cat: "English", q: "Which word is the synonym of 'Rapid'?", options: ["Slow", "Fast", "Quiet", "Heavy"], a: "Fast" },
    { cat: "English", q: "Identify the antonym of 'Victory':", options: ["Success", "Win", "Defeat", "Growth"], a: "Defeat" },
    { cat: "English", q: "I don't mind _______ for you if you are late.", options: ["wait", "to wait", "waiting", "waited"], a: "waiting" },
    { cat: "English", q: "We should avoid _______ plastic bags to protect the environment.", options: ["use", "to use", "using", "used"], a: "using" },
    { cat: "English", q: "The students _______ the homework by the time the teacher arrived.", options: ["finished", "have finished", "had finished", "finish"], a: "had finished" },
    { cat: "English", q: "He is very rich; _______, he is not happy.", options: ["therefore", "however", "so", "because"], a: "however" },
    { cat: "English", q: "I _______ my teeth twice a day.", options: ["brush", "brushes", "am brushing", "brushed"], a: "brush" },
    { cat: "English", q: "They _______ to the stadium to watch the match now.", options: ["go", "are going", "went", "have gone"], a: "are going" },

    // Mathematics
    { cat: "Mathematics", q: "What is the 10th term of the sequence: 2, 5, 8, 11...?", options: ["29", "30", "32", "27"], a: "29" },
    { cat: "Mathematics", q: "If the mean of 4, 8, and x is 10, find x.", options: ["18", "12", "14", "10"], a: "18" },
    { cat: "Mathematics", q: "What is the slope of the line y = 3x + 5?", options: ["5", "3", "-3", "1/3"], a: "3" },
    { cat: "Mathematics", q: "What is the value of 5! (5 factorial)?", options: ["20", "60", "120", "100"], a: "120" },
    { cat: "Mathematics", q: "The set of all possible outcomes of an experiment is called:", options: ["Event", "Sample Space", "Probability", "Subset"], a: "Sample Space" },
    { cat: "Mathematics", q: "What is the median of: 3, 7, 9, 10, 15?", options: ["7", "9", "10", "8.8"], a: "9" },
    { cat: "Mathematics", q: "Solve for x: 2x - 10 = 30.", options: ["10", "15", "20", "25"], a: "20" },
    { cat: "Mathematics", q: "A triangle with all sides equal is called:", options: ["Isosceles", "Scalene", "Equilateral", "Right"], a: "Equilateral" },
    { cat: "Mathematics", q: "What is the square root of 144?", options: ["10", "11", "12", "14"], a: "12" },
    { cat: "Mathematics", q: "The sum of the angles in a triangle is:", options: ["90°", "180°", "360°", "270°"], a: "180°" },
    { cat: "Mathematics", q: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?", options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2}", "{4, 5}"], a: "{3}" },
    { cat: "Mathematics", q: "What is the median of the data: 2, 4, 7, 8, 9?", options: ["4", "7", "8", "6"], a: "7" },
    { cat: "Mathematics", q: "Find the value of log10(1000):", options: ["1", "2", "3", "10"], a: "3" },
    { cat: "Mathematics", q: "In a geometric sequence 2, 6, 18, ..., what is the common ratio (r)?", options: ["2", "3", "4", "6"], a: "3" },
    { cat: "Mathematics", q: "What is the probability of tossing a coin and getting Heads?", options: ["1", "0", "0.5", "2"], a: "0.5" },
    { cat: "Mathematics", q: "If 2x + 5 = 15, then x is:", options: ["5", "10", "7.5", "2"], a: "5" },
    { cat: "Mathematics", q: "What is the slope of the line y = 3x + 2?", options: ["2", "3", "3x", "5"], a: "3" },
    { cat: "Mathematics", q: "The sum of the angles in a triangle is:", options: ["90°", "180°", "270°", "360°"], a: "180°" },
    { cat: "Mathematics", q: "Find the mean of 10, 20, and 30:", options: ["15", "20", "25", "60"], a: "20" },
    { cat: "Mathematics", q: "What is 25% of 200?", options: ["25", "40", "50", "100"], a: "50" },
    { cat: "Mathematics", q: "Which of these is a prime number?", options: ["9", "15", "17", "21"], a: "17" },
    { cat: "Mathematics", q: "The square root of 144 is:", options: ["10", "11", "12", "14"], a: "12" },
    { cat: "Mathematics", q: "If a set has 3 elements, how many subsets does it have?", options: ["3", "6", "8", "9"], a: "8" },
    { cat: "Mathematics", q: "In an arithmetic sequence 5, 10, 15, ..., what is the 10th term?", options: ["45", "50", "55", "60"], a: "50" },
    { cat: "Mathematics", q: "What is the mode of the set: 1, 2, 2, 3, 4, 4, 4, 5?", options: ["2", "3", "4", "5"], a: "4" },
    { cat: "Mathematics", q: "Solve for x: x/4 = 3", options: ["7", "1", "12", "0.75"], a: "12" },
    { cat: "Mathematics", q: "What is the value of 5! (5 factorial)?", options: ["20", "60", "120", "150"], a: "120" },
    { cat: "Mathematics", q: "A circle's diameter is 10cm. What is its radius?", options: ["5cm", "10cm", "20cm", "2.5cm"], a: "5cm" },
    { cat: "Mathematics", q: "Which of the following is an irrational number?", options: ["2", "0.5", "√2", "1/3"], a: "√2" },
    { cat: "Mathematics", q: "If f(x) = 2x - 3, find f(5):", options: ["5", "7", "10", "13"], a: "7" },
    { cat: "Mathematics", q: "The range of the data 10, 2, 35, 18, 42 is:", options: ["32", "40", "42", "10"], a: "40" },
    { cat: "Mathematics", q: "What is the value of (3^2) * (3^3)?", options: ["3^5", "3^6", "9^5", "9^6"], a: "3^5" },
    { cat: "Mathematics", q: "Solve: 10 - 2 * 3 + 4", options: ["28", "8", "12", "16"], a: "8" },
    { cat: "Mathematics", q: "The point (0,0) is called the:", options: ["Vertex", "Axis", "Origin", "Intercept"], a: "Origin" },
    { cat: "Mathematics", q: "What is the area of a rectangle with length 5 and width 4?", options: ["9", "18", "20", "40"], a: "20" },
    { cat: "Mathematics", q: "If A and B are disjoint sets, then A ∩ B is:", options: ["A", "B", "Empty Set (∅)", "Universal Set"], a: "Empty Set (∅)" },
    { cat: "Mathematics", q: "What is the next term in: 1, 4, 9, 16, ___?", options: ["20", "25", "30", "36"], a: "25" },
    { cat: "Mathematics", q: "In probability, the sum of all possible outcomes is:", options: ["0", "0.5", "1", "100"], a: "1" },
    { cat: "Mathematics", q: "What is log(1)?", options: ["0", "1", "10", "Undefined"], a: "0" },
    { cat: "Mathematics", q: "Find the LCM of 4 and 6:", options: ["2", "12", "24", "10"], a: "12" },
    { cat: "Mathematics", q: "How many sides does a Hexagon have?", options: ["5", "6", "7", "8"], a: "6" },
    { cat: "Mathematics", q: "The formula for the area of a circle is:", options: ["2πr", "πd", "πr²", "2πd"], a: "πr²" },
    { cat: "Mathematics", q: "Simplify: 2(x + 3) - 4", options: ["2x - 1", "2x + 2", "2x + 6", "2x - 4"], a: "2x + 2" },
    { cat: "Mathematics", q: "What is the derivative of a constant number?", options: ["1", "The number itself", "0", "x"], a: "0" },
    { cat: "Mathematics", q: "The y-intercept of y = 4x - 7 is:", options: ["4", "7", "-7", "0"], a: "-7" },
    { cat: "Mathematics", q: "Convert 0.75 into a fraction:", options: ["1/4", "1/2", "3/4", "4/3"], a: "3/4" },
    { cat: "Mathematics", q: "What is the absolute value of -15?", options: ["0", "15", "-15", "1"], a: "15" },
    { cat: "Mathematics", q: "If x² = 49, then x is:", options: ["7 only", "-7 only", "±7", "24.5"], a: "±7" },
    { cat: "Mathematics", q: "A triangle with all sides equal is called:", options: ["Isosceles", "Scalene", "Equilateral", "Right-angled"], a: "Equilateral" },
    { cat: "Mathematics", q: "What is 10 to the power of 0?", options: ["0", "1", "10", "100"], a: "1" },

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
    { cat: "Economics", q: "The reward for Labor is:", options: ["Profit", "Interest", "Rent", "Wages"], a: "Wages" },
    { cat: "Economics", q: "What does 'Laissez-faire' mean?", options: ["Government control", "Free market", "Mixed economy", "Socialism"], a: "Free market" },
    { cat: "Economics", q: "The 'Law of Supply' states that as price increases, quantity supplied:", options: ["Decreases", "Increases", "Stays same", "Fluctuates"], a: "Increases" },
    { cat: "Economics", q: "A situation where quantity demanded exceeds quantity supplied is:", options: ["Surplus", "Shortage", "Equilibrium", "Elasticity"], a: "Shortage" },
    { cat: "Economics", q: "Goods that are used together, such as car and petrol, are called:", options: ["Substitutes", "Complements", "Normal goods", "Inferior goods"], a: "Complements" },
    { cat: "Economics", q: "The responsiveness of quantity demanded to a change in price is:", options: ["Utility", "Elasticity", "Equilibrium", "Scarcity"], a: "Elasticity" },
    { cat: "Economics", q: "In which market structure are there a few large sellers?", options: ["Monopoly", "Perfect Competition", "Oligopoly", "Monopolistic Competition"], a: "Oligopoly" },
    { cat: "Economics", q: "The total satisfaction derived from consuming a good is:", options: ["Marginal Utility", "Average Utility", "Total Utility", "Fixed Utility"], a: "Total Utility" },
    { cat: "Economics", q: "Which of the following is a fixed cost?", options: ["Raw materials", "Electricity bill", "Rent of building", "Wages of daily workers"], a: "Rent of building" },
    { cat: "Economics", q: "The long-run period is a time when:", options: ["All costs are fixed", "All inputs are variable", "Only labor is variable", "No production occurs"], a: "All inputs are variable" },
    { cat: "Economics", q: "What is the formula for Total Revenue (TR)?", options: ["Price + Quantity", "Price / Quantity", "Price * Quantity", "Price - Quantity"], a: "Price * Quantity" },
    { cat: "Economics", q: "A market with many sellers offering slightly different products is:", options: ["Monopoly", "Oligopoly", "Monopolistic Competition", "Perfect Competition"], a: "Monopolistic Competition" },
    { cat: "Economics", q: "The value of the next best alternative forgiven up is:", options: ["Fixed cost", "Opportunity cost", "Variable cost", "Marginal cost"], a: "Opportunity cost" },
    { cat: "Economics", q: "Who is the 'Father of Macroeconomics'?", options: ["Adam Smith", "John Maynard Keynes", "David Ricardo", "Karl Marx"], a: "John Maynard Keynes" },
    { cat: "Economics", q: "Which of the following is a component of Aggregate Demand?", options: ["Consumption", "Investment", "Government Spending", "All of the above"], a: "All of the above" },
    { cat: "Economics", q: "Money that has no intrinsic value but is declared legal tender is:", options: ["Commodity money", "Fiat money", "Metallic money", "Barter money"], a: "Fiat money" },
    { cat: "Economics", q: "The primary goal of a firm in a capitalist economy is:", options: ["Social welfare", "Profit maximization", "Price stability", "Reducing unemployment"], a: "Profit maximization" },
    { cat: "Economics", q: "A tax that takes a larger percentage from low-income earners is:", options: ["Progressive", "Proportional", "Regressive", "Direct"], a: "Regressive" },
    { cat: "Economics", q: "The 'Balance of Trade' is the difference between:", options: ["Tax and Spending", "Savings and Investment", "Exports and Imports", "Birth and Death rates"], a: "Exports and Imports" },
    { cat: "Economics", q: "Economic growth is typically measured by an increase in:", options: ["Inflation", "Population", "Real GDP", "Money supply"], a: "Real GDP" },
    { cat: "Economics", q: "Which phase of the business cycle follows a peak?", options: ["Recovery", "Expansion", "Recession", "Trough"], a: "Recession" },
    { cat: "Economics", q: "The central bank's action to control money supply is called:", options: ["Fiscal Policy", "Monetary Policy", "Trade Policy", "Income Policy"], a: "Monetary Policy" },
    { cat: "Economics", q: "Unemployment caused by a mismatch between skills and jobs is:", options: ["Frictional", "Structural", "Cyclical", "Seasonal"], a: "Structural" },
    { cat: "Economics", q: "The demand for salt is usually:", options: ["Highly elastic", "Inelastic", "Perfectly elastic", "Unitary"], a: "Inelastic" },
    { cat: "Economics", q: "What is 'Deflation'?", options: ["Rising prices", "Falling prices", "Stable prices", "High interest rates"], a: "Falling prices" },
    { cat: "Economics", q: "The 'Command Economy' is mainly characterized by:", options: ["Market forces", "Private ownership", "Government planning", "Free competition"], a: "Government planning" },
    { cat: "Economics", q: "Which of the following is an 'Inferior Good'?", options: ["Diamond", "New car", "Used clothing", "Smartphone"], a: "Used clothing" },
    { cat: "Economics", q: "The study of individual households and firms is:", options: ["Macroeconomics", "Microeconomics", "Global economics", "Political economy"], a: "Microeconomics" },
    { cat: "Economics", q: "What happens when government spending exceeds tax revenue?", options: ["Budget surplus", "Budget deficit", "Balanced budget", "Trade surplus"], a: "Budget deficit" },
    { cat: "Economics", q: "The point where the budget line is tangent to the indifference curve is:", options: ["Production point", "Consumer equilibrium", "Market failure", "Inflation point"], a: "Consumer equilibrium" },
    { cat: "Economics", q: "Which of the following is a 'Public Good'?", options: ["Bread", "Shoes", "Street lighting", "Mobile phones"], a: "Street lighting" },
    { cat: "Economics", q: "The price floor is a government-imposed:", options: ["Maximum price", "Minimum price", "Average price", "Market price"], a: "Minimum price" },
    { cat: "Economics", q: "In the circular flow of income, households provide:", options: ["Goods and services", "Factors of production", "Taxes", "Subsidies"], a: "Factors of production" },
    { cat: "Economics", q: "The main reason for international trade is:", options: ["Absolute advantage", "Comparative advantage", "Political reasons", "High tariffs"], a: "Comparative advantage" },
    { cat: "Economics", q: "What does 'PPP' stand for in economics?", options: ["Public Private Partnership", "Purchasing Power Parity", "Price Production Policy", "Private Profit Plan"], a: "Purchasing Power Parity" },
    { cat: "Economics", q: "A rise in the value of a currency against others is:", options: ["Depreciation", "Devaluation", "Appreciation", "Inflation"], a: "Appreciation" },
    { cat: "Economics", q: "Which curve shows the relationship between tax rates and tax revenue?", options: ["Lorenz Curve", "Laffer Curve", "Demand Curve", "Supply Curve"], a: "Laffer Curve" },
    { cat: "Economics", q: "The inequality of income distribution is measured by:", options: ["Gini Coefficient", "GDP per capita", "CPI", "Interest rate"], a: "Gini Coefficient" },
    { cat: "Economics", q: "A period of high inflation and high unemployment is called:", options: ["Hyperinflation", "Stagflation", "Reflation", "Deflation"], a: "Stagflation" }
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
        <button onclick="window.open('https://t.me/share/@combat0988?text=${encodeURIComponent(msg)}')">Share Score</button>
    `;
}

function cancelQuiz() {
    if (confirm("Are you sure you want to quit?")) {
        clearInterval(timer); 
        document.getElementById("quiz-box").style.display = "none"; 
        document.getElementById("subject-selection").style.display = "flex"; 
    }
}
