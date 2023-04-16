const header = {
  menuBtn: document.querySelector(".header__menu-button"),
  element: document.querySelector(".header"),
  navList: document.querySelector(".header__nav-list"),
  navMenu: document.querySelector(".header__menu"),
  contact: document.querySelector(".header__contact"),
  menuClose: document.querySelector(".header__menu-close"),
  langBtn: document.querySelector(".header__lang-button"),
  logo: document.querySelector(".header__logo-svg"),
  logoFooter: document.querySelector(".header__logo-svg--footer"),
};

header.menuBtn.addEventListener("click", () => {
  window.addEventListener("resize", watchScreenHeight);

  watchScreenHeight();

  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  header.langBtn.classList.toggle("is-open");
  header.element.classList.toggle("is-open");
  header.logo.classList.toggle("is-open");
  header.logoFooter.classList.toggle("is-open");
  header.navList.classList.toggle("is-open");
  header.contact.classList.toggle("is-open");
  header.navMenu.classList.toggle("is-open");
  header.menuClose.classList.toggle("is-open");

  const state = header.element.classList.contains("is-open");

  if (!state) {
    window.removeEventListener("resize", watchScreenHeight);
  }
});

function watchScreenHeight() {
  if (window.innerHeight > 698) return;
  document.querySelector(".header").classList.toggle("beckdrop-scroll");
}
