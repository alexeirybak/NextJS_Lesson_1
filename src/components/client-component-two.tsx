"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("");
  return <h1>Второй клиентский компонент</h1>;
};
