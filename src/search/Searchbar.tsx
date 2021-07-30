import { useState } from "react";
import { useImages } from "../images/ImagesContext";
import { useLoader } from "../loader/LoaderContext";
import { search } from "../utils/server.requests";
import { useSearch } from "./SearchContext";

const Searchbar = () => {
  const imagesContext = useImages();
  const searchContext = useSearch();
  const loaderContext = useLoader();
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeHandler = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    search(searchQuery, imagesContext?.imagesDispatch, loaderContext?.setLoader);
    searchContext?.searchListDispatch({type: "ADD", payload: searchQuery})
  };

  return (
    <form className="center mt-m mb-m" onSubmit={handleSearch}>
      <input
        className="medium m-null p-xs pr-xl pl-xl"
        type="text"
        value={searchQuery}
        placeholder="Photos, people or groups"
        onChange={onChangeHandler}
      />
      <button className="medium m-null p-xs pointer" type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
