export const getPokemon = async (idPokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
  const resp = await fetch(url);
  const data = await resp.json();

  const pokemon = {
    idPokemon: idPokemon,
    nombre: data.name,
    tipo: data.types[0].type.name,
    peso: data.weight,
    altura: data.height,
    hp: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
    imagenPng: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    imagenGif: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${data.id}.gif`,
  };

  return pokemon;
};
