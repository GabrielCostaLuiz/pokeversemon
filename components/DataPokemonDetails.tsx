"use client";
import { Color, Pokemon, Type } from "@/types/types";
import { colorsType } from "@/utils/constants";
import { formattedId } from "@/utils/utils";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import silhuetaPokemon from "@/public/silhueta.svg";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface Props {
  pokemonDetails: Pokemon | any;
  nextPrevPokemon: Pokemon[];
}

export function DataPokemonDetails({ pokemonDetails, nextPrevPokemon }: Props) {
  const [viewDetailsBasic, setViewDetailsBasic] = useState(true);

  const bckgColor = colorsType.filter(
    (color) => color.name === pokemonDetails.types[0].type.name
  );

  return (
    <div>
      {pokemonDetails && nextPrevPokemon ? (
        <div>
          <div className="w-full justify-between flex capitalize font-bold my-5 ">
            <Link
              href={`/pokemon/${nextPrevPokemon[0].name}`}
              className="text-gray-400 hover:text-white transition-all"
            >
              <p className="">
                &lt;{" "}
                <span className="text-[0.7rem]">
                  {formattedId(nextPrevPokemon[0].id)}
                </span>{" "}
                {nextPrevPokemon[0].name}
              </p>
            </Link>

            <h2 className="text-center w-full capitalize text-5xl mb-3 font-bold  ">
              {pokemonDetails.name.replace(/-/g, " ")}
            </h2>
            <Link
              href={`/pokemon/${nextPrevPokemon[1].name}`}
              className="text-gray-400 hover:text-white transition-all"
            >
              <p className="">
                {nextPrevPokemon[1].name}{" "}
                <span className="text-[0.7rem]">
                  {formattedId(nextPrevPokemon[1].id)}
                </span>{" "}
                &gt;
              </p>
            </Link>
          </div>

          <div
            className={clsx(
              ` w-full rounded-t-xl sm:rounded-xl  !bg-opacity-70 bgPokeball block sm:flex relative sm:flex-wrap `,
              {}
            )}
            style={{ backgroundColor: bckgColor[0].colorWithOpacity }}
          >
            <div className="h-[25rem] flex-1 relative">
              <Image
                src={
                  pokemonDetails.sprites.other?.home.front_default !== null
                    ? pokemonDetails.sprites.other?.home.front_default
                    : silhuetaPokemon
                }
                width={500}
                height={500}
                alt="silhueta pokemon"
                className="object-contain w-full h-full "
                quality={100}
                priority={true}
              />
            </div>

            <div
              className={`flex-1 bg-white text-black rounded-br-xl rounded-bl-xl sm:rounded-bl-none sm:rounded-e-xl flex flex-col justify-between pb-5 capitalize items-center  ${
                viewDetailsBasic ? "flex gap-5" : "hidden"
              } relative pt-2`}
            >
              <h2 className="text-center text-2xl font-bold">
                Informações Basicas
              </h2>
              <p className="font-bold">
                id:{" "}
                <span className="font-normal">
                  {formattedId(pokemonDetails.id)}
                </span>
              </p>
              <p className="font-bold">
                Altura:{" "}
                <span className="font-normal">{pokemonDetails.height}m</span>
              </p>
              <p className="font-bold">
                Peso:{" "}
                <span className="font-normal">
                  {pokemonDetails.weight / 10} kg
                </span>
              </p>
              <p className="font-bold">Tipos:</p>
              <ul className="capitalize flex gap-5">
                {pokemonDetails.types.map((type: Type) => {
                  const colorType = colorsType.filter(
                    (color) => color.name === type.type.name
                  );
                  return (
                    <li key={type.type.name}>
                      <Button
                        className="capitalize font-bold"
                        style={
                          type.type.name !== "legendary"
                            ? { backgroundColor: colorType[0].color }
                            : {
                                backgroundImage:
                                  "linear-gradient(to right, #001F3F, #6F1E51, #FFD700)",
                              }
                        }
                        variant="shadow"
                      >
                        {type.type.name}
                      </Button>
                    </li>
                  );
                })}
              </ul>
              <p className="font-bold">Egg Group:</p>

              <ul className="flex gap-5">
                {pokemonDetails.species &&
                pokemonDetails.species.egg_groups.length > 0 ? (
                  <>
                    {pokemonDetails.species.egg_groups.map((group: Color) => {
                      return (
                        <li key={group.name}>
                          <Button className="capitalize font-bold bg-gray-950">
                            {group.name}
                          </Button>
                        </li>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <li>
                      <Button className="capitalize font-bold">
                        Sem Grupo
                      </Button>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <button
              type="button"
              className="absolute top-3 right-3 font-bold bg-black text-white px-3 py-2 rounded-full "
              onClick={() => setViewDetailsBasic(!viewDetailsBasic)}
            >
              {!viewDetailsBasic ? (
                <FaEye size={20} />
              ) : (
                <FaEyeSlash size={20} />
              )}
            </button>
          </div>
          <div>
            <h2 className="mt-5 text-center">
              MAIS DETALHES NA PRÓXIMA ATUALIZAÇÃO DO SITE
            </h2>
          </div>
          {/* Renderizar mais detalhes conforme necessário */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
