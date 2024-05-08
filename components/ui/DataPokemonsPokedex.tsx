'use client'
import { usePokemonStore } from "@/store/pokemonStore";
import Link from "next/link";
import { ImgPokemon } from "./ImgPokemon";
import { formattedId } from "@/utils/utils";
import { colorsType } from "@/utils/constantsPoke";
import { useEffect, useState } from "react";
import { Pokemon } from "@/types/types";

interface Props{
dataPokemonsPokedex: Pokemon[]
}

export function DataPokemonsPokedex({dataPokemonsPokedex}: Props) {

     const [filteredPokemons, setFilteredPokemons] = useState(dataPokemonsPokedex);
     const typesFiltred = usePokemonStore((state) => state.typesFiltred);

     useEffect(() => {
          if (typesFiltred.length === 0) {
               // Se nenhum tipo estiver selecionado, trazer todos os Pokémon
               setFilteredPokemons(dataPokemonsPokedex);
             } else {
               // Filtrar os Pokémon com base nos tipos selecionados
               const filtered = dataPokemonsPokedex.filter((pokemon) =>
                 pokemon.types.some((type) => typesFiltred.includes(type.type.name))
               );
               setFilteredPokemons(filtered);
             }
        }, [dataPokemonsPokedex, typesFiltred]);
     
  return (<div className="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-10">
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
          <p className="text-center capitalize">{pokemon.name}</p>
          <p className="flex gap-1">
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                className="px-1 capitalize rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: colorsType.find(
                    (colorType) =>
                      colorType.name === type.type.name
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
</div>)
}
