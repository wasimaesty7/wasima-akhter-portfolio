// your code goes here
// index.js
// Smooth scroll with sticky navbar offset




document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();




    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);




    if (!targetSection) return;




    const navbarHeight = document.querySelector("nav").offsetHeight;




    const targetPosition =
      targetSection.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight -
      10; // small spacing




    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});