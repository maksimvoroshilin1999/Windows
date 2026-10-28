window.PanoramaModules = window.PanoramaModules || {};

window.PanoramaModules.navbar = {
  init() {
    const toggle = document.getElementById('navbar-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');
    const navLinks = document.querySelectorAll('.navbar__link');
    const sectionIds = Array.from(navLinks).map(link => link.dataset.section);

    const openMenu = () => {
      mobileMenu.classList.add('is-open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      toggle.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Закрыть меню');
      document.body.classList.add('menu-open');
      const firstLink = mobileMenu.querySelector('a');
      if (firstLink) firstLink.focus();
    };

    const closeMenu = () => {
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Открыть меню');
      document.body.classList.remove('menu-open');
      toggle.focus();
    };

    toggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    mobileMenu.querySelector('.mobile-menu__backdrop').addEventListener('click', () => {
      closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
      }
      if (event.key === 'Tab' && mobileMenu.classList.contains('is-open')) {
        const focusableElements = Array.from(mobileMenu.querySelectorAll('a, button')).filter(el => !el.disabled && el.offsetParent !== null);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    });

    const setActiveLink = (sectionId) => {
      navLinks.forEach(link => {
        const isActive = link.dataset.section === sectionId;
        link.classList.toggle('is-active', isActive);
      });
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px' });

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }
  }
};