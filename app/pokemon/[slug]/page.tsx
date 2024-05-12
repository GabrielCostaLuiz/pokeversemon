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
  const id = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  // fetch data
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.slug}`
  ).then((res) => res.json());

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: id,
    openGraph: {
      images: [img],
    },
    description: `Explore os detalhes do ${pokemon.name}, desde suas informações básicas até suas habilidades únicas e estatísticas de batalha. Descubra seus tipos, fraquezas e evoluções. Uma análise detalhada para treinadores Pokémon dedicados!`,
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
