import image1 from '@/public/bckg_pokedex.jpg'
import image2 from '@/public/bckg_types.jpg'
import image3 from '@/public/bckg_builder.jpg'
import image4 from '@/public/bckg_league.jpg'
import { Gerations } from './types';

export const cardItems = [
    {
        name: "Explorar Pokédex",
        description: "Descubra informações detalhadas sobre todos os Pokémon, desde estatísticas até habilidades e locais de encontro. Nossa database é completa e fácil de usar, fornecendo tudo o que você precisa saber sobre seus Pokémon favoritos.",
        image: image1,
        url: "/pokedex"
    },
    {
        name: "Conhecer a Tabela de Tipos",
        description: "Aproveite nossa tabela de tipos para entender as vantagens e desvantagens de cada tipo de Pokémon em batalha. Planeje suas estratégias com sabedoria e aumente suas chances de vitória!",
        image: image2,
        url: "/types"

    },
    {
        name: "Team Builder",
        description: "Crie equipes poderosas e estratégias vencedoras com nossas ferramentas de construção de equipes.",
        image: image3,
        url: "/teambuilder"

    },
    {
        name: "Participe de Batalhas",
        description: "Envolva-se em batalhas emocionantes, competições e torneios para provar sua habilidade como treinador Pokémon.",
        image: image4,
        url: "/league"

    },
  ];

export const geracoes: Gerations[] = [
    {
        "id": 1,
        "name": "1º Geração",
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        "id": 2,
        "name": "2º Geração",
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        "id": 3,
        "name": "3º Geração",
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        "id": 4,
        "name": "4º Geração",
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        "id": 5,
        "name": "5º Geração",
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        "id": 6,
        "name": "6º Geração",
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        "id": 7,
        "name": "7º Geração",
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        "id": 8,
        "name": "8º Geração",
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        "id": 9,
        "name": "9º Geração",
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    ]

export const specialNames = {
        // 1ª Geração
        "red-blue": {
            name: "Red, Blue & Yellow",
            geracao: "1º Geração",
            urlPokedexes: [{
                name: "Kanto",
                url: "https://pokeapi.co/api/v2/pokedex/2/"
            }]
        },
    
        // 2ª Geração
        "gold-silver": {
            name: "Gold, Silver & Crystal",
            geracao: "2º Geração",
            urlPokedexes: [{
                name: "Johto Original",
                url: "https://pokeapi.co/api/v2/pokedex/3/"
            }]
        },
    
        // 3ª Geração
        "ruby-sapphire": {
            name: "Ruby, Sapphire & Emerald",
            geracao: "3º Geração",
            urlPokedexes: [{
                name: "Hoenn",
                url: "https://pokeapi.co/api/v2/pokedex/4/"
            }]
        },
        "firered-leafgreen": {
            name: "FireRed & LeafGreen",
            geracao: "3º Geração",
            urlPokedexes: [{
                name: "Kanto",
                url: "https://pokeapi.co/api/v2/pokedex/2/"
            }]
        },
    
        // 4ª Geração
        "diamond-pearl": {
            name: "Diamond, Pearl & Platinum",
            geracao: "4º Geração",
            urlPokedexes: [{
                name: "Sinnoh Original",
                url: "https://pokeapi.co/api/v2/pokedex/5/"
            }]
        },
        "heartgold-soulsilver": {
            name: "Heart Gold & Soul Silver",
            geracao: "4º Geração",
            urlPokedexes: [{
                name: "Atualização Johto",
                url: "https://pokeapi.co/api/v2/pokedex/7/"
            }]
        },
        "platinum": {
            name: "Platinum",
            geracao: "4º Geração",
            urlPokedexes: [{
                name: "Extensão Sinnoh",
                url: "https://pokeapi.co/api/v2/pokedex/6/"
            }]
        },
    
        // 5ª Geração
        "black-white": {
            name: "Black & White",
            geracao: "5º Geração",
            urlPokedexes: [{
                name: "Unova Original",
                url: "https://pokeapi.co/api/v2/pokedex/8/"
            }]
        },
        "black-2-white-2": {
            name: "Black 2 & White 2",
            geracao: "5º Geração",
            urlPokedexes: [{
                name: "Atualização Unova",
                url: "https://pokeapi.co/api/v2/pokedex/9/"
            }]
        },
    
        // 6ª Geração
        "x-y": {
            name: "X & Y",
            geracao: "6º Geração",
            urlPokedexes: [{
                    name: "Kalos Central",
                    url: "https://pokeapi.co/api/v2/pokedex/12/"
                },
                {
                    name: "Kalos Coastal",
                    url: "https://pokeapi.co/api/v2/pokedex/13/"
                },
                {
                    name: "Kalos Mountain",
                    url: "https://pokeapi.co/api/v2/pokedex/14/"
                }
            ]
        },
        "omega-ruby-alpha-sapphire": {
            name: "Omega Ruby & Alpha Sapphire",
            geracao: "6º Geração",
            urlPokedexes: [{
                name: "Atualização Hoenn",
                url: "https://pokeapi.co/api/v2/pokedex/15/"
            }]
        },
    
        // 7ª Geração
        "sun-moon": {
            name: "Sun & Moon",
            geracao: "7º Geração",
            urlPokedexes: [{
                    name: "Alola Original",
                    url: "https://pokeapi.co/api/v2/pokedex/16/"
                },
                {
                    name: "Melemele Original",
                    url: "https://pokeapi.co/api/v2/pokedex/17/"
                },
                {
                    name: "Akala Original",
                    url: "https://pokeapi.co/api/v2/pokedex/18/"
                },
                {
                    name: "Ulaula Original",
                    url: "https://pokeapi.co/api/v2/pokedex/19/"
                },
                {
                    name: "Poni Original",
                    url: "https://pokeapi.co/api/v2/pokedex/20/"
                }
            ]
        },
        "ultra-sun-ultra-moon": {
            name: "Ultra Sun & Ultra Moon",
            geracao: "7º Geração",
            urlPokedexes: [{
                    name: "Atualização Alola",
                    url: "https://pokeapi.co/api/v2/pokedex/21/"
                },
                {
                    name: "Atualização Melemele",
                    url: "https://pokeapi.co/api/v2/pokedex/22/"
                },
                {
                    name: "Atualização Akala",
                    url: "https://pokeapi.co/api/v2/pokedex/23/"
                },
                {
                    name: "Atualização Ulaula",
                    url: "https://pokeapi.co/api/v2/pokedex/24/"
                },
                {
                    name: "Atualização Poni",
                    url: "https://pokeapi.co/api/v2/pokedex/25/"
                }
            ]
        },
        "lets-go-pikachu-lets-go-eevee": {
            name: "Let's Go, Pikachu & Let's Go, Eevee",
            geracao: "7º Geração",
            urlPokedexes: [{
                name: "Let's Go Kanto",
                url: "https://pokeapi.co/api/v2/pokedex/26/"
            }]
        },
    
        // 8ª Geração
        "sword-shield": {
            name: "Sword & Shield",
            geracao: "8º Geração",
            urlPokedexes: [{
                    name: "Galar",
                    url: "https://pokeapi.co/api/v2/pokedex/27/"
                },
                {
                    name: "Isle-Of-Armor",
                    url: "https://pokeapi.co/api/v2/pokedex/28/"
                },
                {
                    name: "Crown-Tundra",
                    url: "https://pokeapi.co/api/v2/pokedex/29/"
                }
            ]
        },
        "brilliant-diamond-and-shining-pearl": {
            name: "Brilliant Diamond & Shining Pearl",
            geracao: "8º Geração",
            urlPokedexes: [{
                name: "Sinnoh Original",
                url: "https://pokeapi.co/api/v2/pokedex/5/"
            }]
        },
        "legends-arceus": {
            name: "Legends: Arceus",
            geracao: "8º Geração",
            urlPokedexes: [{
                name: "Hisui",
                url: "https://pokeapi.co/api/v2/pokedex/30/"
            }]
        },
    
        // 9ª Geração
        "scarlet-violet": {
            name: "Scarlet & Violet",
            geracao: "9º Geração",
            urlPokedexes: [{
                name: "Paldea",
                url: "https://pokeapi.co/api/v2/pokedex/31/"
            }]
        }
    };
    
    