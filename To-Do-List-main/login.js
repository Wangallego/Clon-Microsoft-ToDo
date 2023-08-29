// Get the button and modal elements
const modalButton = document.querySelector('[data-modal-toggle="authentication-modal"]');
const modal = document.getElementById('authentication-modal');
const closeButton = modal.querySelector('[data-modal-hide="authentication-modal"]');
const body = document.body

// Function to toggle the modal
function toggleModal() {
    modal.classList.toggle('hidden');
    modal.classList.add("flex","items-center","justify-center","modal-blur")
    document.body.classList.toggle('overflow-hidden','modal-blur');
}

// Event listeners for showing and hiding the modal
modalButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

// Close modal when clicking outside the modal content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        toggleModal();
    }
});

// Prevent modal content from closing the modal when clicked
modal.querySelector('.relative').addEventListener('click', (event) => {
    event.stopPropagation();
});


