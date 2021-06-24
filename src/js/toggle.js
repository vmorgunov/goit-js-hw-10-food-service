const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleBtn = document.getElementById('theme-switch-toggle');
const { DARK, LIGHT } = Theme;

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.body.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === DARK) {
    setTheme(LIGHT);
  } else {
    setTheme(DARK);
  }
}

function checkTheme() {
  const localStorageName = localStorage.getItem('theme');
  if (localStorageName === DARK) {
    document.body.className = localStorageName;
    toggleBtn.checked = true;
  }
}

toggleBtn.addEventListener('change', toggleTheme);
window.onload = checkTheme();
