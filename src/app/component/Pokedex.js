"use client"
import { useState, useEffect } from "react";
import Style from "../style/Pokedex.module.css";
import Image from 'next/image';
function Pokedex() { 
    const url='https://pokeapi.co/api/v2/pokemon/45';
    const [pokemon, setPokemon] = useState([]);
    const [sprites, setSprites] = useState('/vercel.svg');
    const [habilidad, setHabilidad] = useState("esperando");
    const [idnumero, setIdnumero] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [abilities, setAbilities] = useState([]);
    const [secabilities, setSecabilities] = useState([]);
    const [statsHp, setStatshp] = useState([]);
    const [statsAtack, setStatsatack] = useState([]);
    const [statsDef, setStatsdef] = useState([]);
    const [statsSpeed, setStatsspeed] = useState([]);
    const [types, setTypes] = useState([]);
    useEffect(() => { 
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setSprites(data.sprites.front_default),
            setPokemon(data.species.name),
            setIdnumero(data.id),
            setTypes(data.types[0].type.name),
            setHeight(data.height),
            setWeight(data.weight),
            setAbilities(data.abilities[0].ability.name),
            setSecabilities(data.abilities[1].ability.name),
            setStatshp(data.stats[0].base_stat),
            setStatsatack(data.stats[1].base_stat),
            setStatsdef(data.stats[2].base_stat),
            setStatsspeed(data.stats[5].base_stat)
        })
    }, []);
    const altura = height / 10;
    const peso = weight / 10;
    return (
        <div className={Style.main}>
                <div className={Style.imag}>
                    <h1>{pokemon}</h1>
                    <p>#{idnumero}</p>
                    <Image src={ sprites } width={325} height={325} flex-shrink={0}/>
                </div>
                <div className={Style.About}>
                    <h1>About</h1>
                    <p>________</p>
                    <p><text>Type</text>    {types}</p>
                    <p><text>Height</text>  {altura} m</p>
                    <p><text>Weight</text>  {peso} Kg</p>
                    <p><text>Abilities</text>   {abilities}, {secabilities}</p>
                </div>
                <div className={Style.Stats}>
                    <h1>Stats</h1>
                    <p><text>HP</text>  {statsHp}</p>
                    <p><text>Attack</text>  {statsAtack}</p>
                    <p><text>Defense</text> {statsDef}</p>
                    <p><text>Speed</text>   {statsSpeed}</p>
                </div>
        </div>
    );
};
export default Pokedex;
