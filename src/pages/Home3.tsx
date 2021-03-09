import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Main, Logo, Busca, BtnBusca } from '../styles/stylesComponents'
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () =>  {

    
    const [pokemon, setPokemon] = useState<any>()
    
    function Submit(){
        window.location.href = `/pokemon?name=${pokemon}`
    }

    return (
        <Main>
            <Logo src='images/logo-pokemon.png' />
            <Busca>
                <input 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        event.preventDefault()
                        setPokemon(event.target.value)
                    }}
                    placeholder="Digite sua Busca" 
                />
               
                <BtnBusca 
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                        event.preventDefault()
                        Submit()
                    }}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </BtnBusca>
            </Busca>
        </Main>
    )
};

export default Home;
