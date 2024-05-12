"use client";

import { usePokemonStore } from "@/store/pokemonStore";
import { Button } from "@nextui-org/react";
import { useState } from "react";

interface Props {
  region: { name: string; url: string };
  dataComplete: any;
  index: number;
}

export function ButtonRegions({ region, dataComplete, index }: Props) {
  const { regionPokedex } = usePokemonStore();

  const [regionUrl, setRegionUrl] = useState(
    dataComplete.urlPokedexes[index].url
  );


  function handleRegion(e: any) {
    usePokemonStore.getState().addRegionPokedex(e);
    setRegionUrl(e);

  }

  return (
    <Button
      disabled={
        regionPokedex !== ""
          ? regionUrl === regionPokedex
          : dataComplete.urlPokedexes[0].url === regionUrl
      }
      onClick={() => handleRegion(region.url)}
      className={`capitalize hover:scale-105 ${
        regionPokedex !== ""
          ? regionUrl === regionPokedex
            ? "opacity-100"
            : "opacity-20"
          : dataComplete.urlPokedexes[0].url === regionUrl
          ? "opacity-100"
          : "opacity-20"
      } `}
      style={{}}
      variant="faded"
    >
      {region.name}
    </Button>
  );
}
