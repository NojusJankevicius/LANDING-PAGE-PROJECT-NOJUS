const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNavigationContainer = document.querySelector('.navbar__navigation-container');
const navbarLinks = document.querySelectorAll('.nav-item');
let navbarOpen = false;

function toggleNavbar() {
  if (navbarOpen) {
    navbarNavigationContainer.classList.remove('show');
  } else {
    navbarNavigationContainer.classList.add('show');
  }
}

function closeNavbar(){
  navbarNavigationContainer.classList.remove('show');
  navbarOpen = false;
}

navbarToggler.addEventListener('click', toggleNavbar);
navbarLinks.forEach(navbarLink => navbarLink.addEventListener('click', closeNavbar));

