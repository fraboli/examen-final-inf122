import { useState, useEffect } from "react";
function Pokedex() { 
    const [pokemon, setPokemon] = useState([]);
    return (
        <main>
            {pokemon.map((p) => (
                <div>
                    <h2>{p.name}</h2>
                    <img src={p.sprites.front_default} />
                </div>
            ))}
        </main>
    );
};
export default Pokedex;
