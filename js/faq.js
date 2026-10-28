window.PanoramaModules = window.PanoramaModules || {};

window.PanoramaModules.faq = {
  init() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-item__question');
      const answer = item.querySelector('.faq-item__answer');

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('is-open')) {
            otherItem.classList.remove('is-open');
            const otherQuestion = otherItem.querySelector('.faq-item__question');
            otherQuestion.setAttribute('aria-expanded', 'false');
          }
        });

        item.classList.toggle('is-open', !isOpen);
        question.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  }
};