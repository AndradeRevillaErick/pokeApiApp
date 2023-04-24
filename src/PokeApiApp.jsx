import { useState } from "react";
import { Pokemon } from "./components/Pokemon";
import { GeneratePokemon } from "./components/GeneratePokemon";


export const PokeApiApp = () => {

    // const [pokemon, setPokemon] = useState([]);

    // const onGetPokemon = ( newPokemon ) => {
        
    //     setPokemon( newPokemon );
    // }


    // Nombre
    // Imagen
    // Tipo
    // peso
    // altura

    const [pokemon, setPokemon] = useState({})

    const url = 'https://pokeapi.co/api/v2/pokemon/25';

    async function getPokemon(){
        const response = await fetch( url );
        const data = await response.json();
        console.log(data);

        const test = {
            'nombre': data.name,
            'tipo': data.types[0].type.name,
            'peso': data.weight,
            'altura': data.height,
            'hp': data.stats[0].base_stat,
            'ataque': data.stats[1].base_stat,
            'defensa': data.stats[2].base_stat,
            'imagenPng': `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            'imagenGif': `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${data.id}.gif`,
        };

        console.log(test);
    }

    getPokemon();

    return(
        <>
            <h1>Poke Api App</h1>






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