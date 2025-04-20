"use client";

import { useEffect, useState } from "react";
// import Button from "@/components/Button";
import Link from "next/link";

const AboutPage = () => {
  console.log("Мы создаем серверный компонент");
  const [lastUpload, setLastUpload] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setLastUpload(new Date().toISOString());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerHeight);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  //   const lastUpdated = new Date().toISOString();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">О нашей компании</h1>
      <p className="mt-4">
        Эта страница полностью отображается на сервере. Для этого компонента
        JavaScript не отправляется в браузер
      </p>
      <div>
        <p>Последнее обновление: {lastUpload}</p>
        <button className="bg-blue-500" onClick={() => alert("Нажали")}>
          Нажми меня
        </button>
      </div>
      <Link className="text-cyan-400" href="/">
        На главную
      </Link>
      <p>Ширина окна: {windowWidth}</p>
    </div>
  );
};

export default AboutPage;
