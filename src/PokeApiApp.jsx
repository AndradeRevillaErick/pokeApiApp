import { Pokemon } from "./components/Pokemon";
import { PokemonList } from "./components/PokemonList";
import { usePokeapi } from "./hooks/usePokeapi";

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
      <h1>Poke Api App</h1>

      <Pokemon pokemon={pokemon} />

      <button onClick={onGenerateRndId}>Generate</button>

      <button onClick={() => handleAddPokemon(idPokemon)}>Agregar</button>

      {pokemons.map((pokeItem) => (
        <PokemonList
          key={pokeItem}
          pokeItem={pokeItem}
          onDeletePokemon={handleDeletePokemon}
        />
      ))}

      <button onClick={handleResetPokemon}>Reset List</button>
    </>
  );
};
