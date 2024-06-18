export default async function getsinglepokemon() {
    const maxpokemonnum = 150;
    let rand = Math.floor((Math.random() * maxpokemonnum) + 1);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
    const singlepokemon = await response.json();
    return singlepokemon;
}

export function checkAllUnique(array){
    let set = new Set();
    array.forEach(element => {
        set.add(element.forms[0].name);
    });
    return set.size === array.length;
}


export async function get10pokemon() {
    let pokemonarray = [];
    let attempts = 0;

    for (let i = 1; i <= 10; i++) {
        const singlepokemon = await getsinglepokemon();
        pokemonarray.push(singlepokemon);
    }

    while (!checkAllUnique(pokemonarray)) {
        pokemonarray = [];
        for (let i = 1; i <= 10; i++) {
            const singlepokemon = await getsinglepokemon();
            pokemonarray.push(singlepokemon);
        }
        if (checkAllUnique(pokemonarray)) {
            return pokemonarray;
        }
        attempts++;
    }
    return pokemonarray;
}

  
  