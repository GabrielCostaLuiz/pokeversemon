import { geracoes } from "@/utils/constantsPoke";
import { ResultsNameUrlWithGen } from "@/utils/types";
import { Autocomplete, AutocompleteItem, AutocompleteSection } from "@nextui-org/react";

interface Props {
    games: ResultsNameUrlWithGen[];
    query?: string;
    handleSearch: (query: string) => void;
}


export function InputGames({ games, query, handleSearch }: Props) {
    function handleSearchAutoComplete(e: any) {
        if(e === null || e === ""){
            return
        }

        handleSearch(e.toString().slice(0, -1))
    }

    return (
        <div className="flex flex-col text-center text-3xl gap-5">
        <h2 className="text-center">{query}</h2>
        <Autocomplete
            label="Escolha uma Franquia Pokémon"
            // startContent={<PetIcon className="text-xl" />}
            className="max-w-xs"
            variant="underlined"
            labelPlacement='outside'
            onSelectionChange={(e) => handleSearchAutoComplete(e)}
        >
            {geracoes.map((geracao) => (
                <AutocompleteSection key={geracao.id} title={geracao.name}>
                    {games.filter(game => game.geracao === geracao.name).map((game, index) => {
                      return(
                          <AutocompleteItem key={game.name + index} value={game.name} >{game.name}</AutocompleteItem>
                      )
                        
                    })}
                </AutocompleteSection>
            ))}
        </Autocomplete>
        </div>
    );
}
