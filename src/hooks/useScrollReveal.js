import { useEffect } from 'react';

export default function useScrollReveal(dependency) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const selectors = [
      '[data-reveal]',

      // Home Page
      '.explore-header',
      '.c2-blend-wide-card',
      '.craft-strip',
      '.inspiration__content',
      '.inspiration__visual',
      '.coffee-candle__copy',
      '.coffee-candle__visual',
      '.current-mode__header',
      '.current-mode__carousel',

      // Get In Touch Page
      '.direction__header',
      '.direction__mapWrap',
      '.direction__card',

      // Collaborations Page
      '.collaboration-section__copy',
      '.collaboration-section__visual',
      '.partner-showcase__header',
      '.partner-showcase__card',
      '.partner-form',

      // Merchandise Page
      '.merch-header',
      '.merch-item',
      '.merch-perk-left',
      '.merch-perk-right',

      // Tiers Page
      '.tier-overview__header',
      '.tier-card',

      // Download Page
      '.download-app-buttons',
      '.download-page-hero__visual',
    ];

    let observer;

    const setupObserver = () => {
      const elements = document.querySelectorAll(selectors.join(', '));
      if (!elements || elements.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('c2-reveal--pending');
              entry.target.classList.add('c2-reveal--visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.05,
        }
      );

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      elements.forEach((el) => {
        // Never touch navigation, hero intros, or footers
        if (
          el.closest('header') ||
          el.closest('nav') ||
          el.closest('.hero') ||
          el.closest('.get-in-touch-hero') ||
          el.closest('footer') ||
          el.closest('.site-footer')
        ) {
          return;
        }

        if (!el.classList.contains('c2-reveal')) {
          el.classList.add('c2-reveal');
        }

        // Stagger cards in grids smoothly
        const parent = el.parentElement;
        if (parent) {
          const isGrid =
            parent.classList.contains('explore-cards-wide-container') ||
            parent.classList.contains('merch-grid') ||
            parent.classList.contains('direction__cards-grid') ||
            parent.classList.contains('partner-showcase__grid') ||
            parent.classList.contains('tier-overview__track');
          if (isGrid) {
            const index = Array.from(parent.children).indexOf(el);
            if (index > 0) {
              el.style.transitionDelay = `${Math.min(index * 0.1, 0.4)}s`;
            }
          }
        }

        const rect = el.getBoundingClientRect();
        // ONLY elements that start strictly below the screen fold receive the pending state.
        // If an element is already in view or above it (e.g. reload or anchor jump), it stays 100% visible immediately.
        const isBelowViewport = rect.top >= viewportHeight - 20;

        if (isBelowViewport) {
          el.classList.add('c2-reveal--pending');
          observer.observe(el);
        } else {
          el.classList.remove('c2-reveal--pending');
          el.classList.add('c2-reveal--visible');
        }
      });
    };

    const rafId = requestAnimationFrame(() => {
      setupObserver();
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, [dependency]);
}
