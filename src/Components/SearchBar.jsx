import axios from "axios";
import { useState } from "react";

function SearchBar({ setRenderData, setPrevSearchData, prevSearchData }) {
  const [searchText, setSearchText] = useState("");

  async function fetchData() {
    if (searchText.trim() === "") return;
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`
      );
      setRenderData(res.data);
      setPrevSearchData([...prevSearchData, searchText]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="container mt-8">
      <div className="flex items-center justify-center">
        <div className="w-[320px] lg:w-[400px] select-none">
          <input
            type="text"
            className="border h-10 w-full px-4 bg-white rounded-sm"
            placeholder="Search any word"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button
          className="py-2 px-4 border bg-[#31292E] text-white rounded-md select-none"
          onClick={fetchData}
        >
          Search
        </button>
      </div>
    </section>
  );
}
export default SearchBar;
