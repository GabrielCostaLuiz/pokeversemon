'use client'
import { fetchGamesPokemon } from "@/lib/endpoints"
import { ResultsNameUrlWithGen } from "@/utils/types";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { InputGames } from "./autoCompleteGames";
import { specialNames } from "@/utils/constantsPoke";

const noGames = ['yellow','crystal','xd','emerald','the-indigo-disk','the-teal-mask','the-crown-tundra','the-isle-of-armor','colosseum']

interface PropsQuery {
    query?: string;
}

export function  ButtonGames({query}: PropsQuery){
    const [games, setGames] = useState<ResultsNameUrlWithGen[]>([]);
    const [isLoading, setIsLoading] = useState(true)
    const [game, setGame] = useState<string>('')
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
 
    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('game', term);
            setGame(term)
          } else {
            params.delete('game');
            setGame('')
          }
          replace(`${pathname}?${params.toString()}`);
      }

    useEffect(() => {
        setIsLoading(true);
        const fetchGames = async () => {
            const games = await fetchGamesPokemon();
            console.log(games);

            // Formatando os nomes dos jogos específicos
            formatSpecialNames(games);

            setGames(games);
            setIsLoading(false);
        };

        fetchGames();
    }, []);

    // Função para formatar os nomes dos jogos específicos
    const formatSpecialNames = (games: ResultsNameUrlWithGen[]) => {
   

        games.forEach(game => {
            if (game.name in specialNames) {
                const { name, geracao } = specialNames[game.name as keyof typeof specialNames];
                game.name = name;
                game.geracao = geracao;
            } 
        });
    };
    
    return(
        <div>
            {game !== "" ? <div className="flex justify-center items-center"> <InputGames handleSearch={handleSearch} query={query} games={games.filter(game => !noGames.includes(game.name))}/></div>  : <div>
            <h2 className="text-center mb-10 text-xl font-bold ">Escolha uma das franquias abaixo para explorar sua Pokédex:</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-5">
            <Button className="w-fit capitalize m-auto hover:bg-[#A4B1BF] hover:scale-105 transition-all" onClick={() => handleSearch("all")} variant="faded">
                        Todas Gerações
                      </Button> 
            {!isLoading && games!.map(game  => {
                if (noGames.includes(game.name)) {
                    return null;
                } else {
                    return(
                        <Button key={game.name} className="w-fit capitalize m-auto hover:bg-[#A4B1BF] hover:scale-105 transition-all" onClick={() => handleSearch(game.name)} variant="faded">
                        {game.name}
                      </Button> 
                 
                    )
                }
                
            })}
            </div>
            </div>}
          
            
           
        </div>
    )
}