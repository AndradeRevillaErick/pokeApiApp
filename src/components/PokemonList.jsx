import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { Pokemon } from "./Pokemon";

export const PokemonList = ({ pokeItem, onDeletePokemon }) => {
  console.log(pokeItem);
  const { pokemon } = useFetchPokemon(pokeItem);

  return (
    <>
      <h3>pokemonList {pokeItem}</h3>
      <Pokemon pokemon={pokemon} onDeletePokemon={onDeletePokemon} />
    </>
  );
};
