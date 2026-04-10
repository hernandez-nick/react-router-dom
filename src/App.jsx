import { useState } from "react";
import PokemonList from "./components/PokemonList/PokemonList";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router";
import Error from "./pages/Error";
import PokemonDetails from "./pages/PokemonDetails";
import Searchbar from "./components/SearchBar";

const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);
  return (
    <>
      <Navbar />

      <Searchbar />

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route
          path="/pokemon/:pokeId"
          element={<PokemonDetails pokemon={pokemon} />}
        />

        <Route
          path="*"
          element={
            <Error text="The URL you tried to reach is no longer in service. Please dial ***. " />
          }
        />
      </Routes>
    </>
  );
};

export default App;
