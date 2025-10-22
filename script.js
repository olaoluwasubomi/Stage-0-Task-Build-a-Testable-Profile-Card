// ====================
// STAGE 0: Profile Card Time Update
// ====================
const timeElement = document.getElementById("currentTime");

function updateTime() {
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

updateTime();
setInterval(updateTime, 1000);

// ====================
// STAGE 1: Contact Form Validation
// ====================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  // Only run this part if we are on the contact page
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Grab field values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Clear all previous error messages
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    // Helper for setting error messages
    const setError = (testid, messageText) => {
      const errorEl = document.querySelector(`[data-testid='${testid}']`);
      if (errorEl) errorEl.textContent = messageText;
    };

    // === Full Name Validation ===
    if (!name) {
      isValid = false;
      setError("test-contact-error-name", "Full name is required.");
    }

    // === Email Validation ===
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      isValid = false;
      setError("test-contact-error-email", "Email is required.");
    } else if (!emailPattern.test(email)) {
      isValid = false;
      setError(
        "test-contact-error-email",
        "Please enter a valid email (name@example.com)."
      );
    }

    // === Subject Validation ===
    if (!subject) {
      isValid = false;
      setError("test-contact-error-subject", "Subject is required.");
    }

    // === Message Validation ===
    if (!message) {
      isValid = false;
      setError("test-contact-error-message", "Message is required.");
    } else if (message.length < 10) {
      isValid = false;
      setError(
        "test-contact-error-message",
        "Message must be at least 10 characters long."
      );
    }

    // === If Valid: Show Success Message ===
    if (isValid) {
      successMessage.hidden = false;
      form.reset();

      // Automatically hide success message after 3 seconds
      setTimeout(() => {
        successMessage.hidden = true;
      }, 3000);
    } else {
      successMessage.hidden = true;
    }
  });
});
