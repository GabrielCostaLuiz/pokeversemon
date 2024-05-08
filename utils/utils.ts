import { ResultsNameUrlWithGen } from "@/types/types";
import { specialNames } from "./constantsPoke";

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
