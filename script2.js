const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const closeModalSubmit = document.querySelectorAll('[data-close-submit]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

closeModalButtons.forEach((button) => {
button.addEventListener('click', () => {
    const modal = button.closest('.setting');
    closeModal(modal);
});
});

closeModalSubmit.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.setting');
      closeSubmit(modal);
    });
});
  
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function closeSubmit(modal) {
    if (modal == null) return;
    setTimeout(() => {
        modal.classList.remove('active');
    }, 1500);
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 1800);
}
  
  
