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
  const [suggestions, setSuggestions] = useState("hide");

  const onChangeHandler = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    search(
      searchQuery,
      imagesContext?.imagesDispatch,
      loaderContext?.setLoader
    );
    searchContext?.searchListDispatch({ type: "ADD", payload: searchQuery });
    setSearchQuery("");
    setSuggestions("hide");
  };

  return (
    <form className="center mt-m mb-m" onSubmit={handleSearch}>
      <input
        className="medium m-null p-xs pr-xl pl-xl relative"
        type="text"
        value={searchQuery}
        placeholder="Photos, people or groups"
        onFocus={() => setSuggestions("show")}
        // onBlur={() => setSuggestions("hide")}
        // onMouseDown={() => setSuggestions("show")}
        // onf={() => setSuggestions("hide")}
        onChange={onChangeHandler}
      />
      <button className="medium m-null p-xs pointer" type="submit">
        Search
      </button>
      {suggestions === "show" && (
        <div
          className="m-null shadow absolute suggestions"
        >
          {searchContext?.searchList?.map((query) => {
            return (
              <p
                key={query}
                className="pointer"
                onClick={() => {
                  search(
                    query,
                    imagesContext?.imagesDispatch,
                    loaderContext?.setLoader
                  );
                  setSuggestions("hide");
                }}
              >
                {query}
              </p>
            );
          })}
          {searchContext?.searchList !== null && (
            <button
              className="btn btn-classic shadow"
              onClick={() => {
                searchContext?.searchListDispatch({ type: "CLEAR" });
                setSuggestions("hide");
              }
              }
            >
              Clear All
            </button>
          )}
        </div>
      )}
    </form>
  );
};

export default Searchbar;
