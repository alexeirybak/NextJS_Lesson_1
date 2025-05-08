import { ImageSlider } from "@/components/image-slider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <>
      <ImageSlider />
      {result}
    </>
  );
}
