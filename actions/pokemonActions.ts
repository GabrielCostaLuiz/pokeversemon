"use server";

import { fetchDataPokedex, fetchGamesPokemon } from "@/lib/endpoints";
import { usePokemonStore } from "@/store/pokemonStore";
import { PokedexData } from "@/types/types";
import { formatSpecialNames } from "@/utils/utils";
import { revalidatePath } from "next/cache";

export async function getGames() {
  const games = await fetchGamesPokemon();
  formatSpecialNames(games);
  usePokemonStore.getState().addGamePokemon(games);
  return games;
  // revalidatePath("/pokedex");
}

export async function setDataPokedex(url: any) {
  const dataPokedex = await fetchDataPokedex(url)

  const data = await dataPokedex.filter((pokemon: any) => pokemon !== null);
 
  const filteredPokemons = await data.sort((a: any, b: any) => a.id - b.id);
  // usePokemonStore.getState().addPokemonPokedex(filteredPokemons);
  return filteredPokemons
}


