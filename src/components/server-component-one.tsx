import fs from "fs";
//import { ServerComponentTwo } from "./server-component-two";
import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  console.log("Я опять стал серверным");
  return (
    <>
      <h1>Первый серверный компонент</h1>
      {/* <ServerComponentTwo /> */}
      {/* <ClientComponentOne /> */}
    </>
  );
};
