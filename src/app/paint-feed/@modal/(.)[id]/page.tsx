import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/paint-feed/wonders";
import Modal from "@/components/modal";

export default async function PaintingModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const painting: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={painting.name}
        src={painting.src}
        className="w-full object-cover"
      />

      <div className="bg-white p-4 text-center">
        <h2 className="text-xl font-semibold">{painting.name}</h2>
        <h3>{painting.artist}</h3>
        <h3>{painting.year}</h3>
      </div>
    </Modal>
  );
}
