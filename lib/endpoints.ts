import { revalidate } from "./../app/pokedex/layout";
import { PokedexData, Pokemon } from "@/types/types";
import next from "next";

export const fetchPokemonData = async (
  itens: [{ name: string; url: string }]
) => {
  const updatedPokemons = await Promise.all(
    itens.map(async (item) => {
      try {
        const res = await fetch(item.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Erro ao buscar dados do Pokémon:", error);
        return null;
      }
    })
  );
  return updatedPokemons;
};

export const fetchPokemonEspecific = async (url: string) => {

  try {

    // Fetch dos dados básicos do Pokémon
    const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);

    const pokemonData = await pokemonRes.json();


    // Fetch dos dados da espécie do Pokémon
    const speciesRes = await fetch(pokemonData.species.url);
    const speciesData = await speciesRes.json();

    // Verifica se o Pokémon é lendário ou mítico e adiciona tipos se necessário
    if (speciesData.is_legendary || speciesData.is_mythical) {
      // Cria uma cópia dos tipos existentes ou um array vazio se não houver tipos
      const types = pokemonData.types ? [...pokemonData.types] : [];

      // Adiciona os tipos lendários/míticos se ainda não estiverem presentes
      if (
        speciesData.is_legendary &&
        !types.some((type) => type.slot === 10000)
      ) {
        types.push({ slot: 10000, type: { name: "legendary" } });
      }
      if (
        speciesData.is_mythical &&
        !types.some((type) => type.slot === 10001)
      ) {
        types.push({ slot: 10001, type: { name: "mythical" } });
      }

      // Atualiza os tipos do Pokémon com os novos tipos
      pokemonData.types = types;
    }

    return pokemonData;
  } catch (error) {
    console.error("Erro ao buscar dados do Pokémon:", error);
    return null;
  }
};

export const fetchGamesPokemon = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/version-group?limit=50");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar dados dos Jogos:", error);
    return null;
  }
};

export const fetchDataPokedex = async (url?: PokedexData, urlDirect?: string) => {
  try {
    const pokemonsPokedex: any = [];

    const res = await fetch(urlDirect ? urlDirect : url!.urlPokedexes[0].url);
    const data = await res.json();

    // Utilizando Promise.all para esperar todas as requisições assíncronas serem concluídas
    await Promise.all(
      data.pokemon_entries.map(async (element: any) => {
        const res = await fetchPokemonEspecific(element.pokemon_species.name);
     
        pokemonsPokedex.push(res);
      })
    );
 
    return pokemonsPokedex; // Retornar os dados após todas as requisições serem concluídas
  } catch (error) {
    console.error("Erro ao buscar dados da pokedex:", error);
    return null;
  }
};
