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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;500;600&display=swap"
        rel="stylesheet"
      />

      <Pokemon pokemon={pokemon} />

      <button onClick={onGenerateRndId}>Generate</button>

      <button onClick={() => handleAddPokemon(idPokemon)}>Add</button>

      <button onClick={handleResetPokemon}>Reset List</button>

      {pokemons.map((pokeItem) => (
        <PokemonList
          key={pokeItem}
          pokeItem={pokeItem}
          onDeletePokemon={handleDeletePokemon}
        />
      ))}
    </>
  );
};
