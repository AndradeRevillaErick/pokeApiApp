export const Pokemon = ({ pokemon, onDeletePokemon = null }) => {
  return (
    <>
      <div className="pokemon-card">
        <img src={pokemon.imagenPng} alt={pokemon.nombre} />
        {/* <h1>{pokemon.nombre}</h1> */}
        {/* <ul>
          <li>Type: {pokemon.tipo}</li>
          <li>Height: {pokemon.peso}</li>
          <li>Hight: {pokemon.altura}</li>
          <li>HP: {pokemon.hp}</li>
          <li>Atack: {pokemon.ataque}</li>
          <li>Defense: {pokemon.defensa}</li>
        </ul> */}

        <h2 class="pokemon-name">{pokemon.nombre}</h2>
        <p class="pokemon-type">Tipo: {pokemon.tipo}</p>
        <div class="pokemon-stats">
          <p>
            <strong>Peso:</strong> {pokemon.peso}
          </p>
          <p>
            <strong>Altura:</strong> {pokemon.altura}
          </p>
          <p>
            <strong>HP:</strong> {pokemon.hp}
          </p>
          <p>
            <strong>Ataque:</strong> {pokemon.ataque}
          </p>
          <p>
            <strong>Defensa:</strong> {pokemon.defensa}
          </p>
        </div>

        {onDeletePokemon && (
          <button onClick={() => onDeletePokemon(pokemon.idPokemon)}>
            Borrar
          </button>
        )}
      </div>
    </>
  );
};
