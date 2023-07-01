import { useCardTransform } from "../hooks/useCardTransform";

export const Pokemon = ({ pokemon, onDeletePokemon = null }) => {
  const { pokeRef, handleMouseEnter, handleMouseLeave } = useCardTransform();

  return (
    <>
      <div
        ref={pokeRef}
        className="pokemon-card"
        id={pokemon.idPokemon}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={pokemon.imagenPng} alt={pokemon.nombre} />
        <h3 className="pokemon-name">{pokemon.nombre}</h3>
        <h5>{pokemon.tipo}</h5>
        <hr />
        <div className="pokemon-stats">
          <span className="rowOne">
            Atack: <strong>{pokemon.ataque}</strong>
          </span>
          <span className="rowOne">
            Defense: <strong>{pokemon.defensa}</strong>
          </span>
          <span className="rowTwo">
            HP: <strong>{pokemon.hp}</strong>
          </span>
          <span className="rowTwo">
            Weight: <strong>{pokemon.peso}</strong>
          </span>
          <span className="rowTwo">
            Height: <strong>{pokemon.altura}</strong>
          </span>
          {onDeletePokemon && (
            <div
              className="deleteBtn appBtn"
              onClick={() => onDeletePokemon(pokemon.idPokemon)}
            ></div>
          )}
        </div>
      </div>
    </>
  );
};
