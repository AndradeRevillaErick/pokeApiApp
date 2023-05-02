import { useEffect, useState } from "react";
import { Pokemon } from "./components/Pokemon";
import { GeneratePokemon } from "./components/GeneratePokemon";
import { getPokemon } from "./helpers/getPokemon";


export const PokeApiApp = () => {

    const [idPokemon, setIdPokemon] = useState(1);
    const [pokemon, setPokemon] = useState({});

    function onHandleGetId(){

        const idPokemon = Math.floor(Math.random() * 1000);
        setIdPokemon( idPokemon );
    }

    async function rqPokemon (){

        const newPokemon = await getPokemon( idPokemon );
        setPokemon( newPokemon );
    }

    useEffect(() => {
        rqPokemon();
    }, [idPokemon])
    

    return(
        <>
            <h1>Poke Api App</h1>

            <Pokemon
                pokemon = { pokemon }
            />

            <h1>{ `Id: ${idPokemon}` }</h1>
            <button 
                onClick={ onHandleGetId }>
                Generate
            </button>

{/* solo necesito un componente que se encargara de renderizar un pokemon de acuerdo al id creado */}

            {/* execute service and get information */}

            {/* <h1>{ pokemon }</h1>

            <button
                onClick={ onGenerate }
            >Generate
            </button>

            <GeneratePokemon
                onNewPokemon = { onGetPokemon }
            /> */}

            {/* order information and show*/}


            {/* save information in a list to show  */}

        </>
    );
}