const navToggle = document.querySelector('[aria-controls="site-nav"]');

navToggle.addEventListener('click', () => {
  const navOpened = navToggle.getAttribute('aria-expanded');

  if (navOpened === "false") {
    navToggle.setAttribute("aria-expanded", 'true');
  } else {
    navToggle.setAttribute("aria-expanded", 'false');
  }
})