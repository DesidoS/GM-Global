(() => {
  const mobileHeaderContainerRef = document.querySelector(".header-backdrop");
  const mobileHeaderRef = document.querySelector(".header");
  const mobileContactRef = document.querySelector(".header__contact-list");
  const mobileContactGeoRef = document.querySelector(
    ".header__contact-item--geo"
  );
  const mobileContactMailRef = document.querySelector(
    ".header__contact-item--mail"
  );
  const mobileHeaderNavListRef = document.querySelector(".header__nav-list");
  const mobileContactLinkRef = document.querySelectorAll(
    ".header__contact-link"
  );
  const mobileContactItemRef = document.querySelectorAll(
    ".header__contact-svg"
  );
  const mobileContactAdditionRef = document.querySelectorAll(
    ".header__contact-item--addition"
  );

  const menuBtnRef = document.querySelector(".header__menu-button");
  const mobileMenuRef = document.querySelector(".header__menu-close");
  const mobileMenuBtnRef = document.querySelector(".header__menu-button");
  const mobileLangBtnRef = document.querySelector(".header__lang-button");
  const mobileLogoRef = document.querySelector(".header__logo-svg");
  const mobileLogoFooterRef = document.querySelector(
    ".header__logo-svg--footer"
  );

  menuBtnRef.addEventListener("click", () => {
    mobileContactItemRef.forEach((item) => item.classList.toggle("is-open"));
    mobileContactLinkRef.forEach((item) => item.classList.toggle("is-open"));
    mobileContactAdditionRef.forEach((item) =>
      item.classList.toggle("is-open")
    );
    mobileContactMailRef.classList.toggle("is-open");
    mobileContactGeoRef.classList.toggle("is-open");
    mobileContactRef.classList.toggle("is-open");
    mobileHeaderNavListRef.classList.toggle("is-open");
    mobileHeaderContainerRef.classList.toggle("is-open");
    mobileHeaderRef.classList.toggle("is-open");
    mobileLangBtnRef.classList.toggle("is-open");
    mobileLogoRef.classList.toggle("is-open");
    mobileLogoFooterRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-open");
    mobileMenuBtnRef.classList.toggle("is-open");
  });
})();

const button = document.querySelector(".header__lang-button");
const enSvg = document.querySelector(".header__lang-svg--en");
const arSvg = document.querySelector(".header__lang-svg--ar");

button.addEventListener("click", () => {
  enSvg.classList.toggle("enActive");
  arSvg.classList.toggle("arActive");
});
