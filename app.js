const navAppear = () => {
  const burgerMenu = document.querySelector(".burgerMenu");
  const nav = document.querySelector(".nav ul");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
}

navAppear();
