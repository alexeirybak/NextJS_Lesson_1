// import { type NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   const theme = request.cookies.get("theme") || "light"; // Чтение cookies из запроса

//   // Установка новой cookie через заголовок ответа
//   return new Response(`Тема: ${theme}`, {
//     headers: {
//       "Set-Cookie": `theme=dark`,
//       "Content-Type": "text/html; charset=UTF-8",
//     },
//   });
// }

import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();

  (await cookieStore).set("result", "100");

  console.log((await cookieStore).get("result"));

  return new Response("<h1>Данные пользователя</h1>", {
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
    },
  });
}
