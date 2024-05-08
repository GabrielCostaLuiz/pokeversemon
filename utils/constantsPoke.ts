import image1 from '@/public/bckg_pokedex.jpg'
import image2 from '@/public/bckg_types.jpg'
import image3 from '@/public/bckg_builder.jpg'
import image4 from '@/public/bckg_league.jpg'
import { GenerationsSpecialNames, Gerations } from '../types/types';

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

export const specialNames: GenerationsSpecialNames = {
        // 1ª Geração
        "red-blue": {
            name: "Red, Blue & Yellow",
            nameOriginal: "red-blue",
            geracao: "1º Geração",
            urlPokedexes: [{
                name: "Kanto",
                url: "https://pokeapi.co/api/v2/pokedex/2/"
            }]
        },
    
        // 2ª Geração
        "gold-silver": {
            name: "Gold, Silver & Crystal",
            nameOriginal: "gold-silver",
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
            nameOriginal: "ruby-sapphire",
            urlPokedexes: [{
                name: "Hoenn",
                url: "https://pokeapi.co/api/v2/pokedex/4/"
            }]
        },
        "firered-leafgreen": {
            name: "FireRed & LeafGreen",
            nameOriginal: "firered-leafgreen",
            geracao: "3º Geração",
            urlPokedexes: [{
                name: "Kanto",
                url: "https://pokeapi.co/api/v2/pokedex/2/"
            }]
        },
    
        // 4ª Geração
        "diamond-pearl": {
            name: "Diamond, Pearl & Platinum",
            nameOriginal: "diamond-pearl",
            geracao: "4º Geração",
            urlPokedexes: [{
                name: "Sinnoh Original",
                url: "https://pokeapi.co/api/v2/pokedex/5/"
            }]
        },
        "heartgold-soulsilver": {
            name: "Heart Gold & Soul Silver",
            nameOriginal: "heartgold-soulsilver",
            geracao: "4º Geração",
            urlPokedexes: [{
                name: "Atualização Johto",
                url: "https://pokeapi.co/api/v2/pokedex/7/"
            }]
        },
        "platinum": {
            name: "Platinum",
            nameOriginal: "platinum",
            geracao: "4º Geração",
            urlPokedexes: [{
                name: "Extensão Sinnoh",
                url: "https://pokeapi.co/api/v2/pokedex/6/"
            }]
        },
    
        // 5ª Geração
        "black-white": {
            name: "Black & White",
            nameOriginal: "black-white",
            geracao: "5º Geração",
            urlPokedexes: [{
                name: "Unova Original",
                url: "https://pokeapi.co/api/v2/pokedex/8/"
            }]
        },
        "black-2-white-2": {
            name: "Black 2 & White 2",
            nameOriginal: "black-2-white-2",
            geracao: "5º Geração",
            urlPokedexes: [{
                name: "Atualização Unova",
                url: "https://pokeapi.co/api/v2/pokedex/9/"
            }]
        },
    
        // 6ª Geração
        "x-y": {
            name: "X & Y",
            nameOriginal: "x-y",
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
            nameOriginal: "omega-ruby-alpha-sapphire",
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
            nameOriginal: "sun-moon",
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
            nameOriginal: "ultra-sun-ultra-moon",
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
            nameOriginal: "lets-go-pikachu-lets-go-eevee",
            urlPokedexes: [{
                name: "Let's Go Kanto",
                url: "https://pokeapi.co/api/v2/pokedex/26/"
            }]
        },
    
        // 8ª Geração
        "sword-shield": {
            name: "Sword & Shield",
            geracao: "8º Geração",
            nameOriginal: "sword-shield",
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
            nameOriginal: "brilliant-diamond-and-shining-pearl",
            urlPokedexes: [{
                name: "Sinnoh Original",
                url: "https://pokeapi.co/api/v2/pokedex/5/"
            }]
        },
        "legends-arceus": {
            name: "Legends: Arceus",
            geracao: "8º Geração",
            nameOriginal: "legends-arceus",
            urlPokedexes: [{
                name: "Hisui",
                url: "https://pokeapi.co/api/v2/pokedex/30/"
            }]
        },
    
        // 9ª Geração
        "scarlet-violet": {
            name: "Scarlet & Violet",
            geracao: "9º Geração",
            nameOriginal: "scarlet-violet",
            urlPokedexes: [{
                name: "Paldea",
                url: "https://pokeapi.co/api/v2/pokedex/31/"
            }]
        }
    };
    
export const colorsType = [
        { name: "normal", color: "#A8A77A" },
        { name: "fighting", color: "#C22E28" },
        { name: "flying", color: "#A98FF3" },
        { name: "poison", color: "#A33EA1" },
        { name: "ground", color: "#E2BF65" },
        { name: "rock", color: "#B6A136" },
        { name: "bug", color: "#A6B91A" },
        { name: "ghost", color: "#735797" },
        { name: "steel", color: "#B7B7CE" },
        { name: "fire", color: "#EE8130" },
        { name: "water", color: "#6390F0" },
        { name: "grass", color: "#7AC74C" },
        { name: "electric", color: "#F7D02C" },
        { name: "psychic", color: "#F95587" },
        { name: "ice", color: "#96D9D6" },
        { name: "dragon", color: "#6F35FC" },
        { name: "dark", color: "#705746" },
        { name: "fairy", color: "#D685AD" },
        { name: "legendary", color: "#F5AC78" },
        { name: "mythical", color: "#F4BDC9" },
        { name: "unknown", color: "#000000" }
    ];

export const noGames = ['yellow','crystal','xd','emerald','the-indigo-disk','the-teal-mask','the-crown-tundra','the-isle-of-armor','colosseum']

    