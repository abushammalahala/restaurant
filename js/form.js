const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // منع إعادة تحميل الصفحة

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      alert('Your message has been sent successfully! 🎉');
      form.reset();
    } else {
      alert('An error occurred, please try again.');
    }
  } catch (error) {
    alert('Error connecting to the server.');
  }

});

/**************************reserve table****************/


const msg = document.getElementById('reservationMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;
  msg.textContent = "";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      msg.textContent = "✅ Your table has been reserved successfully. We will contact you shortly.";
      msg.style.color = "green";
      form.reset();
    } else {
      msg.textContent = "❌ Something went wrong. Please try again.";
      msg.style.color = "red";
    }

  } catch (error) {
    msg.textContent = "⚠️ Network error. Please try again later.";
    msg.style.color = "red";
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

