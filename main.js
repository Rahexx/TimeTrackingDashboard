const filters = document.querySelectorAll('.profile__filter');
let activeFilter = 'weekly';
let data = [];
const labels = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month',
};

function updateDashboardData() {
  for (const profile of data) {
    const panel = document.querySelector(`[data-name="${profile.title}"]`);
    const previousTime = panel.querySelector('.tracker__last');
    const currentTime = panel.querySelector('.tracker__time');
    const timeframe = profile.timeframes[activeFilter];

    previousTime.textContent = `${labels[activeFilter]} - ${timeframe.previous}hrs`;
    currentTime.textContent = `${timeframe.current}hrs`;
  }
}

for (const filter of filters) {
  filter.addEventListener('click', () => {
    filters.forEach((f) => f.classList.remove('profile__filter--active'));
    filter.classList.add('profile__filter--active');
    activeFilter = filter.textContent.toLowerCase();

    updateDashboardData();
  });
}

window.addEventListener('load', async () => {
  try {
    const response = await fetch('./data.json');
    data = await response.json();
    updateDashboardData();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
