import { MdCatchingPokemon } from "react-icons/md";

export function Loader({ children }: any) {
  return (
    <div className="flex flex-col justify-center items-center">
      <MdCatchingPokemon
        className="text-5xl text-warning animate-spinner-ease-spin "
        size={50}
      />
      <p className="text-warning text-xl animate-pulse">{children}</p>
    </div>
  );
}
