import React from "react";
import pokemons from "../data";


class Pokemon extends React.Component {
  render () {

    return(
      <div className="cardPokemon">
        {pokemons.map((pokemon) => <div className="cardPokemon">
        <p>Nome do Pokemon: {pokemon.name}</p>
        <p>Tipo do Pokemon: {pokemon.type}</p>
        <p>Peso Médio: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        <img src={pokemon.image} alt=""/>
        </div>)}
      </div>
    )
  }
}

export default Pokemon;