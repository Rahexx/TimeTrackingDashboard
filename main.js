const filters = document.querySelectorAll('.profile__filter');

[...filters].forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((f) => f.classList.remove('profile__filter--active'));
    filter.classList.add('profile__filter--active');
  });
});
