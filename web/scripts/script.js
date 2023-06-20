const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
const header = document.querySelector('#header');
const backToTopButton = document.querySelector('.back-to-top');
const sections = document.querySelectorAll('main section[id]');

toggle.forEach((element) => {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1002: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
);

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function activeMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const menuItem = document.querySelector(`nav ul li a[href*=${sectionId}]`);

    if (checkpoint >= sectionTop && checkpoint <= sectionTop + sectionHeight) {
      menuItem.classList.add('active');
    } else {
      menuItem.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
  backToTop();
  activeMenuAtCurrentSection();
});