import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';

export function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    let isDarkMode = document.documentElement.classList.toggle('dark');

    // Default is dark; store only explicit light preference.
    if (isDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = 'false';
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="glass-panel group rounded-full px-3 py-2 transition hover:shadow-md"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-cyan-200 stroke-cyan-500 transition group-hover:fill-cyan-300 group-hover:stroke-cyan-600 dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 fill-blue-200 stroke-blue-400 transition group-hover:fill-blue-100 group-hover:stroke-blue-300 dark:block" />
    </button>
  );
}


