import React, { useState } from "react";
import '../../dolphin-css/App.css'
export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        DolphinCSS Example
      </h1>

      <button
        className="filled primary glass px-4 py-2 rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>

      <div className="mt-6 flex gap-4">
        <button className="circle filled primary p-3">Primary</button>
        <button className="outlined success glass px-4 py-2">Success</button>
        <button className="plain danger glass px-4 py-2">Danger</button>
      </div>
    </div>
  );
}
