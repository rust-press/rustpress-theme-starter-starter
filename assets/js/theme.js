/**
 * Starter Starter Theme JavaScript
 * Minimal, clean functionality
 */

(function() {
  'use strict';

  // DOM Ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initDarkMode();
    initMobileMenu();
    initReadingProgress();
    initBackToTop();
    initSmoothScroll();
  }

  /**
   * Dark Mode Toggle
   */
  function initDarkMode() {
    const toggle = document.querySelector('.dark-mode-toggle');
    if (!toggle) return;

    // Check for saved preference
    const savedMode = localStorage.getItem('starter-starter-dark-mode');
    if (savedMode === 'true') {
      document.body.classList.add('dark-mode');
      updateDarkModeIcon(true);
    }

    toggle.addEventListener('click', function() {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('starter-starter-dark-mode', isDark);
      updateDarkModeIcon(isDark);
    });

    function updateDarkModeIcon(isDark) {
      const sunIcon = toggle.querySelector('.icon-sun');
      const moonIcon = toggle.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        sunIcon.style.display = isDark ? 'block' : 'none';
        moonIcon.style.display = isDark ? 'none' : 'block';
      }
    }
  }

  /**
   * Mobile Menu
   */
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const menuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
    }

    // Close on backdrop click
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMenu();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
      }
    });

    function closeMenu() {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /**
   * Reading Progress Bar
   */
  function initReadingProgress() {
    const progressBar = document.querySelector('.reading-progress');
    const article = document.querySelector('.post-content');

    if (!progressBar || !article) return;

    function updateProgress() {
      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const start = articleTop - windowHeight;
      const end = articleTop + articleHeight;
      const progress = ((scrollY - start) / (end - start)) * 100;

      progressBar.style.width = Math.min(Math.max(progress, 0), 100) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /**
   * Back to Top Button
   */
  function initBackToTop() {
    const button = document.querySelector('.back-to-top');
    if (!button) return;

    function toggleVisibility() {
      if (window.scrollY > 400) {
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    button.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    toggleVisibility();
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * Share functionality
   */
  window.sharePost = function(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.href).then(function() {
          alert('Link copied to clipboard!');
        });
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  /**
   * Newsletter form
   */
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      // Here you would typically send to your newsletter service
      alert('Thank you for subscribing!');
      this.reset();
    });
  }

})();
