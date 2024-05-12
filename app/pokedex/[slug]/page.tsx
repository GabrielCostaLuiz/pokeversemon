
import type { Metadata, ResolvingMetadata } from "next";
import {  specialNames } from "@/utils/constantsPoke";
import { setDataPokedex } from "@/actions/pokemonActions";
import { DataPokemonsPokedex } from "@/components/DataPokemonsPokedex";
import { Suspense } from "react";
import { ButtonColorTypes } from "@/components/ui/ButtonColorTypes";
import { InputGames } from "@/components/ui/InputGames";
import { ButtonRegions } from "@/components/ui/ButtonRegions";

type Props = {
  params: { slug: string };
};


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



export default async function PokedexDatPage({
  params,
}: {
  params: { slug: string };
}) {
  // const data = await getDatas(params.slug);

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
        <DataPokemonsPokedex  slug={params.slug} />
      </Suspense>
      {/* <InputGames /> */}
    </div>
  );
}
