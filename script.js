const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/mldpvqaa', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (response.ok) {
      formMessage.textContent = "Thank you for your message!";
      form.reset();
    } else {
      formMessage.textContent = "Oops! Something went wrong.";
    }
  } catch (error) {
    formMessage.textContent = "Oops! Something went wrong.";
  }
});
