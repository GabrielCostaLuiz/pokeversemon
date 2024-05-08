import { Button } from "@nextui-org/react";
import Link from "next/link";
import { noGames, specialNames } from "@/utils/constantsPoke";
import { ResultsNameUrlWithGen } from "@/types/types";

interface Props {
  games: ResultsNameUrlWithGen[];
}

export async function ButtonGames({ games }: Props) {
//   for (const key in specialNames) {
//     if (specialNames.hasOwnProperty(key)) {
//         const generation = specialNames[key];
//         console.log(generation.nameOriginal)
//     }
// }
  return (
    <>
          {games.map((game) => {
            if (noGames.includes(game.name)) {
              return null;
            } else {
              return (
                <Link
                  key={game.name}
                  href={`/pokedex/${game.nameOriginal}`}
                  className="m-auto hover:scale-105 transition-all w-fit group"
                >
                  <Button
                    className="capitalize group-hover:bg-[#A4B1BF]"
                    variant="faded"
                  >
                    {game.name}
                  </Button>
                </Link>
              );
            }
          })}
        </>
  );
}
