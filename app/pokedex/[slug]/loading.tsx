import { Spinner } from "@nextui-org/react";
import { MdCatchingPokemon } from "react-icons/md";

export default function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <MdCatchingPokemon
        className="text-5xl text-warning animate-spinner-ease-spin "
        size={50}
      />
      <p className="text-warning text-xl animate-pulse">Caçando Pokémon</p>
    </div>
  );
}
