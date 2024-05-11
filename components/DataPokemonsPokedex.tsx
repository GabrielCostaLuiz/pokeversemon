"use client";
import { usePokemonStore } from "@/store/pokemonStore";
import Link from "next/link";
import { ImgPokemon } from "./ui/ImgPokemon";
import { formattedId } from "@/utils/utils";
import { colorsType } from "@/utils/constantsPoke";
import { useEffect, useState } from "react";
import { Pokemon } from "@/types/types";

import { fetchDataPokedex } from "@/lib/endpoints";

interface Props {
  dataPokemonsPokedex: Pokemon[];
  slug: string;
}

export function DataPokemonsPokedex({ dataPokemonsPokedex, slug }: Props) {
  const { regionPokedex } = usePokemonStore();
  const [filteredPokemons, setFilteredPokemons] = useState(dataPokemonsPokedex);
  const typesFiltred = usePokemonStore((state) => state.typesFiltred);

  const [searchTerm, setSearchTerm] = useState("");
  const [dataSearchPokemon, setDataSearchPokemon] = useState<Pokemon[]>([]);

  const handleSearchChange = (event: any) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    if (searchValue === "") {
      return setDataSearchPokemon([]);
    }

    // Filtrar os pokémons com base no termo de pesquisa
    const filtered = filteredPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue)
    );

    setDataSearchPokemon(filtered);
  };

  useEffect(() => {
    if (typesFiltred.length === 0) {
      // Se nenhum tipo estiver selecionado, trazer todos os Pokémon
      // if(searchTerm ){
      //   console.log("oi")
      //   return
      // }
      setDataSearchPokemon([]);
    } else {
      // Filtrar os Pokémon com base nos tipos selecionados

      const filtered = filteredPokemons.filter((pokemon) =>
        pokemon.types.some((type) => typesFiltred.includes(type.type.name))
      );
      setDataSearchPokemon(filtered);
    }
  }, [filteredPokemons, typesFiltred]);

  useEffect(() => {
    // Quando regionPokedex mudar, buscar novos Pokémon na API
    const fetchNewPokemons = async () => {
      try {
        const newPokemons = await fetchDataPokedex(undefined, regionPokedex);
        let filteredPokemons = newPokemons.filter(
          (pokemon: Pokemon) => pokemon !== null
        );

        if (searchTerm) {
          const filtered = filteredPokemons.filter((pokemon: any) =>
            pokemon.name.toLowerCase().includes(searchTerm)
          );

          if (filtered.length > 0) {
            setDataSearchPokemon(filtered);
          }
          return setFilteredPokemons(filteredPokemons);
        }
        setFilteredPokemons(filteredPokemons);
      } catch (error) {
        console.error("Erro ao buscar novos Pokémon:", error);
      }
    };

    // Verificar se regionPokedex é diferente de null ou undefined para evitar loop infinito

    if (
      regionPokedex !== null &&
      regionPokedex !== undefined &&
      regionPokedex.length !== 0
    ) {
      fetchNewPokemons();
    }
  }, [regionPokedex]);

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar Pokémon"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md px-2 py-1 mx-auto mb-4  text-center"
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-16">
        {dataSearchPokemon?.length > 0 ? (
          <>
            {dataSearchPokemon.map((pokemon, index) => {
              return (
                <Link
                  key={index}
                  href={`/pokemon/${pokemon.name}`}
                  className="hover:scale-110 transition-all"
                >
                  <div className="m-auto flex flex-col items-center justify-center">
                    <ImgPokemon sprites={pokemon.sprites} />

                    <p>{formattedId(pokemon.id)}</p> 
                    <p className="text-center capitalize font-bold">{pokemon.name}</p>
                    <p className="flex gap-1">
                      {pokemon.types.map((type, index) => (
                        <span
                          key={index}
                          className="px-1 capitalize  rounded-lg flex items-center justify-center"
                          style={
                            type.type.name !== "legendary"
                              ? {
                                  backgroundColor: colorsType.find(
                                    (colorType) =>
                                      colorType.name === type.type.name
                                  )?.color,
                                }
                              : {
                                  backgroundImage:
                                    "linear-gradient(to right, #001F3F, #6F1E51, #FFD700)",
                                }
                          }
                        >
                          {type.type.name}
                        </span>
                      ))}
                    </p>
                  </div>
                </Link>
              );
            })}
          </>
        ) : (
          <>
            {filteredPokemons.map((pokemon, index) => {
              return (
                <Link
                  key={index}
                  href={`/pokemon/${pokemon.name}`}
                  className="hover:scale-110 transition-all"
                >
                  <div className="m-auto flex flex-col items-center justify-center">
                    <ImgPokemon sprites={pokemon.sprites} />

                    <p>{formattedId(pokemon.id)}</p>
                    <p className="text-center capitalize font-bold">{pokemon.name}</p>
                    <p className="flex gap-1">
                      {pokemon.types.map((type, index) => (
                        <span
                          key={index}
                          className="px-1 capitalize rounded-lg flex items-center justify-center"
                          style={{
                            backgroundColor: colorsType.find(
                              (colorType) => colorType.name === type.type.name
                            )?.color,
                          }}
                        >
                          {type.type.name}
                        </span>
                      ))}
                    </p>
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
