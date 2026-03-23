// Array to store form submissions
let submissions = [];

// Add event listener to the form
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values from the form inputs
    const nameValue = document.getElementById('name').value;
    const messageValue = document.getElementById('message').value;

    // Create a key-value pair object
    const submission = {
        name: nameValue,
        message: messageValue
    };

    // Store the object in the array
    submissions.push(submission);

    // Log the array to the console for verification
    console.log('Current submissions:', submissions);

    // Clear the form
    this.reset();

    // Provide user feedback
    alert('Thank you for your message! It has been submitted.');
});