import { ButtonGames } from "@/components/buttonGames";
import { LoadingPokeball } from "@/components/divLoadingPokeball";
import { PokedexDataPokemons } from "@/components/pokedexDataPokemons";
import { TablePokedex } from "@/components/table";
import { fetchGamesPokemon } from "@/lib/endpoints";
import { Suspense } from "react";


export default async function Pokedex({searchParams,
}: {
  searchParams?: {
    game?: string;

  };
}){

  const query = searchParams?.game || '';
 
 
    return(
        <div>
            <div className=" w-[97%] mx-auto bg-section my-5 rounded-xl p-5 text-white">
                <div className="mb-10">
                <h1 className="text-center text-5xl font-bold mb-5">Pokédex Pokémon</h1>

                <p className=" text-white px-9 py-2 rounded-full text-lg text-center bg-[#68798C]">Dentro da seção da Pokédex, você mergulha em um tesouro de informações sobre todas as criaturas Pokémon encontradas ao longo da série de jogos. Nas páginas principais da lista, você pode conferir as diversas estatísticas de cada Pokémon. Ao clicar no nome de um Pokémon, você se depara com uma página detalhada, repleta de dados da Pokédex, descrições retiradas de jogos anteriores, sprites, evoluções, movimentos e muito mais!</p>

                
                </div>
            
            
           <ButtonGames query={query}/>
       
            <div>
                 <Suspense key={query} fallback={<LoadingPokeball/>}>
            <PokedexDataPokemons query={query}/>
                </Suspense> 
                 
            </div>
            {/* <LoadingPokeball/> */}
            
            {/* <TablePokedex /> */}
            </div>
        </div>
    )
}