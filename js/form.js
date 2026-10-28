window.PanoramaModules = window.PanoramaModules || {};

window.PanoramaModules.form = {
  init() {
    const form = document.getElementById('contact-form');
    const successBlock = document.getElementById('form-success');
    const submitBtn = document.getElementById('submit-btn');
    const networkError = document.getElementById('network-error');
    const resetBtn = successBlock.querySelector('.form-success__reset');

    const fields = {
      name: document.getElementById('name'),
      phone: document.getElementById('phone'),
      area: document.getElementById('area'),
      comment: document.getElementById('comment')
    };

    const errors = {
      name: document.getElementById('name-error'),
      phone: document.getElementById('phone-error')
    };

    const validators = {
      name(value) {
        if (!value.trim()) return 'Введите ваше имя';
        if (value.trim().length < 2) return 'Имя должно содержать минимум 2 символа';
        return '';
      },
      phone(value) {
        if (!value.trim()) return 'Введите номер телефона';
        const cleaned = value.replace(/\s/g, '');
        if (!/^\+7\d{10}$/.test(cleaned)) return 'Введите корректный номер телефона в формате +7XXXXXXXXXX';
        return '';
      }
    };

    const validateField = (fieldName) => {
      const field = fields[fieldName];
      const validator = validators[fieldName];
      if (!validator) return true;

      const errorMessage = validator(field.value);
      const errorElement = errors[fieldName];

      if (errorMessage) {
        field.classList.add('is-invalid');
        field.setAttribute('aria-invalid', 'true');
        if (errorElement) errorElement.textContent = errorMessage;
        return false;
      }

      field.classList.remove('is-invalid');
      field.removeAttribute('aria-invalid');
      if (errorElement) errorElement.textContent = '';
      return true;
    };

    const setFormDisabled = (isDisabled) => {
      Object.values(fields).forEach(field => {
        if (field) field.disabled = isDisabled;
      });
      submitBtn.disabled = isDisabled;
    };

    const setLoadingState = (isLoading) => {
      if (isLoading) {
        submitBtn.classList.add('is-loading');
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.dataset.originalText = originalText;
        submitBtn.innerHTML = '<span class="btn__spinner" aria-hidden="true"></span>Отправка...';
        setFormDisabled(true);
      } else {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.dataset.originalText || 'Отправить заявку';
        setFormDisabled(false);
      }
    };

    const showSuccess = () => {
      form.hidden = true;
      successBlock.hidden = false;
      resetBtn.focus();
    };

    const resetForm = () => {
      form.reset();
      form.hidden = false;
      successBlock.hidden = true;
      networkError.hidden = true;
      Object.keys(errors).forEach(key => {
        if (errors[key]) errors[key].textContent = '';
      });
      Object.values(fields).forEach(field => {
        if (field) {
          field.classList.remove('is-invalid');
          field.removeAttribute('aria-invalid');
        }
      });
      fields.name.focus();
    };

    Object.keys(validators).forEach(fieldName => {
      const field = fields[fieldName];
      if (field) {
        field.addEventListener('blur', () => validateField(fieldName));
        field.addEventListener('input', () => {
          if (field.classList.contains('is-invalid')) {
            validateField(fieldName);
          }
        });
      }
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      networkError.hidden = true;

      const isNameValid = validateField('name');
      const isPhoneValid = validateField('phone');

      if (!isNameValid || !isPhoneValid) {
        const firstInvalidField = !isNameValid ? fields.name : fields.phone;
        firstInvalidField.focus();
        return;
      }

      setLoadingState(true);

      try {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() > 0.1) {
              resolve();
            } else {
              reject(new Error('Network error'));
            }
          }, 1500);
        });
        showSuccess();
      } catch (error) {
        networkError.hidden = false;
        networkError.focus();
      } finally {
        setLoadingState(false);
      }
    });

    resetBtn.addEventListener('click', resetForm);
  }
};