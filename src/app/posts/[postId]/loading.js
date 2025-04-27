export default function Loading() {
  return (
    <div className="fixed inset-0 bg-blue-100 flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-12 w-12 bg-blue-500 rounded-full mb-4"></div>
        <p className="text-blue-800 font-medium">Загружаем контакты...</p>
      </div>
    </div>
  );
}
