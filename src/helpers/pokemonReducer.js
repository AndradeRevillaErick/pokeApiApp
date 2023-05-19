export const pokemonReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[POKEMON] Add pokemon":
      if (initialState.includes(action.payload)) return initialState;
      return [action.payload, ...initialState];

    case "[POKEMON] Delete pokemon":
      return initialState.filter((pokemon) => pokemon !== action.payload);

    case "[POKEMON] Reset pokemons":
      return [];

    default:
      return initialState;
  }
};
