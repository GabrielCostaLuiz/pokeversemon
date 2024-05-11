import { getGames } from "@/actions/pokemonActions";
import { ButtonGames } from "@/components/ui/ButtonGames";
import { usePokemonStore } from "@/store/pokemonStore";
import { Button } from "@nextui-org/react";
import { MdCatchingPokemon } from "react-icons/md";

export default async function Pokedex() {
  await getGames();
  const games = usePokemonStore.getState().gamesPokemon;
  
  return (
    <div>
      <h2 className="text-center mb-10 text-xl font-bold ">
        Escolha uma das franquias abaixo para explorar sua Pokédex:
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-5">
        <Button
          className="w-fit capitalize m-auto hover:bg-[#A4B1BF] hover:scale-105 transition-all"
          variant="faded"
        >
          Todas Gerações
        </Button>
        
        
        <ButtonGames games={games} />
      </div>
    </div>
  );
}
