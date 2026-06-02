const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu && navLinks) {
  mobileMenu.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-controls', navLinks.id);

  mobileMenu.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    mobileMenu.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileMenu.setAttribute('aria-expanded', 'false');
    });
  });
}
