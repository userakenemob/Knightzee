export function smoothScrollToAnchor(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

export function setupSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const elementId = href.substring(1);
        smoothScrollToAnchor(elementId);
      }
    });
  });
}
