document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is running");
    let toggleButton = document.getElementById('toggleDarkMode');
    let body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            toggleButton.innerHTML = '<img height="20" width="20" src="../static/bright.svg" title="Light mode"/>';
        } else {
            toggleButton.innerHTML = '<img height="20" width="20" src="../static/moon.svg" title="Dark mode"/>';
        }
    });
});


