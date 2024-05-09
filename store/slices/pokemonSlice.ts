import { Pokemon, ResultsNameUrlWithGen } from '@/types/types';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define o estado inicial
const initialState: PokemonStore = {
  gamesPokemon: [],
  pokemonsPokedex: [],
  pokemonsFiltred: [],
  typesFiltred: [],
  regionPokedex: "",
};

// Cria um slice com o nome 'pokemon'
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    // Adiciona jogos de Pokemon
    addGamePokemon(state, action) {
      state.gamesPokemon = action.payload;
    },
    // Adiciona Pokemon à Pokedex
    addPokemonPokedex(state, action) {
      state.pokemonsPokedex = action.payload;
    },
    addRegionPokedex(state, action){
      state.regionPokedex = action.payload;
    },
    // Remove todos os Pokemons da Pokedex
    removePokemonPokedex(state) {
      state.pokemonsPokedex = [];
    },
    // Adiciona Pokemons filtrados
    addPokemonFiltred(state, action) {
      state.pokemonsFiltred = action.payload;
    },
    // Remove todos os Pokemons filtrados
    removePokemonFiltred(state) {
      state.pokemonsFiltred = [];
    },
    // Adiciona um tipo filtrado
    addTypeFiltred(state, action) {
      state.typesFiltred.push(action.payload);
    },
    // Remove um tipo filtrado
    removeTypeFiltred(state, action) {
      state.typesFiltred = state.typesFiltred.filter(type => type !== action.payload);
    }
  }
});

// Extrai as actions do slice
export const {
  addGamePokemon,
  addPokemonPokedex,
  removePokemonPokedex,
  addPokemonFiltred,
  removePokemonFiltred,
  addTypeFiltred,
  removeTypeFiltred,
  addRegionPokedex
} = pokemonSlice.actions;

// Cria o reducer e exporta
export const pokemonReducer = pokemonSlice.reducer;

// Cria a loja Redux com o reducer
export const store = configureStore({
  reducer: pokemonReducer
});

// Define a tipagem do estado
type PokemonStore = {
  gamesPokemon: ResultsNameUrlWithGen[];
  pokemonsPokedex: Pokemon[];
  pokemonsFiltred: Pokemon[];
  typesFiltred: string[];
  regionPokedex: "";
};
