const pokeURL = "https://pokeapi.co/api/v2/pokemon/";

export const index = async () => {
  try {
    const res = await fetch(pokeURL);

    if (!res.ok) {
      throw new Error("Somethings wrong");
    }

    const data = await res.json();

    return data; // pokemon
  } catch (error) {
    console.log(error);
  }
};

export const show = async (name) => {
  try {
    const res = await fetch(pokeURL + name);

    if (!res.ok) {
      throw new Error("Somethings wrong");
    }

    const data = await res.json();

    return data; // pokemon
  } catch (error) {
    console.log(error);
  }
};
