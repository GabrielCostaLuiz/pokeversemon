"use client";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { fetchDataPokedex, fetchPokemonsByRegion } from "@/lib/endpoints";
import { formattedId } from "@/utils/utils";
import { colorsType, specialNames } from "@/utils/constants";
import { usePokemonStore } from "@/store/pokemonStore";
import { ImgPokemon } from "./ui/ImgPokemon";
import { Pokemon } from "@/types/types";
import { Spinner } from "@nextui-org/react";
import { Loader } from "./ui/Loader";

interface Props {
  slug: string;
}

async function fetchData(url: any) {
  try {
    const data = await fetchDataPokedex(specialNames[url] as any);

    const filteredData = data
      .filter((pokemon: any) => pokemon !== null)
      .sort((a: any, b: any) => a.id - b.id);
    return filteredData;
  } catch (error) {
    throw new Error("Erro ao buscar dados");
  }
}

export function DataPokemonsPokedex({ slug }: Props) {
  const { regionPokedex, typesFiltred } = usePokemonStore();
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataSearchPokemon, setDataSearchPokemon] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoaging] = useState(true);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    setDataSearchPokemon(
      filteredPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue)
      )
    );
  };

  useEffect(() => {
    if (typesFiltred.length === 0) {
      setDataSearchPokemon([]);
    } else {
      setDataSearchPokemon(
        filteredPokemons.filter((pokemon) =>
          pokemon.types.some((type) => typesFiltred.includes(type.type.name))
        )
      );
    }
  }, [filteredPokemons, typesFiltred]);

  useEffect(() => {
    if (regionPokedex) {
      fetchPokemonsByRegion(regionPokedex).then((newPokemons) =>
        setFilteredPokemons(newPokemons)
      );
    }
  }, [regionPokedex]);

  useEffect(() => {
    setIsLoaging(true);
    fetchData(slug).then((data) => setFilteredPokemons(data));

    setTimeout(() => {
      setIsLoaging(false);
    }, 5000);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <Loader>Caçando Pokémons</Loader>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Pesquisar Pokémon"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-md px-2 py-1 mx-auto mb-4  text-center"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-16">
            {(searchTerm || typesFiltred.length > 0
              ? dataSearchPokemon
              : filteredPokemons
            ).map((pokemon, index) => (
              <Link
                key={index}
                href={`/pokemon/${pokemon.name}`}
                className="hover:scale-110 transition-all"
              >
                <div className="m-auto flex flex-col items-center justify-center">
                  <ImgPokemon sprites={pokemon.sprites} />
                  <p>{formattedId(pokemon.id)}</p>
                  <p className="text-center capitalize font-bold">
                    {pokemon.name}
                  </p>
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
            ))}
          </div>
        </div>
      )}
    </>
  );
}
