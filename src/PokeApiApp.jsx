import { useState } from "react";
import { Pokemon } from "./components/Pokemon";
import { GeneratePokemon } from "./components/GeneratePokemon";


export const PokeApiApp = () => {

    const [pokemon, setPokemon] = useState({})

    const [idPokemon, setIdPokemon] = useState(0);

    let url = 'https://pokeapi.co/api/v2/pokemon/';

    function getRandom(){
        return Math.floor(Math.random() * 1000);
    }

    async function getPokemon(){
        const pkId = await getRandom();
        url = url + pkId;
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

        return test;
    }

    async function onHandleGenerate(){

        const data = await getPokemon();

        console.log('generado');

        setPokemon( data );
        console.log(data);

    }

    function onHandleGetId(){
        const idPokemon = Math.floor(Math.random() * 1000);

        setIdPokemon( idPokemon );
    }

    return(
        <>
            <h1>Poke Api App</h1>

            <h1>{ JSON.stringify(pokemon) }</h1>

            {/* <Pokemon /> */}

            <button 
                onClick={ onHandleGenerate }>
                Generate
            </button>

            <Pokemon
                idPokemon = { idPokemon }
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