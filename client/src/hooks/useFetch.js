import React, { useState, useEffect, useCallback, useContext } from 'react'
import { getAllPokemons, getPokemon } from '../functions/getPocemons'

import { PokemonContext } from '../context/PokemonContext'



export const useFetch = () => {

    const pokemon = useContext(PokemonContext)

    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0)
    const [viewNum, setViewNum] = useState(10)
    const [pokemonType, setPokemonType] = useState('All')



    useEffect(() => {
        async function fetchData() {

            let url = `https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=${viewNum}`

            let response = await getAllPokemons(url)
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, [viewNum, pokemonType])


    const next = async () => {
        setLoading(true);
        let data = await getAllPokemons(nextUrl);
        await loadPokemon(data.results);
        setCount(prev => prev + 20)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const prev = async () => {
        if (!prevUrl) return;
        setLoading(true);
        let data = await getAllPokemons(prevUrl);
        await loadPokemon(data.results);
        setCount(prev => prev - 20)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const switchViews = (num) => {
        setViewNum(num)
    }

    const switchType = (type) => {
        setPokemonType(type)
    }


    const search = !!pokemonType

    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon)
            return pokemonRecord
        }))
        if (search && (pokemonType !== 'All')) {
           let searchValue = _pokemonData.filter(p => p.types[0].type.name === pokemonType)
           setPokemonData(searchValue);
        } else {
            setPokemonData(_pokemonData);
        }
    }

    return { pokemonData, loading, next, prev, switchViews, switchType }
}