document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is running");
    let toggleButton = document.getElementById('toggleDarkMode');
let body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            toggleButton.innerHTML = '<img height="20" width="20" src=".\\bright.svg" title="Dark mode"/>';
        } else {
            toggleButton.innerHTML = '<img height="20" width="20" src=".\\moon.svg" title="Dark mode"/>';
        }
    });
});


