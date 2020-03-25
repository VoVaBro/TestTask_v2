import {createContext} from 'react'


export const PokemonContext = createContext({
    pokemonData: null,
    loading: null, 
    nextUrl: null,
    prevUrl: null,
    pokemonType: null
})