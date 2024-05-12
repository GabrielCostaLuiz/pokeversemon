import Image from "next/image";
import backgroundImage from "@/public/bckg_home.png";
import { FaCircleArrowDown } from "react-icons/fa6";
import Cards from "@/components/ui/Cards";
import { cardItems } from "@/utils/constants";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="relative flex justify-center items-center 100vh">
        <div className="absolute text-center z-30 flex justify-center items-center flex-col h-screen ">
          <p className="text-4xl  sm:text-6xl font-bold mb-5">
            Sejam bem-vindos, Treinadores!!
          </p>

          <p className="text-md sm:text-lg w-3/4 sm:w-2/4">
            Prepare-se para iniciar sua jornada Pokémon agora mesmo! Explore
            nossa completa Database Pokémon e utilize nossas Ferramentas para
            aprimorar suas habilidades. Participe de campeonatos e duelos
            emocionantes. Junte-se a nós nesta aventura repleta de desafios e se
            torne o próximo <b>MESTRE POKÉMON!</b>{" "}
          </p>

          <div className="absolute bottom-10">
            <a href="#welcome">
              <FaCircleArrowDown
                color="white"
                size={30}
                className="animate-bounce bg-red rounded-full"
              />
            </a>
          </div>
        </div>
        <Image
          src={backgroundImage}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
           
            filter: "brightness(0.5)",
          }}
          className="object-cover h-[90vh] sm:!h-[100vh]"
        />
      </div>

      <div className="text-center py-10 px-10 " id="welcome">
        <div>
          <h2 className="text-4xl text-blue_dark_secondary font-bold">
            BEM VINDO A
          </h2>
          <div className="flex justify-center items-center gap-3">
            <h1 className="text-4xl items-center flex sm:text-5xl md:text-7xl text-blue_light font-bold my-5  ">
              P{" "}
              <span>
                <Image
                  src="/Pokeball.png"
                  alt="pokeball"
                  width={50}
                  height={50}
                  sizes="100vw"
                />
              </span>{" "}
              KEVERSEM{" "}
              <span>
                <Image
                  src="/Pokeball.png"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                  className=""
                />
              </span>{" "}
              N{" "}
            </h1>
          </div>
          <p className="text-blue_dark text-xl my-5 font-bold">
            No Pokeversemon, sua jornada pelo mundo dos Pokémon está prestes a
            se tornar uma experiência verdadeiramente épica e envolvente! Aqui
            está uma visão do que aguarda você em nossa plataforma:
          </p>

          <div className="flex flex-col items-center justify-center sm:grid grid-cols-[repeat(auto-fit,minmax(35rem,1fr))] gap-5 ">
            {cardItems.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:scale-105 transition-all"
              >
                <Cards
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              </Link>
            ))}
          </div>

          <div>
            <p className="text-blue_dark text-2xl my-5 font-bold">
              E muito mais...
            </p>
            <p className="text-blue_dark text-lg font-bold">
              Explore todas as funcionalidades do Pokeversemon e comece sua
              jornada para se tornar o próximo mestre Pokémon!
            </p>
            <p className="text-blue_light text-3xl font-bold my-5">
              Nos vemos na Elite 4, BOA SORTE!!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
