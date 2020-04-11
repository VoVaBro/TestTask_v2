import React, { useState, useEffect } from 'react'
import { getAllPokemons, getPokemon } from '../functions/getPocemons'


export const useFetch = () => {

    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0)
    const [viewNum, setViewNum] = useState(10)
    const [pokemonType, setPokemonType] = useState('All')
    const [name, setName] = useState('')
    const [reload, setRelaod] = useState(false)



    async function fetchData() {

        let url = `https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=${viewNum}`

        let response = await getAllPokemons(url)
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        await loadPokemon(response.results);
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    },[viewNum, pokemonType,  count, reload])


    useEffect(() => {

        const handleSearch = (text) => {

            if (text === '') {
                fetchData()
                setRelaod(false)
            } else {

                const newData = pokemonData.filter(item => {
                    const itemData = `${item.name.toUpperCase()}`

                    const textData = text.toUpperCase();

                    return itemData.indexOf(textData) > -1
                });
                setRelaod(true)
                setPokemonData(newData)
            }
        }
        handleSearch(name)
    }, [name.length, name])

    // useEffect(() => {
    //     async function fetchData() {

    //         let url = `https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=${viewNum}`

    //         let response = await getAllPokemons(url)
    //         setNextUrl(response.next);
    //         setPrevUrl(response.previous);
    //         await loadPokemon(response.results);
    //         setLoading(false);
    //     }
    //     fetchData();
    // }, [viewNum, pokemonType, name, count])


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

    const findByName = (name) => {
        setName(name)
    }

    const search = !!pokemonType
    


    const loadPokemon = async (data) => {


        if (search && (pokemonType !== 'All')) {

            let _pokemonData = await Promise.all(data.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon)
                return pokemonRecord
            }))
            let searchValue = _pokemonData.filter(p => p.types[0].type.name === pokemonType)
            setPokemonData(searchValue)

            // } else if (searchName) {

            //     let _pokemonData = await Promise.all(data.map(async pokemon => {
            //         let pokemonRecord = await getPokemon(pokemon)
            //         return pokemonRecord
            //     }))
            //     let searchValue = _pokemonData.filter(p => p.name === name)
            //     setPokemonData(searchValue)

        } else {
            let _pokemonData = await Promise.all(data.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon)

                console.log('pokemonRecord', pokemonRecord)
                return  pokemonRecord
            }))
            setPokemonData(_pokemonData)
        }

        // let _pokemonData = await Promise.all(data.map(async pokemon => {
        //     let pokemonRecord = await getPokemon(pokemon)
        //     return pokemonRecord
        // }))

        // if ((search && (pokemonType !== 'All'))){
        //     searchByType(_pokemonData)
        // } else {
        //     setPokemonData(_pokemonData)
        // }


        // if (searchName) {
        //     searchByName(_pokemonData)
        // } else {
        //     setPokemonData(_pokemonData);
        // }


    }

    return { pokemonData, loading, next, prev, switchViews, switchType, findByName, pokemonType }
}