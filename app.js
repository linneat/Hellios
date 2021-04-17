const navAppear = () => {
  const burgerMenu = document.querySelector(".burgerMenu");

  burgerMenu.addEventListener("click", toggleBurgerMenu);
};

const closeBurgerMenu = () => {
  const burgerMenu = document.querySelector(".burgerMenu");
  const nav = document.querySelector(".nav ul");
  const content = document.querySelector(".content");
  const bodyWrap = document.querySelector(".bodyWrap");

  bodyWrap.classList.remove("nav-active-body");
  content.classList.remove("nav-activeContent");
  burgerMenu.classList.remove("line-change");
  nav.classList.remove("nav-active");
};


const toggleBurgerMenu = () => {
  const burgerMenu = document.querySelector(".burgerMenu");
  const nav = document.querySelector(".nav ul");
  const content = document.querySelector(".content");
  const bodyWrap = document.querySelector(".bodyWrap");

  bodyWrap.classList.toggle("nav-active-body");
  content.classList.toggle("nav-activeContent");
  burgerMenu.classList.toggle("line-change");
  nav.classList.toggle("nav-active");
};

const redirectHttps = () => {
  const host = "hellios-retreat.dk";
  if (window.location.host == host && window.location.protocol != "https:") {
    window.location.protocol = "https:";
  }
};

redirectHttps();
navAppear();
