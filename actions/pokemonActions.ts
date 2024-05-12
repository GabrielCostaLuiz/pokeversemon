"use server";

import {
  fetchDataPokedex,
  fetchGamesPokemon,
  fetchPokemonEspecific,
} from "@/lib/endpoints";
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
  const dataPokedex = await fetchDataPokedex(url);

  const data = await dataPokedex.filter((pokemon: any) => pokemon !== null);
  const filteredPokemons = await data.sort((a: any, b: any) => a.id - b.id);
  // usePokemonStore.getState().addPokemonPokedex(filteredPokemons);
  return filteredPokemons;
}

export async function getDataPokemon(pokemon: string) {
  const dataPokemon = await fetchPokemonEspecific(pokemon);

  const prevId = dataPokemon.id - 1;
  const nextId = dataPokemon.id + 1;

  let prevPokemon = await fetchPokemonEspecific(prevId.toString());
  let nextPokemon = await fetchPokemonEspecific(nextId.toString());

  if (!prevPokemon) {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=3000");
    const data = await res.json();
    prevPokemon = await fetchPokemonEspecific(
      data.results[data.count - 1].name
    );
  }

  if (!nextPokemon) {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=3000");
    const data = await res.json();
    nextPokemon = await fetchPokemonEspecific(data.results[0].name);
  }

  const fetchEspecie = await fetch(dataPokemon.species.url).then((res) =>
    res.json()
  );

  dataPokemon.species = fetchEspecie;

  const prevNextPokemon = [prevPokemon, nextPokemon];

  usePokemonStore.getState().setPokemonDetails(dataPokemon);
  usePokemonStore.getState().setNextPrevPokemonDetails(prevNextPokemon);

  return;
}

export async function getDataPokemonDetails(pokemon: string) {}

export async function getNamePoke() {
  const aa = usePokemonStore.getState().allNamesPokemons;
  const { allNamesPokemons } = usePokemonStore.getState();

  revalidatePath("/");
}
