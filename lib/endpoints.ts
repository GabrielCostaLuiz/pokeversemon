export const fetchPokemonData = async (itens: [{name: string, url:string}]) => {
    const updatedPokemons = await Promise.all(
      itens.map(async (item) => {
        try {
          const res = await fetch(item.url);
          const data = await res.json();
          return data;
        } catch (error) {
          console.error("Erro ao buscar dados do Pokémon:", error);
          return null;
        }
      })
    );
   return updatedPokemons
  };

  export const fetchPokemonEspecific = async (url: string) =>{
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`)
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados do Pokémon:", error);
          return null;
    }

  }


  export const fetchGamesPokemon = async () =>{
    try {
      const res = await fetch('https://pokeapi.co/api/v2/version-group?limit=50')
      const data = await res.json()
      return data.results
    } catch (error) {
      console.error("Erro ao buscar dados dos Jogos:", error);
          return null;
    }
  }
