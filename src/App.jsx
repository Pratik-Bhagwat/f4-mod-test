import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import Details from "./Components/Details";
import History from "./Components/History";

function App() {
  const [showData, setShowData] = useState(false);
  const [prevSearchData, setPrevSearchData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    if (renderData.length > 0) setShowData(true);
  }, [renderData]);

  return (
    <>
      <Navbar setShowHistory={setShowHistory} showHistory={showHistory} />
      <main>
        {!showHistory ? (
          <>
            <SearchBar
              setRenderData={setRenderData}
              prevSearchData={prevSearchData}
              setPrevSearchData={setPrevSearchData}
            />
            {showData && <Details renderData={renderData} />}
          </>
        ) : (
          <History prevSearchData={prevSearchData} />
        )}
      </main>
    </>
  );
}

export default App;
