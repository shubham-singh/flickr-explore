import { useState } from "react";
import { useImagesContext } from "../images/ImagesContext";
import { search } from "../utils/server.requests";

const Searchbar = () => {
  const imagesContext = useImagesContext();
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeHandler = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    search(searchQuery, imagesContext?.imagesDispatch);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        placeholder="Photos, people or groups"
        onChange={onChangeHandler}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
