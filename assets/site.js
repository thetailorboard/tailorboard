document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.querySelector('.mobile-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      panel.classList.toggle('open');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.querySelector('#form-status');
      if (status) {
        status.textContent = 'Thanks — this form is a template. Connect it to FormSubmit, Formspree, or EmailJS to receive messages at thetailorboard@gmail.com. See the README.';
        status.style.display = 'block';
      }
    });
  }
});
