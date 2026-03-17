// Function to handle clicks on resource buttons
function showAlert(resourceType) {
    if (resourceType === 'History') {
        alert("The History summaries are being prepared. Stay tuned, Zakir!");
    } else if (resourceType === 'Exams') {
        alert("Loading past exam questions for practice...");
    } else {
        alert("Welcome to the study portal!");
    }
}