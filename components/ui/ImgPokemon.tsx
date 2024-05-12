import { specialNames } from "@/utils/constants";
import { Sprites } from "@/types/types";
import Image from "next/image";

interface Props {
  sprites: Sprites;
}

// const geracoesConst = {
//     "1º Geração": "generation-i",
//     "2º Geração": "generation-ii",
//     "3º Geração": "generation-iii",
//     "4º Geração": "generation-iv",
//     "5º Geração": "generation-v",
//     "6º Geração": "generation-vi",
//     "7º Geração": "generation-vii",
//     "8º Geração": "generation-viii",
//     "9º Geração": "generation-ix",
//     "10º Geração": "generation-x",
// }

export function ImgPokemon({ sprites }: Props) {
  // const findKeyByName = (nameToFind, object) => {
  //     for (const key in object) {
  //         if (object.hasOwnProperty(key) && object[key].name === nameToFind) {
  //             return key;
  //         }
  //     }
  //     return null;
  // };
  // console.log(geracao.geracao)
  // const key = findKeyByName(geracao.name, specialNames);
  // console.log(key)
  // const urlImage = key === "scarlet-violet" || key === "sword-shield" || key === "brilliant-diamond-and-shining-pearl" || key === "legends-arceus" ? sprites.front_default : sprites.versions[geracoesConst[geracao.geracao]][key === "gold-silver" ? "silver" : key === "black-2-white-2" ? "black-white" : key === "omega-ruby-alpha-sapphire" ? "omegaruby-alphasapphire" : key === "sun-moon" ? "ultra-sun-ultra-moon" : geracoesConst[geracao.geracao] === "generation-viii" ? "ultra-sun-ultra-moon" : key === "lets-go-pikachu-lets-go-eevee"?"ultra-sun-ultra-moon" : key].front_default

  return (
    <Image
      src={sprites.front_default}
      width={100}
      height={100}
      alt="pokemon"
      className="object-cover"
    />
  );
}
