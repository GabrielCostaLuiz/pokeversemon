// "use client";
// import { useEffect, useState } from "react";
// import { colorsType, specialNames } from "@/utils/constantsPoke";
// import { Button } from "@nextui-org/react";
// import { PokedexData, Pokemon } from "@/types/types";
// import { fetchDataPokedex } from "@/lib/endpoints";
// import { ImgPokemon } from "./ui/ImgPokemon";
// import Link from "next/link";

// export function PokedexDataPokemons({ query }) {
//   const [typesSelected, setTypesSelected] = useState<string[]>([]);
//   const [pokemons, setPokemons] = useState<Pokemon[]>();
//   const [isLoading, setIsLoading] = useState(true);
//   const [geracao, setGeracao] = useState<any>();
//   console.log(typesSelected);
//   function handleType(e: string) {
//     if (typesSelected.includes(e)) {
//       setTypesSelected(typesSelected.filter((type) => type !== e));
//     } else {
//       setTypesSelected([...typesSelected, e]);
//     }
//   }

//   function scrollToMiddle() {
//     window.scrollTo(0, 550);
//   }


//   useEffect(() => {
//     const fetchPokedex = async (url: PokedexData) => {
//       try {
//         const res = await fetchDataPokedex(url);

//         let filteredPokemons = res.filter((pokemon) => pokemon !== null);
//         filteredPokemons = res
//           .filter((pokemon) => {
//             if (typesSelected.length === 0) {
//               return true; 
//             } else {
//               return pokemon.types.some((element) =>
//                 typesSelected.includes(element.type.name)
//               );
//             }
//           })
//           .filter(Boolean);
//         //filter boolean tira os nulos

//         filteredPokemons.sort((a, b) => a.id - b.id);

//         setPokemons(filteredPokemons);

//         setIsLoading(false);
//         scrollToMiddle();
//       } catch (error) {
//         console.error("Erro ao buscar a pokedex:", error);
//       }
//     };

//     if (query) {
//       let objetoEncontrado = null;
//       for (const nome in specialNames) {
//         if (specialNames.hasOwnProperty(nome)) {
//           const objeto = specialNames[nome];
//           if (objeto.name === query) {
//             objetoEncontrado = objeto;
//             break;
//           }
//         }
//       }

//       if (objetoEncontrado !== null) {
//         setGeracao(objetoEncontrado);
//         fetchPokedex(objetoEncontrado);
//       }
//     }
//   }, [query, typesSelected]);

//   return (
//     <div className="mt-10">
//       <div className="flex gap-5 flex-wrap items-center justify-center">
//         {colorsType.map((type) => (
//           <Button
//             key={type.name}
//             className={`capitalize hover:scale-105 ${
//               typesSelected.includes(type.name) ? "opacity-100" : "opacity-20"
//             }`}
//             style={{ backgroundColor: type.color }}
//             variant="shadow"
//             onClick={() => handleType(type.name)}
//           >
//             {type.name}
//           </Button>
//         ))}
//       </div>
//       <div className="mt-10">
//         {isLoading ? (
//           <p>Carregando...</p>
//         ) : (
//           <div>
//             {pokemons ? (
//               <div className="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-10">
//                 {pokemons.map((pokemon, index) => {
//                   return (
//                     <Link
//                       key={index}
//                       href={`/pokemon/${pokemon.name}`}
//                       className="hover:scale-110 transition-all"
//                     >
//                       <div className="m-auto flex flex-col items-center justify-center">
//                         <ImgPokemon sprites={pokemon.sprites} />
//                         {/* <p>{formattedId(pokemon.id)}</p> */}
//                         <p className="text-center capitalize">{pokemon.name}</p>
//                         <p className="flex gap-1">
//                           {pokemon.types.map((type, index) => (
//                             <span
//                               key={index}
//                               className="px-1 capitalize rounded-lg flex items-center justify-center"
//                               style={{
//                                 backgroundColor: colorsType.find(
//                                   (colorType) =>
//                                     colorType.name === type.type.name
//                                 )?.color,
//                               }}
//                             >
//                               {type.type.name}
//                             </span>
//                           ))}
//                         </p>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>
//             ) : (
//               <p>Erro ao procurar Pokémons.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
