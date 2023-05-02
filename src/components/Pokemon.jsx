

export const Pokemon = ({ idPokemon }) => {
    return (
        <>
        //recibe la informacion del pokemon no el id
            <h1>Pokemon: { idPokemon }</h1>
            //aqui se llama el servicio para obtener la info del pokemon
            //se muestra el pokemon
            <h3>PokeInfo</h3>
            <div>
                <span>nombre: {}</span>
                <span>tipo: {}</span>
                <span>peso: {}</span>
                <span>altura: {}</span>
                <span>hp: {}</span>
                <span>ataque: {}</span>
                <span>defensa: {}</span>
                <span>imagenPng: {}</span>
                <span>imagenGif: {}</span>
            </div>
        </>
    );
}