import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  return <h1>Серверный компонент: {result}</h1>;
}
