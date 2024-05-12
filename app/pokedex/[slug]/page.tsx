import type { Metadata, ResolvingMetadata } from "next";
import {  specialNames } from "@/utils/constantsPoke";
import { DataPokemonsPokedex } from "@/components/DataPokemonsPokedex";
import { Suspense } from "react";
import { ButtonColorTypes } from "@/components/ui/ButtonColorTypes";
import { InputGames } from "@/components/ui/InputGames";
import { fetchDataPokedex } from "@/lib/endpoints";
import { ButtonRegions } from "@/components/ui/ButtonRegions";

export const revalidate = 3600;

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = Object.keys(specialNames);

  return posts.map((slug) => ({
    slug,
  }));
}

export async function setDataPokedex(url: any) {
  const dataPokedex = await fetchDataPokedex(url);

  const data = await dataPokedex.filter((pokemon: any) => pokemon !== null);
  const filteredPokemons = await data.sort((a: any, b: any) => a.id - b.id);
  // usePokemonStore.getState().addPokemonPokedex(filteredPokemons);
  return filteredPokemons;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id: any = params.slug;

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

async function getDatas(params: string) {
  const pokedexData = async (id: string) => {
    try {
      const res = await setDataPokedex(specialNames[id]);

      return res;
    } catch (error) {
      throw new Error("Erro ao buscar a pokedex");
    }
  };

  const dataPokes = await pokedexData(params);
  // usePokemonStore.getState().addPokemonFiltred(dataPokes)
  return dataPokes;
}

export default async function PokedexDatPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getDatas(params.slug);

  return (
    <div>
      <InputGames gameName={specialNames[params.slug].name} />
      <div className="flex gap-5 justify-center items-center mt-10">
        {specialNames[params.slug].urlPokedexes.map((region, index) => {
          return (
            <ButtonRegions
              key={region.name}
              region={region}
              dataComplete={specialNames[params.slug]}
              index={index}
            />
          );
        })}
      </div>

      <div className="flex gap-5 flex-wrap items-center justify-center my-10">
        <ButtonColorTypes />
      </div>

      

      <Suspense fallback={<p>Buscando Pokemons</p>}>
        <DataPokemonsPokedex dataPokemonsPokedex={data} slug={params.slug} />
      </Suspense>
      {/* <InputGames /> */}
    </div>
  );
}
