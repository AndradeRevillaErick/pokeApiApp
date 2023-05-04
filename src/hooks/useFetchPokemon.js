import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/getPokemon";

export const useFetchPokemon = (idPokemon) => {
  const [pokemon, setPokemon] = useState({});

  async function rqPokemon() {
    const newPokemon = await getPokemon(idPokemon);
    setPokemon(newPokemon);
  }

  useEffect(() => {
    rqPokemon();
  }, [idPokemon]);

  return { pokemon };
};
