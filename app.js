// Show the specified section and scroll to it with fade-in effect
function showSection(section) {
    hideAllSections();
    const targetSection = document.getElementById(section);
    targetSection.classList.remove('hidden');
    targetSection.style.opacity = 0; // Start with opacity 0
    window.scrollTo(0, targetSection.offsetTop);

    // Fade-in effect
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        opacity += 0.1;
        targetSection.style.opacity = opacity;
    }, 50);
}

// Hide all content sections with smooth transition
function hideAllSections() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.transition = "opacity 0.5s ease"; // Smooth transition when hiding
        section.style.opacity = 0; // Set opacity to 0 before hiding
        setTimeout(() => {
            section.classList.add('hidden');
        }, 500); // Delay hiding until the opacity transition is complete
    });
}

// Scroll smoothly to the welcome section
function scrollToContent() {
    window.scrollTo({
        top: document.querySelector('.welcome').offsetTop,
        behavior: 'smooth'
    });
}

// Counter animation with bounce effect for dynamic number increases in Factsheet
document.querySelectorAll('.counter').forEach(counter => {
    const startValue = +counter.getAttribute('data-start') || 0; // Get the starting value or set to 0 if not defined
    counter.innerText = startValue;

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target'); // Convert target to number
        const current = +counter.innerText; // Convert current value to number

        const increment = (target - startValue) / 200; // Adjust this value to control the speed

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            counter.style.transform = 'scale(1.2)'; // Scale up for bounce effect
            setTimeout(() => {
                counter.style.transform = 'scale(1)'; // Reset scale
            }, 200);
            setTimeout(updateCounter, 10); // Controls how fast it updates
        } else {
            counter.innerText = target;
        }
    };

    // Start animation when user hovers over the fact card
    counter.addEventListener('mouseover', updateCounter);
});

// Hover animation for fact and ranking cards (scale animation)
document.querySelectorAll('.fact-card, .ranking-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.3s ease';
        card.style.transform = 'scale(1.05)'; // Slightly enlarge the card on hover
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; // Reset card size when the mouse leaves
    });
});

// Function for smooth scrolling to rankings section
function scrollToRankings() {
    document.getElementById('rankings').scrollIntoView({
        behavior: 'smooth'
    });
}
