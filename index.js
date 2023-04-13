const header = {
  container: document.querySelector(".header-backdrop"),
  element: document.querySelector(".header"),
  contact: document.querySelector(".header__contact-list"),
  contactGeo: document.querySelector(".header__contact-item--geo"),
  contactMail: document.querySelector(".header__contact-item--mail"),
  navList: document.querySelector(".header__nav-list"),
  contactLinks: document.querySelectorAll(".header__contact-link"),
  contactItems: document.querySelectorAll(".header__contact-svg"),
  contactAdditions: document.querySelectorAll(
    ".header__contact-item--addition"
  ),
  menuBtn: document.querySelector(".header__menu-button"),
  menuClose: document.querySelector(".header__menu-close"),
  langBtn: document.querySelector(".header__lang-button"),
  logo: document.querySelector(".header__logo-svg"),
  logoFooter: document.querySelector(".header__logo-svg--footer"),
};

header.menuBtn.addEventListener("click", () => {
  header.contactItems.forEach((item) => item.classList.toggle("is-open"));
  header.contactLinks.forEach((item) => item.classList.toggle("is-open"));
  header.contactAdditions.forEach((item) => item.classList.toggle("is-open"));
  header.contactMail.classList.toggle("is-open");
  header.contactGeo.classList.toggle("is-open");
  header.contact.classList.toggle("is-open");
  header.navList.classList.toggle("is-open");
  header.container.classList.toggle("is-open");
  header.element.classList.toggle("is-open");
  header.langBtn.classList.toggle("is-open");
  header.logo.classList.toggle("is-open");
  header.logoFooter.classList.toggle("is-open");
  header.menuClose.classList.toggle("is-open");
});

const button = document.querySelector(".header__lang-button");
const enSvg = document.querySelector(".header__lang-svg--en");
const arSvg = document.querySelector(".header__lang-svg--ar");

button.addEventListener("click", () => {
  enSvg.classList.toggle("enActive");
  arSvg.classList.toggle("arActive");
});
