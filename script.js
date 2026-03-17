function showAlert(resourceType) {
    let score = 0;

    if (resourceType === 'Exams') {
        alert("Welcome to the Economics Quiz! Answer 'A' or 'B'.");

        // Question 1
        let q1 = prompt("1. What is the fundamental problem of economics?\nA) Scarcity\nB) Poverty");
        if (q1 && q1.toUpperCase() === "A") score++;

        // Question 2
        let q2 = prompt("2. Macroeconomics studies about:\nA) Individual markets\nB) National income and employment");
        if (q2 && q2.toUpperCase() === "B") score++;

        // Question 3
        let q3 = prompt("3. What are the factors of production?\nA) Land, Labor, Capital, Entrepreneurship\nB) Money, Gold, Banks");
        if (q3 && q3.toUpperCase() === "A") score++;

        alert("Zakir, you scored " + score + "/3 in Economics!");

    } else if (resourceType === 'History') {
        alert("Welcome to the History Quiz!");

        // Question 1
        let h1 = prompt("1. The Battle of Adwa took place in:\nA) 1896\nB) 1935");
        if (h1 && h1.toUpperCase() === "A") score++;

        // Question 2
        let h2 = prompt("2. Which leader is known for modernizing Ethiopia?\nA) Emperor Tewodros II\nB) Emperor Menelik II");
        if (h2 && h2.toUpperCase() === "A") score++;

        alert("Zakir, your History score is " + score + "/2!");
    }
}
