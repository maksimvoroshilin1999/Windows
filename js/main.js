document.addEventListener('DOMContentLoaded', () => {
  const modules = [
    window.PanoramaModules && window.PanoramaModules.navbar,
    window.PanoramaModules && window.PanoramaModules.animations,
    window.PanoramaModules && window.PanoramaModules.faq,
    window.PanoramaModules && window.PanoramaModules.form
  ];

  modules.forEach(module => {
    if (module && typeof module.init === 'function') {
      module.init();
    }
  });
});