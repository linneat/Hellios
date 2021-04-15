const navAppear = () => {
  const burgerMenu = document.querySelector(".burgerMenu");
  const nav = document.querySelector(".nav ul");
  const content = document.querySelector(".content");
    const bodyWrap = document.querySelector(".bodyWrap");

  burgerMenu.addEventListener("click", () => {
    content.classList.toggle("nav-activeContent");
    bodyWrap.classList.toggle("nav-active-body")
    nav.classList.toggle("nav-active");
    nav.classList.toggle("nav-active li");
    nav.classList.toggle("nav-active li button");
   
  });
};

navAppear();
