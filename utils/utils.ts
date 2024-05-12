import { ResultsNameUrlWithGen } from "@/types/types";
import { specialNames } from "./constants";
import { usePokemonStore } from "@/store/pokemonStore";

// Função para formatar os nomes dos jogos específicos
export const formatSpecialNames = (games: ResultsNameUrlWithGen[]) => {
  games.forEach((game) => {
    if (game.name in specialNames) {
      const { name, geracao } =
        specialNames[game.name as keyof typeof specialNames];
      game.nameOriginal = game.name;
      game.name = name;
      game.geracao = geracao;
    }
  });
};

export const formattedId = (e: number) => (e < 100 ? `#0${e}` : `#${e}`);

// Função para gerar os parâmetros estáticos com base nos identificadores das franquias
export async function generateStaticParams() {
  try {
    const params = Object.keys(specialNames).map((slug) => ({
      slug,
    }));
    return params;
  } catch (error) {
    console.error("Erro ao gerar os parâmetros estáticos:", error);
    throw new Error("Erro ao gerar os parâmetros estáticos");
  }
}

export const pokesNames = usePokemonStore.getState().allNamesPokemons;
