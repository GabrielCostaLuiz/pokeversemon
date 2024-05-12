"use client";

import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownMenu,
  DropdownTrigger,
  Dropdown,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import { menuItems } from "@/utils/navigation";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "@/components/ui/icons";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import icon from "@/public/icon.png";
import Image from "next/image";

const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} />,
  scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  lock: <Lock className="text-success" fill="currentColor" size={30} />,
  activity: (
    <Activity className="text-secondary" fill="currentColor" size={30} />
  ),
  flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  server: <Server className="text-success" fill="currentColor" size={30} />,
  user: <TagUser className="text-danger" fill="currentColor" size={30} />,
};

export function NavBarComponent({ namesPokes }: any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [searchPoke, setSearchPoke] = React.useState<any>();
  const pathname = usePathname();
  //pegar a url atual
  const url = pathname;

  function handleSearchValue(e: any) {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
  }

  useEffect(() => {
    setSearchPoke(
      namesPokes.filter((name: any) => name.name.includes(searchValue))
    );
  }, [searchValue, namesPokes]);

  return (
    <>
      <Navbar
        shouldHideOnScroll
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        isMenuOpen={isMenuOpen}
        className={clsx(
          "sm:bg-transparent py-1  sm:absolute z-50",
          url !== "/" && "!bg-navBar !relative"
        )}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link href="/"    className="relative flex flex-col-reverse items-center justify-center py-5">
            <p className=" text-white font-bold ">
                Pokeversemon
              </p>
              <Image src={icon} width={35} height={35} alt="logo" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex " justify="start">
          <NavbarBrand>
            <Link
              href="/"
              className="relative flex flex-col-reverse items-center justify-center"
            >
              <p className=" text-white font-bold ">
                Pokeversemon
              </p>
              <Image
                src={icon}
                width={40}
                height={40}
                alt="logo"
                quality={100}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {/* <NavbarBrand>

         <p className="font-bold text-inherit">Logo</p>
       </NavbarBrand> */}

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Database Pokémon
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Recursos Pokémon"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="pokedex"
                description="Veja informações sobre diferentes Pokémon."
                // startContent={icons.pokedex}
                href="/pokedex"
              >
                Pokédex
              </DropdownItem>
              {/* <DropdownItem
                key="moves"
                description="Explore os diferentes movimentos que os Pokémon podem aprender."
                // startContent={icons.move}
                
              >
                Movimentos
              </DropdownItem>
              <DropdownItem
                key="type_chart"
                description="Confira a tabela de tipos para entender os pontos fortes e fracos de cada Pokémon."
                // startContent={icons.type}
              >
                Tabela de Tipos
              </DropdownItem>
              <DropdownItem
                key="abilities"
                description="Descubra as habilidades especiais que os Pokémon podem possuir."
                // startContent={icons.ability}
              >
                Habilidades
              </DropdownItem>
              <DropdownItem
                key="items"
                description="Veja os diferentes itens que podem ser encontrados no mundo Pokémon."
                // startContent={icons.item}
              >
                Itens
              </DropdownItem>
              <DropdownItem
                key="evolution_chains"
                description="Explore as cadeias de evolução dos Pokémon para entender como eles se desenvolvem."
                // startContent={icons.evolution}
              >
                Cadeias de Evolução
              </DropdownItem>
              <DropdownItem
                key="pokemon_locations"
                description="Descubra onde encontrar diferentes espécies de Pokémon no mundo."
                // startContent={icons.location}
              >
                Localizações dos Pokémon
              </DropdownItem> */}
            </DropdownMenu>
          </Dropdown>

          <Dropdown isDisabled>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Ferramentas
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown isDisabled>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Copa
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarContent justify="end" className="relative">
          {/* <NavbarItem className="hidden lg:flex">
         <Link href="#">Login</Link>
       </NavbarItem> */}

          <Input
            classNames={{
              base: "w-[80%] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Nome do pokemon..."
            size="sm"
            // startContent={<SearchIcon size={18} />}
            type="search"
            value={searchValue}
            onChange={handleSearchValue}
            
          />
          <div
            className={`absolute w-[80%] top-16 px-1 rounded-b-xl   bg-white overflow-scroll overflow-x-hidden flex flex-col gap-2 ${
              searchValue !== "" ? "block" : "hidden"
            } max-h-56 min-h-fit`}
          >
            {searchPoke?.map((poke: any) => (
              <Link
                href={`/pokemon/${poke.name}`}
                className=" capitalize text-black font-bold hover:bg-slate-400"
                key={poke.name}
              >
                {poke.name}
              </Link>
            ))}
          </div>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`w-full ${
                  pathname === item.url ? "activeLink" : ""
                }`}
                href={item.url}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
