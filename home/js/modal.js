
  const modals = {
    about: document.getElementById('aboutModal'),
    education: document.getElementById('educationModal'),
    goals: document.getElementById('goalsModal'),
    hobbies: document.getElementById('hobbiesModal')
  };

  const links = {
    about: document.getElementById('learnMoreLink'),
    education: document.getElementById('educationLink'),
    goals: document.getElementById('goalsLink'),
    hobbies: document.getElementById('hobbiesLink')
  };

  const closeButtons = document.querySelectorAll('.close-btn');

  // Open modal function
  function openModal(modal) {
    modal.style.display = 'flex';
  }


  function closeModal(modal) {
    modal.style.display = 'none';
  }


  links.about.addEventListener('click', (e) => { e.preventDefault(); openModal(modals.about); });
  links.education.addEventListener('click', (e) => { e.preventDefault(); openModal(modals.education); });
  links.goals.addEventListener('click', (e) => { e.preventDefault(); openModal(modals.goals); });
  links.hobbies.addEventListener('click', (e) => { e.preventDefault(); openModal(modals.hobbies); });


  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });


  window.addEventListener('click', (event) => {
    Object.values(modals).forEach(modal => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });