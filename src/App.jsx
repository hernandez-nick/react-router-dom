import { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList/PokemonList";
import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate } from "react-router";
import Error from "./pages/Error";
import PokemonDetails from "./pages/PokemonDetails";
import Searchbar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import { index, show } from "./services/pokemonService";

// const initialState = [
//   { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
//   { _id: 2, name: "ivysaur", weight: 130, height: 10 },
//   { _id: 3, name: "venusaur", weight: 1000, height: 20 },
//   { _id: 4, name: "charmander", weight: 85, height: 6 },
//   { _id: 5, name: "charmeleon", weight: 190, height: 11 },
// ];

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const navigate = useNavigate();

  const fetchPokemon = async () => {
    const pokeData = await index();
    setPokemon(pokeData.results);
  };

  const handleSearch = async (name) => {
    // Use the name to get back the pokemon from the api
    const pokeData = await show(name);
    // set that pokemon in state
    setSelectedPokemon(pokeData);
    // show it on the details page
    navigate(`/pokemon/${pokeData.id}`);
  };

  // use effect takes two arguments 1) Callback functions 2) dependacny array (optional)

  // Case 1)If the dependency array is left out, the side effect function runs after every render.
  // Billie has never had to use this realisticlly
  useEffect(() => {
    console.log("I run every single time the component re renders");
  });

  // Case 2) If the dependency array is empty ([]), the side effect function runs once after the initial render.
  useEffect(() => {
    console.log("I only run once, Im good for fetching data on page");
    fetchPokemon();
  }, []);

  // Case 3) If dependencies are included, the side effect function runs whenever the dependency data changes.
  // this still also runs on page load
  // ex every time selected pokemon changes, lets do an alert
  useEffect(() => {
    if (selectedPokemon) toast(`You selected ${selectedPokemon.name}`);
  }, [selectedPokemon]);

  return (
    <>
      <ToastContainer />
      <Navbar />

      <button onClick={fetchPokemon}>Fetch Pokemon</button>

      <Searchbar handleSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route
          path="/pokemon"
          element={
            <PokemonList pokemon={pokemon} handleSearch={handleSearch} />
          }
        />
        <Route
          path="/pokemon/:pokeId"
          element={
            <PokemonDetails
              pokemon={pokemon}
              selectedPokemon={selectedPokemon}
            />
          }
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
