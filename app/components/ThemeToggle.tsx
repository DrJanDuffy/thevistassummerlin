import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
} 