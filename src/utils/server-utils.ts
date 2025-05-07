import "server-only";

export const serverSideFunction = () => {
  console.log("Операции на стороне сервера");
  return "Серверный результат";
};
