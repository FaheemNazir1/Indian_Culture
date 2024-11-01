document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    const content = document.querySelector('.heritage-content');
    const overlayText = document.querySelector('.overlay-text');

    // Show the overlay text and hide content initially
    overlayText.style.display = 'block';
    content.style.opacity = '0'; // Ensure content starts invisible
    content.style.display = 'none'; // Ensure content is not displayed initially

    // Highlight the overlay text while the video is playing
    overlayText.classList.add('highlight');

    // After 5 seconds, hide the video and overlay text, then show the content
    setTimeout(() => {
        video.style.display = 'none'; // Hide the video
        overlayText.style.display = 'none'; // Hide the overlay text
        overlayText.classList.remove('highlight'); // Remove highlight class

        // Use a fade-in effect for the content
        content.style.display = 'block'; // Show the content
        setTimeout(() => {
            content.style.opacity = '1'; // Make the content visible with fade effect
        }, 10); // Small delay for the display property to take effect
    }, 4000); // Adjust time based on video length

    // Optional: Add transition for smoother appearance
    content.style.transition = 'opacity 1s ease-in-out'; // Smooth transition effect
});

const video = document.getElementById('background-video');
const heritageContent = document.querySelector('.heritage-content');

video.oncanplaythrough = () => {
    heritageContent.style.display = 'flex'; // Show content when the video is ready
};
