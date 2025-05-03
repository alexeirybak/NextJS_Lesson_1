import { ThemeSwitcher } from "@/components/page";

export default function Home() {
  return (
    <div className="mt-5 mx-10 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Демо работы с cookies</h1>
      <p className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
        Текущая тема сохраняется в сookies и будет применена при следующем
        посещении
      </p>
      <ThemeSwitcher />
    </div>
  );
}
