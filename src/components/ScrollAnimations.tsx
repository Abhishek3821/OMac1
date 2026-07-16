import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Observes every element carrying a `data-animate` attribute and adds the
 * `animate-in` class once it scrolls into view (styles live in index.css).
 * Re-scans on every route change and also scrolls back to the top so each
 * page starts fresh. Optional `data-delay="150"` staggers the reveal in ms.
 */
const ScrollAnimations = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.dataset.delay) {
            el.style.transitionDelay = `${el.dataset.delay}ms`;
          }
          el.classList.add('animate-in');
          observer.unobserve(el);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => {
      el.classList.remove('animate-in');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollAnimations;
