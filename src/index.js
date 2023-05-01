const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// Declare all Elements
const header = document.querySelectorAll('header')
const nav = document.querySelectorAll('nav')
const navLinks = document.querySelectorAll('nav a')
const div = document.querySelectorAll('div')
const section = document.querySelectorAll('section')
const h1 = document.querySelector('h1')
const h2 = document.querySelectorAll('h2')
const h3 = document.querySelectorAll('h3')
const h4 = document.querySelectorAll('h4')
const p = document.querySelectorAll('p')
const button = document.querySelector('button')
const footer = document.querySelector('footer')
const copyright = document.querySelector('footer a')

// Declare all Classes
const container = document.querySelectorAll('.containter')
const cta = document.querySelectorAll('.cta')
const mainContent = document.querySelectorAll('.main-content')
const topContent = document.querySelectorAll('.top-content')
const textContent = document.querySelectorAll('.text-content')
const middleImg = document.querySelector('.middle-img')
const bottomContent = document.querySelectorAll('.bottom-content')
const contact = document.querySelectorAll('.contact')
const logoImg = document.querySelector('.logo')

// Declare all Ids


const ctaImg = document.querySelector('#cta-img')

// Manipulate the DOM

// [1] header nav links contain the correct text

navLinks[0].textContent = 'Services'

navLinks[1].textContent = 'Product'

navLinks[2].textContent = 'Vision'

navLinks[3].textContent = 'Features'

navLinks[4].textContent = 'About'

navLinks[5].textContent = 'Contact'


// [2] call to action elements contain the correct text

h1.textContent = 'DOM Is Awesome'

button.textContent = 'Get Started'

// [3] main content headings contain the correct text

h4[0].textContent = 'Features' 

h4[1].textContent = 'About' 

// [4] main content paragraphs contain the correct text

p[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'
p[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'

// [5] bottom content headings contain the correct text

h4[2].textContent = 'Services'

h4[3].textContent = 'Product'

h4[4].textContent = 'Vision'

// [6] bottom content headings contain the correct text

p[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'
p[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'
p[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'

// [7] contact information elements contain the correct text

h4[5].textContent = 'Contact'
p[5].textContent = '123 Way 456 Street Somewhere, USA'
p[6].textContent = '1 (888) 888-8888'
p[7].textContent = 'sales@greatidea.io'

// [8] copyright information link contains the correct text

copyright.textContent = 'Copyright Great Idea! 2021'

// [9] header logo img has the correct src

logoImg.src = 'http://localhost:9000/img/logo.png'

// [10] call to action img has the correct src

ctaImg.src = 'http://localhost:9000/img/cta.png'

// [11] middle img has the correct src

middleImg.src = 'http://localhost:9000/img/accent.png'

// [12] nav links have a class name of italic

navLinks[0].className = 'italic'

navLinks[1].className = 'italic'

navLinks[2].className = 'italic'

navLinks[3].className = 'italic'

navLinks[4].className = 'italic'

navLinks[5].className = 'italic'

// [13] no other links have a class name of italic



// [14] the footer link has a class name of bold

copyright.className = 'bold'

// [15] no other links have a class name of bold




console.log('project wired!')
