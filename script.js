// Dynamic Year Update for Footer (runs on all pages)
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Smooth Scrolling for Anchor Links (e.g., nav clicks to #skills, #contact)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form Submission Handler (Placeholder - for contact forms on resume.html and biodata.html)
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get form data (example)
  const form = event.target;
  const formData = new FormData(form);
  const name = formData.get('name') || 'Anonymous'; // Assuming input name="name" (add name attributes if needed)
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Placeholder alert (replace with real submission, e.g., fetch to API)
  alert(`Thank you, ${name}! Your message has been sent. (Email: ${email}, Message: ${message.substring(0, 50)}...)`);
  
  // Optional: Reset form
  form.reset();
  
  // In production: Send to backend or service like EmailJS
  // Example: emailjs.send('service_id', 'template_id', { name, email, message });
}

// Optional: jQuery Integration (Uncomment if jQuery is loaded via CDN)
// If using jQuery, add this for advanced features like fade-in on scroll
/*
$(document).ready(function() {
  // Fade-in sections on scroll (using jQuery)
  $(window).on('scroll', function() {
    $('.section').each(function() {
      var top = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();
      if (top < windowBottom - 100) {
        $(this).addClass('fade-in'); // Add CSS class for animation
      }
    });
  });

  // Example: Animate skill meters on load
  $('.meter span').each(function() {
    $(this).animate({ width: $(this).attr('style').match(/width:(\d+)%/)[1] + '%' }, 1500);
  });
});
*/

// Additional: Mobile Navigation Toggle (if you add a hamburger menu later)
// For now, it's not needed as nav is simple, but expandable
/*
const navToggle = document.querySelector('.nav-toggle'); // Add this button in HTML if needed
if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
}
*/