import { useState } from "react";
import { Pokemon } from "./components/Pokemon";
import { useFetchPokemon } from "./hooks/useFetchPokemon";

export const PokeApiApp = () => {
  const [idPokemon, setIdPokemon] = useState(Math.floor(Math.random() * 1000));
  const { pokemon } = useFetchPokemon(idPokemon);

  function onHandleGetId() {
    const idPokemon = Math.floor(Math.random() * 1000);
    setIdPokemon(idPokemon);
  }

  return (
    <>
      <h1>Poke Api App</h1>

      <Pokemon pokemon={pokemon} />

      <h1>{`Id: ${idPokemon}`}</h1>
      <button onClick={onHandleGetId}>Generate</button>
    </>
  );
};
