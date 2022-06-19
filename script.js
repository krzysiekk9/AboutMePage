const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

// scroll to sce 1 btn 1

const btnScrollTo = document.querySelector('.btn--scroll');

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// navBar scrolling
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    console.log('bbb');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//nav bar fade

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('span');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//tabbed component
const tabs = document.querySelectorAll('.favs__tab');
const tabsContainer = document.querySelector('.favs__tabs-container');
const tabsContent = document.querySelectorAll('.favs__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.favs__tab');

  //guard clause
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('favs__tab--active'));
  clicked.classList.add('favs__tab--active');

  //content activation

  tabsContent.forEach(t => t.classList.remove('favs__content--active'));

  document
    .querySelector(`.favs__content--${clicked.dataset.tab}`)
    .classList.add('favs__content--active');
});
