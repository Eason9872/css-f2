document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".neon-button");
    
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            button.classList.add("glow");
        });
        
        button.addEventListener("mouseout", function () {
            button.classList.remove("glow");
        });
    });
});
