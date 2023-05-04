import { useState } from "react";
import { Pokemon } from "./components/Pokemon";
import { useFetchPokemon } from "./hooks/useFetchPokemon";
import { PokemonList } from "./components/PokemonList";

export const PokeApiApp = () => {
  const [idPokemon, setIdPokemon] = useState(Math.floor(Math.random() * 1000));
  const { pokemon } = useFetchPokemon(idPokemon);
  const [pokemons, setPokemons] = useState([]);

  function onGenerateRndId() {
    const idPokemon = Math.floor(Math.random() * 1000);
    setIdPokemon(idPokemon);
  }

  function onAddPokemon() {
    if (pokemons.includes(idPokemon)) return;
    setPokemons([...pokemons, idPokemon]);
  }

  return (
    <>
      <h1>Poke Api App</h1>

      <Pokemon pokemon={pokemon} />

      <button onClick={onGenerateRndId}>Generate</button>

      <button onClick={onAddPokemon}>Agregar</button>

      {pokemons.map((pokeItem) => (
        <PokemonList key={pokeItem} pokeItem={pokeItem} />
      ))}
    </>
  );
};
