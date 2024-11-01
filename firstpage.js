// Initialize Typed.js for animated text
const options = {
    strings: [
        "Come Explore India With Us",
        "भारत एक खोज", // Hindi translation
        "ہندوستان کی سیر"  // Urdu translation
    ],
    typeSpeed: 75, // Speed of typing (in milliseconds)
    backSpeed: 35, // Speed of backspacing (in milliseconds)
    backDelay: 1000, // Delay before starting to backspace (in milliseconds)
    loop: true, // Loop the animation
    showCursor: true // Show blinking cursor
};

const typed = new Typed("#animated-text", options);

// Button click effect
const button = document.querySelector('.explore-button');
button.addEventListener('click', function() {
    button.style.transition = 'transform 0.5s'; // Transition for smooth scaling
    button.style.transform = 'scale(1.1)'; // Make the button larger
    setTimeout(() => {
        button.style.transform = 'scale(1)'; // Return to original size
    }, 200); // Duration of the scale effect
});
