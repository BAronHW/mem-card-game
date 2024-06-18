export async function get10pokemon() {
    async function fetchUniquePokemon() {
        let pokemonArray = [];
        for (let i = 1; i <= 10; i++) {
            const singlePokemon = await getsinglepokemon();
            pokemonArray.push(singlePokemon);
        }

        if (checkAllUnique(pokemonArray)) {
            return pokemonArray;
        } else {
            return fetchUniquePokemon(); 
        }
    }

    return fetchUniquePokemon();
}

function checkAllUnique(data) {
    let set = new Set();
    data.forEach(pokemon => set.add(pokemon.forms[0].name));
    return set.size === data.length;
}

async function getsinglepokemon() {
    const maxPokemonNum = 150;
    let rand = Math.floor((Math.random() * maxPokemonNum) + 1);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
    const singlePokemon = await response.json();
    return singlePokemon;
}
