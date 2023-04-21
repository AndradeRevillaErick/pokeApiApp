import { useState } from "react";
import { Pokemon } from "./components/Pokemon";
import { GeneratePokemon } from "./components/GeneratePokemon";


export const PokeApiApp = () => {

    const [pokemon, setPokemon] = useState([]);

    const onGetPokemon = ( newPokemon ) => {
        
        setPokemon( newPokemon );
    }

    return(
        <>
            <h1>Poke Api App</h1>

            {/* execute service and get information */}

            <h1>{ pokemon }</h1>

            <button
                onClick={ onGenerate }
            >Generate
            </button>

            <GeneratePokemon
                onNewPokemon = { onGetPokemon }
            />

            {/* order information and show*/}


            {/* save information in a list to show  */}

        </>
    );
}