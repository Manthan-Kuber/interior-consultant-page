window.onload = function () {
  const nav = document.querySelector("nav");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelectorAll("ul")
  

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");
  });
};
