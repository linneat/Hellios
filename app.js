const navAppear = () => {
  const burgerMenu = document.querySelector(".burgerMenu");
  const nav = document.querySelector(".navUl");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
}

navAppear();
