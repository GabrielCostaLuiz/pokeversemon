import { getDataPokemon } from "@/actions/pokemonActions";
import { DataPokemonDetails } from "@/components/DataPokemonDetails";
import BackPage from "@/components/ui/BackPage";
import { usePokemonStore } from "@/store/pokemonStore";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.slug.toUpperCase();

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: id,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function DetailsPokemon({ params }: Props) {
  await getDataPokemon(params.slug);

  const pokemonDetails = usePokemonStore.getState().pokemonDetails;
  const nextPrevPokemon = usePokemonStore.getState().nextPrevPokemonDetails;


  return (
    <div className="mx-auto bg-section text-white  section">
      <BackPage />
      <DataPokemonDetails
        pokemonDetails={pokemonDetails}
        nextPrevPokemon={nextPrevPokemon}
      />
    </div>
  );
}
