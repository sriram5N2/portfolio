
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('open');
  });

function toggleRead() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btn = document.getElementById("readbtn");

  if (more.style.display === "none") {
    more.style.display = "inline";
    dots.style.display = "none";
    btn.innerText = "Read Less";
  } else {
    more.style.display = "none";
    dots.style.display = "inline";
    btn.innerText = "Read More";
  }
}
