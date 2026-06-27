// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

// Booking form validation
function submitBooking() {
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const dept = document.getElementById('department').value;
  const date = document.getElementById('date').value;

  if (!name || !email || !phone || !dept || !date) {
    alert('⚠️ Please fill in all required fields!');
    return;
  }

  if (!email.includes('@')) {
    alert('⚠️ Please enter a valid email address!');
    return;
  }

  alert('✅ Appointment booked successfully at MediCare Plus Hospital!\n\nWe will confirm your appointment via email shortly.');

  document.getElementById('fullname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('department').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';
  document.getElementById('message').value = '';
}

// Contact form validation
function submitContact() {
  const name = document.getElementById('cname').value.trim();
  const email = document.getElementById('cemail').value.trim();
  const subject = document.getElementById('csubject').value.trim();
  const message = document.getElementById('cmessage').value.trim();

  if (!name || !email || !subject || !message) {
    alert('⚠️ Please fill in all required fields!');
    return;
  }

  if (!email.includes('@')) {
    alert('⚠️ Please enter a valid email address!');
    return;
  }

  alert('✅ Message sent to MediCare Plus Hospital!\n\nWe will get back to you within 24 hours.');

  document.getElementById('cname').value = '';
  document.getElementById('cemail').value = '';
  document.getElementById('csubject').value = '';
  document.getElementById('cmessage').value = '';
}