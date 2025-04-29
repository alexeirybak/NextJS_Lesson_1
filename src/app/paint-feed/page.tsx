import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function Painting() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">Артархив</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonders.map(({ id, src, name }) => (
          <Link
            key={id}
            href={`/paint-feed/${id}`}
            className="group block overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <Image
                alt={name}
                src={src}
                
                className="w-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
