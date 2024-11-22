document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const body = document.body;
  const navLinks = document.querySelectorAll('.nav-links a');

  // Function to toggle 'menu-open' class based on checkbox state
  function toggleMenu() {
    if (menuToggle.checked) {
      body.classList.add('menu-open');
    } else {
      body.classList.remove('menu-open');
    }
  }
  // Event listener for checkbox state change
  menuToggle.addEventListener('change', toggleMenu);
  // Function to close the menu
  function closeMenu() {
    if (menuToggle.checked) {
      menuToggle.checked = false;
      body.classList.remove('menu-open');
    }
  }
  // Add click event listeners to all navigation links to close the menu when a link is clicked
  navLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });
  // Close menu when clicking outside the nav-links
  document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    if (menuToggle.checked && !nav.contains(event.target)) {
      menuToggle.checked = false;
      body.classList.remove('menu-open');
    }
  });

  // Initialize AOS Library
  AOS.init({
    duration: 600, // Reduced from 1000ms to 600ms
    once: true,
  });

  // Navbar Background Blur on Scroll
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Initialize Swiper Carousel for Services Section
  const prevButton = document.querySelector('.slider__prev');
  const nextButton = document.querySelector('.slider__next');
  const mySwiper = new Swiper('.my-swiper', {
    loop: true, // Set to true for continuous looping
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  prevButton.addEventListener('click', () => {
    mySwiper.slidePrev();
  });
  nextButton.addEventListener('click', () => {
    mySwiper.slideNext();
  });

  // Remove edge detection since loop is true
  particlesJS('particles-left', {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#fc62af', // Changed back to pink
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 6,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#fc62af', // Changed back to pink
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.6,
          },
        },
        bubble: {
          distance: 200,
          size: 10,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
  
  // Particles.js Configuration for Right (Blue Particles)
  particlesJS('particles-right', {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#449dfd', // Blue color
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 6,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#449dfd',
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.6,
          },
        },
        bubble: {
          distance: 200,
          size: 10,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });

  // Tab Switching Functionality
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      const tabId = el.getAttribute('data-tab');

      // Remove current class from all tabs
      tabLinks.forEach(function (el) {
        el.classList.remove('current');
      });

      // Add current class to selected tab
      el.classList.add('current');

      // Hide all tab contents
      tabContents.forEach(function (el) {
        el.classList.remove('current');
      });

      // Show selected tab content
      const activeTabContent = document.getElementById(tabId);
      if (activeTabContent) {
        activeTabContent.classList.add('current');
      }
    });
  });

  // Form Validation
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const company = document.getElementById('company').value.trim();

    // Simple validation
    if (!name || !surname || !email || !phone || !company) {
      alert('Please fill in all required fields.');
      return;
    }

    // Email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Phone number validation (basic example)
    const phonePattern = /^\+?[0-9]{7,15}$/;
    if (!phone.match(phonePattern)) {
      alert('Please enter a valid phone number.');
      return;
    }

    // If validation passes
    alert('Thank you for contacting us!');
    // Reset form
    this.reset();
  });
});
