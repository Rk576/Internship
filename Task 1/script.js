window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  