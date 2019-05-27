const portfolio = {
  //Object Variables
  navDisplayBtn: document.getElementById('nav-display-btn'),
  navMenu: document.getElementsByTagName('nav')[0],
  //Object Method Definitions
  addEvents: function() {
    this.navDisplayBtn.addEventListener('click', this.toggleDisplay);
  },
  toggleDisplay: function() {
    portfolio.navMenu.classList.toggle('is-hidden');
  }
};

window.addEventListener('load', portfolio.addEvents());



/*


//Window Based Event Listeners
window.addEventListener('DOMContentLoaded', initEvents);
window.addEventListener('resize', closeNav);

//**********************Global Variables Defined Below*********************

//Object declaration of DOM Node Properties/Values
var domNode = {
  mobileMenuBtn: document.getElementsByClassName('fa-bars')[0],
  mainSiteNav: document.getElementsByClassName('site-nav')[0]
};

//*************************Functions Defined Below*************************

//Initializes events on DOM Elements
function initEvents() {
  domNode.mobileMenuBtn.addEventListener('click', displayNav);
}

//Displays Main Navigation on Small Screens
function displayNav() {
  if (domNode.mainSiteNav.className === 'site-nav is-hidden') {
    domNode.mainSiteNav.className = 'site-nav';
  } else {
    domNode.mainSiteNav.className = 'site-nav is-hidden';
  }
}

function closeNav() {
  if (domNode.mainSiteNav.className === 'site-nav' && window.innerWidth <= 768) {
    displayNav();
  }
}

*/
