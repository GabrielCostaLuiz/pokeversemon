// 'use client'
// import React, { useEffect } from "react";
// import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue, Input, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem} from "@nextui-org/react";
// import {useInfiniteScroll} from "@nextui-org/use-infinite-scroll";
// import {useAsyncList} from "@react-stately/data";
// import { fetchPokemonData, fetchPokemonEspecific } from "@/lib/endpoints";
// import { LoadingPokeball } from "./ui/LoadingPokeball";
// import { Pokemon, ResultsNameUrl, Stat } from "@/types/types";

// interface PropsTable {
//   id: number;
//   name: string;
//   type: string;
//   total: number;
//   hp: number;
//   attack: number;
//   defense: number;
//   spatk: number;
//   spdef: number;
//   speed: number;
// }

// interface Props {
//   propstable: PropsTable[];
// }

// export function TablePokedex() {
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [hasMore, setHasMore] = React.useState(false);
//   const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
//   const [numberHasMore, setNumberHasMore] = React.useState(15)
//   const [filterValue, setFilterValue] = React.useState("");
//   const [pokemonFilter, setPokemonFilter] = React.useState<any>('')

// //   let list = useAsyncList({
// //     async load({signal, cursor}) {

// //       if (cursor) {
// //         setIsLoading(false);
// //       }
// //       console.log(cursor)
// //       console.log(signal)
// //       // If no cursor is available, then we're loading the first page.
// //       // Otherwise, the cursor is the next URL to load, as returned from the previous page.
// //       const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", {signal});
// //       let json = await res.json();

// //       setHasMore(json.next !== null);

// //       return {
// //         items: json.results,
// //         cursor: json.next,
// //       };
// //     },
// //   });

// let list = useAsyncList({
//     async load({ signal, cursor }) {
//       if (cursor) {
//                 setIsLoading(false);
//              }
//       let res = await fetch(cursor || `https://pokeapi.co/api/v2/pokemon?limit=${numberHasMore}`, {
//         signal
//       });
//       let json = await res.json();
//     setNumberHasMore(numberHasMore + 15)

//       setHasMore(`https://pokeapi.co/api/v2/pokemon?limit=${numberHasMore}` !== null);
    
//       return {
//         items: json.results,
//         cursor: json.next
//       };
//     }
//   });

//   const [loaderRef, scrollerRef] = useInfiniteScroll({hasMore, onLoadMore: list.loadMore});




//   const onSearchChange = React.useCallback(async (value: string) => {
//     if(value === ""){
//        setPokemonFilter('')
//        return setFilterValue('')
//     }
//     setFilterValue(value);
//     const updatedPokemon = await fetchPokemonEspecific(value);
//     if(updatedPokemon !== null){
//       return setPokemonFilter(updatedPokemon);
//     } else {
//       return setPokemonFilter('')
//     }

//   }, []);


//   useEffect(() => {
//     const getPokes = async () => {
//       const updatedPokemons = await fetchPokemonData(list.items as [ResultsNameUrl]);
//       let filteredPokemons = updatedPokemons;
//       if (filterValue) {
//         filteredPokemons = updatedPokemons.filter((pokemon) =>
//           pokemon.name.toLowerCase().includes(filterValue.toLowerCase())
//         );
//         if(filteredPokemons.length > 0){
//           setPokemons(filteredPokemons);
//         } 
//       } 
//       setPokemons(filteredPokemons);
//       setIsLoading(false);
//     };

//     getPokes();
//   }, [list.items, filterValue]);


//   return (
//     <>
            

//     <Input
//         placeholder="Search Pokémon by name..."
//         value={filterValue}
//         onChange={(e) => onSearchChange(e.target.value)}
//       />
//     <Table
//       isHeaderSticky
//       aria-label="Example table with infinite pagination"
//       baseRef={scrollerRef}
//       bottomContent={
//         hasMore ? (
//           <div className="flex w-full justify-center">
//             <Spinner ref={loaderRef} color="white" />
//           </div>
//         ) : null
//       }
//       classNames={{
//         base: "max-h-[520px] overflow-scroll bg-white overflow-hidden",
//         table: "min-h-[400px] bg-white",
//         thead: "bg-white ",
//         tbody: "bg-white ",
//         td:"text-black",
//         th: "bg-white text-black",
//         tfoot: "bg-white ",
//         wrapper: "bg-white ",
//       }}

//     >
//       <TableHeader>
//         <TableColumn key="photo">#</TableColumn>
//         <TableColumn key="name">Name</TableColumn>
//         <TableColumn key="type">Type</TableColumn>
//         <TableColumn key="total">Total</TableColumn>
//         <TableColumn key="hp">HP</TableColumn>
//         <TableColumn key="attack">Attack</TableColumn>
//         <TableColumn key="defense">Defense</TableColumn>
//         <TableColumn key="spatk">Sp. Atk</TableColumn>
//         <TableColumn key="spdef">Sp. Def</TableColumn>
//         <TableColumn key="speed">Speed</TableColumn>
//       </TableHeader>
//       {pokemonFilter  !== "" ? <TableBody>
//         <TableRow key={pokemonFilter.name} href={`/pokemon/${pokemonFilter.name}`} className="cursor-pointer hover:!bg-slate-500 ">
//           {(columnKey) => {
//             let stats = {
//               hp: pokemonFilter.stats[0].base_stat,
//               attack: pokemonFilter.stats[1].base_stat,
//               defense: pokemonFilter.stats[2].base_stat,
//               spatk: pokemonFilter.stats[3].base_stat,
//               spdef: pokemonFilter.stats[4].base_stat,
//               speed: pokemonFilter.stats[5].base_stat,
//               total: pokemonFilter.stats.reduce((acc: any, cur: Stat) => acc + cur.base_stat, 0),
//             };

//             return (
//               <TableCell key={columnKey} className="capitalize  ">
//                 {columnKey === "photo" ? (
//                   <img src={pokemonFilter.sprites.front_default} alt={pokemonFilter.name} />
//                 ) : columnKey === "name" ?
//                   pokemonFilter.name : columnKey === "type" ?
//                     pokemonFilter.types[0].type.name : columnKey === "total" ?
//                       stats.total : (
//                         stats[columnKey as keyof typeof stats]
//                       )}
//               </TableCell>
//             );
//             }}
//         </TableRow>
//       </TableBody> : <TableBody
//         isLoading={isLoading}
//         items={pokemons}
//         loadingContent={<Spinner color="white" />}
//         emptyContent={<p>Esse Pokemon não existe, digite o nome corretamente!!</p>}
  
//       >

//         {(item) => (
//           <TableRow key={item.name} href={`/pokemon/${item.name}`} className="cursor-pointer hover:!bg-slate-500 ">
//             {(columnKey) => {
//               let stats = {
//                 hp: item.stats[0].base_stat,
//                 attack: item.stats[1].base_stat,
//                 defense: item.stats[2].base_stat,
//                 spatk: item.stats[3].base_stat,
//                 spdef: item.stats[4].base_stat,
//                 speed: item.stats[5].base_stat,
//                 total: item.stats.reduce((acc, cur) => acc + cur.base_stat, 0),
//               };
              
//               return (
//                 <TableCell key={columnKey} className="capitalize  ">
//                   {columnKey === "photo" ? (
//                     <img src={item.sprites.front_default} alt={item.name} />
//                   ) : columnKey === "name" ? (
//                     item.name
//                   ) : columnKey === "type" ? (
//                     item.types[0].type.name
//                   ) : columnKey === "total" ? (
//                     stats.total
//                   ) : (
//                     stats[columnKey as keyof typeof stats]
//                   )}
//                 </TableCell>
//               );
//             }}
//           </TableRow>
//         )}
//       </TableBody>}
      
//     </Table>
//     </>
//   );
// }
