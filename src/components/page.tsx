"use client";

import { useState, useEffect } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetch("/theme")
      .then((res) => res.json())
      .then((data) => {
        setTheme(data.theme);
        document.documentElement.setAttribute("data-theme", data.theme);
      });
  }, []);

  async function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    try {
      await fetch("/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme: newTheme }),
      });

      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    } catch (error) {
      console.error("Failed to set theme:", error);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer w-1/6 p-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {theme === "light" ? "Темная" : "Светлая"}
    </button>
  );
}
