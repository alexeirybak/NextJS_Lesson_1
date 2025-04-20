"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const DashboardPage = () => {
  const [name, setName] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  console.log("Dashboard - клиентский компонент");

  useEffect(() => {
    setWindowWidth(window.innerHeight);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Панель пользователя</h1>
      <p>Тема: {theme}</p>
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-blue-100 rounded">
          <label className="block mb-2">Введите ваше имя:</label>
          <input
            className="p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="mt-2">Привет, {name || "гость"}!</p>
        </div>
        <div className="p-4 bg-green-100 rounded">
          <p>Ширина окна: {windowWidth}px</p>
        </div>
      </div>
      <Link className="text-cyan-400" href="/">
        На главную
      </Link>
    </div>
  );
};

export default DashboardPage;
