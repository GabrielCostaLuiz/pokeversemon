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
};

export const usePokemonStore = create<PokemonStore>()((set) => ({
  gamesPokemon: [],
  pokemonsPokedex: [],
  addGamePokemon: (game) => set({ gamesPokemon: game }),
  addPokemonPokedex: (pokemon) => set({ pokemonsPokedex: pokemon }),
  removePokemonPokedex: () => set({ pokemonsPokedex: [] }),
  pokemonsFiltred: [],
  addPokemonFiltred: (pokemon) => set({ pokemonsFiltred: pokemon }),
  removePokemonFiltred: () => set({ pokemonsFiltred: [] }),
  typesFiltred: [],
  addTypeFiltred: (type) =>
    set((state) => ({ typesFiltred: [...state.typesFiltred, type] })),
    removeTypeFiltred: (type) =>
    set((state) => ({ typesFiltred: state.typesFiltred.filter((t) => t !== type) })),
}));
