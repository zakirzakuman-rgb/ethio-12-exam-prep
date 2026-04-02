// 1. ALL DATA (Social + Natural + Aptitude + Others)
const allQuestions = [
    // --- GEOGRAPHY (50 Questions) ---
 { cat: "Geography", q: "Which is the highest mountain in Ethiopia?", options: ["Batu", "Ras Dashen", "Guge", "Chilalo"], a: "Ras Dashen" },
    { cat: "Geography", q: "Which lake is the source of the Blue Nile?", options: ["Ziway", "Abaya", "Tana", "Chamo"], a: "Tana" },
    { cat: "Geography", q: "V-shaped contour lines pointing uphill indicate a:", options: ["Valley", "Ridge", "Cliff", "Plain"], a: "Valley" },
    { cat: "Geography", q: "The ratio between map distance and ground distance is:", options: ["Legend", "Scale", "Grid", "Projection"], a: "Scale" },
    { cat: "Geography", q: "Geological era known as 'Age of Reptiles' is:", options: ["Cenozoic", "Mesozoic", "Paleozoic", "Precambrian"], a: "Mesozoic" },
    { cat: "Geography", q: "Traditional climate zone between 1500m and 2300m is:", options: ["Kolla", "Dega", "Woina Dega", "Bereha"], a: "Woina Dega" },
    { cat: "Geography", q: "Which river flows eastward into the Afar depression?", options: ["Abbay", "Awash", "Omo", "Genale"], a: "Awash" },
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
    { cat: "Geography", q: "The most recent geological era is:", options: ["Cenozoic", "Mesozoic", "Paleozoic", "Precambrian"], a: "Cenozoic" },
    { cat: "Geography", q: "Which river is the longest in Ethiopia?", options: ["Abbay", "Wabe Shebelle", "Awash", "Genale"], a: "Abbay" },
    { cat: "Geography", q: "Which of the following is an endoreic lake?", options: ["Lake Tana", "Lake Abaya", "Lake Rudolf (Turkana)", "Lake Ziway"], a: "Lake Rudolf (Turkana)" },
    { cat: "Geography", q: "The 'Basement Complex' rocks belong to which era?", options: ["Precambrian", "Paleozoic", "Mesozoic", "Cenozoic"], a: "Precambrian" },
    { cat: "Geography", q: "A map showing detailed topography of a small area is:", options: ["Topographic map", "Atlas map", "Wall map", "Thematic map"], a: "Topographic map" },
    { cat: "Geography", q: "Which drainage system is the largest in Ethiopia by area?", options: ["Western", "Southeastern", "Rift Valley", "Coastal"], a: "Western" },
    { cat: "Geography", q: "The study of the shape and features of the earth's surface is:", options: ["Geology", "Geomorphology", "Meteorology", "Climatology"], a: "Geomorphology" },
    { cat: "Geography", q: "Which part of Ethiopia has a desert climate?", options: ["Southwest", "Afar and Ogaden", "Central Highlands", "Western Highlands"], a: "Afar and Ogaden" },
    { cat: "Geography", q: "Which scale is best for showing more detail?", options: ["1:10,000", "1:100,000", "1:1,000,000", "1:10,000,000"], a: "1:10,000" },
    { cat: "Geography", q: "The 'Harenna Forest' is found in which mountains?", options: ["Semien", "Bale", "Arsi", "Choke"], a: "Bale" },
    { cat: "Geography", q: "What is the common method of showing altitude on maps?", options: ["Hachures", "Color tinting", "Contour lines", "Hill shading"], a: "Contour lines" },
    { cat: "Geography", q: "Which drainage system flows into the Indian Ocean?", options: ["Southeastern", "Western", "Inland", "Rift Valley"], a: "Southeastern" },
    { cat: "Geography", q: "The density of population calculated as People/Total Area is:", options: ["Crude Density", "Agricultural Density", "Physiological Density", "Net Density"], a: "Crude Density" },
    { cat: "Geography", q: "The largest lake in the Ethiopian Rift Valley is:", options: ["Abaya", "Chamo", "Ziway", "Langano"], a: "Abaya" },
    { cat: "Geography", q: "Which era is known for the sinking of the Horn of Africa?", options: ["Precambrian", "Paleozoic", "Mesozoic", "Cenozoic"], a: "Mesozoic" },
    { cat: "Geography", q: "Lines on a map connecting points of equal temperature:", options: ["Isobars", "Isohyets", "Isotherms", "Isohalines"], a: "Isotherms" },
    { cat: "Geography", q: "Ethiopia is located between which latitudes?", options: ["3-15 deg N", "3-48 deg N", "10-20 deg N", "5-25 deg N"], a: "3-15 deg N" },
    { cat: "Geography", q: "The main source of water for the Awash river is:", options: ["Central Highlands", "Western Lowlands", "Bale Mountains", "Arsi Mountains"], a: "Central Highlands" },
    { cat: "Geography", q: "Which town is located at the center of the Rift Valley?", options: ["Addis Ababa", "Adama", "Mekelle", "Bahir Dar"], a: "Adama" },
    { cat: "Geography", q: "Which sector provides the most employment in Ethiopia?", options: ["Industry", "Service", "Agriculture", "Mining"], a: "Agriculture" },
    { cat: "Geography", q: "Which era was the time of the formation of Coal in Ethiopia?", options: ["Cenozoic", "Mesozoic", "Paleozoic", "Precambrian"], a: "Cenozoic" },
    { cat: "Geography", q: "The steepness of a slope is shown by:", options: ["Contour interval", "Contour spacing", "Map title", "Compass direction"], a: "Contour spacing" },
    { cat: "Geography", q: "Which of these is a major cause of global warming?", options: ["Planting trees", "Burning fossil fuels", "Using solar energy", "Recycling"], a: "Burning fossil fuels" },
    { cat: "Geography", q: "Which crop is most resistant to drought?", options: ["Coffee", "Sugarcane", "Sorghum", "Banana"], a: "Sorghum" },
    { cat: "Geography", q: "Which mountains are known as the 'Roof of East Africa'?", options: ["Bale Mountains", "Semien Mountains", "Choke Mountains", "Gughe Mountains"], a: "Semien Mountains" },
    { cat: "Geography", q: "The study of population statistics is:", options: ["Demography", "Ethnography", "Geography", "Biography"], a: "Demography" },
    { cat: "Geography", q: "Which of the following is a non-renewable resource?", options: ["Water", "Forest", "Gold", "Wind"], a: "Gold" },
    { cat: "Geography", q: "The scale 1cm to 5km is which type of scale?", options: ["Representative Fraction", "Graphic", "Verbal", "Small Scale"], a: "Verbal" },
    { cat: "Geography", q: "What type of map uses colors to show population density?", options: ["Choropleth map", "Isoline map", "Dot map", "Flow-line map"], a: "Choropleth map" },
    { cat: "Geography", q: "Which lake is found at the highest altitude in Ethiopia?", options: ["Lake Tana", "Lake Ashenge", "Lake Wonchi", "Lake Hayq"], a: "Lake Wonchi" },
    { cat: "Geography", q: "The 'Kure' (Crater) lakes are common in which region?", options: ["Afar", "Oromia (Bishoftu)", "Tigray", "Amhara"], a: "Oromia (Bishoftu)" },
    { cat: "Geography", q: "Which river forms the border between Ethiopia and Eritrea?", options: ["Tekeze", "Mereb", "Angereb", "Gash"], a: "Mereb" },
    { cat: "Geography", q: "The vertical distance between two successive contours is:", options: ["Horizontal equivalent", "Contour interval", "Gradient", "Slope"], a: "Contour interval" },
    { cat: "Geography", q: "What is the name of the traditional terrace farming in Ethiopia?", options: ["Konso terracing", "Gamo terracing", "Gofa terracing", "Sidama terracing"], a: "Konso terracing" },
    { cat: "Geography", q: "Which soil is best for growing Teff?", options: ["Sandy soil", "Nitosols", "Vertisols", "Silty soil"], a: "Vertisols" },
    { cat: "Geography", q: "The 'Ogaden' region is mostly characterized by:", options: ["Highlands", "Plains and Lowlands", "Rugged mountains", "Deep valleys"], a: "Plains and Lowlands" },
    { cat: "Geography", q: "The total land area of Ethiopia is approximately:", options: ["1.1 million sq km", "2.1 million sq km", "800,000 sq km", "1.5 million sq km"], a: "1.1 million sq km" },
    { cat: "Geography", q: "Which instrument is used to measure wind speed?", options: ["Barometer", "Anemometer", "Hygrometer", "Thermometer"], a: "Anemometer" },
    { cat: "Geography", q: "What is the main cause of the seasonal rainfall in Ethiopia?", options: ["ITCZ", "Latitude", "Altitude", "Ocean currents"], a: "ITCZ" },
    { cat: "Geography", q: "Which era saw the uplift of the Ethiopian Arabo-plateau?", options: ["Cenozoic", "Mesozoic", "Paleozoic", "Precambrian"], a: "Cenozoic" },
    { cat: "Geography", q: "A graphical representation of the age and sex of a population:", options: ["Scatter plot", "Bar graph", "Population pyramid", "Pie chart"], a: "Population pyramid" },
    { cat: "Geography", q: "Which river is nicknamed 'The Father of Rivers'?", options: ["Awash", "Abbay", "Baro", "Omo"], a: "Abbay" },
    { cat: "Geography", q: "The most common natural hazard in the Afar region is:", options: ["Flood", "Drought", "Earthquake", "Landslide"], a: "Drought" },
    { cat: "Geography", q: "Which zone is known for the production of Wheat and Barley?", options: ["Kolla", "Woina Dega", "Dega", "Bereha"], a: "Dega" },
    { cat: "Geography", q: "What is the longitudinal extent of Ethiopia?", options: ["33-48 deg E", "3-15 deg E", "10-20 deg E", "40-50 deg E"], a: "33-48 deg E" },
    { cat: "Geography", q: "The drainage system that includes rivers like Baro and Akobo:", options: ["Western", "Southeastern", "Rift Valley", "Inland"], a: "Western" },
    { cat: "Geography", q: "Which lake is shared between Ethiopia and Kenya?", options: ["Lake Turkana", "Lake Abaya", "Lake Chamo", "Lake Chew Bahir"], a: "Lake Turkana" },
    { cat: "Geography", q: "The measurement of moisture in the air is:", options: ["Temperature", "Pressure", "Humidity", "Precipitation"], a: "Humidity" },
    { cat: "Geography", q: "Which forest type is found in the wettest parts of SW Ethiopia?", options: ["Coniferous", "Broad-leaved rainforest", "Dry evergreen", "Savanna woodland"], a: "Broad-leaved rainforest" },
    { cat: "Geography", q: "Which of these is a volcanic mountain?", options: ["Mount Ras Dashen", "Mount Fantale", "Mount Batu", "Mount Gughe"], a: "Mount Fantale" },
    { cat: "Geography", q: "The number of children born per 1000 people per year is:", options: ["Death rate", "Birth rate", "Growth rate", "Fertility rate"], a: "Birth rate" },
    { cat: "Geography", q: "Which city is the administrative capital of the African Union?", options: ["Nairobi", "Addis Ababa", "Cairo", "Johannesburg"], a: "Addis Ababa" },
    { cat: "Geography", q: "The gap between two mountains used as a pass:", options: ["Saddle/Col", "Peak", "Ridge", "Spur"], a: "Saddle/Col" },
    { cat: "Geography", q: "Which drainage system is entirely within Ethiopia?", options: ["Awash", "Abbay", "Baro", "Genale"], a: "Awash" },
    { cat: "Geography", q: "Which type of rocks are formed from cooling lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "Basement"], a: "Igneous" },
    { cat: "Geography", q: "What is the largest island on Lake Tana?", options: ["Dek", "Dega Estifanos", "Tana Qirqos", "Kebran"], a: "Dek" },
    { cat: "Geography", q: "The distance between two grid lines on a map is:", options: ["Grid interval", "Scale", "Legend", "Title"], a: "Grid interval" },
    { cat: "Geography", q: "Which type of agriculture involves moving from place to place?", options: ["Settled farming", "Shifting cultivation", "Plantation", "Irrigation"], a: "Shifting cultivation" },
    { cat: "Geography", q: "Which part of Ethiopia receives the highest annual rainfall?", options: ["Southwest", "Northeast", "Southeast", "East"], a: "Southwest" },
    { cat: "Geography", q: "Which minerals are mostly found in the Adola area?", options: ["Coal", "Gold", "Iron", "Salt"], a: "Gold" },
    { cat: "Geography", q: "The study of weather over a long period is:", options: ["Meteorology", "Climatology", "Geology", "Ecology"], a: "Climatology" },
    { cat: "Geography", q: "Which river basin is the most developed for irrigation?", options: ["Abbay", "Awash", "Omo", "Tekeze"], a: "Awash" },
    { cat: "Geography", q: "What is the name of the salt-rich depression in Afar?", options: ["Danakil", "Ogaden", "Rift Valley", "Borena"], a: "Danakil" },
    { cat: "Geography", q: "Which rock type is formed from pressure and heat?", options: ["Sedimentary", "Metamorphic", "Igneous", "Volcanic"], a: "Metamorphic" },
    { cat: "Geography", q: "The percentage of people living in cities is called:", options: ["Rural rate", "Urbanization rate", "Migration rate", "Density"], a: "Urbanization rate" },
    { cat: "Geography", q: "Which scale represents 1:1,000,000?", options: ["Small Scale", "Medium Scale", "Large Scale", "Detailed Scale"], a: "Small Scale" },
    { cat: "Geography", q: "The 'Great Flood' in Ethiopian history is related to which river?", options: ["Abbay", "Awash", "Omo", "Wabe Shebelle"], a: "Awash" },
    { cat: "Geography", q: "Which era saw the extinction of Dinosaurs?", options: ["Mesozoic", "Cenozoic", "Paleozoic", "Precambrian"], a: "Mesozoic" },
    { cat: "Geography", q: "Which mountain range separates Ethiopia and Kenya?", options: ["Semien", "Bale", "Moyale", "Choke"], a: "Moyale" },
    { cat: "Geography", q: "The lines on a map that run North-South are:", options: ["Latitudes", "Longitudes", "Isohyets", "Isotherms"], a: "Longitudes" },
    { cat: "Geography", q: "Which lake is famous for its birds and flamingoes?", options: ["Abijatta-Shalla", "Tana", "Hayq", "Ashenge"], a: "Abijatta-Shalla" },
    { cat: "Geography", q: "The most common religion in the Ogaden region is:", options: ["Orthodox", "Islam", "Protestant", "Catholic"], a: "Islam" },
    { cat: "Geography", q: "Which of these is a characteristic of a youthful river?", options: ["V-shaped valley", "Meanders", "Flood plains", "Delta"], a: "V-shaped valley" },
    { cat: "Geography", q: "What is the primary export destination for Ethiopian coffee?", options: ["USA", "Germany", "China", "India"], a: "Germany" },
    { cat: "Geography", q: "Which era is characterized by the formation of the Rift Valley?", options: ["Cenozoic", "Mesozoic", "Paleozoic", "Precambrian"], a: "Cenozoic" },
    { cat: "Geography", q: "The average number of children a woman bears is:", options: ["CBR", "ASFR", "TFR", "CDR"], a: "TFR" },
    { cat: "Geography", q: "Which sector is the biggest contributor to Ethiopia's GDP?", options: ["Agriculture", "Industry", "Service", "Tourism"], a: "Service" },
    
  // --- APTITUDE (30 Questions) ---
{ cat: "Aptitude", q: "Find the next number in the sequence: 2, 4, 8, 16, ___", options: ["24", "30", "32", "64"], a: "32" },
    { cat: "Aptitude", q: "Choose the word that is most nearly the opposite of 'ENORMOUS':", options: ["Huge", "Tiny", "Large", "Wide"], a: "Tiny" },
    { cat: "Aptitude", q: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies.", options: ["True", "False", "Cannot say", "None"], a: "True" },
    { cat: "Aptitude", q: "Complete the analogy: Finger is to Hand as Leaf is to ___", options: ["Tree", "Branch", "Flower", "Root"], a: "Branch" },
    { cat: "Aptitude", q: "A person travels 5km North, then turns Right and travels 5km. Which direction is he facing?", options: ["North", "South", "East", "West"], a: "East" },
    { cat: "Aptitude", q: "Find the odd one out:", options: ["Car", "Bicycle", "Truck", "Bus"], a: "Bicycle" },
    { cat: "Aptitude", q: "If 5 machines take 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?", options: ["100 minutes", "50 minutes", "5 minutes", "10 minutes"], a: "5 minutes" },
    { cat: "Aptitude", q: "Solve: (15 * 4) / 2 + 10 = ?", options: ["20", "30", "40", "50"], a: "40" },
    { cat: "Aptitude", q: "Complete the series: J, L, N, P, ___", options: ["Q", "R", "S", "T"], a: "R" },
    { cat: "Aptitude", q: "Which word does NOT belong with the others?", options: ["Tulip", "Rose", "Daisy", "Lettuce"], a: "Lettuce" },
    { cat: "Aptitude", q: "A is the father of B, but B is not the son of A. What is B?", options: ["Nephew", "Daughter", "Grandson", "Cousin"], a: "Daughter" },
    { cat: "Aptitude", q: "If 'WATER' is coded as 'XBUFS', how is 'SCHOOL' coded?", options: ["TDIPPM", "TDPPIM", "TDIPMP", "TDIPPN"], a: "TDIPPM" },
    { cat: "Aptitude", q: "What is 20% of 150?", options: ["20", "25", "30", "35"], a: "30" },
    { cat: "Aptitude", q: "Find the next number: 1, 4, 9, 16, 25, ___", options: ["30", "36", "40", "49"], a: "36" },
    { cat: "Aptitude", q: "If today is Monday, what day will it be in 61 days?", options: ["Wednesday", "Saturday", "Tuesday", "Friday"], a: "Saturday" },
    { cat: "Aptitude", q: "Which is the largest fraction?", options: ["1/2", "3/4", "2/3", "5/8"], a: "3/4" },
    { cat: "Aptitude", q: "Rearrange 'R-A-T-O-M' to form a meaningful word:", options: ["AMORT", "ROAMT", "MOTOR", "ROTM"], a: "MOTOR" },
    { cat: "Aptitude", q: "If 3x + 5 = 20, what is the value of x?", options: ["3", "4", "5", "6"], a: "5" },
    { cat: "Aptitude", q: "Choose the odd one out:", options: ["Square", "Circle", "Rectangle", "Triangle"], a: "Circle" },
    { cat: "Aptitude", q: "A clock shows 3:00. What is the angle between the hands?", options: ["45 degrees", "90 degrees", "180 degrees", "60 degrees"], a: "90 degrees" },
    { cat: "Aptitude", q: "Find the next number: 100, 90, 81, 73, ___", options: ["65", "66", "64", "60"], a: "66" },
    { cat: "Aptitude", q: "Which word means the same as 'GIGANTIC'?", options: ["Small", "Massive", "Thin", "Fast"], a: "Massive" },
    { cat: "Aptitude", q: "In a group of 50 people, 30 like tea and 20 like coffee. 10 like both. How many like neither?", options: ["0", "10", "20", "5"], a: "10" },
    { cat: "Aptitude", q: "Find the missing number: 3, 6, 12, 24, ___", options: ["36", "48", "30", "60"], a: "48" },
    { cat: "Aptitude", q: "A train moves at 60 km/h. How far does it travel in 15 minutes?", options: ["10 km", "15 km", "20 km", "25 km"], a: "15 km" },
    { cat: "Aptitude", q: "If 1=5, 2=25, 3=125, what does 4=?", options: ["625", "500", "250", "400"], a: "625" },
    { cat: "Aptitude", q: "Which of the following is a prime number?", options: ["9", "15", "21", "23"], a: "23" },
    { cat: "Aptitude", q: "Book is to Reading as Fork is to ___", options: ["Drinking", "Eating", "Cooking", "Cutting"], a: "Eating" },
    { cat: "Aptitude", q: "Identify the pattern: 1, 1, 2, 3, 5, 8, ___", options: ["10", "11", "13", "15"], a: "13" },
    { cat: "Aptitude", q: "If you flip a coin, what is the probability of getting heads?", options: ["0.25", "0.5", "1", "0"], a: "0.5" },
    { cat: "Aptitude", q: "An airplane flies 400 miles in 2 hours. What is its speed?", options: ["200 mph", "100 mph", "800 mph", "400 mph"], a: "200 mph" },
    { cat: "Aptitude", q: "Which number is divisible by 3?", options: ["124", "157", "189", "202"], a: "189" },
    { cat: "Aptitude", q: "The word 'PEACE' is to 'WAR' as 'SMILE' is to ___", options: ["Laughter", "Frown", "Face", "Happy"], a: "Frown" },
    { cat: "Aptitude", q: "How many months have 28 days?", options: ["1", "6", "12", "0"], a: "12" },
    { cat: "Aptitude", q: "If X is older than Y, and Y is older than Z, who is the youngest?", options: ["X", "Y", "Z", "Cannot say"], a: "Z" },
    { cat: "Aptitude", q: "What is the square root of 144?", options: ["10", "12", "14", "16"], a: "12" },
    { cat: "Aptitude", q: "Complete the pattern: A1, B2, C3, ___", options: ["D3", "D4", "E5", "C4"], a: "D4" },
    { cat: "Aptitude", q: "If you have 3 apples and you take away 2, how many apples do you have?", options: ["1", "2", "3", "5"], a: "2" },
    { cat: "Aptitude", q: "Ocean is to Water as Glacier is to ___", options: ["Ice", "Mountain", "River", "Cold"], a: "Ice" },
    { cat: "Aptitude", q: "If it takes 2 hours to dry 2 shirts in the sun, how long does it take to dry 10 shirts?", options: ["10 hours", "5 hours", "2 hours", "20 hours"], a: "2 hours" },
    { cat: "Aptitude", q: "Which word does NOT belong?", options: ["Sofa", "Chair", "Bed", "Radio"], a: "Radio" },
    { cat: "Aptitude", q: "Find the value of (10+10)*0 + 5", options: ["5", "25", "0", "15"], a: "5" },
    { cat: "Aptitude", q: "What comes next: Sunday, Tuesday, Thursday, ___", options: ["Friday", "Saturday", "Monday", "Wednesday"], a: "Saturday" },
    { cat: "Aptitude", q: "A cube has how many faces?", options: ["4", "6", "8", "12"], a: "6" },
    { cat: "Aptitude", q: "If 10 men can build a wall in 10 days, how many days for 1 man?", options: ["1 day", "10 days", "100 days", "50 days"], a: "100 days" },
    { cat: "Aptitude", q: "Complete: 7, 14, 21, 28, ___", options: ["30", "35", "40", "42"], a: "35" },
    { cat: "Aptitude", q: "A rectangle has a length of 10 and width of 5. What is its area?", options: ["15", "30", "50", "25"], a: "50" },
    { cat: "Aptitude", q: "If a=1, b=2, c=3, what is a+b+c?", options: ["4", "5", "6", "9"], a: "6" },
    { cat: "Aptitude", q: "Which fraction is equivalent to 0.5?", options: ["1/4", "1/2", "2/3", "1/5"], a: "1/2" },
    { cat: "Aptitude", q: "Doctor is to Hospital as Teacher is to ___", options: ["Office", "School", "Library", "Market"], a: "School" },
    { cat: "Aptitude", q: "Find the next letter: Z, X, V, T, ___", options: ["S", "R", "U", "Q"], a: "R" },
    { cat: "Aptitude", q: "What is the average of 10, 20, and 30?", options: ["15", "20", "25", "30"], a: "20" },
    { cat: "Aptitude", q: "If a doctor gives you 3 pills and tells you to take one every half hour, how long will they last?", options: ["1 hour", "1.5 hours", "2 hours", "30 mins"], a: "1 hour" },
    { cat: "Aptitude", q: "Which word is the synonym of 'BRAVE'?", options: ["Coward", "Fearless", "Weak", "Quiet"], a: "Fearless" },
    { cat: "Aptitude", q: "A father is 4 times as old as his son. If the son is 10, how old is the father?", options: ["30", "40", "50", "60"], a: "40" },
    { cat: "Aptitude", q: "Convert 0.75 to a percentage:", options: ["7.5%", "75%", "0.75%", "750%"], a: "75%" },
    { cat: "Aptitude", q: "Find the odd one:", options: ["Monday", "Friday", "June", "Sunday"], a: "June" },
    { cat: "Aptitude", q: "A man faces West and turns 180 degrees. Which direction is he facing?", options: ["North", "South", "East", "West"], a: "East" },
    { cat: "Aptitude", q: "If 12 eggs cost 24 Birr, how much is one egg?", options: ["1 Birr", "2 Birr", "3 Birr", "4 Birr"], a: "2 Birr" },
    { cat: "Aptitude", q: "Complete the series: 1, 8, 27, 64, ___", options: ["100", "121", "125", "144"], a: "125" },
    { cat: "Aptitude", q: "Identify the word that is correctly spelled:", options: ["Receive", "Recieve", "Receve", "Resieve"], a: "Receive" },
    { cat: "Aptitude", q: "Light is to Eye as Sound is to ___", options: ["Nose", "Ear", "Tongue", "Skin"], a: "Ear" },
    { cat: "Aptitude", q: "If 'CAT' is 3120, what is 'DOG'?", options: ["4157", "4151", "4147", "5157"], a: "4157" },
    { cat: "Aptitude", q: "Find the value of x: 2x = 50", options: ["20", "25", "30", "50"], a: "25" },
    { cat: "Aptitude", q: "What is the sum of angles in a triangle?", options: ["90", "180", "360", "270"], a: "180" },
    { cat: "Aptitude", q: "If you mix Red and Yellow, you get:", options: ["Green", "Purple", "Orange", "Pink"], a: "Orange" },
    { cat: "Aptitude", q: "Find the missing number: 2, 5, 10, 17, ___", options: ["24", "25", "26", "27"], a: "26" },
    { cat: "Aptitude", q: "Which is the smallest prime number?", options: ["0", "1", "2", "3"], a: "2" },
    { cat: "Aptitude", q: "A shopkeeper gives 10% discount on 200 Birr. How much is the discount?", options: ["10 Birr", "20 Birr", "30 Birr", "40 Birr"], a: "20 Birr" },
    { cat: "Aptitude", q: "How many sides does a pentagon have?", options: ["5", "6", "7", "8"], a: "5" },
    { cat: "Aptitude", q: "Find the odd one out:", options: ["Apple", "Orange", "Potato", "Banana"], a: "Potato" },
    { cat: "Aptitude", q: "If 'GREEN' is coded as 'HSSFO', what is 'BLUE'?", options: ["CMVF", "CMVF", "CMVF", "CMVF"], a: "CMVF" }, // Simple shift
    { cat: "Aptitude", q: "A car travels 300km in 5 hours. What is its average speed?", options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"], a: "60 km/h" },
    { cat: "Aptitude", q: "If 4x - 2 = 10, what is x?", options: ["2", "3", "4", "5"], a: "3" },
    { cat: "Aptitude", q: "Which letter is 5th to the right of 'A'?", options: ["E", "F", "D", "G"], a: "F" },
    { cat: "Aptitude", q: "What is 50% of 50% of 100?", options: ["50", "25", "10", "5"], a: "25" },
    { cat: "Aptitude", q: "Complete: North, South, East, ___", options: ["West", "Up", "Down", "Left"], a: "West" },
    { cat: "Aptitude", q: "How many seconds are in 5 minutes?", options: ["100", "200", "300", "500"], a: "300" },
    { cat: "Aptitude", q: "Identify the next number: 1, 3, 6, 10, 15, ___", options: ["20", "21", "22", "25"], a: "21" },
    { cat: "Aptitude", q: "If some A are B, and all B are C, then some A are definitely C.", options: ["True", "False", "Cannot say", "None"], a: "True" },
    { cat: "Aptitude", q: "Choose the word most similar to 'ABANDON':", options: ["Keep", "Leave", "Find", "Hold"], a: "Leave" },
    { cat: "Aptitude", q: "Find the value of 5 + 5 * 5", options: ["50", "25", "30", "15"], a: "30" },
    { cat: "Aptitude", q: "If 1st January is Friday, what day is 8th January?", options: ["Friday", "Saturday", "Thursday", "Monday"], a: "Friday" },
    { cat: "Aptitude", q: "Which number is the odd one: 2, 4, 6, 7, 8?", options: ["2", "4", "7", "8"], a: "7" },
    { cat: "Aptitude", q: "A circle has a radius of 7. What is its diameter?", options: ["7", "14", "21", "49"], a: "14" },
    { cat: "Aptitude", q: "If 'BOY' is 2-15-25, what is 'ACE'?", options: ["1-3-5", "1-2-3", "3-2-1", "1-4-5"], a: "1-3-5" },
    { cat: "Aptitude", q: "Identify the next: 1/2, 1/4, 1/8, ___", options: ["1/10", "1/12", "1/16", "1/20"], a: "1/16" },
    { cat: "Aptitude", q: "An equilateral triangle has all angles equal to:", options: ["45", "60", "90", "120"], a: "60" },
    { cat: "Aptitude", q: "If you are in a race and you pass the person in second place, what place are you in?", options: ["1st", "2nd", "3rd", "Last"], a: "2nd" },
    { cat: "Aptitude", q: "How many faces does a pyramid with a square base have?", options: ["4", "5", "6", "8"], a: "5" },
    { cat: "Aptitude", q: "A shirt originally 100 Birr is on 20% sale. What is the new price?", options: ["20 Birr", "80 Birr", "120 Birr", "90 Birr"], a: "80 Birr" },
    { cat: "Aptitude", q: "What is the next letter in the pattern: O, T, T, F, F, S, S, ___", options: ["E", "N", "T", "O"], a: "E" }, // One, Two, Three... Eight
    { cat: "Aptitude", q: "If 2x + 10 = 2x + 10, x can be any number.", options: ["True", "False", "Only 0", "Only 1"], a: "True" },
    { cat: "Aptitude", q: "Find the odd one: Lion, Tiger, Cow, Leopard", options: ["Lion", "Tiger", "Cow", "Leopard"], a: "Cow" },
    { cat: "Aptitude", q: "What is 1000 divided by 0.5?", options: ["500", "2000", "1000", "250"], a: "2000" },
    { cat: "Aptitude", q: "Identify the missing letter: M, A, T, R, I, ___", options: ["C", "K", "X", "S"], a: "C" }, // MATRIC
    { cat: "Aptitude", q: "If a=5 and b=10, what is (a*b) - (a+b)?", options: ["35", "50", "15", "45"], a: "35" },
    { cat: "Aptitude", q: "Which is the smallest fraction: 1/2, 1/3, 1/4, 1/5?", options: ["1/2", "1/3", "1/4", "1/5"], a: "1/5" },
    { cat: "Aptitude", q: "A person is facing North. He turns 90 degrees Left. Now he faces:", options: ["East", "South", "West", "North"], a: "West" },
    { cat: "Aptitude", q: "Complete the series: 0, 1, 1, 2, 3, 5, 8, 13, ___", options: ["15", "18", "21", "25"], a: "21" },

// --- ECONOMICS (50 Questions) ---
{ cat: "Economics", q: "The problem of scarcity exists because:", options: ["Resources are limited", "Wants are unlimited", "Resources have alternative uses", "All of the above"], a: "All of the above" },
    { cat: "Economics", q: "The branch of economics that studies the behavior of individual households and firms is:", options: ["Macroeconomics", "Microeconomics", "Positive economics", "Normative economics"], a: "Microeconomics" },
    { cat: "Economics", q: "In a command economy, the 'What to produce' decision is made by:", options: ["The government", "Private consumers", "Market forces", "Foreign investors"], a: "The government" },
    { cat: "Economics", q: "The Law of Demand states that as price increases, quantity demanded:", options: ["Increases", "Decreases", "Stays the same", "Becomes zero"], a: "Decreases" },
    { cat: "Economics", q: "A shift in the demand curve to the right indicates:", options: ["Decrease in demand", "Increase in demand", "Decrease in price", "Increase in price"], a: "Increase in demand" },
    { cat: "Economics", q: "Which of the following is a factor of production?", options: ["Money", "Labor", "Stocks", "Government bonds"], a: "Labor" },
    { cat: "Economics", q: "The extra satisfaction gained from consuming one additional unit of a good is:", options: ["Total utility", "Average utility", "Marginal utility", "Ordinal utility"], a: "Marginal utility" },
    { cat: "Economics", q: "The point where quantity demanded equals quantity supplied is called:", options: ["Shortage", "Surplus", "Equilibrium", "Elasticity"], a: "Equilibrium" },
    { cat: "Economics", q: "GDP stands for:", options: ["Gross Domestic Product", "General Domestic Price", "Gross Deposit Profit", "Government Development Plan"], a: "Gross Domestic Product" },
    { cat: "Economics", q: "Inflation is defined as a persistent increase in:", options: ["Individual prices", "The general price level", "Household income", "Stock market values"], a: "The general price level" },
    { cat: "Economics", q: "The cost of the next best alternative forgone is:", options: ["Fixed cost", "Variable cost", "Opportunity cost", "Marginal cost"], a: "Opportunity cost" },
    { cat: "Economics", q: "When income increases, the demand for 'Normal Goods':", options: ["Decreases", "Increases", "Remains constant", "Becomes perfectly inelastic"], a: "Increases" },
    { cat: "Economics", q: "If the price elasticity of demand is greater than 1, the demand is:", options: ["Inelastic", "Elastic", "Unitary", "Perfectly inelastic"], a: "Elastic" },
    { cat: "Economics", q: "Which market structure has only one seller?", options: ["Perfect competition", "Monopoly", "Oligopoly", "Monopolistic competition"], a: "Monopoly" },
    { cat: "Economics", q: "The 'Father of Modern Economics' is:", options: ["Karl Marx", "Adam Smith", "John Maynard Keynes", "David Ricardo"], a: "Adam Smith" },
    { cat: "Economics", q: "A government's plan for its revenue and expenditure is called:", options: ["Monetary policy", "Fiscal policy", "Trade policy", "Industrial policy"], a: "Fiscal policy" },
    { cat: "Economics", q: "Unemployment that occurs during a recession is called:", options: ["Frictional", "Structural", "Cyclical", "Seasonal"], a: "Cyclical" },
    { cat: "Economics", q: "The Production Possibilities Curve (PPC) is usually:", options: ["Straight line", "Concave to the origin", "Convex to the origin", "Vertical"], a: "Concave to the origin" },
    { cat: "Economics", q: "Which of the following is NOT a characteristic of a perfectly competitive market?", options: ["Many buyers and sellers", "Homogeneous products", "High barriers to entry", "Perfect information"], a: "High barriers to entry" },
    { cat: "Economics", q: "The Law of Diminishing Marginal Returns applies to the:", options: ["Short run", "Long run", "Very long run", "Market period"], a: "Short run" },
    { cat: "Economics", q: "Money serves as a:", options: ["Medium of exchange", "Store of value", "Unit of account", "All of the above"], a: "All of the above" },
    { cat: "Economics", q: "The central bank of Ethiopia is:", options: ["Commercial Bank of Ethiopia", "National Bank of Ethiopia", "Development Bank of Ethiopia", "Dashen Bank"], a: "National Bank of Ethiopia" },
    { cat: "Economics", q: "A tax that takes a higher percentage from high-income earners is:", options: ["Proportional tax", "Regressive tax", "Progressive tax", "Excise tax"], a: "Progressive tax" },
    { cat: "Economics", q: "The sum of all final goods and services produced within a country's borders in a year is:", options: ["GNP", "GDP", "NNP", "Per capita income"], a: "GDP" },
    { cat: "Economics", q: "Which type of unemployment is considered 'natural'?", options: ["Cyclical", "Frictional and Structural", "Seasonal only", "None of the above"], a: "Frictional and Structural" },
    { cat: "Economics", q: "When the price of coffee rises, the demand for tea (a substitute) will:", options: ["Increase", "Decrease", "Stay the same", "Fall to zero"], a: "Increase" },
    { cat: "Economics", q: "Marginal Cost (MC) is the change in total cost resulting from:", options: ["Price change", "One extra unit of output", "Change in fixed cost", "Change in labor"], a: "One extra unit of output" },
    { cat: "Economics", q: "Total Revenue is calculated as:", options: ["Price + Quantity", "Price / Quantity", "Price × Quantity", "Price - Quantity"], a: "Price × Quantity" },
    { cat: "Economics", q: "The reward for Entrepreneurship is:", options: ["Wage", "Interest", "Rent", "Profit"], a: "Profit" },
    { cat: "Economics", q: "In which system does the price mechanism allocate resources?", options: ["Socialist economy", "Market economy", "Traditional economy", "Planned economy"], a: "Market economy" },
    { cat: "Economics", q: "The value of the next best alternative is known as:", options: ["Implicit cost", "Explicit cost", "Opportunity cost", "Social cost"], a: "Opportunity cost" },
    { cat: "Economics", q: "An increase in the price of inputs will cause the supply curve to:", options: ["Shift to the right", "Shift to the left", "Stay the same", "Become horizontal"], a: "Shift to the left" },
    { cat: "Economics", q: "Which of the following is a macroeconomics topic?", options: ["Price of shoes", "Inflation rate", "A firm's profit", "Consumer choice"], a: "Inflation rate" },
    { cat: "Economics", q: "Complementary goods are goods that are:", options: ["Used instead of each other", "Used together", "Not related", "Free goods"], a: "Used together" },
    { cat: "Economics", q: "The law of supply states that as price increases, quantity supplied:", options: ["Increases", "Decreases", "Remains constant", "Fluctuates"], a: "Increases" },
    { cat: "Economics", q: "Average Fixed Cost (AFC) always:", options: ["Increases with output", "Decreases with output", "Stays constant", "Is U-shaped"], a: "Decreases with output" },
    { cat: "Economics", q: "A floor price is a price set:", options: ["Below equilibrium", "Above equilibrium", "At equilibrium", "By consumers"], a: "Above equilibrium" },
    { cat: "Economics", q: "Monopoly power means the firm is a:", options: ["Price taker", "Price maker", "Price follower", "Market seeker"], a: "Price maker" },
    { cat: "Economics", q: "Export minus Import equals:", options: ["Budget balance", "Net exports", "Trade deficit", "Gross profit"], a: "Net exports" },
    { cat: "Economics", q: "The main objective of a rational firm is to:", options: ["Maximize sales", "Maximize profit", "Minimize labor", "Maximize price"], a: "Maximize profit" },
    { cat: "Economics", q: "Real GDP is adjusted for:", options: ["Population", "Inflation", "Taxation", "Exports"], a: "Inflation" },
    { cat: "Economics", q: "A situation where quantity supplied exceeds quantity demanded is a:", options: ["Shortage", "Equilibrium", "Surplus", "Elasticity"], a: "Surplus" },
    { cat: "Economics", q: "Factors of production include Land, Labor, Capital and:", options: ["Money", "Technology", "Entrepreneurship", "Government"], a: "Entrepreneurship" },
    { cat: "Economics", q: "Elasticity of demand for a necessity good is usually:", options: ["Elastic", "Inelastic", "Perfectly elastic", "Unitary"], a: "Inelastic" },
    { cat: "Economics", q: "The Long Run is a period where:", options: ["All inputs are fixed", "All inputs are variable", "One input is variable", "Technology is fixed"], a: "All inputs are variable" },
    { cat: "Economics", q: "Which curve is NOT U-shaped?", options: ["AVC", "ATC", "MC", "AFC"], a: "AFC" },
    { cat: "Economics", q: "The circular flow model shows the flow of:", options: ["Goods and services", "Factors of production", "Money", "All of the above"], a: "All of the above" },
    { cat: "Economics", q: "Demand for labor is a:", options: ["Primary demand", "Derived demand", "Independent demand", "Joint demand"], a: "Derived demand" },
    { cat: "Economics", q: "Who wrote 'The Wealth of Nations'?", options: ["Karl Marx", "Adam Smith", "J.S. Mill", "Alfred Marshall"], a: "Adam Smith" },
    { cat: "Economics", q: "National income divided by population is:", options: ["Real GDP", "Per capita income", "Disposable income", "Personal income"], a: "Per capita income" },
    { cat: "Economics", q: "An oligopoly market is characterized by:", options: ["One seller", "Few sellers", "Many sellers", "Infinite sellers"], a: "Few sellers" },
    { cat: "Economics", q: "The Phillips curve shows the relationship between:", options: ["Price and Quantity", "Inflation and Unemployment", "Tax and Revenue", "Income and Demand"], a: "Inflation and Unemployment" },
    { cat: "Economics", q: "Which of the following is a direct tax?", options: ["VAT", "Customs duty", "Personal income tax", "Excise tax"], a: "Personal income tax" },
    { cat: "Economics", q: "Expansionary monetary policy involves:", options: ["Increasing interest rates", "Reducing money supply", "Lowering interest rates", "Increasing taxes"], a: "Lowering interest rates" },
    { cat: "Economics", q: "The fundamental economic problem is:", options: ["Unemployment", "Poverty", "Scarcity", "Inflation"], a: "Scarcity" },
    { cat: "Economics", q: "If the cross-price elasticity is positive, the goods are:", options: ["Complements", "Substitutes", "Inferior", "Luxury"], a: "Substitutes" },
    { cat: "Economics", q: "Diminishing marginal utility means that as consumption increases:", options: ["Total utility falls", "Extra satisfaction falls", "Price rises", "Demand rises"], a: "Extra satisfaction falls" },
    { cat: "Economics", q: "Fixed costs are costs that:", options: ["Change with output", "Do not change with output", "Are always zero", "Are paid by consumers"], a: "Do not change with output" },
    { cat: "Economics", q: "The slope of the demand curve is usually:", options: ["Positive", "Negative", "Zero", "Undefined"], a: "Negative" },
    { cat: "Economics", q: "Which of the following is an inferior good?", options: ["Car", "iPhone", "Used clothes", "Steak"], a: "Used clothes" },
    { cat: "Economics", q: "A budget deficit occurs when:", options: ["Revenue > Expenditure", "Expenditure > Revenue", "Revenue = Expenditure", "Tax = 0"], a: "Expenditure > Revenue" },
    { cat: "Economics", q: "The 'Command Economy' is also known as:", options: ["Laissez-faire", "Socialism/Planned", "Mixed", "Traditional"], a: "Socialism/Planned" },
    { cat: "Economics", q: "The reward for Land is:", options: ["Wage", "Profit", "Rent", "Interest"], a: "Rent" },
    { cat: "Economics", q: "Price Elasticity of Supply measures the responsiveness of:", options: ["Demand to price", "Supply to price", "Supply to income", "Price to supply"], a: "Supply to price" },
    { cat: "Economics", q: "Total Product divided by the number of workers is:", options: ["Marginal Product", "Average Product", "Variable Product", "Net Product"], a: "Average Product" },
    { cat: "Economics", q: "Advertising is most important in:", options: ["Perfect competition", "Monopoly", "Monopolistic competition", "Agriculture"], a: "Monopolistic competition" },
    { cat: "Economics", q: "A 'Recession' is a period of:", options: ["Economic growth", "Negative GDP growth", "High employment", "Low inflation"], a: "Negative GDP growth" },
    { cat: "Economics", q: "Public goods are:", options: ["Excludable", "Non-excludable", "Sold in markets", "Used by one person only"], a: "Non-excludable" },
    { cat: "Economics", q: "Comparative advantage was proposed by:", options: ["Adam Smith", "David Ricardo", "Malthus", "Keynes"], a: "David Ricardo" },
    { cat: "Economics", q: "The equilibrium price is also known as:", options: ["Market clearing price", "Floor price", "Ceiling price", "Fixed price"], a: "Market clearing price" },
    { cat: "Economics", q: "Which of the following causes a movement along the demand curve?", options: ["Change in income", "Change in taste", "Change in price of the good", "Change in population"], a: "Change in price of the good" },
    { cat: "Economics", q: "What is the main source of government revenue in Ethiopia?", options: ["Foreign aid", "Taxes", "Mining", "Exports"], a: "Taxes" },
    { cat: "Economics", q: "In economics, 'Capital' refers to:", options: ["Money in bank", "Man-made tools and machines", "Social status", "Natural resources"], a: "Man-made tools and machines" },
    { cat: "Economics", q: "Perfectly inelastic demand has a curve that is:", options: ["Horizontal", "Vertical", "Downward sloping", "Upward sloping"], a: "Vertical" },
    { cat: "Economics", q: "Which phase of the business cycle follows a 'Peak'?", options: ["Expansion", "Recovery", "Recession/Contraction", "Trough"], a: "Recession/Contraction" },
    { cat: "Economics", q: "The 'Substitution Effect' explains why:", options: ["PPC shifts", "Demand curve slopes down", "Supply curve slopes up", "Inflation occurs"], a: "Demand curve slopes down" },
    { cat: "Economics", q: "Which of these is a function of the National Bank of Ethiopia?", options: ["Giving loans to individuals", "Printing money", "Selling clothes", "Farming"], a: "Printing money" },
    { cat: "Economics", q: "Macroeconomics was popularized by:", options: ["Adam Smith", "John Maynard Keynes", "Milton Friedman", "Alfred Marshall"], a: "John Maynard Keynes" },
    { cat: "Economics", q: "If the price of Bread increases, the demand for Butter will:", options: ["Increase", "Decrease", "Remain constant", "Shift right"], a: "Decrease" },
    { cat: "Economics", q: "Economic growth is shown by a:", options: ["Movement along PPC", "Shift of PPC to the right", "Shift of PPC to the left", "Point inside PPC"], a: "Shift of PPC to the right" },
    { cat: "Economics", q: "Veblen goods are goods for which demand:", options: ["Falls as price rises", "Rises as price rises", "Is zero", "Is always constant"], a: "Rises as price rises" },
    { cat: "Economics", q: "Normative economics deals with:", options: ["Facts", "What ought to be (opinions)", "Statistics", "Historical data"], a: "What ought to be (opinions)" },
    { cat: "Economics", q: "The most liquid asset is:", options: ["Gold", "Real Estate", "Money", "Stocks"], a: "Money" },
    { cat: "Economics", q: "A firm in perfect competition is a:", options: ["Price maker", "Price taker", "Monopolist", "Oligopolist"], a: "Price taker" },
    { cat: "Economics", q: "VAT stands for:", options: ["Value Added Tax", "Variable Asset Tax", "Volume Added Tax", "Value Account Tax"], a: "Value Added Tax" },
    { cat: "Economics", q: "The main cause of inflation according to Monetarists is:", options: ["Low taxes", "Excessive money supply", "High wages", "Government regulations"], a: "Excessive money supply" },
    { cat: "Economics", q: "Which of these is a trade barrier?", options: ["Free trade", "Quotas", "Subsidies for consumers", "Deregulation"], a: "Quotas" },
    { cat: "Economics", q: "Human capital refers to:", options: ["Number of people", "Skills and knowledge of workers", "Machines", "Factories"], a: "Skills and knowledge of workers" },
    { cat: "Economics", q: "The supply of land is generally:", options: ["Perfectly elastic", "Perfectly inelastic", "Unitary", "Very elastic"], a: "Perfectly inelastic" },
    { cat: "Economics", q: "Market failure occurs when:", options: ["Price is too high", "Resources are not allocated efficiently", "Firms make profit", "Government taxes the rich"], a: "Resources are not allocated efficiently" },
    { cat: "Economics", q: "Disposable income is:", options: ["Income before tax", "Income after tax", "Savings", "Total wealth"], a: "Income after tax" },
    { cat: "Economics", q: "The 'Invisible Hand' theory was by:", options: ["Ricardo", "Adam Smith", "Marx", "Malthus"], a: "Adam Smith" },
    { cat: "Economics", q: "Which good is likely to have perfectly elastic demand?", options: ["Salt", "Medicine", "Wheat in a perfect market", "Electricity"], a: "Wheat in a perfect market" },
    { cat: "Economics", q: "The 'Trough' in a business cycle is the:", options: ["Highest point", "Lowest point", "Middle point", "Starting point"], a: "Lowest point" },
    { cat: "Economics", q: "Balance of Trade is:", options: ["Export - Import", "Tax - Spend", "GDP - GNP", "Birth - Death"], a: "Export - Import" },
    { cat: "Economics", q: "Economic resources are also called:", options: ["Outputs", "Factors of production", "Consumer goods", "Free goods"], a: "Factors of production" },
    { cat: "Economics", q: "Opportunity cost of a student is:", options: ["Books and fees", "Earnings from a job they gave up", "Food and rent", "Entertainment"], a: "Earnings from a job they gave up" },
    { cat: "Economics", q: "Which of the following is a stock variable?", options: ["Income", "Wealth", "Investment", "GDP"], a: "Wealth" },
    { cat: "Economics", q: "If demand is perfectly elastic, the coefficient is:", options: ["0", "1", "Infinity", "Less than 1"], a: "Infinity" },
    { cat: "Economics", q: "The basic motive of a consumer is to:", options: ["Save money", "Maximize utility", "Minimize spending", "Work hard"], a: "Maximize utility" },


// --- HISTORY (50 Questions) ---
{ cat: "History", q: "The period of 'Renaissance' first started in which country?", options: ["France", "Germany", "Italy", "England"], a: "Italy" },
    { cat: "History", q: "Who was the leader of the Protestant Reformation?", options: ["John Calvin", "Martin Luther", "Ignatius Loyola", "King Henry VIII"], a: "Martin Luther" },
    { cat: "History", q: "The American War of Independence was fought against:", options: ["France", "Spain", "Great Britain", "Germany"], a: "Great Britain" },
    { cat: "History", q: "The French Revolution began in the year:", options: ["1776", "1789", "1815", "1799"], a: "1789" },
    { cat: "History", q: "Who was the architect of the unification of Germany?", options: ["Napoleon", "Otto von Bismarck", "Garibaldi", "Wilhelm I"], a: "Otto von Bismarck" },
    { cat: "History", q: "The Industrial Revolution first began in:", options: ["USA", "France", "Great Britain", "Japan"], a: "Great Britain" },
    { cat: "History", q: "The immediate cause of World War I was the assassination of:", options: ["Archduke Franz Ferdinand", "Adolf Hitler", "Tsar Nicholas II", "Kaiser Wilhelm"], a: "Archduke Franz Ferdinand" },
    { cat: "History", q: "The Bolshevik Revolution of 1917 took place in:", options: ["Germany", "Russia", "China", "France"], a: "Russia" },
    { cat: "History", q: "The League of Nations was established after which war?", options: ["Napoleonic Wars", "World War I", "World War II", "Crimean War"], a: "World War I" },
    { cat: "History", q: "Who was the leader of Nazi Germany during World War II?", options: ["Benito Mussolini", "Adolf Hitler", "Joseph Stalin", "Winston Churchill"], a: "Adolf Hitler" },
    { cat: "History", q: "The United Nations (UN) was founded in:", options: ["1918", "1945", "1950", "1963"], a: "1945" },
    { cat: "History", q: "Which conference led to the 'Scramble for Africa'?", options: ["Berlin Conference", "Vienna Conference", "Paris Conference", "London Conference"], a: "Berlin Conference" },
    { cat: "History", q: "The Cold War was a state of tension between:", options: ["Britain and France", "USA and USSR", "Germany and Russia", "China and Japan"], a: "USA and USSR" },
    { cat: "History", q: "Apartheid was a system of racial segregation in:", options: ["Kenya", "Zimbabwe", "South Africa", "Nigeria"], a: "South Africa" },
    { cat: "History", q: "The first president of independent Kenya was:", options: ["Kwame Nkrumah", "Jomo Kenyatta", "Nelson Mandela", "Julius Nyerere"], a: "Jomo Kenyatta" },
    { cat: "History", q: "The Zagwe Dynasty was overthrown by Yekuno Amlak in:", options: ["1150", "1270", "1527", "1632"], a: "1270" },
    { cat: "History", q: "Which Ethiopian King moved the capital to Gondar in 1636?", options: ["Emperor Susenyos", "Emperor Fasiladas", "Emperor Yohannes I", "Emperor Bakaffa"], a: "Emperor Fasiladas" },
    { cat: "History", q: "The period known as 'Zemene Mesafint' began after the death of:", options: ["Iyoas I", "Iyasu I", "Bakaffa", "Tewodros II"], a: "Iyoas I" },
    { cat: "History", q: "Who is considered the unifier of modern Ethiopia?", options: ["Emperor Yohannes IV", "Emperor Menelik II", "Emperor Tewodros II", "Emperor Haile Selassie"], a: "Emperor Tewodros II" },
    { cat: "History", q: "At which battle did Emperor Tewodros II commit suicide?", options: ["Battle of Adwa", "Battle of Magdala", "Battle of Gundet", "Battle of Debre Tabor"], a: "Battle of Magdala" },
    { cat: "History", q: "The Battle of Dogali was fought between Ethiopia and:", options: ["Egypt", "Italy", "Sudan (Mahdists)", "Britain"], a: "Italy" },
    { cat: "History", q: "The Treaty of Wuchale was signed in 1889 between Menelik II and:", options: ["Britain", "France", "Italy", "Russia"], a: "Italy" },
    { cat: "History", q: "The historic victory of Adwa occurred on:", options: ["March 1, 1896", "March 1, 1889", "May 5, 1941", "January 7, 1896"], a: "March 1, 1896" },
    { cat: "History", q: "Who was the first female head of state in modern Ethiopia?", options: ["Empress Taitu", "Empress Zewditu", "Empress Mentewab", "Empress Eleni"], a: "Empress Zewditu" },
    { cat: "History", q: "Italy invaded Ethiopia for the second time in:", options: ["1896", "1935", "1941", "1974"], a: "1935" },
    { cat: "History", q: "The Organization of African Unity (OAU) was founded in Addis Ababa in:", options: ["1950", "1963", "1974", "2002"], a: "1963" },
    { cat: "History", q: "The 1974 Ethiopian Revolution led to the downfall of:", options: ["The Derg", "Emperor Menelik II", "Emperor Haile Selassie", "Emperor Yohannes IV"], a: "Emperor Haile Selassie" },
    { cat: "History", q: "The military committee that ruled Ethiopia after 1974 was called:", options: ["EPRDF", "The Derg", "AESM", "COPWE"], a: "The Derg" },
    { cat: "History", q: "Who was the leader of the Derg regime?", options: ["Meles Zenawi", "Mengistu Haile Mariam", "Aman Andom", "Teferi Banti"], a: "Mengistu Haile Mariam" },
    { cat: "History", q: "The EPRDF came to power in Ethiopia in the year:", options: ["1974", "1987", "1991", "2000"], a: "1991" },
    { cat: "History", q: "The ancient civilization of Aksum was famous for its:", options: ["Pyramids", "Stelae (Obelisks)", "Great Wall", "Hanging Gardens"], a: "Stelae (Obelisks)" },
    { cat: "History", q: "Christianity became the official religion of Aksum during the reign of:", options: ["King Kaleb", "King Ezana", "King Armah", "King Bazen"], a: "King Ezana" },
    { cat: "History", q: "The famous rock-hewn churches of Lalibela were built during the:", options: ["Solomonic Dynasty", "Zagwe Dynasty", "Aksumite Period", "Gondarine Period"], a: "Zagwe Dynasty" },
    { cat: "History", q: "The war between the Christian Kingdom and the Adal Sultanate (16th century) was led by:", options: ["Ahmad Gragn", "Emperor Lebna Dengel", "Emperor Galawdewos", "All of the above"], a: "All of the above" },
    { cat: "History", q: "The Jesuits were expelled from Ethiopia by Emperor Fasiladas because of:", options: ["Trade disputes", "Religious conflicts (Catholicism)", "Land issues", "Taxation"], a: "Religious conflicts (Catholicism)" },
    { cat: "History", q: "The 'Closed Door Policy' in Ethiopia was practiced during which period?", options: ["Aksumite", "Gondarine", "Zemene Mesafint", "Modern"], a: "Gondarine" },
    { cat: "History", q: "The Council of Boru Meda (1878) focused on:", options: ["Trade", "Military alliance", "Religious unification", "Border issues"], a: "Religious unification" },
    { cat: "History", q: "At which battle did Emperor Yohannes IV die fighting the Mahdists?", options: ["Battle of Metemma", "Battle of Gura", "Battle of Gundet", "Battle of Adwa"], a: "Battle of Metemma" },
    { cat: "History", q: "Who was the chief architect of the victory at Adwa alongside Menelik II?", options: ["Ras Alula", "Empress Taitu", "Ras Makonnen", "All of the above"], a: "All of the above" },
    { cat: "History", q: "The city of Harar was occupied by Menelik II after the Battle of:", options: ["Chelenqo", "Embabo", "Sagale", "Anchem"], a: "Chelenqo" },
    { cat: "History", q: "The Japanese invasion of Manchuria (1931) showed the weakness of:", options: ["The UN", "The League of Nations", "The NATO", "The SEATO"], a: "The League of Nations" },
    { cat: "History", q: "The Marshall Plan was designed to rebuild:", options: ["Asia", "Europe", "Africa", "South America"], a: "Europe" },
    { cat: "History", q: "Which event is considered the end of the Cold War?", options: ["Vietnam War", "Fall of the Berlin Wall", "Korean War", "Cuban Missile Crisis"], a: "Fall of the Berlin Wall" },
    { cat: "History", q: "The policy of 'Perestroika' and 'Glasnost' was introduced by:", options: ["Stalin", "Mikhail Gorbachev", "Vladimir Putin", "Boris Yeltsin"], a: "Mikhail Gorbachev" },
    { cat: "History", q: "Who was the leader of the independence movement in India?", options: ["Subhash Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi"], a: "Mahatma Gandhi" },
    { cat: "History", q: "The first African country to gain independence from colonial rule was:", options: ["Ethiopia", "Ghana", "Nigeria", "Kenya"], a: "Ghana" },
    { cat: "History", q: "The term 'Third World' refers to countries that were:", options: ["Communist", "Capitalist", "Non-aligned", "Colonies of Japan"], a: "Non-aligned" },
    { cat: "History", q: "The main goal of the Pan-African movement was:", options: ["Colonization", "African unity and independence", "Trade with Europe", "Religious spread"], a: "African unity and independence" },
    { cat: "History", q: "Which Egyptian leader nationalized the Suez Canal in 1956?", options: ["Anwar Sadat", "Gamal Abdel Nasser", "Hosni Mubarak", "King Farouk"], a: "Gamal Abdel Nasser" },
    { cat: "History", q: "The 'Great Depression' started in which year?", options: ["1914", "1929", "1939", "1945"], a: "1929" },
    { cat: "History", q: "The First World War ended with the signing of the Treaty of:", options: ["Westphalia", "Versailles", "Vienna", "Berlin"], a: "Versailles" },
    { cat: "History", q: "The atomic bombs were dropped on Hiroshima and Nagasaki in:", options: ["1941", "1944", "1945", "1946"], a: "1945" },
    { cat: "History", q: "The 'Apartheid' system ended in South Africa in:", options: ["1990", "1994", "1960", "2000"], a: "1994" },
    { cat: "History", q: "The first man to walk on the moon was:", options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"], a: "Neil Armstrong" },
    { cat: "History", q: "The Protestant Reformation led to the rise of which church?", options: ["Catholic", "Anglican/Lutheran", "Orthodox", "Coptic"], a: "Anglican/Lutheran" },
    { cat: "History", q: "Who discovered the law of universal gravitation during the Scientific Revolution?", options: ["Galileo", "Isaac Newton", "Copernicus", "Kepler"], a: "Isaac Newton" },
    { cat: "History", q: "The 'Reign of Terror' is associated with which revolution?", options: ["American", "French", "Russian", "Chinese"], a: "French" },
    { cat: "History", q: "Napoleon Bonaparte was finally defeated at the Battle of:", options: ["Waterloo", "Leipzig", "Austerlitz", "Jena"], a: "Waterloo" },
    { cat: "History", q: "The Opium Wars were fought between China and:", options: ["Japan", "Great Britain", "France", "USA"], a: "Great Britain" },
    { cat: "History", q: "The Meiji Restoration took place in which country?", options: ["China", "Korea", "Japan", "Vietnam"], a: "Japan" },
    { cat: "History", q: "The primary cause of the US Civil War was:", options: ["Taxes", "Slavery", "Religion", "Gold"], a: "Slavery" },
    { cat: "History", q: "The 'New Deal' was a program introduced by:", options: ["Theodore Roosevelt", "Franklin D. Roosevelt", "Woodrow Wilson", "Herbert Hoover"], a: "Franklin D. Roosevelt" },
    { cat: "History", q: "The Holocaust was the genocide of which group during WWII?", options: ["Roma", "Jews", "Slavs", "Armenians"], a: "Jews" },
    { cat: "History", q: "The 'Iron Curtain' speech was given by:", options: ["Harry Truman", "Winston Churchill", "Dwight Eisenhower", "John F. Kennedy"], a: "Winston Churchill" },
    { cat: "History", q: "The Vietnam War was a conflict between North Vietnam and:", options: ["South Vietnam and USA", "China", "Russia", "France"], a: "South Vietnam and USA" },
    { cat: "History", q: "The Cuban Missile Crisis occurred in:", options: ["1959", "1961", "1962", "1963"], a: "1962" },
    { cat: "History", q: "The first Secretary-General of the UN was:", options: ["Kofi Annan", "Trygve Lie", "Dag Hammarskjöld", "U Thant"], a: "Trygve Lie" },
    { cat: "History", q: "Which ideology advocates for a classless society and state ownership?", options: ["Capitalism", "Communism", "Fascism", "Liberalism"], a: "Communism" },
    { cat: "History", q: "The 'Great Leap Forward' was a policy in China under:", options: ["Sun Yat-sen", "Mao Zedong", "Deng Xiaoping", "Chiang Kai-shek"], a: "Mao Zedong" },
    { cat: "History", q: "The Bandung Conference (1955) was the foundation of:", options: ["NATO", "Non-Aligned Movement", "Warsaw Pact", "AU"], a: "Non-Aligned Movement" },
    { cat: "History", q: "The 'Year of Africa' was:", options: ["1957", "1960", "1963", "1970"], a: "1960" },
    { cat: "History", q: "The first African country to host the FIFA World Cup was:", options: ["Nigeria", "South Africa", "Egypt", "Morocco"], a: "South Africa" },
    { cat: "History", q: "The Rosetta Stone was key to deciphering:", options: ["Cuneiform", "Egyptian Hieroglyphics", "Greek", "Latin"], a: "Egyptian Hieroglyphics" },
    { cat: "History", q: "The ancient Silk Road connected China with:", options: ["Africa", "Europe", "America", "Australia"], a: "Europe" },
    { cat: "History", q: "The Magna Carta (1215) limited the power of the King in:", options: ["France", "England", "Spain", "Germany"], a: "England" },
    { cat: "History", q: "Christopher Columbus reached the Americas in:", options: ["1453", "1492", "1498", "1500"], a: "1492" },
    { cat: "History", q: "The 'Enlightenment' was an intellectual movement focused on:", options: ["Faith", "Reason and Science", "War", "Tradition"], a: "Reason and Science" },
    { cat: "History", q: "The 1848 Revolutions are often called the:", options: ["Spring of Nations", "Winter of War", "Summer of Peace", "Fall of Kings"], a: "Spring of Nations" },
    { cat: "History", q: "The Triple Entente of WWI included Britain, France, and:", options: ["Germany", "Italy", "Russia", "Austria"], a: "Russia" },
    { cat: "History", q: "The 'D-Day' invasion occurred on the beaches of:", options: ["Sicily", "Normandy", "Okinawa", "Gallipoli"], a: "Normandy" },
    { cat: "History", q: "The African Union (AU) replaced the OAU in:", options: ["1991", "2002", "2010", "1994"], a: "2002" },
    { cat: "History", q: "The first black president of South Africa was:", options: ["Thabo Mbeki", "Nelson Mandela", "Jacob Zuma", "Cyril Ramaphosa"], a: "Nelson Mandela" },
    { cat: "History", q: "The 'White Highlands' was a term used for settler land in:", options: ["Ethiopia", "Kenya", "Nigeria", "Sudan"], a: "Kenya" },
    { cat: "History", q: "The Rwandan Genocide occurred in:", options: ["1990", "1994", "1998", "2000"], a: "1994" },
    { cat: "History", q: "The 'Scramble for Africa' refers to:", options: ["African migration", "European colonization of Africa", "Trade within Africa", "African exploration of Europe"], a: "European colonization of Africa" },
    { cat: "History", q: "The main reason for the failure of the League of Nations was:", options: ["Lack of money", "Lack of a military force and US absence", "Too many members", "Language barriers"], a: "Lack of a military force and US absence" },
    { cat: "History", q: "The 'Fashoda Incident' was a standoff between:", options: ["Britain and France", "Germany and France", "Italy and Ethiopia", "Britain and Egypt"], a: "Britain and France" },
    { cat: "History", q: "The legendary founder of the Solomonic Dynasty in 1270 was:", options: ["Lalibela", "Yekuno Amlak", "Amda Seyon", "Zara Yaqob"], a: "Yekuno Amlak" },
    { cat: "History", q: "The battle of Embabo (1882) was between Menelik II and:", options: ["Ras Alula", "King Tekle Haymanot", "Emperor Yohannes IV", "Ras Mengesha"], a: "King Tekle Haymanot" },
    { cat: "History", q: "The first railway in Ethiopia connected Addis Ababa with:", options: ["Massawa", "Djibouti", "Assab", "Mombasa"], a: "Djibouti" },
    { cat: "History", q: "Who was the Prime Minister of Ethiopia during the early Haile Selassie era?", options: ["Aklilu Habtewold", "Ras Makonnen", "Ras Imru", "Ras Tafari"], a: "Aklilu Habtewold" },
    { cat: "History", q: "The 'Black Lion' organization was a resistance group against:", options: ["The Derg", "Italian Occupation", "The British", "The Mahdists"], a: "Italian Occupation" },
    { cat: "History", q: "The 1960 attempted coup in Ethiopia was led by:", options: ["Mengistu Neway", "Mengistu Haile Mariam", "Aman Andom", "Atnafu Abate"], a: "Mengistu Neway" },
    { cat: "History", q: "Which Ethiopian leader was known for the 'Red Terror'?", options: ["Haile Selassie", "Mengistu Haile Mariam", "Meles Zenawi", "Teferi Banti"], a: "Mengistu Haile Mariam" },
    { cat: "History", q: "The main slogan of the 1974 Ethiopian student movement was:", options: ["Peace for All", "Land to the Tiller", "Justice for Ethiopia", "Freedom of Press"], a: "Land to the Tiller" },
    { cat: "History", q: "The current Federal Democratic Republic of Ethiopia was established in:", options: ["1974", "1991", "1995", "2000"], a: "1995" },
    { cat: "History", q: "The ancient Ethiopian calendar is based on the:", options: ["Gregorian", "Julian", "Islamic", "Coptic"], a: "Coptic" },
    { cat: "History", q: "The famous 'Victory Day' in Ethiopia (Meyazia 27) commemorates:", options: ["Adwa", "Liberation from Italy (1941)", "Downfall of Derg", "Ethiopian New Year"], a: "Liberation from Italy (1941)" },
    { cat: "History", q: "The first modern school in Ethiopia was:", options: ["Menelik II School", "Haile Selassie I School", "Tefari Makonnen School", "General Wingate School"], a: "Menelik II School" },
    { cat: "History", q: "Ethiopia joined the League of Nations in:", options: ["1923", "1935", "1945", "1963"], a: "1923" },
// --- ENGLISH (50 Questions) ---
{ cat: "English", q: "If I _______ enough money, I would buy a new laptop.", options: ["have", "had", "will have", "has"], a: "had" },
{ cat: "English", q: "I ________ my homework when the electricity went off.", options: ["was doing", "did", "have done", "am doing"], a: "was doing" },
    { cat: "English", q: "If I ________ enough money, I would buy a new car.", options: ["have", "had", "will have", "had had"], a: "had" },
    { cat: "English", q: "She is the student ________ got the highest mark in the exam.", options: ["which", "whom", "whose", "who"], a: "who" },
    { cat: "English", q: "He is ________ honest man I have ever met.", options: ["a", "an", "the", "some"], a: "an" },
    { cat: "English", q: "Neither the teacher nor the students ________ present today.", options: ["is", "are", "was", "has been"], a: "are" },
    { cat: "English", q: "The book ________ by a famous Ethiopian author last year.", options: ["was written", "is written", "wrote", "was writing"], a: "was written" },
    { cat: "English", q: "You ________ better see a doctor before it gets worse.", options: ["should", "would", "had", "ought"], a: "had" },
    { cat: "English", q: "Which one is the synonym of 'Abundant'?", options: ["Scarce", "Plentiful", "Rare", "Small"], a: "Plentiful" },
    { cat: "English", q: "I haven't seen her ________ last Monday.", options: ["for", "since", "during", "until"], a: "since" },
    { cat: "English", q: "By the time we reached the station, the train ________.", options: ["left", "has left", "had left", "was leaving"], a: "had left" },
    { cat: "English", q: "Abebe: 'How do you do?' \nKebede: '________'", options: ["I am fine.", "How do you do?", "Nice to meet you.", "I am a student."], a: "How do you do?" },
    { cat: "English", q: "This is the house ________ my father built 20 years ago.", options: ["where", "which", "whose", "who"], a: "which" },
    { cat: "English", q: "We are looking forward to ________ you next month.", options: ["see", "saw", "seen", "seeing"], a: "seeing" },
    { cat: "English", q: "I ________ go to the cinema, but now I prefer staying at home.", options: ["used to", "am used to", "use to", "got used to"], a: "used to" },
    { cat: "English", q: "The weather was ________ cold that we stayed indoors.", options: ["very", "such", "so", "too"], a: "so" },
    { cat: "English", q: "Which one is the antonym of 'Fragile'?", options: ["Weak", "Strong", "Soft", "Broken"], a: "Strong" },
    { cat: "English", q: "If it ________ tomorrow, we will cancel the trip.", options: ["rains", "rain", "rained", "will rain"], a: "rains" },
    { cat: "English", q: "The child ________ parents died in the accident is now in an orphanage.", options: ["who", "whom", "whose", "which"], a: "whose" },
    { cat: "English", q: "I wish I ________ more time to study for the exam.", options: ["have", "had", "would have", "will have"], a: "had" },
    { cat: "English", q: "Stop ________ so much noise! I am trying to study.", options: ["make", "to make", "making", "made"], a: "making" },
    { cat: "English", q: "He was accused ________ stealing the money.", options: ["of", "for", "with", "by"], a: "of" },
    { cat: "English", q: "I am not interested ________ politics.", options: ["on", "in", "at", "with"], a: "in" },
    { cat: "English", q: "She has been working here ________ five years.", options: ["since", "for", "during", "ago"], a: "for" },
    { cat: "English", q: "The teacher made the students ________ the exercise again.", options: ["do", "to do", "doing", "did"], a: "do" },
    { cat: "English", q: "You ________ smoke in the hospital; it is strictly forbidden.", options: ["shouldn't", "mustn't", "don't have to", "ought not"], a: "mustn't" },
    { cat: "English", q: "Which one is the correctly spelled word?", options: ["Receive", "recieve", "receve", "reseve"], a: "Receive" },
    { cat: "English", q: "I am good ________ playing football.", options: ["in", "on", "at", "with"], a: "at" },
    { cat: "English", q: "The tea is ________ hot for me to drink.", options: ["very", "too", "so", "enough"], a: "too" },
    { cat: "English", q: "If I ________ a bird, I would fly to the moon.", options: ["am", "was", "were", "been"], a: "were" },
    { cat: "English", q: "They have ________ friends in this city.", options: ["much", "a few", "a little", "any"], a: "a few" },
    { cat: "English", q: "He didn't pass the exam ________ he studied hard.", options: ["because", "although", "so", "despite"], a: "although" },
    { cat: "English", q: "I'll call you as soon as I ________ home.", options: ["get", "will get", "got", "am getting"], a: "get" },
    { cat: "English", q: "Passenger: 'Could you tell me the way to the bank?' \nStranger: '________'", options: ["No, I can't.", "Yes, go straight and turn left.", "I am busy.", "The bank is closed."], a: "Yes, go straight and turn left." },
    { cat: "English", q: "The luggage is ________ heavy that I can't lift it.", options: ["so", "such", "too", "very"], a: "so" },
    { cat: "English", q: "He is the ________ boy in the class.", options: ["tall", "taller", "tallest", "most tall"], a: "tallest" },
    { cat: "English", q: "Neither of the two books ________ useful for my research.", options: ["is", "are", "were", "have been"], a: "is" },
    { cat: "English", q: "Unless you ________ hard, you will fail the exam.", options: ["work", "don't work", "worked", "will work"], a: "work" },
    { cat: "English", q: "I ________ like coffee, but now I love it.", options: ["didn't used to", "didn't use to", "not used to", "haven't used to"], a: "didn't use to" },
    { cat: "English", q: "Would you mind ________ the window?", options: ["open", "to open", "opening", "opened"], a: "opening" },
    { cat: "English", q: "He left the room without ________ a word.", options: ["say", "to say", "saying", "said"], a: "saying" },
    { cat: "English", q: "The meeting ________ because the manager was ill.", options: ["put off", "was put off", "put on", "was put on"], a: "was put off" },
    { cat: "English", q: "I have been living in Kombolcha ________ I was born.", options: ["for", "since", "during", "while"], a: "since" },
    { cat: "English", q: "You ________ better not be late for the exam tomorrow.", options: ["should", "would", "had", "must"], a: "had" },
    { cat: "English", q: "Hardly ________ the room when the phone rang.", options: ["I entered", "had I entered", "I had entered", "did I enter"], a: "had I entered" },
    { cat: "English", q: "Which one is the antonym of 'Modern'?", options: ["New", "Ancient", "Current", "Recent"], a: "Ancient" },
    { cat: "English", q: "If only I ________ her phone number, I would have called her.", options: ["know", "knew", "had known", "would know"], a: "had known" },
    { cat: "English", q: "It's high time we ________ home; it's getting dark.", options: ["go", "goes", "went", "gone"], a: "went" },
    { cat: "English", q: "The man ________ car was stolen is my uncle.", options: ["who", "whom", "whose", "which"], a: "whose" },
    { cat: "English", q: "I ________ to play the guitar when I was a child.", options: ["learn", "learned", "have learned", "was learning"], a: "learned" },
    { cat: "English", q: "She is ________ intelligent than her sister.", options: ["more", "most", "as", "very"], a: "more" },
    { cat: "English", q: "Abebe: 'I have passed the exam!' \nLema: '________'", options: ["Thank you.", "Congratulations!", "Good luck.", "Never mind."], a: "Congratulations!" },
    { cat: "English", q: "The students ________ the lesson by the time the teacher arrived.", options: ["finished", "have finished", "had finished", "finish"], a: "had finished" },
    { cat: "English", q: "I'm not used to ________ early in the morning.", options: ["get up", "getting up", "got up", "gets up"], a: "getting up" },
    { cat: "English", q: "We should avoid ________ plastic bags to protect the environment.", options: ["use", "to use", "using", "used"], a: "using" },
    { cat: "English", q: "The suitcase is ________ heavy for a child to carry.", options: ["too", "enough", "very", "so"], a: "too" },
    { cat: "English", q: "Which one is the synonym of 'Courageous'?", options: ["Fearful", "Brave", "Weak", "Lazy"], a: "Brave" },
    { cat: "English", q: "I ________ my car washed yesterday.", options: ["have", "had", "gotten", "was"], a: "had" },
    { cat: "English", q: "The bridge ________ in 1950.", options: ["built", "was built", "is built", "has been built"], a: "was built" },
    { cat: "English", q: "He works hard ________ he can support his family.", options: ["so that", "because", "in order to", "although"], a: "so that" },
    { cat: "English", q: "Success ________ hard work and determination.", options: ["depends on", "depends in", "depends at", "depends with"], a: "depends on" },
    { cat: "English", q: "I ________ my keys. Have you seen them?", options: ["lose", "lost", "have lost", "am losing"], a: "have lost" },
    { cat: "English", q: "You ________ drink water while you are eating.", options: ["shouldn't", "don't have to", "mustn't", "needn't"], a: "shouldn't" },
    { cat: "English", q: "Neither of the candidates ________ qualified for the job.", options: ["is", "are", "were", "be"], a: "is" },
    { cat: "English", q: "Wait here ________ I come back.", options: ["since", "until", "while", "during"], a: "until" },
    { cat: "English", q: "The news ________ very shocking.", options: ["was", "were", "are", "have been"], a: "was" },
    { cat: "English", q: "He was too tired ________ any further.", options: ["to walk", "walk", "walking", "walked"], a: "to walk" },
    { cat: "English", q: "A: 'I am sorry for being late.' \nB: '________'", options: ["It's okay.", "You're welcome.", "Me too.", "No, thanks."], a: "It's okay." },
    { cat: "English", q: "She is looking for a job ________.", options: ["at the moment", "yesterday", "last week", "next year"], a: "at the moment" },
    { cat: "English", q: "Which word is correctly spelled?", options: ["Definitely", "Definitly", "Definitelly", "Definitly"], a: "Definitely" },
    { cat: "English", q: "I'd rather ________ at home tonight.", options: ["stay", "to stay", "staying", "stayed"], a: "stay" },
    { cat: "English", q: "The room ________ every day.", options: ["cleans", "is cleaned", "cleaned", "is cleaning"], a: "is cleaned" },
    { cat: "English", q: "I'll help you ________ you tell me the truth.", options: ["if", "unless", "although", "until"], a: "if" },
    { cat: "English", q: "The woman ________ we met yesterday is a doctor.", options: ["who", "whom", "whose", "which"], a: "whom" },
    { cat: "English", q: "He ran ________ to catch the bus.", options: ["fast enough", "enough fast", "fastly", "too fast"], a: "fast enough" },
    { cat: "English", q: "I ________ have a lot of free time, but now I'm very busy.", options: ["used to", "am used to", "use to", "get used to"], a: "used to" },
    { cat: "English", q: "Would you like ________ cup of tea?", options: ["another", "other", "others", "the other"], a: "another" },
    { cat: "English", q: "Which one is the antonym of 'Wealthy'?", options: ["Rich", "Poor", "Healthy", "Famous"], a: "Poor" },
    { cat: "English", q: "The teacher ________ the exam papers now.", options: ["is correcting", "corrects", "corrected", "has corrected"], a: "is correcting" },
    { cat: "English", q: "I'm sorry, I ________ your name.", options: ["forget", "forgotten", "have forgotten", "am forgetting"], a: "have forgotten" },
    { cat: "English", q: "He apologized ________ being late.", options: ["for", "to", "at", "with"], a: "for" },
    { cat: "English", q: "If I ________ you, I would study harder.", options: ["am", "was", "were", "be"], a: "were" },
    { cat: "English", q: "She has ________ information about the accident.", options: ["many", "little", "a few", "any"], a: "little" },
    { cat: "English", q: "The lesson was ________ interesting that everyone enjoyed it.", options: ["so", "such", "very", "too"], a: "so" },
    { cat: "English", q: "I ________ English for three years now.", options: ["study", "am studying", "have been studying", "studied"], a: "have been studying" },
    { cat: "English", q: "Which prefix is used to make 'Happy' opposite?", options: ["In-", "Un-", "Dis-", "Ir-"], a: "Un-" },
    { cat: "English", q: "A: 'Would you like some more coffee?' \nB: '________, I've had enough.'", options: ["Yes, please", "No, thanks", "I'm sorry", "You're welcome"], a: "No, thanks" },
    { cat: "English", q: "I ________ my sister since last month.", options: ["didn't see", "don't see", "haven't seen", "wasn't seeing"], a: "haven't seen" },
    { cat: "English", q: "The students were made ________ the whole classroom.", options: ["clean", "to clean", "cleaning", "cleaned"], a: "to clean" },
    { cat: "English", q: "Which one is a synonym for 'Huge'?", options: ["Small", "Tiny", "Enormous", "Narrow"], a: "Enormous" },
    { cat: "English", q: "I'll see you ________ Monday morning.", options: ["in", "at", "on", "by"], a: "on" },
    { cat: "English", q: "He was very tired; ________, he finished the work.", options: ["therefore", "however", "so", "because"], a: "however" },
    { cat: "English", q: "They ________ for two hours when it started to rain.", options: ["have played", "were playing", "had been playing", "played"], a: "had been playing" },
    { cat: "English", q: "The book is ________ on the table.", options: ["lay", "lying", "laying", "lied"], a: "lying" },
    { cat: "English", q: "Choose the correct word: 'The ________ of the school is very kind.'", options: ["Principal", "Principle", "Prinsipal", "Prinsiple"], a: "Principal" },
    { cat: "English", q: "By next year, I ________ my university studies.", options: ["will finish", "will have finished", "finish", "am finishing"], a: "will have finished" },
    { cat: "English", q: "He is interested ________ learning new languages.", options: ["in", "on", "at", "of"], a: "in" },
    { cat: "English", q: "I enjoy ________ in the rain.", options: ["walk", "to walk", "walking", "walked"], a: "walking" },
    { cat: "English", q: "The person ________ wrote this letter is a genius.", options: ["which", "who", "whom", "whose"], a: "who" },
    { cat: "English", q: "You ________ tell anyone my secret.", options: ["mustn't", "don't have to", "needn't", "should"], a: "mustn't" },
    { cat: "English", q: "I ________ dinner when the guest arrived.", options: ["cooked", "was cooking", "am cooking", "have cooked"], a: "was cooking" },


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

// --- 1. ተለዋዋጮች (VARIABLES) ---
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];
let userAnswers = []; // ለ Review Mode የተማሪውን መልስ ለመያዝ
let timer;
let timeLeft = 30;

// --- 1. VOICE & SOUNDS ---
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
    }
}

function playSound(type) {
    const successTone = "https://actions.google.com/google_assistant/ambience/misc/clink.ogg";
    const failTone = "https://actions.google.com/google_assistant/ambience/misc/wrong_buzzer.ogg";
    let audio = new Audio(type === 'success' ? successTone : failTone);
    audio.play().catch(e => console.log("Sound play blocked"));
}

// --- 2. START APP ---
function startApp() {
    const nameInput = document.getElementById('userNameInput').value;
    const streamInput = document.getElementById('streamChoice').value;

    if (nameInput && streamInput) {
        localStorage.setItem('studentName', nameInput);
        localStorage.setItem('studentStream', streamInput);
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        const mainTitle = document.getElementById('main-title');
        if(mainTitle) mainTitle.innerText = nameInput + "'s Study Hub";
        switchStream(streamInput);
    } else {
        alert("እባክህ ስምህንና ዘርፍህን ምረጥ!");
    }
}

function switchStream(stream) {
    const socialDiv = document.getElementById('social-subjects');
    const naturalDiv = document.getElementById('natural-subjects');
    if(socialDiv) socialDiv.style.display = (stream === 'social' ? 'grid' : 'none');
    if(naturalDiv) naturalDiv.style.display = (stream === 'natural' ? 'grid' : 'none');
}

// --- 3. START QUIZ ---
function startQuiz(subject, numToQuiz) {
    if (typeof allQuestions === 'undefined') {
        alert("ጥያቄዎቹ አልተጫኑም!");
        return;
    }

    let filtered = allQuestions.filter(q => q.cat === subject);
    if (filtered.length === 0) {
        alert(subject + " በሚለው ሰብጀክት ጥያቄ አልተገኘም!");
        return;
    }

    quizQuestions = shuffleArray([...filtered]).slice(0, numToQuiz);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = []; // አዲስ ኩዊዝ ሲጀመር ሪቪው ባዶ ይሁን

    document.getElementById('main-content').style.display = 'none';
    if(document.querySelector('.footer')) document.querySelector('.footer').style.display = 'none';
    if(document.querySelector('.resources-section')) document.querySelector('.resources-section').style.display = 'none';
    
    document.getElementById('quiz-area-wrapper').style.display = 'block';
    showQuestion();
}

// --- 4. SHOW QUESTION & PROGRESS BAR ---
function showQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    let q = quizQuestions[currentQuestionIndex];
    let quizBox = document.getElementById('quiz-box');
    let shuffledOptions = shuffleArray([...q.options]);

    // Progress Bar Calculation
    let progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;

    quizBox.innerHTML = `
        <div class="progress-container" style="width:100%; background:#eee; border-radius:10px; margin-bottom:15px;">
            <div class="progress-bar" style="width:${progressPercent}%; height:10px; background:#28a745; border-radius:10px; transition:0.3s;"></div>
        </div>
        <div id="timer-display" style="font-size:20px; color:red; font-weight:bold; text-align:center;">Time: 30s</div>
        <h2 style="text-align:center; color:#007bff; margin-top:10px;">${q.cat}</h2>
        <p style="font-size:1.2rem; font-weight:bold; margin:15px 0;">${currentQuestionIndex + 1}. ${q.q}</p>
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

// --- 5. CHECK ANSWER & REVIEW LOGIC ---
function checkAnswer(selected, correct) {
    clearInterval(timer);
    
    // ለሪቪው ሞድ መመዝገብ
    userAnswers.push({
        question: quizQuestions[currentQuestionIndex].q,
        selected: selected || "Time Out",
        correct: correct,
        isCorrect: selected === correct
    });

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
        playSound('success');
        speak("Correct!");
    } else {
        playSound('fail');
        speak("Wrong!");
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showFinalResult();
        }
    }, 1500); // ፍጥነት ለመጨመር ወደ 1.5 ሰከንድ ቀንሼዋለሁ
}

// --- 6. FINAL RESULT & CONFETTI ---
function showFinalResult() {
    let quizBox = document.getElementById('quiz-box');
    let percent = Math.round((score / quizQuestions.length) * 100);
    let name = localStorage.getItem('studentName') || "Student";
    
    if(percent >= 70) {
        triggerConfetti(); // 70% በላይ ከሆነ ኮንፌቲ ይረጫል
        speak("Congratulations " + name);
    }

    let message = percent >= 80 ? `Excellent job, ${name}! 🏆` : `Good effort, ${name}! Keep practicing. 💪`;
    saveScore(name, quizQuestions[0].cat, percent);

    let reviewHTML = userAnswers.map((item, idx) => `
        <div style="text-align:left; padding:10px; border-bottom:1px solid #ddd; background:${item.isCorrect ? '#e8f5e9' : '#ffebee'}">
            <p><strong>${idx+1}. ${item.question}</strong></p>
            <p>Your Answer: ${item.selected} ${item.isCorrect ? '✅' : '❌'}</p>
            ${!item.isCorrect ? `<p style="color:green">Correct: ${item.correct}</p>` : ''}
        </div>
    `).join('');

    quizBox.innerHTML = `
        <h2 style="color: #007bff; text-align:center;">QUIZ COMPLETED</h2>
        <div style="font-size: 40px; font-weight: bold; text-align:center;">${score} / ${quizQuestions.length} (${percent}%)</div>
        <p style="text-align:center;">${message}</p>
        
        <div id="review-section" style="margin-top:20px; max-height:300px; overflow-y:auto; border:1px solid #ccc; border-radius:8px;">
            <h3 style="padding:10px; background:#f4f4f4; margin:0;">Review Answers</h3>
            ${reviewHTML}
        </div>

        <button onclick="goHome()" style="width:100%; padding: 15px; background: #28a745; color: white; border: none; border-radius: 12px; cursor: pointer; font-size:18px; font-weight: bold; margin-top:15px;">
            FINISH & GO HOME
        </button>
    `;
}

// --- 7. CONFETTI EFFECT ---
function triggerConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#28a745', '#007bff']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#dc3545', '#ffc107']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// --- UTILITIES ---
function goHome() {
    clearInterval(timer);
    document.getElementById('quiz-area-wrapper').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    if(document.querySelector('.footer')) document.querySelector('.footer').style.display = 'block';
    if(document.querySelector('.resources-section')) document.querySelector('.resources-section').style.display = 'block';
    switchStream(localStorage.getItem('studentStream'));
}

function initDarkMode() {
    const btn = document.getElementById('dark-mode-toggle');
    if(btn) {
        btn.onclick = () => {
            document.body.classList.toggle('dark-theme');
            document.getElementById('mode-icon').textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
        };
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function saveScore(name, subject, scorePercent) {
    let leaderboard = JSON.parse(localStorage.getItem('studyHubLeaderboard')) || [];
    leaderboard.push({ name: name, subject: subject, score: scorePercent });
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('studyHubLeaderboard', JSON.stringify(leaderboard.slice(0, 5)));
}

window.onload = function() {
    initDarkMode();
    const savedName = localStorage.getItem('studentName');
    const savedStream = localStorage.getItem('studentStream');
    if (savedName && savedStream) {
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('main-title').innerText = savedName + "'s Hub";
        switchStream(savedStream);
    }
};
