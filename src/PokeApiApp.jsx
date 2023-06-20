import { usePokeapi } from "./hooks/usePokeapi";
import { Pokemon, PokemonList } from "./components";

export const PokeApiApp = () => {
  const {
    pokemon,
    pokemons,
    idPokemon,
    onGenerateRndId,
    handleAddPokemon,
    handleResetPokemon,
    handleDeletePokemon,
  } = usePokeapi();

  return (
    <>
      <div className="container">
        <Pokemon pokemon={pokemon} />

        <div className="buttonsApp">
          <div className="generateBtn appBtn" onClick={onGenerateRndId}></div>

          <div
            className="addBtn appBtn"
            onClick={() => handleAddPokemon(idPokemon)}
          ></div>

          <div className="resetBtn appBtn" onClick={handleResetPokemon}></div>
        </div>
      </div>

      <div className="pokelist">
        {pokemons.map((pokeItem) => (
          <PokemonList
            key={pokeItem}
            pokeItem={pokeItem}
            onDeletePokemon={handleDeletePokemon}
          />
        ))}
      </div>
    </>
  );
};
