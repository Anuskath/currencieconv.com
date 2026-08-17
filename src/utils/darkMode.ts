// Dark mode utility
export function initDarkMode() {
  const isDark = localStorage.getItem('darkMode') === 'true' || 
                 window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  }
  
  return isDark;
}

export function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark.toString());
  return isDark;
}

export function getDarkMode() {
  return document.documentElement.classList.contains('dark');
}
