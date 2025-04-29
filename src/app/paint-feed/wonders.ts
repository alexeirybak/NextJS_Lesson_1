import { StaticImageData } from "next/image";
import paint1 from "./paintings/1.jpg";
import paint2 from "./paintings/2.jpg";
import paint3 from "./paintings/3.jpg";
import paint4 from "./paintings/4.jpg";
import paint5 from "./paintings/5.jpg";
import paint6 from "./paintings/6.jpg";
import paint7 from "./paintings/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  artist: string;
  year: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Бурлаки на Волге",
    src: paint1,
    artist: "И. Репин",
    year: "1872-73",
  },
  {
    id: "2",
    name: "Утро в сосновом лесу",
    src: paint2,
    artist: "И. Шишкин",
    year: "1889",
  },
  {
    id: "3",
    name: "Тройка",
    src: paint3,
    artist: "В. Петров",
    year: "1866",
  },
  {
    id: "4",
    name: "Богатыри",
    src: paint4,
    artist: "В. Васнецов",
    year: "1881–1898",
  },
  {
    id: "5",
    name: "Труды Богоматери",
    src: paint5,
    artist: "Н. Рерих",
    year: "1931",
  },
  {
    id: "6",
    name: "Русская пастораль",
    src: paint6,
    artist: "К. Сомов",
    year: "1922",
  },
  {
    id: "7",
    name: "Составление букета",
    src: paint7,
    artist: "А. Xарламов",
    year: "около 1900",
  },
];

export default wondersImages;
