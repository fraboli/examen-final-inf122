"use client"
import { useState, useEffect } from "react";
import Style from "../style/Pokedex.module.css";
function Pokedex() { 
    const [pokemon, setPokemon] = useState([]);
    return (
        <div className={Style.main}>
                <div className={Style.imag}>
                </div>
                <div className={Style.name}>
                </div>
        </div>
    );
};
export default Pokedex;
