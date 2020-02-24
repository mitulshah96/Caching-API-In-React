import React, { useMemo, useState } from "react";
import { render } from "react-dom";
import { search } from "./dummyApi";
import CachedSearch from "./CachedSearch";
import ResultsTable from "./ResultsTable";
import CacheInfo from "./CacheInfo";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const cachedSearch = useMemo(() => new CachedSearch(search, setResults), []);

  const handleQueryChange = query => {
    setQuery(query);
    cachedSearch.changeQuery(query);
  };
  return (
    <div>
      <h3>Hooks Based Search</h3>
      <form>
        <label>Search</label>
        <input onChange={({ target: { value } }) => handleQueryChange(value)} />
      </form>
      <ResultsTable results={results} />
      <CacheInfo cacheObject={cachedSearch} />
    </div>
  );
}

render(<App />, document.getElementById("root"));
