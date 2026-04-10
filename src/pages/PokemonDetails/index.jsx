import React from "react";
import { useParams } from "react-router";

const PokemonDetails = (props) => {
  const params = useParams();

  const pokemon = props.pokemon.find((p) => p._id === parseInt(params.pokeId));
  console.log(params);
  const properName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <div>
      <h2>{properName}'s Details</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{pokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{pokemon.height}</dd>
      </dl>
    </div>
  );
};

export default PokemonDetails;
