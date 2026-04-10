// src/components/PokemonList/PokemonList.jsx
import { Link } from "react-router";

const PokemonList = (props) => {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {/* {props.pokemon.map((currentPokemon) => (
            <Link to={`/pokemon/${currentPokemon._id}`}>
                <li key={currentPokemon.name}>{currentPokemon.name}</li>
            </Link>
        ))} */}
        {props.pokemon.map((currentPokemon) => (
          <li
            onClick={() => props.handleSearch(currentPokemon.name)}
            key={currentPokemon.name}
          >
            {currentPokemon.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;
