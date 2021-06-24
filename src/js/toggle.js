const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleBtn = document.getElementById('theme-switch-toggle');

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.body.className = themeName;
}

function toggleTheme() {
  const { DARK, LIGHT } = Theme;
  if (localStorage.getItem('theme') === DARK) {
    setTheme(LIGHT);
  } else {
    setTheme(DARK);
  }
}

function checkTheme() {
  const localStorageName = localStorage.getItem('theme');
  if (localStorageName === Theme.DARK) {
    document.body.className = localStorageName;
    toggleBtn.checked = true;
  }
}

toggleBtn.addEventListener('change', toggleTheme);
window.onload = checkTheme();
