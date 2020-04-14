import React, { useState, useEffect } from "react";
import {
  getAllPokemons,
  getPokemon,
  getAllSearchPokemons,
  getSearchPokemon
} from "../functions/getPocemons";

export const useFetch = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonAllData, setPokemonAllData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [viewNum, setViewNum] = useState(10);
  const [pokemonType, setPokemonType] = useState("All");
  const [name, setName] = useState("");
  const [reload, setRelaod] = useState(false);

  let SEARCH_URL = `https://pokeapi.co/api/v2/pokemon?limit=964`;
  let URL = `https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=${viewNum}`;

  async function fetchPokemons(url) {
    let response = await getAllPokemons(url);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    await loadPokemon(response.results);
    setLoading(false);
  }

  async function fetchAllPokemons(url) {
    let response = await getAllSearchPokemons(url);
    await loadAllPokemons(response.results);
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemons(URL);
  }, [viewNum, count, reload]);

  useEffect(() => {
    fetchAllPokemons(SEARCH_URL);
  }, []);

  useEffect(() => {

    const search = !!pokemonType;

    if (search && (pokemonType !== "All")) {

      const typeSearch = async () => {
        
        let searchValue = pokemonAllData.filter(
          p => p.types[0].type.name === pokemonType
        );
        setPokemonData(searchValue);
      };

      typeSearch();
    } else {
      fetchPokemons(URL);
    }
  }, [pokemonType]);




  useEffect(() => {
    const handleSearch = text => {
      if (text !== "" || text.length > 0) {
        const newData = pokemonAllData.filter(item => {
          const itemData = `${item.name.toUpperCase()}`;

          const textData = text.toUpperCase();

          return itemData.indexOf(textData) > -1;
        });
        setPokemonData(newData);
      } else {
        setRelaod(!reload);
      }
    };
    handleSearch(name);
  }, [name]);



  const next = async () => {
    setLoading(true);
    let data = await getAllPokemons(nextUrl);
    await loadPokemon(data.results);
    setCount(viewNum);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemons(prevUrl);
    await loadPokemon(data.results);
    setCount(viewNum);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const switchViews = num => {
    setViewNum(num);
  };

  const switchType = type => {
    setPokemonType(type);
  };

  const findByName = name => {
    setName(name);
  };

  

  const loadPokemon = async data => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon);

        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const loadAllPokemons = async data => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getSearchPokemon(pokemon);

        return pokemonRecord;
      })
    );
    setPokemonAllData(_pokemonData);
  };

  return {
    pokemonData,
    loading,
    next,
    prev,
    switchViews,
    switchType,
    findByName,
    pokemonType
  };
};
