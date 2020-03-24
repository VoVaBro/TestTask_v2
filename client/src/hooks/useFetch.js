import React, { useState, useEffect, useCallback, useContext } from 'react'
import {getAllPokemons, getPokemon} from '../functions/getPocemons'


export const useFetch = () => {

    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0)

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${10}&limit=${10}`  

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemons(url)
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, [])



    const next =  async () => {
        setLoading(true);
        let data = await getAllPokemons(nextUrl);
        await loadPokemon(data.results);
        setCount(prev => prev + 20)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const prev =  async () => {
        if (!prevUrl) return;
        setLoading(true);
        let data = await getAllPokemons(prevUrl);
        await loadPokemon(data.results);
        setCount(prev => prev - 20)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const loadPokemon =  async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon)
            return pokemonRecord
        }))
        setPokemonData(_pokemonData);
    }

    return {pokemonData,loading, next, prev}
}