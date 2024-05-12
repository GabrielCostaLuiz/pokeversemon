import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import Providers from "./provider";

import { usePokemonStore } from "@/store/pokemonStore";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pokeversemon",
    default: "Pokeversemon",
  },
  description:
    "Prepare-se para embarcar em uma jornada épica no universo Pokémon! No Pokeversemon, você encontrará uma infinidade de conteúdos, ferramentas e muito mais para explorar. Prontos para proporcionar uma experiência incrível a todos os treinadores! Então, pegue sua Pokébola e venha se aventurar conosco. Pokeversemon, eu escolho você!",
  keywords: ["Pokemon", "Pokedex"],
  authors: [{ name: "Gabriel Costa Luiz" }],
  creator: "Gabriel Costa Luiz",
  publisher: "Gabriel Costa Luiz",

  openGraph: {
    title: "Pokeversemon",
    description:
      "Explore o universo Pokémon no Pokeversemon! Descubra uma variedade de conteúdos e ferramentas para treinadores. Venha se aventurar conosco - Pokeversemon, eu escolho você!",
    siteName: "Pokeversemon",
    // url: 'https://nextjs.org',
    type: "website",
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: "pt_BR",
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=3000", {
    next: { revalidate: 86400 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  usePokemonStore.getState().addPokemons(data.results);
  return;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getData();

  const namesPokes = usePokemonStore.getState().allNamesPokemons;

  return (
    <html lang="pt-br">
      <body className={clsx("bg-white", lato.className)}>
        <Providers>
          <NavBar namesPokes={namesPokes} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
