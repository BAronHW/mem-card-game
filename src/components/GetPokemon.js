export default async function getsinglepokemon() {
    const maxpokemonnum = 150;
    let rand = Math.floor((Math.random() * maxpokemonnum) + 1);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
    const singlepokemon = await response.json();
    return singlepokemon;
}

export async function get10pokemon(){
    const pokemonarray = [];
    for(let i=0;i<=10;i++){       
        const singlepokemon = await getsinglepokemon();
        pokemonarray.push(singlepokemon);
    }
    return pokemonarray;
}
  
  