const text = "I am Srivaishnavi!";
const typingSpeed = 100; // Speed in milliseconds
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed); // Call the function again for the next character
    }
}

window.onload = typeText; // Start typing when the page loads
