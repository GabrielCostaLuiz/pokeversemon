"use client";

import { geracoes, specialNames } from "@/utils/constantsPoke";
import { ResultsNameUrlWithGen } from "@/types/types";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@nextui-org/react";
import { usePokemonStore } from "@/store/pokemonStore";
import { getGames } from "@/actions/pokemonActions";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import BackPage from "./BackPage";

interface Props {
  gameName: string;
}

async function fetchDataGames() {
  const response = await getGames();
  return response;
}

export function InputGames({ gameName }: Props) {
  const [games, setGames] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const route = useRouter();

  function handleSearchAutoComplete(e: any) {
    if (e === null || e === "") {
      return;
    }

    if (e) {
      let objetoEncontrado = null;
      for (const nome in specialNames) {
        if (specialNames.hasOwnProperty(nome)) {
          const objeto = specialNames[nome];
          if (objeto.name === e.slice(0, -1)) {
            objetoEncontrado = objeto;
            break;
          }
        }
      }

      if (objetoEncontrado !== null) {
        route.push(`/pokedex/${objetoEncontrado.nameOriginal}`);
      }
    }
  }

  useEffect(() => {
    const fetcheData = async () => {
      const res = await fetchDataGames();
      setGames(res);
      setIsLoading(false);
    };

    fetcheData();
  }, []);

  return (
    <div className="flex flex-col text-center  gap-5  justify-center items-center w-full ">
      <div className="flex justify-start  w-full">
        <BackPage />
        <h2 className="text-center -ml-10 text-3xl capitalize font-bold w-full">
          {gameName}
        </h2>
      </div>

      {!isLoading && (
        <Autocomplete
          label="Escolha uma Franquia Pokémon"
          // startContent={<PetIcon className="text-xl" />}
          className="max-w-xs"
          variant="underlined"
          labelPlacement="outside"
          onSelectionChange={(e) => handleSearchAutoComplete(e)}
        >
          {geracoes.map((geracao) => (
            <AutocompleteSection key={geracao.id} title={geracao.name}>
              {games!
                .filter((game: any) => game.geracao === geracao.name)
                .map((game: any, index: any) => {
                  return (
                    <AutocompleteItem key={game.name + index} value={game.name}>
                      {game.name}
                    </AutocompleteItem>
                  );
                })}
            </AutocompleteSection>
          ))}
        </Autocomplete>
      )}
    </div>
  );
}
