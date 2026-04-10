import React from "react";
import { useParams } from "react-router";

const PokemonDetails = (props) => {
  const params = useParams(); // { pokeId: "1" }
  // const { pokeId } = useParams()

  // const pokemon = props.pokemon.find(p => p._id === parseInt(params.pokeId))
  // console.log(params)
  const properName =
    props.selectedPokemon.name.charAt(0).toUpperCase() +
    props.selectedPokemon.name.slice(1);

  return (
    <div>
      <h2>{properName}'s Details</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{props.selectedPokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{props.selectedPokemon.height}</dd>
        <dt>Sprite</dt>
        <dd>
          <img
            src={props.selectedPokemon.sprites.front_default}
            alt={props.selectedPokemon.name}
          />
        </dd>
      </dl>
    </div>
  );
};

export default PokemonDetails;
