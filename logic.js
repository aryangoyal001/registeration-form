 const password = document.getElementById('password');
    const strength = document.getElementById('strength');

    password.addEventListener('input', () => {
      const value = password.value;
      let score = 0;

      if (value.length >= 8) score++;
      if (/[A-Z]/.test(value)) score++;
      if (/[0-9]/.test(value)) score++;
      if (/[!@#$%^&*(),.?\":{}|<>]/.test(value)) score++;

      if (value.length === 0) {
        strength.textContent = '';
      } else if (score <= 1) {
        strength.textContent = 'Weak';
        strength.className = 'password-strength weak';
      } else if (score === 2 || score === 3) {
        strength.textContent = 'Medium';
        strength.className = 'password-strength medium';
      } else {
        strength.textContent = 'Strong';
        strength.className = 'password-strength strong';
      }
    });

    function resetForm() {
      document.getElementById('registrationForm').reset();
      strength.textContent = '';
      strength.className = 'password-strength';
    }

    document.getElementById('darkToggle').addEventListener('change', function () {
      document.body.classList.toggle('dark-mode', this.checked);
    });
