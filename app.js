const navAppear = () => {
  const burgerMenu = document.querySelector(".burgerMenu");
  const nav = document.querySelector(".nav ul");
  const content = document.querySelector(".content");
  const bodyWrap = document.querySelector(".bodyWrap");

  burgerMenu.addEventListener("click", () => {
    bodyWrap.classList.toggle("nav-active-body");
    content.classList.toggle("nav-activeContent");
    burgerMenu.classList.toggle("line-change");
    nav.classList.toggle("nav-active");
    nav.classList.toggle("nav-active li");
    nav.classList.toggle("nav-active li button");
  });
};

navAppear();
