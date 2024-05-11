import { Pokemon, ResultsNameUrlWithGen } from "@/types/types";
import { create } from "zustand";

type PokemonStore = {
  // pokemons:Pokemon[],
  gamesPokemon: ResultsNameUrlWithGen[];
  addGamePokemon: (game: ResultsNameUrlWithGen[]) => void;
  pokemonsPokedex: Pokemon[];
  addPokemonPokedex: (pokemon: Pokemon[]) => void;
  removePokemonPokedex: () => void;
  pokemonsFiltred: Pokemon[];
  addPokemonFiltred: (pokemon: Pokemon[]) => void;
  removePokemonFiltred: () => void;
  typesFiltred: string[];
  addTypeFiltred: (type: string) => void;
  removeTypeFiltred: (type: string) => void;
  regionPokedex: string;
  removeAllTypesFiltered: () => void;
  addRegionPokedex: (region: string) => void;
  pokemonDetails: Pokemon | null;
  setPokemonDetails: (pokemonD: Pokemon) => void;
  nextPrevPokemonDetails: Pokemon[];
  setNextPrevPokemonDetails: (pokemon: Pokemon[]) => void;
  allNamesPokemons: any[];
  addPokemons: (pokemons: any[]) => void;
};

export const usePokemonStore = create<PokemonStore>()((set) => ({
  gamesPokemon: [],
  pokemonsPokedex: [],
  addGamePokemon: (game) => set({ gamesPokemon: game }),
  addPokemonPokedex: (pokemon) => set(() => ({ pokemonsPokedex: pokemon })),
  removePokemonPokedex: () => set({ pokemonsPokedex: [] }),
  pokemonsFiltred: [],
  addPokemonFiltred: (pokemon) => set({ pokemonsFiltred: pokemon }),
  removePokemonFiltred: () => set({ pokemonsFiltred: [] }),
  typesFiltred: [],
  addTypeFiltred: (type) =>
    set((state) => ({ typesFiltred: [...state.typesFiltred, type] })),
  removeTypeFiltred: (type) =>
    set((state) => ({ typesFiltred: state.typesFiltred.filter((t) => t !== type) })),
  removeAllTypesFiltered: () =>
    set((state) => ({ typesFiltred: [] })),
    regionPokedex: "",
    addRegionPokedex: (region) => set(() => ({
        regionPokedex: region
    })),
    pokemonDetails: null,
    setPokemonDetails: (pokemonD) => set(() => ({ pokemonDetails: pokemonD })),
    nextPrevPokemonDetails: [],
    setNextPrevPokemonDetails: (pokemon) => set({ nextPrevPokemonDetails: pokemon }),
    allNamesPokemons: [],
    addPokemons: (pokemons) => set({ allNamesPokemons: pokemons })
}));
