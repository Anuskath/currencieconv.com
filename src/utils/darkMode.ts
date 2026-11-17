// Dark mode utility with icon synchronization
export function initDarkMode() {
  const saved = localStorage.getItem('darkMode');
  let isDark = false;
  
  if (saved !== null) {
    isDark = saved === 'true';
  } else {
    isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  applyTheme(isDark);
  return isDark;
}

export function toggleDarkMode() {
  const currentIsDark = document.documentElement.classList.contains('dark');
  const nextIsDark = !currentIsDark;
  applyTheme(nextIsDark);
  localStorage.setItem('darkMode', nextIsDark.toString());
  return nextIsDark;
}

export function applyTheme(isDark: boolean) {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  if (sunIcon && moonIcon) {
    if (isDark) {
      sunIcon.classList.remove('hidden');
      sunIcon.classList.add('block');
      moonIcon.classList.remove('block');
      moonIcon.classList.add('hidden');
    } else {
      sunIcon.classList.remove('block');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
      moonIcon.classList.add('block');
    }
  }
}
