import Image from "next/image";
import professor from "@/public/professor.svg";

export const revalidate = 3600;

export default function PokedexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[97%] mx-auto bg-section my-5 rounded-xl p-5 text-white pb-10 section">
      <div className="mb-10">
        <h1 className="text-center text-5xl font-bold mb-5">Pokédex Pokémon</h1>

        <div className="flex flex-col sm:flex-row mt-10">
          <p className=" text-white font-bold flex items-center justify-center px-9 p-14 sm:py-2 rounded-full text-lg text-center bg-[#68798C]">
            Dentro da seção da Pokédex, você mergulha em um tesouro de
            informações sobre todas as criaturas Pokémon encontradas ao longo da
            série de jogos. Nas páginas principais da lista, você pode conferir
            as diversas estatísticas de cada Pokémon. Ao clicar no nome de um
            Pokémon, você se depara com uma página detalhada, repleta de dados
            da Pokédex, descrições retiradas de jogos anteriores, sprites,
            evoluções, movimentos e muito mais! Criaturas com poderes
            fantásticos. Eles podem ser de diferentes formas, tamanhos, tipos.
            Existem tipos comuns como Pidgey, Caterpie ou Rattata. Mas
            também há raros que existem em uma única cópia.
          </p>

          <Image
            src={professor}
            alt="Pokedex"
            className=""
            width={500}
            height={500}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
