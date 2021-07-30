import { useState } from "react";

const Searchbar = () => {

    const [search, setSearch] = useState("");

    const onChangeHandler = (e: any) => {
        setSearch(e.target.value);
    }

    const handleSearch = (e: any) => {
        e.preventDefault();
        
    }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Photos, people or groups" onChange={onChangeHandler} />
            <button type="submit" >Search</button>
        </form>
    );
}

export default Searchbar;