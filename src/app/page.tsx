import Image from "next/image";
import localImage from "/public/nature.jpg";

export default function Home() {
  return (
    <>
      <h1>Работа с изображениями</h1>
      <Image
        src="https://static-cse.canva.com/blob/846900/photo1502082553048f009c37129b9e1583341920812.jpeg"
        alt="Описание изображения"
        width={500}
        height={300}
      />
      <Image
        src="https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg"
        alt="Описание изображения"
        width={500}
        height={300}
      />
      {/* <Image src={localImage} alt="Описание изображения" /> */}
      {/* <div className="w-full md:w-1/2 lg:w-1/3 border-2 border-green-600 relative h-[300px]">
        <Image
          src="/nature.jpg"
          alt="Описание изображения"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 33vw"
          quality={90}
          // Чтобы не было искажения по ширине и высоте
        />
      </div> */}
    </>
  );
}
