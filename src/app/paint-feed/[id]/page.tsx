import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default async function PaintingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const painting: WonderImage = wondersImages.find((p) => p.id === id)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-auto mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{painting.name}</h1>
        </div>
        <Image
          alt={painting.name}
          src={painting.src}
          className="w-full object-cover"
        />

        <div className="bg-white py-4">
          <h3>{painting.artist}</h3>
          <h3>{painting.year}</h3>
        </div>
      </div>
    </div>
  );
}
