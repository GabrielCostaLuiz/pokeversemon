'use client'

import { usePokemonStore } from "@/store/pokemonStore";
import { colorsType } from "@/utils/constantsPoke"
import { Button } from "@nextui-org/react"
import { useState } from "react";

export function ButtonColorTypes(){
  const typesFiltred = usePokemonStore((state) => state.typesFiltred);

  function handleType(e: string) {
     let types = usePokemonStore.getState().typesFiltred;
     if(types.includes(e)){
       usePokemonStore.getState().removeTypeFiltred(e);
     

       return;
     }
 
     usePokemonStore.getState().addTypeFiltred(e);
   }

 return(
     <>
     {colorsType.map((type) => (
          <Button
            key={type.name}
            className={`capitalize hover:scale-105 ${
              typesFiltred.includes(type.name) ? "opacity-100" : "opacity-20"
             }`}
            style={{ backgroundColor: type.color }}
            variant="shadow"
            onClick={() => handleType(type.name)}
          >
            {type.name}
          </Button>
        ))}
        </>
 )
}