(() => {
  const menuRef = document.querySelector(".header__menu");
  const menuBtnRef = document.querySelector(".header__menu-button");
  const menuBtnOpenRef = document.querySelector(".header__menu-open");
  const menuBtnCloseRef = document.querySelector(".header__menu-close");
  const bodyRef = document.querySelector("body");
  const logoOpenRef = document.querySelector(".header__logo-link--open");
  const logoCloseRef = document.querySelector(".header__logo-link--close");
  const langRef = document.querySelector(".header__lang-button");


  // const mobileMenuRef = document.querySelector("[data-menu]");
  //   const scrollHiddenRef = document.querySelector("[data-menu-scroll]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    langRef.classList.toggle("is-open");
    menuRef.classList.toggle("is-open");
    logoCloseRef.classList.toggle("is-open");
    logoOpenRef.classList.toggle("is-open");
    bodyRef.classList.toggle("is-open");
    menuBtnRef.classList.toggle("is-open");
    menuBtnOpenRef.classList.toggle("is-open");
    menuBtnCloseRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    // mobileMenuRef.classList.toggle("is-open");
    // scrollHiddenRef.classList.toggle("is-open");
  });
})();

(() => {
  const langRef = document.querySelector(".header__lang-button");
  const langEnSvgRef = document.querySelector(".header__lang-svg--en");
  const langArSvgRef = document.querySelector(".header__lang-svg--ar");

  langRef.addEventListener("click", () => {
    langEnSvgRef.classList.toggle("active");
    langArSvgRef.classList.toggle("active");
  });
})();
