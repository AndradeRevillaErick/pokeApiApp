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
        <div className="pokegen">
          <Pokemon pokemon={pokemon} />
        </div>

        <div className="buttonsApp">
          <div className="generateBtn" onClick={onGenerateRndId}></div>

          <div
            className="addBtn"
            onClick={() => handleAddPokemon(idPokemon)}
          ></div>

          <div className="resetBtn" onClick={handleResetPokemon}></div>
        </div>

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
