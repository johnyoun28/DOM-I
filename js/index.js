const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Nav
const items = document.querySelectorAll("nav a");
items[0].textContent = siteContent["nav"]["nav-item-1"];
items[1].textContent = siteContent["nav"]["nav-item-2"];
items[2].textContent = siteContent["nav"]["nav-item-3"];
items[3].textContent = siteContent["nav"]["nav-item-4"];
items[4].textContent = siteContent["nav"]["nav-item-5"];
items[5].textContent = siteContent["nav"]["nav-item-6"];

items.forEach((item) => (item.style.color = "green"));

const navItem = document.querySelector("nav");
const append = document.createElement("a");
append.textContent = "Testing";
navItem.appendChild(append);
append.style.color = "green";

const prepend = document.createElement("a");
prepend.textContent = "Cool";
navItem.prepend(prepend);
prepend.style.color = "green";

const h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

const image = document.getElementById("cta-img");
image.src = "img/header-img.png";

//Main Content

const mainh4 = document.querySelectorAll(".top-content .text-content h4");
mainh4[0].textContent = siteContent["main-content"]["features-h4"];
mainh4[1].textContent = siteContent["main-content"]["about-h4"];

const mainP = document.querySelectorAll(".top-content .text-content p");
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];

const midImg = document.getElementById("middle-img");
midImg.src = "img/mid-page-accent.jpg";

//Bottom Content

const bottomContent = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
bottomContent[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[1].textContent = siteContent["main-content"]["product-h4"];
bottomContent[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomContentP = document.querySelectorAll(
  ".bottom-content .text-content p"
);
bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

//Contact
const contactSection = document.querySelector(".contact h4");
contactSection.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//Footer
const footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];
