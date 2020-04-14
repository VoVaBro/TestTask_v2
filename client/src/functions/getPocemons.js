export const getPokemon = ({ url }) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

export const getAllPokemons = async  (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

export const getAllSearchPokemons = async  (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}


export const getSearchPokemon = ({ url }) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}