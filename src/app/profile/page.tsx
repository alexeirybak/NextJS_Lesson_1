"use client";

import { useState } from "react";

export default function Profile() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Профиль!</h1>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}></button>
    </>
  );
}
