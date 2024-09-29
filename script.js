document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    this.reset();
});
