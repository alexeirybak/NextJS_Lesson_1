import { Roboto_Condensed, Ballet } from "next/font/google";
import localFont from "next/font/local";

const someGoogleFont = Roboto_Condensed({
  subsets: ["latin"],
});

const someGoogleFont2 = Ballet({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-some-google-font-2",
});

const lastFont = localFont({
  src: "./../../assets/fonts/KosolapaScript-Regular.ttf",
});

export default function Home() {
  return (
    <>
      <h1 className={`${lastFont.className} text-9xl`}>Работа со шрифтами</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde assumenda
        vel modi officiis totam, sapiente eos rerum soluta pariatur! Adipisci
        quis amet iusto non cum, velit doloremque. Et eveniet maxime laboriosam
        labore aut incidunt vel accusantium ad a, dolorum porro, nemo,
        temporibus exercitationem cumque aliquam atque assumenda recusandae
        asperiores veniam fugiat necessitatibus sapiente magni repellat
        reiciendis. Repellat reiciendis quos non, fuga necessitatibus numquam
        laudantium dolore sapiente suscipit reprehenderit vel quidem itaque
        deleniti quia sequi rerum, iure nobis ex laboriosam! Tenetur repellat
        non cum itaque eos dolore, quo nam est, voluptatem impedit esse quas?
        Officia recusandae voluptate nam cum impedit adipisci.
      </p>
      <br />
      <p className={`${someGoogleFont.className}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde assumenda
        vel modi officiis totam, sapiente eos rerum soluta pariatur! Adipisci
        quis amet iusto non cum, velit doloremque. Et eveniet maxime laboriosam
        labore aut incidunt vel accusantium ad a, dolorum porro, nemo,
        temporibus exercitationem cumque aliquam atque assumenda recusandae
        asperiores veniam fugiat necessitatibus sapiente magni repellat
        reiciendis. Repellat reiciendis quos non, fuga necessitatibus numquam
        laudantium dolore sapiente suscipit reprehenderit vel quidem itaque
        deleniti quia sequi rerum, iure nobis ex laboriosam! Tenetur repellat
        non cum itaque eos dolore, quo nam est, voluptatem impedit esse quas?
        Officia recusandae voluptate nam cum impedit adipisci.
      </p>
      <p className={`${someGoogleFont2.variable}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde assumenda
        vel modi officiis totam, sapiente eos rerum soluta pariatur! Adipisci
        quis amet iusto non cum, velit doloremque. Et eveniet maxime laboriosam
        labore aut incidunt vel accusantium ad a, dolorum porro, nemo,
        temporibus
        <span className="font-ballet text-red-500">
          asperiores veniam fugiat necessitatibus sapiente magni repellat
          reiciendis. Repellat reiciendis quos non, fuga necessitatibus numquam
          laudantium dolore sapiente suscipit reprehenderit vel quidem itaque
          deleniti quia sequi rerum, iure nobis ex laboriosam! Tenetur repellat
          non cum itaque eos dolore, quo nam est, voluptatem
        </span>
        exercitationem cumque aliquam atque assumenda recusandae impedit esse
        quas? Officia recusandae voluptate nam cum impedit adipisci.
      </p>
      <p className={`${someGoogleFont2.className}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iste
        nisi fuga, odit neque earum mollitia repellat aperiam. Delectus,
        praesentium?
      </p>
    </>
  );
}
