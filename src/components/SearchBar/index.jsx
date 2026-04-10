import { useState } from "react";
import { useNavigate } from "react-router";

const Searchbar = () => {
    const [name, setName] = useState("");
    // with this navigate variable we can go to pages
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // stops the forms default submit / refresh behavior
        console.log(name);
        setTimeout(() => {
        navigate("/pokemon");
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            id="sb"
            name="sb"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Search</button>
        </form>
    );
};

export default Searchbar;
