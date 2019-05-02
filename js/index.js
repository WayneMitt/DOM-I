const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 1
let mainContent = document.querySelector('.main-content');

// Update img src
let logoImg = document.querySelector('#logo-img');
let ctaImg = document.querySelector('#cta-img');
let middleImg = document.querySelector('#middle-img');

logoImg.src = 'img/logo.png';
ctaImg.src = 'img/header-img.png';
middleImg.src = 'img/mid-page-accent.jpg';

// Update nav
let navLinks = document.querySelectorAll('a');
let navLinksArray = Array.from(navLinks);
navLinksArray[0].textContent = 'Services';
navLinksArray[1].textContent = 'Product';
navLinksArray[2].textContent = 'Vision';
navLinksArray[3].textContent = 'Features';
navLinksArray[4].textContent = 'About';
navLinksArray[5].textContent = 'Contact';

// Update cta
let ctaText = document.querySelector('h1');
ctaText.insertAdjacentHTML('afterbegin', 'DOM<br> Is<br> Awesome');

let ctaButton = document.querySelector('button');
ctaButton.textContent = 'Get Started';

// Update main-content
let bodyHeadings = document.querySelectorAll('h4');
let bodyHeadingsArray = Array.from(bodyHeadings);
bodyHeadings[0].textContent = 'Features';
bodyHeadings[1].textContent = 'About';
bodyHeadings[2].textContent = 'Services';
bodyHeadings[3].textContent = 'Product';
bodyHeadings[4].textContent = 'Vision';

let bodyContent = document.querySelectorAll('.main-content p');
let bodyContentArray = Array.from(bodyContent);
bodyContent[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bodyContent[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bodyContent[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bodyContent[3].textContent = 'ProProduct content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.duct';
bodyContent[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Update contact
let contactHeader = document.querySelector('.contact h4');
let contactContent = document.querySelectorAll('.contact p');
let contactContentArray = Array.from(contactContent);

contactHeader.textContent = 'Contact';
contactContentArray[0].insertAdjacentHTML('afterbegin', '123 Way 456 Street<br>Somewhere, USA');
contactContentArray[1].textContent = '1 (888) 888-8888';
contactContentArray[2].textContent = 'sales@greatidea.io';

//Update footer
let footer = document.querySelector('footer p');
footer.textContent = 'Copyright Great Idea! 2018';
