"use client";

import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";
import { ServerComponentOne } from "./server-component-one";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Первый клиентский компонент</h1>
      {/* <ClientComponentTwo /> */}
      {children}
    </>
  );
};
