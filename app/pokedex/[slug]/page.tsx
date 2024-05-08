import BackPage from "@/components/ui/BackPage";
import type { Metadata, ResolvingMetadata } from "next";
import { colorsType, specialNames } from "@/utils/constantsPoke";
import { getGames, setDataPokedex } from "@/actions/pokemonActions";
import { DataPokemonsPokedex } from "@/components/ui/DataPokemonsPokedex";
import { Suspense } from "react";
import { usePokemonStore } from "@/store/pokemonStore";
import { Button } from "@nextui-org/react";
import { ButtonColorTypes } from "@/components/ui/ButtonColorTypes";
import { InputGames } from "@/components/ui/InputGames";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id: any = params.slug;
  console.log(id);


  // fetch data

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: specialNames[id].name,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

async function getDatas(params:string){
  const pokedexData = async (id: string) => {
    try {
      const res = await setDataPokedex(specialNames[id]);
      return res
    } catch (error) {
      throw new Error("Erro ao buscar a pokedex");
    }
  };

  const dataPokes = await pokedexData(params);
  return dataPokes
}

export default async function PokedexDatPage({
  params,
}: {
  params: { slug: string };
}) {

  const data = await getDatas(params.slug)


  return (
    <div>
      <InputGames gameName={specialNames[params.slug].name}/>

      <div className="flex gap-5 flex-wrap items-center justify-center my-10">
        <ButtonColorTypes/>
      </div>
      <Suspense fallback={<p>Buscando Pokemons</p>}>
        <DataPokemonsPokedex dataPokemonsPokedex={data}/>
      </Suspense>
      {/* <InputGames /> */}
    </div>
  );
}
