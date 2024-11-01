document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const moreButtons = document.querySelectorAll('.card button');
    const modalText = document.getElementById('modal-text');

    // Data for each state and union territory
    const stateDetails = {
        "Andhra Pradesh": "Explore the ancient city of Amaravati, famous temples, and scenic beauty.",
        "Arunachal Pradesh": "Famous for the beautiful Tawang Monastery and its untouched landscapes.",
        "Assam": "Home to the Kaziranga National Park, the Brahmaputra River, and vibrant tea gardens.",
        "Bihar": "Known for the Nalanda University and the Mahabodhi Temple.",
        "Goa": "Explore Portuguese architecture and beautiful beaches.",
        "Punjab": "Discover the heritage of the Sikh Empire and the Golden Temple in Amritsar.",
        "Tamil Nadu": "Home to the grand temples of Madurai and the Brihadeeswarar Temple.",
        "Uttar Pradesh": "Visit the Taj Mahal, Fatehpur Sikri, and the sacred city of Varanasi.",
        "Rajasthan": "Famous for the forts of Jaipur and Udaipur, and the desert city of Jaisalmer",
        // Add more details as needed
    };

    // Event listener for 'More about it' buttons to open modal
    moreButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const stateName = button.parentElement.querySelector('h3').textContent;
            modalText.textContent = stateDetails[stateName] || "More information coming soon.";
            modal.style.display = 'block';
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // Close the modal when clicking outside the modal content
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight Active Section in Nav During Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTop';
    backToTopButton.innerText = '↑';
    document.body.appendChild(backToTopButton);

    backToTopButton.style.display = 'none'; // Initially hidden

    // Show/Hide the Back to Top Button on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
const states = [
    { name: "Andhra Pradesh", info: "Information about Andhra Pradesh..." },
    { name: "Arunachal Pradesh", info: "Information about Arunachal Pradesh..." },
    // Add other states here
];

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const suggestionsBox = document.getElementById("suggestions");
    const stateCards = document.querySelectorAll(".card");
    const states = Array.from(stateCards).map(card => ({
        name: card.querySelector("h3").textContent.toLowerCase(),
        element: card
    }));

    // Show suggestions as user types
    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        suggestionsBox.innerHTML = ""; // Clear suggestions

        if (query) {
            const filteredStates = states.filter(state => state.name.includes(query));
            
            filteredStates.forEach(state => {
                const suggestionItem = document.createElement("div");
                suggestionItem.className = "suggestion-item";
                suggestionItem.textContent = state.name;
                
                // On click, show only the selected card
                suggestionItem.addEventListener("click", function () {
                    stateCards.forEach(card => card.style.display = "none"); // Hide all cards
                    state.element.style.display = "block"; // Show selected card
                    suggestionsBox.innerHTML = ""; // Clear suggestions
                    searchInput.value = ""; // Clear search box
                });

                suggestionsBox.appendChild(suggestionItem);
            });
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener("click", function (e) {
        if (e.target !== searchInput && !suggestionsBox.contains(e.target)) {
            suggestionsBox.innerHTML = "";
        }
    });
});

