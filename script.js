

  function toggleReadMore() {
    const content = document.getElementById('readMoreContent');
    const btn = document.querySelector('.readbtn a');

    if (content.style.display === 'block') {
      content.style.display = 'none';
      btn.textContent = 'Read More';
    } else {
      content.style.display = 'block';
      btn.textContent = 'Read Less';
    }
  }

  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('open');
  });


