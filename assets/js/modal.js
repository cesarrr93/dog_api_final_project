// Variables
const contactModal = document.getElementById("contact-modal");
const closeModal = document.querySelector(".close");
const contactForm = document.getElementById("contact-form");
const messageContainer = document.getElementById("message-container");

// Open Modal
export function setUpModal() {
    document.getElementById("contact-link").addEventListener("click", () => {
        contactModal.style.display = "block";
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        contactModal.style.display = "none";
    });

    // Handle form submission
    contactForm.addEventListener("submit", (event) => { // e stands for event
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<p><strong>${name}</strong> (${email}: ${message}</p>)`;
        messageContainer.appendChild(messageElement);

        contactForm.requestFullscreen();
        contactModal.style.display = "none";
    });
}