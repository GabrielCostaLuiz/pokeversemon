import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { clsx } from 'clsx';
import Providers from "./provider";
import { NavBar } from "@/components/navBar";
import { Footer } from "@/components/footer";

const lato = Lato({ subsets: ["latin"], weight: ["400", "900"], display: 'swap', });

export const metadata: Metadata = {
  title: {
    template: '%s | Pokeversemon',
    default: 'Pokeversemon',
  },
  description: "Prepare-se para embarcar em uma jornada épica no universo Pokémon! No Pokeversemon, você encontrará uma infinidade de conteúdos, ferramentas e muito mais para explorar. Prontos para proporcionar uma experiência incrível a todos os treinadores! Então, pegue sua Pokébola e venha se aventurar conosco. Pokeversemon, eu escolho você!",
  keywords: ['Pokemon', 'Pokedex'],
  authors: [{ name: 'Gabriel Costa Luiz' }],
  creator: 'Gabriel Costa Luiz',
  publisher: 'Gabriel Costa Luiz',

  openGraph: {
    title: 'Pokeversemon',
    description: 'Explore o universo Pokémon no Pokeversemon! Descubra uma variedade de conteúdos e ferramentas para treinadores. Venha se aventurar conosco - Pokeversemon, eu escolho você!',
    siteName: 'Pokeversemon',
    // url: 'https://nextjs.org',
    type: 'website',
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
    locale: 'pt_BR',
  },
  
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={clsx("bg-white", lato.className ) }>
        <Providers>
          <NavBar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
