const menuButton = document.querySelector('#menu');
const nav = document.querySelector('#nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('show');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
  menuButton.textContent = isOpen ? '×' : '☰';
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Mở menu');
    menuButton.textContent = '☰';
  });
});

const foodTrack = document.querySelector('#food-track');
const foodPrevious = document.querySelector('#food-prev');
const foodNext = document.querySelector('#food-next');

function updateFoodControls() {
  const maxScroll = foodTrack.scrollWidth - foodTrack.clientWidth;
  foodPrevious.disabled = foodTrack.scrollLeft <= 2;
  foodNext.disabled = foodTrack.scrollLeft >= maxScroll - 2;
}

foodPrevious.addEventListener('click', () => {
  foodTrack.scrollBy({ left: -foodTrack.clientWidth * 0.82, behavior: 'smooth' });
});

foodNext.addEventListener('click', () => {
  foodTrack.scrollBy({ left: foodTrack.clientWidth * 0.82, behavior: 'smooth' });
});

foodTrack.addEventListener('scroll', updateFoodControls, { passive: true });
window.addEventListener('resize', updateFoodControls);
updateFoodControls();
