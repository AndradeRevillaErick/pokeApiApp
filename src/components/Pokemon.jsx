export const Pokemon = ({ pokemon, onDeletePokemon = null }) => {
  return (
    <>
      <h1>Pokemon: {pokemon.nombre}</h1>
      <h3>PokeInfo</h3>
      <div>
        <span>tipo: {pokemon.tipo}</span>
        <span>peso: {pokemon.peso}</span>
        <span>altura: {pokemon.altura}</span>
        <span>hp: {pokemon.hp}</span>
        <span>ataque: {pokemon.ataque}</span>
        <span>defensa: {pokemon.defensa}</span>
        <span>imagenPng: {pokemon.imagenPng}</span>
        <span>imagenGif: {pokemon.imagenGif}</span>
      </div>

      {onDeletePokemon && (
        <button onClick={() => onDeletePokemon(pokemon.idPokemon)}>
          Borrar
        </button>
      )}
    </>
  );
};
