document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Simulate form submission
    document.getElementById('response-message').innerText = 'Thank you for your message, ' + name + '! We will get back to you soon.';
    
    // Clear the form fields
    event.target.reset();
});
