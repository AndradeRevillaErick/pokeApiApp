import { useEffect, useReducer, useState } from "react";
import { Pokemon } from "./components/Pokemon";
import { useFetchPokemon } from "./hooks/useFetchPokemon";
import { PokemonList } from "./components/PokemonList";
import { pokemonReducer } from "./helpers/pokemonReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("pokemons") || []);
};

const initPoke = () => {
  return JSON.parse(
    localStorage.getItem("pokemon") || Math.floor(Math.random() * 1000)
  );
};

export const PokeApiApp = () => {
  const [idPokemon, setIdPokemon] = useState(initPoke);
  const { pokemon } = useFetchPokemon(idPokemon);
  const [pokemons, dispatch] = useReducer(pokemonReducer, [], init);

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  useEffect(() => {
    localStorage.setItem("pokemon", idPokemon);
  }, [idPokemon]);

  function onGenerateRndId() {
    const idPokemon = Math.floor(Math.random() * 1000);
    setIdPokemon(idPokemon);
  }

  function handleAddPokemon(idPokemon) {
    const action = {
      type: "[POKEMON] Add pokemon",
      payload: idPokemon,
    };

    dispatch(action);
  }

  function handleResetPokemon() {
    const action = {
      type: "[POKEMON] Reset pokemons",
      payload: idPokemon,
    };

    dispatch(action);
  }

  function handleDeletePokemon(idPokemon) {
    const action = {
      type: "[POKEMON] Delete pokemon",
      payload: idPokemon,
    };

    dispatch(action);
  }

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
