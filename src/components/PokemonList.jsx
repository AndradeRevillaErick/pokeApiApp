import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { Pokemon } from "./Pokemon";

export const PokemonList = ({ pokeItem, onDeletePokemon }) => {
  const { pokemon } = useFetchPokemon(pokeItem);

  return (
    <>
      <Pokemon pokemon={pokemon} onDeletePokemon={onDeletePokemon} />
    </>
  );
};
